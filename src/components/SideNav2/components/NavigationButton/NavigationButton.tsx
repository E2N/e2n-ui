import {
  AllHTMLAttributes,
  ComponentType,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from 'react';
import { cx } from '@emotion/css';
import { useAtomValue } from 'jotai';
import {
  theme as themeAtom,
  isCollapsed as isCollapsedAtom,
} from '../../store';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavigationButtonHeader } from './NavigationButtonHeader';
import { getBaseStyles } from './getStyles';

type NavigationButtonProps = {
  /** The display name of the menu item. */
  title: string;
  /** The icon of the menu item. */
  icon: IconDefinition;
  /** It is possible to pass a custom component e.g. React Router link as menu item. If no element is provided
   * a button is used as default.
   */
  component?: ComponentType<AllHTMLAttributes<HTMLElement>> | ElementType;
  /** A set of sub menu items.  */
  children?: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export function BaseNavigationButton({
  title,
  icon,
  component: CustomComponent,
  children,
}: NavigationButtonProps) {
  return children ? (
    <NavigationButtonHeader title={title} icon={icon}>
      {children}
    </NavigationButtonHeader>
  ) : (
    <NavigationButton title={title} icon={icon} component={CustomComponent} />
  );
}

export function NavigationButton({
  title,
  icon,
  component: CustomComponent = 'button',
  ...otherProps
}: NavigationButtonProps) {
  const theme = useAtomValue(themeAtom);
  const isCollapsed = useAtomValue(isCollapsedAtom);
  const styles = getBaseStyles(theme, isCollapsed);

  return (
    <>
      <CustomComponent
        className={cx(styles.container, 'navigation-button-container')}
        {...otherProps}
      >
        <FontAwesomeIcon
          className={cx(styles.icon, 'navigation-button-icon')}
          fixedWidth
          icon={icon}
        />
        <div className={cx(styles.label, 'navigation-button-label')}>
          {title}
        </div>
      </CustomComponent>
    </>
  );
}
