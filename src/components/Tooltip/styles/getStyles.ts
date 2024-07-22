import { css, keyframes } from '@emotion/css';
import { ClassNamesArg } from '@emotion/react';
import { colorPalette, theme } from '../../../theme';
import { TooltipVariants } from '../types';
import { Shadow } from '../../../theme/types';
import { darkShadow, lightShadow } from '../../../theme/tokens';

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
const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
});
const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});
const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

const variantStyleMap: Record<
  TooltipVariants,
  {
    backgroundColor?: string;
    boxShadowColor?: Shadow;
    arrow?: ClassNamesArg;
  }
> = {
  default: {
    backgroundColor: colorPalette.grey800,
    boxShadowColor: lightShadow,
    arrow: css({ fill: colorPalette.grey800 }),
  },
  darkmode: {
    backgroundColor: colorPalette.grey700,
    boxShadowColor: darkShadow,
    arrow: css({ fill: colorPalette.grey700 }),
  },
  withoutArrow: {
    backgroundColor: colorPalette.grey800,
    boxShadowColor: lightShadow,
    arrow: css({ fill: 'none' }),
  },
};

export function getStyles(variant: TooltipVariants) {
  return {
    arrow: variantStyleMap[variant].arrow,
    container: css({
      maxWidth: '9rem',
      wordBreak: 'break-word',
      height: 'fit-content',
      lineHeight: theme.lineHeight.sm,
      borderRadius: theme.borderRadius.xs,
      padding: '3px 6px',
      zIndex: 10,
      fontSize: theme.size.md,
      color: colorPalette.white,
      backgroundColor: variantStyleMap[variant].backgroundColor,
      boxShadow:
        'hsl(206 22% 7% / 35%) 0px 10px 38px -10px hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
      userSelect: 'none',
      animationDuration: '400ms',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      willChange: 'transform, opacity',
      '&[data-state="delayed-open"][data-side="bottom"]': {
        animationName: slideUpAndFade,
      },
      '&[data-state="delayed-open"]&[data-slide="left"]': {
        animationName: slideRightAndFade,
      },
      '&[data-state="delayed-open"]&[data-slide="top"]': {
        animationName: slideDownAndFade,
      },
      '&[data-state="delayed-open"]&[data-slide="right"]': {
        animationName: slideLeftAndFade,
      },
    }),
  };
}
