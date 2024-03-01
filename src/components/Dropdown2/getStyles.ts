import { css, keyframes } from '@emotion/css';
import { Theme, theme as e2nTheme, spacingMap, typography } from '../../theme';

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

export function getStyles(theme: Theme) {
  return {
    button: css({ all: 'unset' }),
    content: css({
      minWidth: 100,
      backgroundColor: theme.background.paper,
      borderRadius: e2nTheme.borderRadius.xs,
      padding: 5,
      boxShadow: theme.shadow.dropdown,
      animationDuration: '0.3s',
      willChange: 'transform, opacity',
      '&[data-side="bottom"]': {
        animationName: slideUpAndFade,
      },
      zIndex: 100,
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
    dropdownMenuLabel: css({
      paddingLeft: spacingMap.xs,
      paddingTop: spacingMap.sm,
      color: theme.text.disabled,
      ...typography.subtitle2,
    }),
    arrow: css({
      fill: theme.background.paper,
    }),
  };
}
