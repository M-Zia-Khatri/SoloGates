
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import type { ContactFormValues } from '../ContactFormSec';
import type { Control } from 'react-hook-form';

interface Props {
  control: Control<ContactFormValues>;
}

export const MessageField: React.FC<Props> = ({ control }) => (
  <FormField
    control={control}
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
);
