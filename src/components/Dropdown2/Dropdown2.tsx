import { cx } from '@emotion/css';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { lightTheme } from '../../theme';
import { DropdownProps } from './types';
import { getStyles } from './getStyles';

export function Dropdown2({
  trigger: Trigger,
  children,
  theme = lightTheme,
  ...otherProps
}: DropdownProps) {
  const styles = getStyles(theme);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={cx(styles.trigger, styles.button)}>
        {Trigger}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          data-testid="navigation-dropdown-content"
          className={cx(styles.content, 'navigation-dropdown-content')}
          sideOffset={5}
          {...otherProps}
        >
          {children}
          <DropdownMenu.DropdownMenuGroup />
          <DropdownMenu.Arrow className={cx(styles.arrow)} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
