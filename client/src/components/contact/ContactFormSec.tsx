import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormLabel } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import emailjs from 'emailjs-com';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import * as Sentry from '@sentry/react';

import { assetsUrl } from '@/constants/urlConstants';
import { Heading } from '../ui/Heading';
import HrLine from '../ui/HrLine';

// Import the refactored field components
import { FullNameField } from './fields/FullNameField';
import { EmailField } from './fields/EmailField';
import { SubjectField } from './fields/SubjectField';
import { MessageField } from './fields/MessageField';
import { TimeZoneField } from './fields/TimeZoneField';
import { AppointmentTimeField } from './fields/AppointmentTimeField';
import { convertTimeSlots } from '@/lib/timeUtils';

// ✅ Validation Schema
const formSchema = z
  .object({
    fullName: z.string().min(2, { message: 'Full Name is required' }),
    email: z.string().email({ message: 'Enter a valid email' }),
    subject: z.string().min(1, { message: 'Select a subject' }),
    message: z.string().min(5, { message: 'Please enter a message' }),
    appointmentDate: z.date().optional(),
    timeZone: z.string().optional(),

    // --- ⬇️ FIX 1: Define the correct shape for appointmentTime ⬇️ ---
    appointmentTime: z
      .object({
        original: z.string(),
        converted: z.string(),
      })
      .optional(),
  })
  .refine(
    (data) => {
      if (data.appointmentDate) {
        // --- ⬇️ FIX 2: Check the 'original' property in the refine logic ⬇️ ---
        return !!data.timeZone && !!data.appointmentTime?.original;
      }
      return true;
    },
    {
      message: 'Please complete all appointment fields',
      path: ['appointmentTime'],
    }
  );

// ✅ Export the type so child components can use it
export type ContactFormValues = z.infer<typeof formSchema>;

// ✅ Helper function to format GMT strings consistently
const formatGmtOffset = (gmtString: string): string => {
  if (gmtString === 'GMT') {
    return 'GMT+00:00';
  }
  const match = gmtString.match(/GMT([+-])(\d{1,2})$/);
  if (match) {
    const sign = match[1];
    const hours = match[2].padStart(2, '0');
    return `GMT${sign}${hours}:00`;
  }
  const fullMatch = gmtString.match(/GMT([+-])(\d{1,2}):(\d{2})$/);
  if (fullMatch) {
    const sign = fullMatch[1];
    const hours = fullMatch[2].padStart(2, '0');
    const minutes = fullMatch[3];
    return `GMT${sign}${hours}:${minutes}`;
  }
  return gmtString;
};

// ✅ Data Fetching & Utility Functions (with your custom value format)
const fetchTimeZones = async (): Promise<
  { label: string; value: string }[]
> => {
  const zones = Intl.supportedValuesOf('timeZone');

  return zones.map((tz) => {
    const formatter = new Intl.DateTimeFormat('en', {
      timeZone: tz,
      timeZoneName: 'longOffset',
    });
    const parts = formatter.formatToParts(new Date());
    const timeZonePart = parts.find((part) => part.type === 'timeZoneName');
    const rawGmtString = timeZonePart ? timeZonePart.value : 'GMT';
    const formattedGmt = formatGmtOffset(rawGmtString);

    return {
      // The user-friendly text for the dropdown
      // Example: "America/New York (GMT-04:00)"
      label: `${tz.replace(/_/g, ' ')} (${formattedGmt})`,

      // The specific composite value you requested for the form
      // Example: "TZ_America/New York_GMT_-04:00"
      value: tz,
    };
  });
};

const createClipPaths = (w: number, h: number) => {
  const isNarrow = h > w;
  const anglePercentage = isNarrow ? '5%' : '15%';
  const angleOffsetPx = w - h * (isNarrow ? 0.05 : 0.15);
  const polygon = (...points: string[]) => `polygon(${points.join(', ')})`;
  return {
    base: polygon(
      `0% 0%`,
      `${angleOffsetPx}px 0%`,
      `100% ${anglePercentage}`,
      `100% 100%`,
      `0% 100%`
    ),
    offset: polygon(
      `0% 0%`,
      `${angleOffsetPx + 2}px 0%`,
      `100% ${anglePercentage}`,
      `100% 100%`,
      `0% 100%`
    ),
  };
};

