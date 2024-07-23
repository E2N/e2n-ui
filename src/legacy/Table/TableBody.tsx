import { css, cx } from '@emotion/css';
import { HTMLAttributes } from 'react';

type CustomProps = {
  children: React.ReactNode;
};

export type TableBodyProps = CustomProps &
  HTMLAttributes<HTMLTableSectionElement>;

function getTableBodyStyles() {
  return css({
    display: 'table-row-group',
  });
}

export function TableBody({ children, ...otherProps }: TableBodyProps) {
  return (
    <tbody className={cx('body', getTableBodyStyles())} {...otherProps}>
      {children}
    </tbody>
  );
}
