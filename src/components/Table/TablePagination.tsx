import { cx, css } from '@emotion/css';
import { theme } from '../../theme/default';
import { IconButton } from '../Button';
import { PaginatorSelect } from './PaginatorSelect';
import { Table as TableType } from '@tanstack/react-table';
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';
import { colorPalette } from '../../theme';

function getPaginatorStyles() {
  return {
    paginator: css({
      display: 'flex',
      gap: theme.spacing.md,
      alignItems: 'center',
    }),
    paginatorWrapper: css({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: theme.fontFamily.sansSerif,
      fontSize: theme.size.base,
      color: colorPalette.grey800,
    }),
    alignPagination: css({
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center',
    }),
    textfieldWrapper: css({
      display: 'flex',
      borderRadius: '0.5rem',
      textAlign: 'center',
      width: '2.5rem',
      padding: '0.3rem',
      fontFamily: theme.fontFamily.sansSerif,
      fontSize: theme.size.base,
      '&:focus': {
        border: '2px solid' + colorPalette.primaryMain,
      },
    }),
  };
}

export function TablePaginator<T>({
  table,
  totalEntries,
  disableFirstLastPagination,
  showPageInputSelect,
}: {
  table: TableType<T>;
  totalEntries: number;
  pageNumber: number;
  disableFirstLastPagination?: boolean;
  showPageInputSelect?: boolean;
}) {
  function handlePageSizeChange(value?: number) {
    if (value) {
      table.setPageSize(value);
    }
  }

  function handlePageIndexChange(value?: string) {
    const pageNumber = Number(value);
    if (pageNumber) {
      table.setPageIndex(pageNumber - 1);
    } else {
      table.setPageIndex(0);
    }
  }

  const paginatiorStyles = getPaginatorStyles();

  return (
    <div className={cx('paginator-Wrapper', paginatiorStyles.paginatorWrapper)}>
      <div>Einträge gesamt: {totalEntries}</div>
      <div className={cx('paginator', paginatiorStyles.paginator)}>
        Zeilen pro Seite:{' '}
        <PaginatorSelect
          defaultSelected={table.getState().pagination.pageSize}
          onChange={handlePageSizeChange}
        />
        <div>
          <div
            className={cx('alignPagination', paginatiorStyles.alignPagination)}>
            <div>
              Seite{' '}
              {table.getPageCount() === 0
                ? 0
                : table.getState().pagination.pageIndex + 1}{' '}
              von {table.getPageCount()}
            </div>
            {showPageInputSelect && (
              <input
                className={cx(
                  'textField-Wrapper',
                  paginatiorStyles.textfieldWrapper,
                )}
                placeholder={(
                  table.getState().pagination.pageIndex + 1
                ).toString()}
                onChange={(e) => handlePageIndexChange(e.target.value)}
                width={50}
              />
            )}
            {!disableFirstLastPagination && (
              <IconButton
                icon={faAnglesLeft}
                size="xl"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              />
            )}
            <IconButton
              icon={faAngleLeft}
              size="xl"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            />
            <IconButton
              size="xl"
              icon={faAngleRight}
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            />
            {!disableFirstLastPagination && (
              <IconButton
                icon={faAnglesRight}
                size="xl"
                onClick={() =>
                  table.setPageIndex(table.getPageOptions().length)
                }
                disabled={!table.getCanNextPage()}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
