import { css, cx } from '@emotion/css';
import React, { TdHTMLAttributes, ThHTMLAttributes } from 'react';
import { colorPalette, theme } from '../../theme';

type CustomProps = {
  variant: 'body' | 'head';
  children: React.ReactNode;
  sortable?: boolean;
};

export type TableCellProps = CustomProps &
  (
    | ThHTMLAttributes<HTMLTableCellElement>
    | TdHTMLAttributes<HTMLTableCellElement>
  );

function TableCellWrapper({
  children,
  variant,
  ...otherProps
}: TableCellProps) {
  return variant === 'head' ? (
    <th {...otherProps}>{children}</th>
  ) : (
    <td {...otherProps}>{children}</td>
  );
}

function getTableCellStyles({
  isHeader = false,
  isSortable = false,
}: {
  isHeader?: boolean;
  isSortable?: boolean;
}) {
  return css({
    cursor: isHeader && isSortable ? 'pointer' : 'default',
    padding: `${theme.spacing.md} ${theme.spacing.xs}`,
    ':hover':
      isHeader && isSortable
        ? {
            color: colorPalette.grey500,
          }
        : {},
    '.action-button-row': {
      button: {
        opacity: 0,
      },
    },
  });
}

export function TableCell({
  variant,
  children,
  sortable,
  ...otherProps
}: TableCellProps) {
  return (
    <TableCellWrapper
      variant={variant}
      className={cx(
        'tableCell',
        getTableCellStyles({
          isHeader: variant === 'head',
          isSortable: sortable,
        }),
      )}
      {...otherProps}>
      {children}
    </TableCellWrapper>
  );
}
