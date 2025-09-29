import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import type { ContactFormValues } from '../ContactFormSec';
import type { Control } from 'react-hook-form';

interface Props {
  control: Control<ContactFormValues>;
  timeSlots: { original: string; converted: string }[];
}

export const AppointmentTimeField: React.FC<Props> = ({
  control,
  timeSlots,
}) => (
  <FormField
    control={control}
    name="appointmentTime"
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <div className="grid h-full grid-cols-2 gap-4">
            {timeSlots.map((slot) => (
              <Button
                key={slot.original} // Use the original value for the key
                type="button"
                // --- ⬇️ CHANGE 1 ⬇️ ---
                // Check against the `.original` property of the field's value
                variant={
                  field.value?.original === slot.original
                    ? 'default'
                    : 'outline'
                }
                // --- ⬇️ CHANGE 2 ⬇️ ---
                // On change, pass the ENTIRE slot object
                onClick={() => field.onChange(slot)}
              >
                {/* But we DISPLAY the CONVERTED time to the user */}
                {slot.converted}
              </Button>
            ))}
          </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
