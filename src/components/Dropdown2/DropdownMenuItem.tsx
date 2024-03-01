import { cx } from '@emotion/css';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { getStyles } from './getStyles';
import { Theme, lightTheme } from '../..';
import { ReactNode } from 'react';

export function DropdownMenuItem({
  theme = lightTheme,
  children,
  className,
  ...otherProps
}: {
  children: ReactNode;
  theme?: Theme;
} & DropdownMenu.DropdownMenuItemProps) {
  const styles = getStyles(theme);

  return (
    <DropdownMenu.Item
      data-testid="navigation-dropdown-menu-item"
      className={cx(
        styles.dropdownMenuItem,
        className,
        'navigation-dropdown-menu-item',
      )}
      {...otherProps}>
      {children}
    </DropdownMenu.Item>
  );
}
