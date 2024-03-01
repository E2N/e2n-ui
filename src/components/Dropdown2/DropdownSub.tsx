import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { lightTheme } from '../..';
import { getStyles } from './getStyles';
import { cx } from '@emotion/css';
import { DropdownSupProps } from './types';

export function DropdownSub({
  trigger,
  theme = lightTheme,
  children,
  ...others
}: DropdownSupProps) {
  const styles = getStyles(theme);
  return (
    <DropdownMenu.Sub {...others}>
      <DropdownMenu.SubTrigger
        className={cx(styles.trigger, styles.button, styles.dropdownMenuItem)}>
        {trigger}
      </DropdownMenu.SubTrigger>
      <DropdownMenu.Portal>
        <DropdownMenu.SubContent className={styles.content}>
          {children}
          <DropdownMenu.Arrow className={cx(styles.arrow)} />
        </DropdownMenu.SubContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Sub>
  );
}
