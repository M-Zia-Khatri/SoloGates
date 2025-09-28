import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import emailjs from 'emailjs-com';
import { useState, useEffect, useRef, useCallback } from 'react';
import { format } from 'date-fns';
import { assetsUrl } from '@/constants/urlConstants';
import { Heading } from '../ui/Heading';
import { useQuery } from '@tanstack/react-query';
import HrLine from '../ui/HrLine';

// ✅ Validation schema
const formSchema = z
  .object({
    fullName: z.string().min(2, { message: 'Full Name is required' }),
    email: z.string().email({ message: 'Enter a valid email' }),
    subject: z.string().min(1, { message: 'Select a subject' }),
    message: z.string().min(5, { message: 'Please enter a message' }),
    appointmentDate: z.date().optional(),
    timeZone: z.string().optional(),
    appointmentTime: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.appointmentDate) {
        return !!data.timeZone && !!data.appointmentTime;
      }
      return true;
    },
    {
      message: 'Please complete all appointment fields',
      path: ['appointmentTime'],
    }
  );

type ContactFormValues = z.infer<typeof formSchema>;

const fetchTimeZones = async (): Promise<
  { label: string; value: string }[]
> => {
  const res = await fetch('https://worldtimeapi.org/api/timezone');
  if (!res.ok) throw new Error('Failed to fetch time zones');
  const zones: string[] = await res.json();
  return zones.map((tz) => ({
    label: tz.replace(/_/g, ' '),
    value: tz,
  }));
};

// ✅ Timeslots
const timeSlots = [
  '11:00am',
  '11:30am',
  '12:00pm',
  '12:30pm',
  '1:00pm',
  '1:30pm',
  '2:00pm',
];

// Helper function for clip-path
const polygon = (...points: string[]) => `polygon(${points.join(', ')})`;

const ContactFormSec: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const [clipPaths, setClipPaths] = useState<{ base: string; offset: string }>({
    base: 'none',
    offset: 'none',
  });
  const [showCalendar, setShowCalendar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState<null | 'success' | 'error'>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      subject: '',
      message: '',
      appointmentDate: undefined,
      timeZone: '',
      appointmentTime: '',
    },
  });

  const { data: timeZones = [] } = useQuery({
    queryKey: ['timeZones'],
    queryFn: fetchTimeZones,
  });

  const appointmentDate = form.watch('appointmentDate');
  const timeZone = form.watch('timeZone');
  const { resetField } = form;

  // ✅ Reset fields dynamically
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

  // ✅ Handle form submission
  const onSubmit = async (values: ContactFormValues) => {
    setLoading(true);
    setSent(null);
    try {
      let appointmentString = '';
      if (values.appointmentDate && values.appointmentTime) {
        const appointment = new Date(values.appointmentDate);
        const match = values.appointmentTime.match(/(\d{1,2}):(\d{2})(am|pm)/);
        if (match) {
          const [, h, m, modifier] = match;
          let hours = parseInt(h, 10);
          const minutes = parseInt(m, 10);
          if (modifier === 'pm' && hours < 12) hours += 12;
          if (modifier === 'am' && hours === 12) hours = 0;
          appointment.setHours(hours, minutes, 0, 0);
          appointmentString = format(appointment, 'PPP p');
        }
      }

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
      setSent('error');
    } finally {
      setLoading(false);
    }
  };

  // ✅ Auto-hide success/error after 4s
  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  // ✅ Update clip paths on resize
  const updateClipPath = useCallback(() => {
    if (bgRef.current) {
      const { offsetWidth, offsetHeight } = bgRef.current;
      const isNarrow = offsetHeight > offsetWidth;
      const anglePercentage = isNarrow ? '5%' : '15%';
      const angleOffsetPx =
        offsetWidth - offsetHeight * (isNarrow ? 0.05 : 0.15);

      const base = polygon(
        `0% 0%`,
        `${angleOffsetPx}px 0%`,
        `100% ${anglePercentage}`,
        `100% 100%`,
        `0% 100%`
      );
      const offset = polygon(
        `0% 0%`,
        `${angleOffsetPx + 2}px 0%`,
        `100% ${anglePercentage}`,
        `100% 100%`,
        `0% 100%`
      );
      setClipPaths({ base, offset });
    }
  }, []);

  useEffect(() => {
    updateClipPath();
    window.addEventListener('resize', updateClipPath);
    return () => window.removeEventListener('resize', updateClipPath);
  }, [updateClipPath]);

  return (
    <section className="sec-container">
      <div className="my-6 flex flex-col items-center justify-center gap-4">
        <Heading hdSize="h2" asChild>
          <h2>Contact Us</h2>
        </Heading>
        <div className="flex items-center justify-center">
          <HrLine className="w-[3.5vw]" isRotate />
          <p className="mx-4 font-bold">
            REACH US&nps;
            <span className="font-Sora inline-block font-extralight italic">
              ANYTIME
            </span>
          </p>
          <HrLine className="w-[3.5vw]" />
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

        <div className="flex flex-col items-center justify-center gap-4">
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
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject of Interest</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-[5px] border border-white/30 bg-white/10 text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4px]">
                        <SelectItem value="Socialmedia marketing">
                          Social Media Marketing
                        </SelectItem>
                        <SelectItem value="Creative reels & vsls">
                          Creative Reels & VSLs
                        </SelectItem>
                        <SelectItem value="Content Writing">
                          Content Writing
                        </SelectItem>
                        <SelectItem value="Branding">Branding</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How may we assist you?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Hi, can you share your portfolio?"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                  >
                    {appointmentDate ? (
                      <span>
                        {format(appointmentDate, 'PPP')}
                        {form.getValues('appointmentTime')
                          ? ` at ${form.getValues('appointmentTime')}`
                          : ''}
                      </span>
                    ) : (
                      'Pick a date & time'
                    )}
                    <ChevronDown size="16px" />
                  </button>
                </div>

                {showCalendar && (
                  <div className="flex flex-col gap-5 lg:flex-row">
                    <div className="flex flex-col items-center gap-5">
                      <Calendar
                        mode="single"
                        selected={appointmentDate}
                        onSelect={(date) => {
                          form.setValue('appointmentDate', date);
                        }}
                        initialFocus
                        className="rounded-[5px] border border-white/30 bg-white/10 text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4px]"
                      />
                      {appointmentDate && (
                        <FormField
                          control={form.control}
                          name="timeZone"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select time zone" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="rounded-[5px] border border-white/30 bg-white/10 text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4px]">
                                  {timeZones.map((tz) => (
                                    <SelectItem key={tz.value} value={tz.value}>
                                      {tz.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </div>
                    {timeZone && (
                      <div className="w-full">
                        <FormField
                          control={form.control}
                          name="appointmentTime"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="grid h-full grid-cols-2 gap-4">
                                  {timeSlots.map((time) => (
                                    <Button
                                      key={time}
                                      type="button"
                                      onClick={() => {
                                        field.onChange(time);
                                      }}
                                    >
                                      {time}
                                    </Button>
                                  ))}
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
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
