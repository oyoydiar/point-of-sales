import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export default function FormInput<T extends FieldValues>({
  form,
  type = 'text',
  name,
  label,
  placeholder,
}: {
  form: UseFormReturn<T>;
  type?: string;
  name: Path<T>;
  label: string;
  placeholder?: string;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field: { ...rest } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          {type === 'textarea' ? (
            <Textarea
              {...rest}
              placeholder={placeholder}
              autoComplete="off"
              className="resize-none"
            />
          ) : (
            <Input
              {...rest}
              type={type}
              placeholder={placeholder}
              autoComplete="off"
            />
          )}
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
}
