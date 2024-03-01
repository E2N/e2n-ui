import { ComponentType, ReactNode } from 'react';
import { Theme } from '../../theme';

export type NavigationProps = {
  /** The label for the navigation component. */
  label: string;
  /** An array of React nodes representing the navigation items. */
  menuItems: ReactNode[];
  /** An optional React node to render the "home" navigation item. */
  renderHome?: ComponentType;
  /** An optional React node to render the "profile" navigation item. */
  renderProfile?: ComponentType;
  /** An optional React node to render the "settings" navigation item. */
  renderSettings?: ComponentType;
  /** An optional theme object for making the navigation bar themeable. */
  theme?: Theme;
  /** An optional classname */
  className?: string;
};
