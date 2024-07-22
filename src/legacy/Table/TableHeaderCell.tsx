import { flexRender, Header } from '@tanstack/react-table';
import { TableColumnDef } from './types';
import { TableCell } from './TableCell';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colorPalette } from '../../theme';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { css, cx } from '@emotion/css';

export function TableHeaderCell<T>({ header }: { header: Header<T, unknown> }) {
  const isRightAligned =
    (header.column.columnDef as TableColumnDef<T>).type === 'rightAligned';

  /**
   *
   * @param param0 @deprecated
   * @returns
   */
  function getCellStyles() {
    return {
      align: css({
        justifyContent: isRightAligned ? 'end' : 'start',
      }),
      width: css({
        width: header.getSize() !== 150 ? header.getSize() : undefined,
      }),
    };
  }
  const styles = getCellStyles();

  return (
    <TableCell
      key={header.id}
      style={{
        width: header.getSize() !== 150 ? header.getSize() : undefined,
      }}
      variant="head"
      align={isRightAligned ? 'right' : 'left'}
      active={header.column.getIsSorted() ? true : false}
      sortable={header.column.getCanSort()}>
      {header.isPlaceholder ? null : (
        <div
          className={cx('cell-align', styles.align)}
          onClick={header.column.getToggleSortingHandler()}>
          <>
            <div color={colorPalette.primaryMain}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </div>
            {{
              asc: <FontAwesomeIcon icon={faArrowUp} />,
              desc: <FontAwesomeIcon icon={faArrowDown} />,
            }[header.column.getIsSorted() as string] ?? null}
          </>
        </div>
      )}
    </TableCell>
  );
}
