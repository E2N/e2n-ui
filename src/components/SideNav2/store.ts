import { atom } from 'jotai';
import { Theme, lightTheme } from '../../theme';

export const isCollapsed = atom(false);

export const defaultWidth = '200px';
export const minimalWidth = '88px';
export const sidenavSize = atom<{ width: string; height: string }>({
  height: 'inherit',
  width: defaultWidth,
});

export const theme = atom<Theme>(lightTheme);
