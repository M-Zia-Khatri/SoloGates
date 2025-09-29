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

export const FullNameField: React.FC<Props> = ({ control }) => (
  <FormField
    control={control}
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
);