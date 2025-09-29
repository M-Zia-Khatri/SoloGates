
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import type { Control } from 'react-hook-form';
import type { ContactFormValues } from '../ContactFormSec';
import { TimeZoneCombobox } from '@/components/ui/TimeZoneCombobox';


interface Props {
  control: Control<ContactFormValues>;
  timeZones: { label: string; value: string }[];
}

export const TimeZoneField: React.FC<Props> = ({ control, timeZones }) => (
  <FormField
    control={control}
    name="timeZone"
    render={({ field }) => (
      <FormItem className="w-full">
        <FormControl>
          <TimeZoneCombobox
            options={timeZones}
            value={field.value}
            onChange={field.onChange}
            placeholder="Select time zone..."
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);