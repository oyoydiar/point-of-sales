import FormImage from '@/components/commons/form-image';
import FormInput from '@/components/commons/form-input';
import FormSelect from '@/components/commons/form-select';
import { Button } from '@/components/ui/button';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { AVAILABILITY_LISTS, CATEGORY_LISTS } from '@/constants/menu-constant';
import { Preview } from '@/types/general';
import { Loader2 } from 'lucide-react';
import { FormEvent } from 'react';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

export default function FormMenu<T extends FieldValues>({
  form,
  onSubmit,
  isLoading,
  type,
  preview,
  setPreview,
}: {
  form: UseFormReturn<T>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  type: 'Create' | 'Update';
  preview?: {
    file: File;
    displayUrl: string;
  };
  setPreview?: (preview: Preview) => void;
}) {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <Form {...form}>
        <DialogHeader>
          <DialogTitle>{type} User</DialogTitle>
          <DialogDescription>
            {type === 'Create' ? 'Add a new menu' : 'Make changes menu here'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <FormInput
            form={form}
            name={'name' as Path<T>}
            label="Name"
            placeholder="Insert name here"
          />
          <FormInput
            form={form}
            name={'description' as Path<T>}
            label="Description"
            placeholder="Insert description here"
            type="textarea"
          />
          <FormSelect
            form={form}
            name={'category' as Path<T>}
            label="Category"
            selectItem={CATEGORY_LISTS}
          />
          <FormInput
            form={form}
            name={'discount' as Path<T>}
            label="Discount"
            type="number"
            placeholder="Insert discount here"
          />
          <FormInput
            form={form}
            name={'price' as Path<T>}
            label="Price"
            type="number"
            placeholder="Insert price here"
          />
          <FormImage
            form={form}
            name={'image_url' as Path<T>}
            label="Image"
            preview={preview}
            setPreview={setPreview}
          />
          <FormSelect
            form={form}
            name={'is_available' as Path<T>}
            label="Availability"
            selectItem={AVAILABILITY_LISTS}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <div className="flex justify-end">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin" /> : 'Create'}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