const formatAppointment = (date?: Date, time?: string) => {
  if (!date || !time) return '';
  const match = time.match(/(\d{1,2}):(\d{2})(am|pm)/);
  if (!match) return '';
  const [, h, m, modifier] = match;
  let hours = parseInt(h, 10);
  if (modifier === 'pm' && hours < 12) hours += 12;
  if (modifier === 'am' && hours === 12) hours = 0;
  const newDate = new Date(date);
  newDate.setHours(hours, parseInt(m, 10), 0, 0);
  return format(newDate, 'PPP p');
};

// ✅ Main Wrapper Component
const ContactFormSec: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const [clipPaths, setClipPaths] = useState<{ base: string; offset: string }>({
    base: 'none',
    offset: 'none',
  });
  const [showCalendar, setShowCalendar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState<null | 'success' | 'error'>(null);

  const ORIGINAL_TIME_SLOTS = useMemo(
    () =>
      [
        '11:00am',
        '11:30am',
        '12:00pm',
        '12:30pm',
        '1:00pm',
        '1:30pm',
        '2:00pm',
      ] as const,
    []
  );

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      subject: '',
      message: '',
      appointmentDate: undefined,
      timeZone: '',
      appointmentTime: undefined,
    },
  });

  const { data: timeZones = [] } = useQuery({
    queryKey: ['timeZones'],
    queryFn: fetchTimeZones,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const appointmentDate = form.watch('appointmentDate');
  const timeZone = form.watch('timeZone');
  const { resetField, setValue, getValues } = form;

  // NEW: Calculate the converted time slots using useMemo
  const timeSlots = useMemo(() => {
    // We can only convert if we have both the date and the timezone
    if (appointmentDate && timeZone) {
      // The `timeZone` value here is the IANA name, which is what we need.
      // NOTE: If you are using the composite value "TZ_...", you will need to extract the IANA name first.
      // Let's assume you've switched back to using the IANA name as the value.
      return convertTimeSlots(ORIGINAL_TIME_SLOTS, timeZone, appointmentDate);
    }
    // If we don't have enough info, show the original slots as a fallback
    return ORIGINAL_TIME_SLOTS.map((slot) => ({
      original: slot,
      converted: slot,
    }));
  }, [appointmentDate, timeZone, ORIGINAL_TIME_SLOTS]);

  useEffect(() => {
    if (!appointmentDate) {
      resetField('timeZone');
      resetField('appointmentTime');
    }
  }, [appointmentDate, resetField]);

  useEffect(() => {
    if (!timeZone) {
      resetField('appointmentTime');
    }
  }, [timeZone, resetField]);

  const onSubmit = useCallback(
    async (values: ContactFormValues) => {
      setLoading(true);
      setSent(null);
      try {
        const appointmentString = formatAppointment(
          values.appointmentDate,
          values.appointmentTime?.original // Use the .original property
        );
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: values.fullName,
            from_email: values.email,
            subject: values.subject,
            message: values.message,
            appointment: appointmentString,
            timezone: values.timeZone,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        setSent('success');
        form.reset();
        setShowCalendar(false);
      } catch (error) {
        console.error('EmailJS error:', error);
        Sentry.captureException(error); // Report error to a service
        setSent('error');
      } finally {
        setLoading(false);
      }
    },
    [form]
  );

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  const updateClipPath = useCallback(() => {
    if (bgRef.current) {
      const { offsetWidth, offsetHeight } = bgRef.current;
      setClipPaths(createClipPaths(offsetWidth, offsetHeight));
    }
  }, []);

  useEffect(() => {
    updateClipPath();
    window.addEventListener('resize', updateClipPath);
    return () => window.removeEventListener('resize', updateClipPath);
  }, [updateClipPath]);

  console.log(form.watch('appointmentTime'));
  return (
    <section className="sec-container">
      <div className="my-6 flex flex-col items-center justify-center gap-4">
        <Heading hdSize="h2" asChild>
          <h2>Contact Us</h2>
        </Heading>
        <div className="flex items-center justify-center">
          <HrLine className="h-0.5 w-[3.5vw] py-0" isRotate />
          <h3 className="mx-4 font-bold">
            REACH US{' '}
            <h3 className="font-Sora inline-block font-extralight italic">
              ANYTIME
            </h3>
          </h3>
          <HrLine className="h-0.5 w-[3.5vw] py-0" />
        </div>
      </div>

      <div className="relative p-4 md:p-6">
        {/* Background Elements */}
        <>
          <div
            className="from-Main to-Secondary absolute inset-0 -z-40 bg-gradient-to-r"
            style={{ clipPath: clipPaths.offset }}
          />
          <div
            className="bg-Bg-Primary absolute top-[2px] right-[2px] bottom-[2px] left-[2px] -z-30 shadow-[0px_0px_10px_rgba(111,204,221)]"
            style={{ clipPath: clipPaths.base }}
          />
          <div
            ref={bgRef}
            className="absolute top-[2px] right-[2px] bottom-[2px] left-[2px] -z-20 bg-gradient-to-r from-black/20 from-65% to-[#DDDCDC]/30 opacity-50"
            style={{ clipPath: clipPaths.base }}
          />
        </>

        <div className="mb-4 flex flex-col items-center justify-center gap-4">
          <div className="from-Secondary bg-gradient-to-r from-[-10%] to-black to-[150%] p-1 drop-shadow-[0_0_10px_rgba(111,204,221)]">
            <img
              className="h-12 md:h-14 lg:h-16"
              src={`${assetsUrl.gifUrl}contact_us.gif`}
              alt="Contact Us"
            />
          </div>
          <h3 className="text-center font-semibold">
            We'd love to help! Let us know how
          </h3>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid w-full grid-cols-1 gap-4 p-2 md:grid-cols-2 md:gap-6"
          >
            {/* Left side */}
            <div className="col-span-1 flex flex-col gap-4">
              <FullNameField control={form.control} />
              <EmailField control={form.control} />
              <SubjectField control={form.control} />
              <MessageField control={form.control} />
            </div>

            {/* Right side */}
            <div className="flex flex-col justify-between gap-2">
              <div className="flex flex-col space-y-6">
                <div className="flex flex-col gap-2">
                  <FormLabel>Date & Time for Appointment</FormLabel>
                  <button
                    type="button"
                    className={cn(
                      'flex max-h-[46.2px] w-full justify-between border border-[#DDDCDC]/50 px-3.5 py-3 text-left font-normal text-[#DDDCDC]/50'
                    )}
                    onClick={() => setShowCalendar((prev) => !prev)}
                    aria-expanded={showCalendar} // Add this
                    aria-controls="appointment-fields" // Add this
                  >
                    {appointmentDate ? (
                      <span>
                        {format(appointmentDate, 'PPP')}
                        {/* --- ⬇️ FIX 5: Display the .converted property for the user ⬇️ --- */}
                        {getValues('appointmentTime')?.converted
                          ? ` at ${getValues('appointmentTime')?.converted}`
                          : ''}
                      </span>
                    ) : (
                      'Pick a date & time'
                    )}
                    <ChevronDown size="16px" />
                  </button>
                </div>

                {showCalendar && (
                  <div
                    id="appointment-fields"
                    className="flex flex-col gap-5 lg:flex-row"
                  >
                    <div className="flex flex-col items-center gap-5">
                      <Calendar
                        mode="single"
                        selected={appointmentDate}
                        onSelect={(date) => setValue('appointmentDate', date)}
                        initialFocus
                        className="rounded-[5px] border border-white/30 bg-white/10 text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4px]"
                      />
                      {appointmentDate && (
                        <TimeZoneField
                          control={form.control}
                          timeZones={timeZones}
                        />
                      )}
                    </div>
                    {timeZone && (
                      <div className="w-full">
                        <AppointmentTimeField
                          control={form.control}
                          timeSlots={timeSlots}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
              <Button type="submit" className="mt-2.5" disabled={loading}>
                <img
                  src={`${assetsUrl.gifUrl}check.gif`}
                  className="mr-2 inline-block h-5"
                  alt=""
                />
                {loading ? 'Sending...' : 'Submit'}
              </Button>
            </div>
          </form>
        </Form>

        {/* Success / Error Alert */}
        {sent && (
          <div
            className={cn(
              'mt-4 flex w-full max-w-2xl items-center justify-between rounded-md p-3 text-sm font-medium transition-opacity duration-300',
              sent === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            )}
          >
            {sent === 'success'
              ? '✅ Message sent successfully!'
              : '❌ Failed to send message. Try again.'}
            <button onClick={() => setSent(null)}>
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactFormSec;
