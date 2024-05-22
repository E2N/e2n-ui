import { keyframes, cx, css } from '@emotion/css';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode, Children } from 'react';
import {
  theme as e2nTheme,
  typography,
  spacingMap,
  Theme,
} from '../../../../theme';
import { useTheme } from '../../theme';

type NavigationDropdownProps = {
  /** The element that triggers the display of the dropdown. */
  trigger: ReactNode;
  /** The content of the dropdown. */
  children?: ReactNode;
};

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

function getStyles(theme: Theme) {
  return {
    content: css({
      minWidth: 200,
      backgroundColor: theme.background.paper,
      borderRadius: e2nTheme.borderRadius.xs,
      padding: 5,
      boxShadow: theme.shadow.dropdown,
      animationDuration: '0.3s',
      willChange: 'transform, opacity',
      '&[data-side="bottom"]': {
        animationName: slideUpAndFade,
      },
    }),
    trigger: css({
      position: 'relative',
      backgroundColor: 'transparent',
      cursor: 'pointer',
    }),
    dropdownMenuItem: css({
      ...typography.body1,
      color: theme.text.secondary,
      borderRadius: e2nTheme.borderRadius.xs,
      display: 'flex',
      alignItems: 'center',
      height: 32,
      position: 'relative',
      padding: spacingMap.xs,
      outline: 'none',
      userSelect: 'none',
      cursor: 'pointer',
      ':hover, :focus, :focus-visible': {
        backgroundColor: theme.actionState.hover,
        color: theme.text.primary,
        outline: 'none',
      },
    }),
    arrow: css({
      fill: theme.background.paper,
    }),
  };
}

export function NavigationDropdown({
  trigger: Trigger,
  children,
}: NavigationDropdownProps) {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={cx(styles.trigger)} asChild>
        {Trigger}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          data-testid="navigation-dropdown-content"
          className={cx(styles.content, 'navigation-dropdown-content')}
          sideOffset={5}
        >
          {Children.toArray(children).map((item, index) => {
            return (
              <DropdownMenu.Item
                asChild
                key={index}
                data-testid="navigation-dropdown-menu-item"
                className={cx(
                  styles.dropdownMenuItem,
                  'navigation-dropdown-menu-item',
                )}
              >
                {item}
              </DropdownMenu.Item>
            );
          })}
          <DropdownMenu.Arrow className={cx(styles.arrow)} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
