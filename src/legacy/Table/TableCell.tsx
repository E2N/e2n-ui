import { css, cx } from '@emotion/css';
import React, { TdHTMLAttributes, ThHTMLAttributes } from 'react';
import { colorPalette, theme, typography } from '../../theme';

type CustomProps = {
  variant: 'body' | 'head';
  children: React.ReactNode;
  sortable?: boolean;
  active?: boolean;
  className?: string;
};

export type TableCellProps = CustomProps &
  (
    | ThHTMLAttributes<HTMLTableCellElement>
    | TdHTMLAttributes<HTMLTableCellElement>
  );

/**
 *
 * @param param0 @deprecated
 * @returns
 */
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
  isActive = false,
}: {
  isHeader?: boolean;
  isSortable?: boolean;
  isActive?: boolean;
}) {
  return css({
    cursor: isHeader && isSortable ? 'pointer' : 'default',
    padding: theme.spacing.md,
    ':hover':
      isHeader && isSortable
        ? {
            color: colorPalette.textLightPrimary,
          }
        : {},
    '.action-button-row': {
      button: {
        opacity: 0,
      },
    },
    color:
      isHeader && isSortable && isActive
        ? colorPalette.textLightPrimary
        : colorPalette.grey600,
    fontSize: isHeader
      ? typography.tableHead.fontSize
      : typography.tableCell.fontSize,
    fontWeight: isHeader
      ? typography.tableHead.fontWeight
      : typography.tableCell.fontWeight,
    lineHeight: isHeader
      ? typography.tableHead.lineHeight
      : typography.tableCell.lineHeight,
    div: isHeader
      ? {
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing.xs,
        }
      : {},
  });
}
/**
 *
 * @param param0 @deprecated
 * @returns
 */
export function TableCell({
  variant,
  children,
  sortable,
  active,

  ...otherProps
}: TableCellProps) {
  return (
    <TableCellWrapper
      variant={variant}
      active={active}
      className={cx(
        'tableCell',
        getTableCellStyles({
          isHeader: variant === 'head',
          isSortable: sortable,
          isActive: active,
        }),
      )}
      {...otherProps}>
      {children}
    </TableCellWrapper>
  );
}
