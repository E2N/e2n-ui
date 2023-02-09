import { css, cx } from '@emotion/css';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { colorPalette, theme } from '../../theme';

type CustomProps = {
  icon: IconDefinition;
  className?: string;
  spin?: boolean;
  size?: SizeProp;
};

export type IconButtonProps = CustomProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

function getIconButtonStyles(disabled?: boolean) {
  return css({
    background: 'none',
    border: 'none',
    color: !disabled ? colorPalette.primaryDarker : colorPalette.grey200,
    fontWeight: theme.weight.bold,
    padding: '4px 8px',
    transition: '0.3s',
    cursor: !disabled ? 'pointer' : 'not-allowed',
    ':hover': {
      color: !disabled ? colorPalette.grey500 : colorPalette.grey200,
    },
  });
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className, spin, size, disabled, ...otherProps }, ref) => {
    const textButtonStyles = getIconButtonStyles(disabled);

    return (
      <button
        ref={ref}
        {...otherProps}
        className={cx('e2n-icon-button', textButtonStyles, className)}>
        <FontAwesomeIcon icon={icon} spin={spin} size={size} />
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';
