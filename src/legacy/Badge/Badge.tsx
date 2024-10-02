import { css, cx } from '@emotion/css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, HTMLAttributes, ReactElement } from 'react';
import { colorPalette, theme, typography } from '../../theme';

type BadgeVariants = 'secondary' | 'error' | 'success' | 'info1' | 'warning';

type CustomProps = {
  text?: string | ReactElement;
  icon?: IconDefinition;
  variant?: BadgeVariants;
  backgroundColor?: string;
  textColor?: string;
};

export type BadgeProps = CustomProps & HTMLAttributes<HTMLDivElement>;

const colorStyleMap = {
  secondary: {
    backgroundColor: colorPalette.grey200,
    textColor: colorPalette.grey500,
  },
  error: {
    backgroundColor: colorPalette.errorLighter,
    textColor: colorPalette.errorDark,
  },
  success: {
    backgroundColor: colorPalette.successLighter,
    textColor: colorPalette.successDark,
  },
  info1: {
    backgroundColor: colorPalette.infoLighter,
    textColor: colorPalette.infoDark,
  },
  warning: {
    backgroundColor: colorPalette.warningLighter,
    textColor: colorPalette.warningDark,
  },
};

function getBadgeStyles(
  variant: BadgeVariants,
  backgroundColor: string | undefined,
  textColor: string | undefined,
) {
  return css({
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    ...typography.badge,
    width: 'fit-content',
    height: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    fontFamily: theme.fontFamily.sansSerif,
    whiteSpace: 'nowrap',
    backgroundColor: backgroundColor
      ? backgroundColor
      : colorStyleMap[variant].backgroundColor,
    color: textColor ? textColor : colorStyleMap[variant].textColor,
  });
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      icon,
      text,
      variant = 'secondary',
      backgroundColor,
      textColor,
      className,
      ...otherProps
    },
    ref,
  ) => {
    const badgeStyles = getBadgeStyles(variant, backgroundColor, textColor);

    return (
      <div
        className={cx('e2n-badge', badgeStyles, className)}
        {...otherProps}
        ref={ref}>
        {icon && <FontAwesomeIcon icon={icon} />}
        <span>{text}</span>
      </div>
    );
  },
);

Badge.displayName = 'Badge';
