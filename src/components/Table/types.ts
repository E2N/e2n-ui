import {
  ColumnDef,
  ExpandedState,
  PaginationState,
  Row,
  SortingState,
  RowSelectionState,
} from '@tanstack/react-table';

export type TableColumnDef<TData, TValue = unknown> = ColumnDef<
  TData,
  TValue
> & { type?: 'rightAligned' };

export type TableSortingState = SortingState;

export type TableRow<TData> = Row<TData>;

export type TablePaginationState = PaginationState;

export type TableExpandendState = ExpandedState;

export type TableRowSelection = RowSelectionState;
