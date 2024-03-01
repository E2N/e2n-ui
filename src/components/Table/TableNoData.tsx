import { css, cx } from '@emotion/css';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

function getStyles() {
  return {
    row: css({
      border: 'none',
    }),
    cell: css({
      padding: 64,
    }),
  };
}

export function TableNoData({
  colSpan,
  message,
}: {
  colSpan: number;
  message?: string;
}) {
  const styles = getStyles();
  return (
    <TableRow className={cx('data-not-found-row', styles.row)} variant="body">
      <TableCell
        className={cx('data-not-found-cell', styles.cell)}
        variant="body"
        colSpan={colSpan}
        align="center">
        <div className="d-flex flex-column align-items-center gap-32px">
          {message ?? 'Keine Einträge gefunden'}
        </div>
      </TableCell>
    </TableRow>
  );
}
