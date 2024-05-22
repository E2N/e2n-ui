import { css, cx } from '@emotion/css';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';
import { Loading } from '../Loading';

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

export function TableLoading({ colSpan }: { colSpan: number }) {
  const styles = getStyles();
  return (
    <TableRow className={cx('data-not-found-row', styles.row)} variant="body">
      <TableCell
        className={cx('data-not-found-cell', styles.cell)}
        variant="body"
        colSpan={colSpan}
        align="center"
      >
        <div className="d-flex flex-column align-items-center gap-32px">
          <Loading />
        </div>
      </TableCell>
    </TableRow>
  );
}
