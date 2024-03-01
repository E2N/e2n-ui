import { ComponentType, ReactNode } from 'react';
import { Theme } from '../../theme';

export type SideNavProps = {
  /** The label for the sidenav component. */
  label: string;
  /** An optional theme object for making the sidenav themeable. */
  theme?: Theme;
  /** If true it is possible to toggle the size of the sidenav. */
  isCollapsable?: boolean;
  /** If true it is possible to change the size of the sidenav via a drag handler.  */
  isDraggable?: boolean;
  /** An array of React nodes representing the sidenav items. */
  sidenavItems: ReactNode[];
  /** An optional React node to render the "header" component. */
  renderHeader?: ComponentType;
  /** An optional React node to render the "footer" component. */
  renderFooter?: ComponentType;
};
