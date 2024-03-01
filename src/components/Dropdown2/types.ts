import { ReactNode } from 'react';
import { Theme } from '../..';
import { DropdownMenuSubProps } from '@radix-ui/react-dropdown-menu';

export type DropdownProps = {
  /** The element that triggers the display of the dropdown. */
  trigger: ReactNode;
  /** The content of the dropdown. */
  children?: ReactNode;
  /** An optional theme object for making the navigation bar themeable. */
  theme?: Theme;
  /** An optional property to change the position of the dropdown. */
  side?: 'bottom' | 'left' | 'right' | 'top' | undefined;
};

export type DropdownSupProps = {
  trigger: ReactNode;
  theme?: Theme;
} & DropdownMenuSubProps;
