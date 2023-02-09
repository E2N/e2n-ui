import { css, cx } from '@emotion/css';
import { HTMLAttributes, ReactNode } from 'react';
import { colorPalette } from '../../theme';

type CustomProps = {
  children: ReactNode;
};

type TabBarProps = HTMLAttributes<HTMLDivElement> & CustomProps;

function getTabsBarStyles() {
  return {
    tabsBarWrapper: css({
      borderBottom: `1px solid ${colorPalette.grey200}`,
    }),
    tabs: css({
      position: 'relative',
      display: 'flex',
    }),
  };
}

export function TabsBar({ children, className }: TabBarProps) {
  const styles = getTabsBarStyles();
  return (
    <div className={cx('tabs-bar-wrapper', styles.tabsBarWrapper, className)}>
      <div className={cx('tabs', styles.tabs)} role="tablist">
        {children}
      </div>
    </div>
  );
}
