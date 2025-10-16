import { zodResolver } from '@hookform/resolvers/zod';
import { startTransition, useActionState, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { updateTable } from '../actions';
import { Preview } from '@/types/general';
import { Dialog } from '@/components/ui/dialog';
import { INITIAL_STATE_TABLE } from '@/constants/table-constant';
import {
  Table,
  TableForm,
  tableFormSchema,
} from '@/validations/table-validation';
import FormTable from './form-table';
import { toast } from 'sonner';

export default function DialogUpdateTable({
  refetch,
  currentData,
  open,
  handleChangeAction,
}: {
  refetch: () => void;
  currentData?: Table;
  open?: boolean;
  handleChangeAction?: (open: boolean) => void;
}) {
  const form = useForm<TableForm>({
    resolver: zodResolver(tableFormSchema),
  });

  const [updateTableState, updateTableAction, isPendingUpdateTable] =
    useActionState(updateTable, INITIAL_STATE_TABLE);

  const [preview, setPreview] = useState<Preview | undefined>(undefined);

  const onSubmit = form.handleSubmit((data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([Key, value]) => {
      formData.append(Key, value);
    });
    formData.append('id', currentData?.id ?? '');

    startTransition(() => {
      updateTableAction(formData);
    });
  });

  useEffect(() => {
    if (updateTableState?.status === 'error') {
      toast.error('Update Menu Failed', {
        description: updateTableState.errors?._form?.[0],
      });
    }

    if (updateTableState?.status === 'success') {
      toast.success('Update Menu Success');
      form.reset();
      handleChangeAction?.(false);
      refetch();
    }
  }, [updateTableState]);

  useEffect(() => {
    if (currentData) {
      form.setValue('name', currentData.name);
      form.setValue('description', currentData.description);
      form.setValue('capacity', currentData.capacity.toString());
      form.setValue('status', currentData.status);
    }
  }, [currentData]);

  return (
    <Dialog open={open} onOpenChange={handleChangeAction}>
      <FormTable
        form={form}
        onSubmit={onSubmit}
        isLoading={isPendingUpdateTable}
        type="Update"
      />
    </Dialog>
  );
}
