import { css, cx } from '@emotion/css';
import { AllHTMLAttributes, ComponentType, ElementType } from 'react';
import {
  theme as e2nTheme,
  typography,
  spacingMap,
  Theme,
} from '../../../../theme';
import { useTheme } from '../../theme';

type NavigationButtonProps = {
  /** The display name of the menu item. */
  children: string;
  /** It is possible to pass a custom component e.g. React Router link as menu item. If no element is provided
   * a button is used as default.
   */
  component?: ComponentType<AllHTMLAttributes<HTMLElement>> | ElementType;
} & AllHTMLAttributes<HTMLElement>;

function getStyles(theme: Theme) {
  return css({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    height: 'fit-content',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    border: 0,
    borderRadius: e2nTheme.borderRadius.xs,
    ...typography.navItem,
    padding: spacingMap.xs,
    cursor: 'pointer',
    color: theme.text.secondary,
    transition: 'background-color, color 0.3s',
    ':hover, :focus, :focus-visible': {
      backgroundColor: theme.actionState.hover,
      color: theme.text.primary,
      outline: 'none',
    },
  });
}

export function NavigationButton({
  children,
  component: CustomComponent = 'button',
  ...otherProps
}: NavigationButtonProps) {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <CustomComponent
      className={cx(styles, 'navigation-button')}
      {...otherProps}>
      {children}
    </CustomComponent>
  );
}
