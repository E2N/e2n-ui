import { css, cx } from '@emotion/css';
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  TableOptions as ReactTableOptions,
  getExpandedRowModel,
} from '@tanstack/react-table';
import { useMemo, useState, ReactNode, useEffect, Fragment } from 'react';
import { colorPalette, spacingMap, theme, typography } from '../../theme';
import { TableNoData } from './TableNoData';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHead } from './TableHead';
import { TableLoading } from './TableLoading';
import { TablePaginator } from './TablePagination';
import { TableRow } from './TableRow';
import { TableCard } from './TableContainer';
import { TableHeaderCell } from './TableHeaderCell';
import { TableBodyCell } from './TableBodyCell';
import { IndeterminateCheckbox } from '.';

/**
 *
 * @param param0 @deprecated
 * @returns
 */
function getTableStyles({
  width,
  isEmpty,
}: {
  width?: number;
  isEmpty?: boolean;
}) {
  return css({
    width: width ? width : '100%',
    display: 'table',
    borderSpacing: '0px',
    borderCollapse: 'collapse',
    fontFamily: theme.fontFamily.sansSerif,
    color: colorPalette.textLightPrimary,
    tableLayout: !isEmpty ? 'fixed' : 'auto',
  });
}
function getHeaderActionStyles() {
  return {
    headerActionWrapper: css({
      zIndex: '10',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '4.5rem',
      backgroundColor: colorPalette.grey200,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: spacingMap.xxl,
    }),
    leftSlot: css({
      display: 'flex',
      marginLeft: spacingMap.md,
    }),
    rightSlot: css({
      display: 'flex',
      justifyContent: 'end',
      flexGrow: 1,
      alignItems: 'center',
    }),
    actionButtonWrapper: css({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '0 1rem',
    }),
    labelWrapper: css({
      display: 'flex',
      gap: spacingMap.sm,
      alignItems: 'center',
      marginLeft: '1.75rem',
    }),
    selectedRowsLabel: css({
      backgroundColor: colorPalette.textLightPrimary,
      color: colorPalette.commonWhite,
      width: '1.25rem',
      height: '1.25rem',
      borderRadius: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...typography.textFieldLabel,
    }),
  };
}
const styles = getHeaderActionStyles();

type CustomProps<T> = {
  totalEntries?: number;
  pageNumber?: number;
  loading?: boolean;
  ToolbarComponent?: ReactNode;
  HeaderActionComponent?: ReactNode;
  HeaderActionLabelText?: string;
  TabsBarComponent?: ReactNode;
  NoDataComponent?: ReactNode;
  width?: number;
  height?: number | string;
  renderRowSubComponent?: (originalRow: T) => ReactNode;
  data?: T[];
  disablePagination?: boolean;
  multiSelection?: boolean;
  headerGroupSelector?: string;
  setOriginalRowSelection?: (value: T[]) => void;
  paginatorCustomProps?: {
    disableFirstLastPagination?: boolean;
    showPageInputSelect?: boolean;
  };
};

export type TableProps<T> = CustomProps<T> &
  Omit<ReactTableOptions<T>, 'getCoreRowModel' | 'data'>;

/**
 * @deprecated
 */
export function Table<T>({
  columns,
  data,
  pageCount,
  totalEntries,
  pageNumber,
  ToolbarComponent,
  HeaderActionComponent,
  HeaderActionLabelText,
  loading,
  NoDataComponent,
  width,
  height,
  renderRowSubComponent,
  disablePagination = false,
  paginatorCustomProps = {
    disableFirstLastPagination: true,
    showPageInputSelect: false,
  },
  TabsBarComponent,
  setOriginalRowSelection,
  ...otherProps
}: TableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columnDefs = useMemo<ColumnDef<T>[]>(() => {
    return [...columns];
  }, [columns]);

  const isEmpty = data?.length === 0;

  const table = useReactTable({
    columns: columnDefs,
    data: data || [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onSortingChange: setSorting,
    enableRowSelection: false,
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
    <TableCard
      height={height}
      PaginatorComponent={
        !disablePagination && (
          <TablePaginator<T>
            table={table}
            disableFirstLastPagination={
              paginatorCustomProps.disableFirstLastPagination
            }
            showPageInputSelect={paginatorCustomProps.showPageInputSelect}
            totalEntries={totalEntries ?? 0}
            pageNumber={pageNumber ?? 0}
          />
        )
      }
      TabsBarComponent={TabsBarComponent}
      ToolbarComponent={ToolbarComponent}
      TableComponent={
        <div style={{ position: 'relative' }}>
          {(table.getIsSomeRowsSelected() || table.getIsAllRowsSelected()) && (
            <div className={cx(styles.headerActionWrapper)}>
              <div className={cx(styles.leftSlot)}>
                {table.options.enableMultiRowSelection && (
                  <>
                    <IndeterminateCheckbox
                      onChange={table.getToggleAllRowsSelectedHandler()}
                      indeterminate={table.getIsSomeRowsSelected()}
                      checked={table.getIsAllRowsSelected()}
                    />

                    <div className={cx(styles.labelWrapper)}>
                      <div className={cx(styles.selectedRowsLabel)}>
                        {table.getSelectedRowModel().flatRows.length.toString()}
                      </div>
                      {HeaderActionLabelText}
                    </div>
                  </>
                )}
                {table.options.enableRowSelection &&
                  !table.options.enableMultiRowSelection && (
                    <div style={{ marginLeft: '0.5rem' }}>
                      {HeaderActionLabelText}
                    </div>
                  )}
              </div>

              <div className={cx(styles.rightSlot)}>
                <div className={cx(styles.actionButtonWrapper)}>
                  {HeaderActionComponent}
                </div>
              </div>
            </div>
          )}
          <table className={cx('table', getTableStyles({ width, isEmpty }))}>
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} variant="header">
                  {headerGroup.headers.map((header) => (
                    <TableHeaderCell<T> key={header.id} header={header} />
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {loading ? (
                <TableLoading colSpan={table.getAllColumns().length} />
              ) : table.getRowModel().rows.length === 0 ? (
                (NoDataComponent ?? (
                  <TableNoData colSpan={table.getAllColumns().length} />
                ))
              ) : (
                table.getRowModel().rows.map((row) => {
                  return (
                    <Fragment key={row.id}>
                      <TableRow
                        variant="body"
                        isSelected={row.getIsSelected()}
                        onClick={row.getToggleSelectedHandler()}>
                        {row.getVisibleCells().map((cell) => (
                          <TableBodyCell key={cell.id} cell={cell} row={row} />
                        ))}
                      </TableRow>
                      {/* Todo besseres Handling um Expandend Rows und Grouped Rows voneinander abzugrenzen */}
                      {!otherProps.state?.grouping && row.getIsExpanded() && (
                        <TableRow variant="details">
                          <TableCell
                            style={{
                              backgroundColor: colorPalette.greyTransparent8,
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
                    </Fragment>
                  );
                })
              )}
            </TableBody>
          </table>
        </div>
      }
    />
  );
}
