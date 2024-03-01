import { cx, css } from '@emotion/css';
import React, { HTMLAttributes } from 'react';
import { theme } from '../../theme/default';

type TableActionCellWrapperProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function TableActionCellWrapper({
  children,
}: TableActionCellWrapperProps) {
  const styles = css({
    display: 'flex',
    justifyContent: 'start',
    marginRight: theme.spacing.sm,
    marginTop: -16,
    marginBottom: -16,
    paddingTop: 1,
    paddingBottom: 1,
    '.action-button': {
      '&:hover': {
        transition: '0.3s',
      },
    },
  });

  return <div className={cx('action-button-row', styles)}>{children}</div>;
}
