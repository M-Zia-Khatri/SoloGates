import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { ContactFormValues } from '../ContactFormSec';
import type { Control } from 'react-hook-form';

interface Props {
  control: Control<ContactFormValues>;
}

const SUBJECT_OPTIONS = [
  { value: 'Social media marketing', label: 'Social Media Marketing' },
  { value: 'Creative reels & vsls', label: 'Creative Reels & VSLs' },
  { value: 'Content Writing', label: 'Content Writing' },
  { value: 'Branding', label: 'Branding' },
];

export const SubjectField: React.FC<Props> = ({ control }) => (
  <FormField
    control={control}
    name="subject"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Subject of Interest</FormLabel>
        <Select  onValueChange={field.onChange} value={field.value}>
          <FormControl>
            <SelectTrigger className="w-full ">
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
          </FormControl>
          <SelectContent className="rounded-[5px] border border-white/30 bg-white/10 text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4px]">
            {SUBJECT_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
);
