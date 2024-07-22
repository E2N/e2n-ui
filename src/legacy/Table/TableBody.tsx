import { css, cx } from '@emotion/css';
import { HTMLAttributes } from 'react';

type CustomProps = {
  children: React.ReactNode;
};

export type TableBodyProps = CustomProps &
  HTMLAttributes<HTMLTableSectionElement>;
/**
 *
 * @param param0 @deprecated
 * @returns
 */
function getTableBodyStyles() {
  return css({
    display: 'table-row-group',
  });
}
/**
 *
 * @param param0 @deprecated
 * @returns
 */
export function TableBody({ children, ...otherProps }: TableBodyProps) {
  return (
    <tbody className={cx('body', getTableBodyStyles())} {...otherProps}>
      {children}
    </tbody>
  );
}
