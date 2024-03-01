import { css, cx } from '@emotion/css';
import { ReactNode } from 'react';
import { spacingMap } from '../../../..';

type SidenavItemsContainerProps = {
  /** Menu items that should be displayed in the sidenav. */
  items: ReactNode[];
};

const styles = css({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  height: 'inherit',
  position: 'relative',
  gap: spacingMap.xs,
});

export function SidenavItemsContainer({ items }: SidenavItemsContainerProps) {
  return <div className={cx(styles, 'sidenav-items-container')}>{items}</div>;
}
