import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import type { ContactFormValues } from '../ContactFormSec';
import type { Control } from 'react-hook-form';

interface Props {
  control: Control<ContactFormValues>;
}

export const EmailField: React.FC<Props> = ({ control }) => (
  <FormField
    control={control}
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
);