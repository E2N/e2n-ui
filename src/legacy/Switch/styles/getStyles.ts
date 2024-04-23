import { css, keyframes } from '@emotion/css';
import { colorPalette, typography } from '../../../theme';
import { SwitchSize, SwitchVariants } from '../types';
import { useMemo } from 'react';

const variantStyleMap: Record<
  SwitchVariants,
  { backgroundColor: string; boxShadowColor: string; disabledColor: string }
> = {
  default: {
    backgroundColor: colorPalette.greyTransparent48,
    boxShadowColor: colorPalette.greyTransparent12,
    disabledColor: colorPalette.greyTransparent32,
  },
  primary: {
    backgroundColor: colorPalette.primaryMain,
    boxShadowColor: colorPalette.primaryTransparent12,
    disabledColor: colorPalette.primaryTransparent48,
  },
  secondary: {
    backgroundColor: colorPalette.secondaryMain,
    boxShadowColor: colorPalette.secondaryTransparent12,
    disabledColor: colorPalette.secondaryTransparent48,
  },
  info: {
    backgroundColor: colorPalette.infoMain,
    boxShadowColor: colorPalette.infoTransparent12,
    disabledColor: colorPalette.infoTransparent48,
  },
  success: {
    backgroundColor: colorPalette.successMain,
    boxShadowColor: colorPalette.successTransparent12,
    disabledColor: colorPalette.successTransparent48,
  },
  warning: {
    backgroundColor: colorPalette.warningMain,
    boxShadowColor: colorPalette.warningTransparent12,
    disabledColor: colorPalette.warningTransparent48,
  },
  error: {
    backgroundColor: colorPalette.errorMain,
    boxShadowColor: colorPalette.errorTransparent12,
    disabledColor: colorPalette.errorTransparent48,
  },
};

const sizeMap: Record<
  SwitchSize,
  {
    thumbSize: string;
    boxShadowSize: string;
    rootContainerSize: { width: string; height: string };
    initalTransform: string;
    transformChecked: string;
    transformUnchecked: string;
    animation: {
      transform: string;
      thumbWidth: string;
      thumbHeight: string;
    };
  }
> = {
  medium: {
    thumbSize: '0.875rem',
    boxShadowSize: '0.625rem',
    rootContainerSize: {
      width: '2.063rem',
      height: '1.25rem',
    },
    initalTransform: 'translateX(0.188rem)',
    transformChecked: 'translateX(0.938rem)',
    transformUnchecked: 'translateX(0.188rem)',
    animation: {
      transform: 'translateX(0.563rem)',
      thumbHeight: '0.75rem',
      thumbWidth: '1.375rem',
    },
  },
  small: {
    thumbSize: '0.625rem',
    boxShadowSize: '0.5rem',
    rootContainerSize: {
      width: '1.563rem',
      height: '1rem',
    },
    initalTransform: 'translateX(0.188rem)',
    transformChecked: 'translateX(0.75rem)',
    transformUnchecked: 'translateX(0.188rem)',
    animation: {
      transform: 'translateX(0.438px)',
      thumbHeight: '0.625rem',
      thumbWidth: '0.875rem',
    },
  },
};

export function getStyles(
  variant: SwitchVariants,
  size: SwitchSize,
  disabled: boolean,
) {
  const animation = useMemo(
    () =>
      keyframes({
        '0%': {
          transform: sizeMap[size].transformUnchecked,
          width: sizeMap[size].thumbSize,
          height: sizeMap[size].thumbSize,
        },
        '50%': {
          transform: sizeMap[size].initalTransform,
          width: sizeMap[size].animation.thumbWidth,
          height: sizeMap[size].animation.thumbHeight,
        },
        '100%': {
          width: sizeMap[size].thumbSize,
          height: sizeMap[size].thumbSize,
          transform: sizeMap[size].transformChecked,
        },
      }),
    [size],
  );

  const animationReverse = useMemo(
    () =>
      keyframes({
        '0%': {
          transform: sizeMap[size].transformChecked,
          width: sizeMap[size].thumbSize,
          height: sizeMap[size].thumbSize,
        },
        '50%': {
          transform: sizeMap[size].initalTransform,
          width: sizeMap[size].animation.thumbWidth,
          height: sizeMap[size].animation.thumbHeight,
        },
        '100%': {
          width: sizeMap[size].thumbSize,
          height: sizeMap[size].thumbSize,
          transform: sizeMap[size].transformUnchecked,
        },
      }),
    [size],
  );

  return {
    button: css({ all: 'unset' }),
    container: css({
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    }),
    label:
      size === 'small'
        ? css({ ...typography.subtitle2 })
        : css({ ...typography.subtitle1 }),
    root: css({
      width: sizeMap[size].rootContainerSize.width,
      height: sizeMap[size].rootContainerSize.height,
      backgroundColor: !disabled
        ? variantStyleMap[variant].backgroundColor
        : variantStyleMap[variant].disabledColor,
      borderRadius: 9999,
      position: 'relative',
      ':focus': !disabled
        ? {
            '& .switch-thumb': {
              boxShadow: `0 0 0 ${sizeMap[size].boxShadowSize} ${variantStyleMap[variant].boxShadowColor}`,
            },
          }
        : {},
      ':hover': !disabled
        ? {
            cursor: 'pointer',
            '& .switch-thumb': {
              boxShadow: `0 0 0 ${sizeMap[size].boxShadowSize} ${variantStyleMap[variant].boxShadowColor}`,
            },
          }
        : { cursor: 'not-allowed' },
    }),
    thumb: css({
      display: 'block',
      width: sizeMap[size].thumbSize,
      height: sizeMap[size].thumbSize,
      backgroundColor: colorPalette.grey100,
      borderRadius: 9999,
      transform: sizeMap[size].initalTransform,
      willChange: 'transform',
      '&.animation-checked': {
        animation: `${animation} 200ms linear`,
      },
      '&.animation-unchecked': {
        animation: `${animationReverse} 200ms linear`,
      },
      '&[data-state="checked"]': {
        transform: sizeMap[size].transformChecked,
      },
      '&[data-state="unchecked"]': {
        transform: sizeMap[size].transformUnchecked,
      },
    }),
  };
}
