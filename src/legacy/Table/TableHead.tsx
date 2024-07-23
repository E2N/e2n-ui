import { css, cx } from '@emotion/css';
import { HTMLAttributes } from 'react';
import { colorPalette, theme } from '../../theme';

type CustomProps = {
  children: React.ReactNode;
};

export type TableHeadProps = CustomProps &
  HTMLAttributes<HTMLTableSectionElement>;

function getTableHeaderStyles() {
  return css({
    display: 'table-header-group',
    backgroundColor: colorPalette.secondaryLighter,
    position: 'sticky',
    fontSize: '0.8125rem',
    fontStyle: 'normal',
    fontWeight: theme.weight.semibold,
    lineHeight: '1.5rem',
    color: colorPalette.grey600,
  });
}

export function TableHead({ children, ...otherProps }: TableHeadProps) {
  return (
    <thead {...otherProps} className={cx('thead', getTableHeaderStyles())}>
      {children}
    </thead>
  );
}
