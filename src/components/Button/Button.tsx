import { css, CSSObject, cx } from '@emotion/css';
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { colorPalette, theme } from '../../theme';

type ButtonFill = 'outline';

type ButtonSize = 'small' | 'medium' | 'large';

type ButtonVariant = 'primary' | 'secondary' | 'error';

type CustomProps = {
  fill?: ButtonFill;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  children?: ReactNode | string;
};

export type ButtonProps = CustomProps & ButtonHTMLAttributes<HTMLButtonElement>;

const backgroundColor: Record<ButtonVariant, string> = {
  primary: colorPalette.primaryMain,
  secondary: colorPalette.grey200,
  error: colorPalette.errorMain,
};

const textColor: Record<ButtonVariant, string> = {
  primary: colorPalette.white,
  secondary: colorPalette.grey500,
  error: colorPalette.white,
};

const borderColor: Record<ButtonVariant, string> = {
  primary: colorPalette.primaryMain,
  secondary: colorPalette.grey200,
  error: colorPalette.errorMain,
};

const hoverColor: Record<ButtonVariant, string> = {
  primary: colorPalette.primaryMain,
  error: colorPalette.errorMain,
  secondary: colorPalette.grey500,
};

export const getButtonStyles = ({
  fill,
  size,
  disabled,
  variant = 'primary',
}: {
  fill?: ButtonFill;
  size?: ButtonSize;
  disabled?: boolean;
  variant?: ButtonVariant;
}) => {
  const variantStyles = getButtonVariantStyles({
    fill,
    disabled,
    variant,
  });

  return {
    button: css({
      backgroundColor: !disabled
        ? backgroundColor[variant]
        : colorPalette.grey200,
      color: !disabled ? textColor[variant] : colorPalette.grey500,
      border: !disabled
        ? `2px solid ${borderColor[variant]}`
        : '2px solid transparent',
      display: 'inline-flex',
      alignItems: 'center',
      width: 'fit-content',
      // height: 'fit-content',
      fontSize: size
        ? size === 'small'
          ? theme.size.sm
          : size === 'medium'
          ? theme.size.md
          : theme.size.lg
        : theme.size.md,
      fontFamily: theme.fontFamily.sansSerif,
      fontWeight: theme.weight.regular,
      padding: '1px 16px',
      lineHeight: theme.lineHeight.lg,
      cursor: !disabled ? 'pointer' : 'not-allowed',
      borderRadius: theme.size.lg,
      transition: '0.3s',
      '&:hover': !disabled
        ? {
            backgroundColor: colorPalette.white,
            color: hoverColor[variant],
          }
        : {},
      ...variantStyles,
    }),
  };
};

function getButtonVariantStyles({
  fill,
  disabled,
  variant = 'primary',
}: {
  fill?: ButtonFill;
  disabled?: boolean;
  variant?: ButtonVariant;
}): CSSObject | undefined {
  if (fill === 'outline') {
    return {
      background: !disabled ? colorPalette.white : colorPalette.grey200,
      color: !disabled ? backgroundColor[variant] : colorPalette.grey500,
      '&:hover': !disabled
        ? {
            backgroundColor: backgroundColor[variant],
            color: textColor[variant],
          }
        : {},
    };
  }
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { fill, className, size, disabled, variant, children, ...otherProps },
    ref,
  ) => {
    const styles = getButtonStyles({ fill, size, disabled, variant });

    return (
      <button
        ref={ref}
        className={cx('e2n-button', styles.button, className)}
        {...otherProps}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
