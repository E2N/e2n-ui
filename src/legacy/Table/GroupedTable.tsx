import {
  ColumnDef,
  getGroupedRowModel,
  GroupingState,
} from '@tanstack/react-table';
import { useState } from 'react';
import { Table } from './Table';
/**
 *
 * @param param0 @deprecated
 * @returns
 */
export function GroupedTable<T>({
  columns,
  data,
  defaultGroupedByColumn,
}: {
  columns: ColumnDef<T>[];
  data: T[];
  defaultGroupedByColumn: string;
}) {
  const [grouping, setGrouping] = useState<GroupingState>([
    defaultGroupedByColumn,
  ]);
  return (
    <Table<T>
      columns={columns}
      data={data}
      disablePagination
      onGroupingChange={setGrouping}
      state={{ grouping }}
      getGroupedRowModel={getGroupedRowModel()}
    />
  );
}
