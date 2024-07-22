import { css, cx } from '@emotion/css';
import { HTMLAttributes } from 'react';
import { colorPalette } from '../../theme';

type CustomProps = {
  children: React.ReactNode;
  isSelected?: boolean;
  variant: 'header' | 'body' | 'details';
};

/**
 *
 * @param param0 @deprecated
 * @returns
 */
function getTableRowStyles({
  isSelected,
  variant,
}: {
  isSelected?: boolean;
  variant: 'header' | 'body' | 'details';
}) {
  return css({
    backgroundColor: isSelected ? colorPalette.grey100 : 'inherit',
    height: '4.5rem',
    borderBottom: '1px solid rgba(102, 112, 133, 0.24)',
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
/**
 * @deprecated
 */
export function TableRow({
  children,
  isSelected,
  variant,
  ...otherProps
}: TableRowProps) {
  return (
    <tr
      className={cx('tr', getTableRowStyles({ isSelected, variant }))}
      {...otherProps}
      onClick={(e) => {
        e.stopPropagation();
      }}>
      {children}
    </tr>
  );
}
