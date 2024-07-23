import { css, CSSObject, cx } from '@emotion/css';
import { forwardRef } from 'react';
import {
  colorPalette,
  lightTheme,
  theme as e2nTheme,
  Theme,
} from '../../theme';
import { ButtonVariant, ButtonFill, ButtonSize, ButtonProps } from './types';

const backgroundColor: Record<ButtonVariant, string> = {
  grey: colorPalette.grey300,
  primary: colorPalette.primaryMain,
  secondary: colorPalette.secondaryMain,
  info: colorPalette.infoMain,
  success: colorPalette.successMain,
  warning: colorPalette.warningMain,
  error: colorPalette.errorMain,
};

const textColor: Record<ButtonVariant, string> = {
  grey: colorPalette.textLightPrimary,
  primary: colorPalette.textDarkPrimary,
  secondary: colorPalette.textDarkPrimary,
  info: colorPalette.textDarkPrimary,
  success: colorPalette.textDarkPrimary,
  warning: colorPalette.textDarkPrimary,
  error: colorPalette.textDarkPrimary,
};

const borderColor: Record<ButtonVariant, string> = {
  grey: colorPalette.grey300,
  primary: colorPalette.primaryMain,
  secondary: colorPalette.secondaryMain,
  info: colorPalette.infoMain,
  success: colorPalette.successMain,
  warning: colorPalette.warningMain,
  error: colorPalette.errorMain,
};

const hoverColor: Record<ButtonVariant, string> = {
  grey: colorPalette.grey400,
  primary: colorPalette.primaryDark,
  secondary: colorPalette.secondaryDark,
  info: colorPalette.infoDark,
  success: colorPalette.successDark,
  warning: colorPalette.warningDark,
  error: colorPalette.errorDark,
};

const softHoverColor: Record<ButtonVariant, string> = {
  grey: colorPalette.greyTransparent8,
  primary: colorPalette.primaryTransparent8,
  secondary: colorPalette.secondaryTransparent8,
  info: colorPalette.infoTransparent8,
  success: colorPalette.successTransparent8,
  warning: colorPalette.warningTransparent8,
  error: colorPalette.errorTransparent8,
};

export const getButtonStyles = ({
  fill,
  size,
  disabled,
  variant = 'primary',
  theme,
  stretch,
}: {
  fill?: ButtonFill;
  size?: ButtonSize;
  disabled?: boolean;
  variant?: ButtonVariant;
  theme?: Theme;
  stretch?: boolean;
}) => {
  const variantStyles = getButtonVariantStyles({
    fill,
    disabled,
    variant,
    theme,
  });
  const buttonSizeStyles = getButtonSizeStyles({
    size,
  });

  return {
    button: css({
      backgroundColor: !disabled
        ? backgroundColor[variant]
        : colorPalette.grey200,
      color: !disabled ? textColor[variant] : colorPalette.grey400,
      border: !disabled
        ? `1px solid ${borderColor[variant]}`
        : '1px solid transparent',
      display: 'inline-flex',
      alignItems: 'center',
      width: !stretch ? 'fit-content' : '100%',
      justifyContent: stretch ? 'center' : 'unset',
      fontSize: '14px',
      fontFamily: e2nTheme.fontFamily.sansSerif,
      fontWeight: e2nTheme.weight.bold,
      padding: '6px 16px',
      lineHeight: '24px',
      cursor: !disabled ? 'pointer' : 'not-allowed',
      borderRadius: e2nTheme.borderRadius.sm,
      transition: '0.3s',
      whiteSpace: 'nowrap',
      '&:hover': !disabled
        ? {
            backgroundColor: hoverColor[variant],
            borderColor: hoverColor[variant],
            color: textColor[variant],
          }
        : {},
      ...variantStyles,
      ...buttonSizeStyles,
    }),
  };
};

function getButtonVariantStyles({
  fill,
  disabled,
  variant = 'primary',
  theme,
}: {
  fill?: ButtonFill;
  disabled?: boolean;
  variant?: ButtonVariant;
  theme?: Theme;
}): CSSObject | undefined {
  if (fill === 'outline') {
    return {
      background: !disabled ? 'transparent' : colorPalette.grey200,
      color: !disabled ? backgroundColor[variant] : colorPalette.grey400,
      '&:hover': !disabled
        ? {
            backgroundColor: backgroundColor[variant],
            color: textColor[variant],
          }
        : {},
    };
  } else if (fill === 'text') {
    return {
      background: 'none',
      border: 'none',
      color: !disabled
        ? variant === 'grey'
          ? theme?.text.primary
          : backgroundColor[variant]
        : colorPalette.grey400,
      '&:hover': !disabled
        ? {
            backgroundColor: softHoverColor[variant],
          }
        : {},
    };
  }
}

function getButtonSizeStyles({ size }: { size?: string }) {
  if (size === 'small') {
    return {
      fontSize: '13px',
      lineHeight: '22px',
      padding: '4px 10px',
    };
  }
  if (size === 'large') {
    return {
      fontSize: '15px',
      lineHeight: '26px',
      padding: '11px 22px',
    };
  }
}

/**
 * @deprecated
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      fill,
      className,
      size,
      disabled,
      variant,
      children,
      theme = lightTheme,
      stretch,
      ...otherProps
    },
    ref,
  ) => {
    const styles = getButtonStyles({
      fill,
      size,
      disabled,
      variant,
      theme,
      stretch,
    });

    return (
      <button
        data-testid="button-container"
        ref={ref}
        className={cx('e2n-button', styles.button, className)}
        disabled={disabled}
        {...otherProps}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
