import { ReactNode } from 'react';
import { Card } from '../ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import PaginantionDataTable from './paginantion-data-table';

export default function DataTable({
  header,
  data,
  isLoading,
  totalPages,
  currentPage,
  onChangePage,
  currentLimit,
  onChangeLimit,
}: {
  header: string[];
  data: (string | ReactNode)[][];
  isLoading?: boolean;
  totalPages: number;
  currentPage: number;
  onChangePage: (page: number) => void;
  currentLimit: number;
  onChangeLimit: (page: number) => void;
}) {
  return (
    <div className="w-full flex flex-col gap-4">
      <Card className="p-0">
        <Table className="w-full rounded-lg overflow-hidden">
          <TableHeader className="bg-muted sticky top-0 z-10">
            <TableRow>
              {header.map((column) => (
                <TableHead key={`th-${column}`} className="px-6 py-3">
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((row, rowIndex) => (
              <TableRow key={`tr-${rowIndex}`}>
                {row.map((column, columnIndex) => (
                  <TableCell
                    key={`tc-${rowIndex}-${columnIndex}`}
                    className="px-6 py-3 "
                  >
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {data?.length === 0 && !isLoading && (
              <TableRow>
                <TableCell
                  colSpan={header.length}
                  className="h-24 text-center "
                >
                  No Result Data
                </TableCell>
              </TableRow>
            )}
            {isLoading && (
              <TableRow>
                <TableCell
                  colSpan={header.length}
                  className="h-24 text-center "
                >
                  Loading...
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
      <div className="flex items-center justify-between">
        <div></div>
        {totalPages > 1 && (
          <div className="flex justify-end">
            <PaginantionDataTable
              totalPages={totalPages}
              currentPage={currentPage}
              onChangePage={onChangePage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
