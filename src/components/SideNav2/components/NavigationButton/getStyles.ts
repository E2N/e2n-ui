import { css } from '@emotion/css';
import {
  Theme,
  spacingMap,
  theme as e2nTheme,
  colorPalette,
  typography,
} from '../../../..';

export function getBaseStyles(
  theme: Theme,
  isCollapsed: boolean,
  areChildrenVisible?: boolean,
) {
  return {
    container: css({
      padding: spacingMap.sm,
      marginLeft: -8,
      marginRight: -8,
      display: 'flex',
      flexDirection: isCollapsed ? 'column' : 'row',
      alignItems: isCollapsed ? 'center' : 'end',
      justifyContent: isCollapsed ? 'center' : 'flex-start',
      gap: isCollapsed ? spacingMap.xs : spacingMap.sm,
      position: 'relative',
      height: 'fit-content',
      backgroundColor: 'transparent',
      border: 0,
      borderRadius: e2nTheme.borderRadius.xs,
      cursor: 'pointer',
      color: theme.text.secondary,
      transition: 'background-color, color 0.3s',
      ':hover, :focus, :focus-visible': {
        backgroundColor: colorPalette.commonWhite,

        outline: 'none',
        '.navigation-button-icon': {
          color: colorPalette.primaryMain,
        },
        '.navigation-button-chevron-down': {
          color: colorPalette.primaryMain,
        },
        '.navigation-button-label': {
          color: colorPalette.commonBlack,
          fontWeight: 600,
        },
      },
    }),
    label: css({
      whiteSpace: 'nowrap',
      lineHeight: isCollapsed
        ? typography.sidenavItemMini.lineHeight
        : typography.sidenavItem.lineHeight,
      fontSize: isCollapsed
        ? typography.sidenavItemMini.fontSize
        : typography.sidenavItem.fontSize,
      fontWeight: isCollapsed
        ? typography.sidenavItemMini.fontWeight
        : typography.sidenavItem.fontWeight,
    }),
    icon: css({
      paddingTop: spacingMap.xs,
      paddingBottom: spacingMap.xs,
    }),
    chevronDown: css({
      position: 'absolute',
      top: '0.75rem',
      right: isCollapsed ? '0.25rem' : '0.75rem',
      fontSize: isCollapsed ? '0.75rem' : '0.875rem',
      color: colorPalette.greyTransparent48,
      transition: '0.3s',
      transform: !areChildrenVisible ? 'rotate(0)' : 'rotate(180deg)',
    }),
  };
}
