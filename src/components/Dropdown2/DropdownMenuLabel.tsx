import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';
import { getStyles } from './getStyles';
import { Theme, lightTheme } from '../..';
import { cx } from '@emotion/css';

export function DropdownMenuLabel({
  children,
  theme = lightTheme,
  className,
  ...otherProps
}: {
  children: ReactNode;
  theme?: Theme;
} & DropdownMenu.DropdownMenuLabelProps) {
  const styles = getStyles(theme);
  return (
    <DropdownMenu.Label
      className={cx(
        styles.dropdownMenuLabel,
        className,
        'navigation-dropdown-menu-label',
      )}
      {...otherProps}>
      {children}
    </DropdownMenu.Label>
  );
}
