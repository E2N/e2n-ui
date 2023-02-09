import { css, cx } from '@emotion/css';
import { HTMLAttributes } from 'react';
import { colorPalette, theme } from '../../theme';

type CustomProps = {
  children: React.ReactNode;
  isSelected?: boolean;
  variant: 'header' | 'body' | 'details';
};

function getTableRowStyles({
  isSelected,
  variant,
}: {
  isSelected?: boolean;
  variant: 'header' | 'body' | 'details';
}) {
  return css({
    backgroundColor: isSelected ? colorPalette.grey100 : 'inherit',
    borderBottom: `1px solid ${colorPalette.grey100}`,
    lineHeight: theme.lineHeight.md,
    ':hover': {
      backgroundColor: variant === 'body' ? colorPalette.grey100 : 'none',
      // show action buttons on hover
      td: {
        '.action-button-row': {
          button: {
            opacity: 1,
          },
        },
      },
    },
    transition: 'ease-in-out',
  });
}

export type TableRowProps = CustomProps & HTMLAttributes<HTMLTableRowElement>;

export function TableRow({
  children,
  isSelected,
  variant,
  ...otherProps
}: TableRowProps) {
  return (
    <tr
      className={cx('tr', getTableRowStyles({ isSelected, variant }))}
      {...otherProps}>
      {children}
    </tr>
  );
}
