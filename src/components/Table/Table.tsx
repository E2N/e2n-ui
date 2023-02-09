import { css, cx } from '@emotion/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  TableOptions,
  getExpandedRowModel,
} from '@tanstack/react-table';
import { useMemo, useState, ReactNode, useEffect } from 'react';
import { colorPalette, theme } from '../../theme';
import { TableNoData } from './TableNoData';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHead } from './TableHead';
import { TableLoading } from './TableLoading';
import { TablePaginator } from './TablePagination';
import { TableRow } from './TableRow';
import {
  faArrowDown,
  faArrowUp,
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

function getTableStyles({ width }: { width?: number }) {
  return css({
    width: width ? width : '100%',
    display: 'table',
    borderSpacing: '0px',
    borderCollapse: 'collapse',
    fontFamily: theme.fontFamily.sansSerif,
    margin: '25px 0',
    fontSize: theme.size.base,
  });
}

export function Table<T>({
  columns,
  data,
  pageCount,
  totalEntries,
  ToolbarComponent,
  loading,
  NoDataComponent,
  width,
  renderRowSubComponent,
  disablePagination = false,
  setOriginalRowSelection,
  ...otherProps
}: Omit<TableOptions<T>, 'getCoreRowModel' | 'data'> & {
  totalEntries?: number;
  loading?: boolean;
  ToolbarComponent?: ReactNode;
  NoDataComponent?: ReactNode;
  width?: number;
  renderRowSubComponent?: (originalRow: T) => ReactNode;
  data?: T[];
  disablePagination?: boolean;
  headerGroupSelector?: string;
  setOriginalRowSelection?: (value: T[]) => void;
}) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columnDefs = useMemo<ColumnDef<T>[]>(() => {
    return [...columns];
  }, [columns]);

  const table = useReactTable({
    columns: columnDefs,
    data: data || [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onSortingChange: setSorting,
    enableMultiRowSelection: false,
    pageCount,
    ...otherProps,
    state: {
      sorting,
      ...otherProps.state,
    },
  });

  useEffect(() => {
    if (setOriginalRowSelection) {
      setOriginalRowSelection(
        table.getSelectedRowModel().flatRows.map((row) => row.original),
      );
    }
  }, [otherProps.state?.rowSelection]);

  return (
    <div style={{ padding: theme.spacing.sm }}>
      {ToolbarComponent}
      <div style={{ overflowX: 'auto' }}>
        <table className={cx('table', getTableStyles({ width }))}>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} variant="header">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableCell
                      key={header.id}
                      style={{ width: header.getSize() }}
                      align="left"
                      variant="head"
                      sortable={header.column.getCanSort()}>
                      {header.isPlaceholder ? null : (
                        <div
                          className="d-flex flex-no-wrap align-items-center"
                          onClick={header.column.getToggleSortingHandler()}>
                          <div>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                          </div>
                          {{
                            asc: (
                              <FontAwesomeIcon
                                icon={faArrowUp}
                                style={{ marginLeft: theme.spacing.xs }}
                              />
                            ),
                            desc: (
                              <FontAwesomeIcon
                                icon={faArrowDown}
                                style={{ marginLeft: theme.spacing.xs }}
                              />
                            ),
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {loading ? (
              <TableLoading colSpan={table.getAllColumns().length} />
            ) : table.getRowModel().rows.length === 0 ? (
              NoDataComponent ?? (
                <TableNoData colSpan={table.getAllColumns().length} />
              )
            ) : (
              table.getRowModel().rows.map((row) => {
                return (
                  <>
                    <TableRow
                      variant="body"
                      isSelected={row.getIsSelected()}
                      key={row.id}
                      onClick={row.getToggleSelectedHandler()}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} variant="body">
                          {cell.getIsGrouped() ? (
                            <>
                              <span
                                {...{
                                  onClick: row.getToggleExpandedHandler(),
                                  style: {
                                    cursor: row.getCanExpand()
                                      ? 'pointer'
                                      : 'normal',
                                  },
                                }}>
                                {row.getIsExpanded() ? (
                                  <FontAwesomeIcon icon={faChevronDown} />
                                ) : (
                                  <FontAwesomeIcon icon={faChevronRight} />
                                )}{' '}
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext(),
                                )}{' '}
                                ({row.subRows.length})
                              </span>
                            </>
                          ) : cell.getIsAggregated() ? (
                            flexRender(
                              cell.column.columnDef.aggregatedCell ??
                                cell.column.columnDef.cell,
                              cell.getContext(),
                            )
                          ) : cell.getIsPlaceholder() ? null : (
                            flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                    {/* Todo besseres Handling um Expandend Rows und Grouped Rows voneinander abzugrenzen */}
                    {!otherProps.state?.grouping && row.getIsExpanded() && (
                      <TableRow variant="details">
                        <TableCell
                          style={{
                            backgroundColor: colorPalette.grey100,
                            boxShadow: 'inset 0px 11px 8px -10px #e4e7ec',
                          }}
                          variant="body"
                          colSpan={table.getAllColumns().length}>
                          {!renderRowSubComponent ? (
                            <div>Please provide a row subcomponent</div>
                          ) : (
                            renderRowSubComponent(row.original)
                          )}
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                );
              })
            )}
          </TableBody>
        </table>
      </div>
      {!disablePagination && (
        <TablePaginator<T> table={table} totalEntries={totalEntries ?? 0} />
      )}
    </div>
  );
}
