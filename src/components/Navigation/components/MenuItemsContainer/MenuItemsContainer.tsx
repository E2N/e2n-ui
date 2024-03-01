import { css, cx } from '@emotion/css';
import { ReactNode } from 'react';
import { spacingMap } from '../../../..';

type MenuItemsContainerProps = {
  /** Menu items that should be displayed in the navbar. */
  items: ReactNode[];
};

const styles = css({
  display: 'flex',
  height: '100%',
  position: 'relative',
  alignItems: 'center',
  gap: spacingMap.md,
});

export function MenuItemsContainer({ items }: MenuItemsContainerProps) {
  return (
    <div
      data-testid="navigation-items-container"
      className={cx(styles, 'navigation-items-container')}>
      {items}
    </div>
  );
}
