import { css, cx } from '@emotion/css';
import { HTMLAttributes, ReactNode } from 'react';
import { colorPalette } from '../../theme';

type CustomProps = {
  children: ReactNode;
};

type TabBarProps = HTMLAttributes<HTMLDivElement> & CustomProps;

function getTabsBarStyles() {
  return {
    tabs: css({
      position: 'relative',
      display: 'flex',
      gap: '2.5rem',
      '::before': {
        display: 'block',
        content: '" "',
        position: 'absolute',
        left: 0,
        right: 0,
        height: 2,
        bottom: 0,
        background: colorPalette.secondaryLighter,
        ':hover, :focus': {
          textDecoration: 'none',
          cursor: 'pointer',
        },
      },
    }),
  };
}

export function TabsBar({ children, className }: TabBarProps) {
  const styles = getTabsBarStyles();
  return (
    <div className={cx('tabs-bar-wrapper', className)}>
      <div className={cx('tabs', styles.tabs)} role="tablist">
        {children}
      </div>
    </div>
  );
}
