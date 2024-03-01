import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Cell, flexRender, Row } from '@tanstack/react-table';
import { TableCell } from './TableCell';
import { TableColumnDef } from './types';
import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export function TableBodyCell<T>({
  cell,
  row,
}: {
  cell: Cell<T, unknown>;
  row: Row<T>;
}) {
  const isRightAligned =
    (cell.column.columnDef as TableColumnDef<T>).type === 'rightAligned';

  return (
    <TableCell
      key={cell.id}
      variant="body"
      style={{
        textAlign: isRightAligned ? 'right' : 'start',
        width:
          cell.column.getSize() !== 150 ? cell.column.getSize() : undefined,
      }}>
      {cell.getIsGrouped() ? (
        <>
          <span
            {...{
              onClick: row.getToggleExpandedHandler(),
              style: {
                cursor: row.getCanExpand() ? 'pointer' : 'normal',
              },
            }}>
            {row.getIsExpanded() ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronRight} />
            )}{' '}
            {flexRender(cell.column.columnDef.cell, cell.getContext())} (
            {row.subRows.length})
          </span>
        </>
      ) : cell.getIsAggregated() ? (
        flexRender(
          cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell,
          cell.getContext(),
        )
      ) : cell.getIsPlaceholder() ? null : (
        flexRender(cell.column.columnDef.cell, cell.getContext())
      )}
    </TableCell>
  );
}
