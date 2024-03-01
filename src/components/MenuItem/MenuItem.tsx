import { css, cx } from '@emotion/css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, HTMLAttributes } from 'react';
import { colorPalette, theme } from '../../theme';

type CustomProps = {
  label: string;
  icon?: IconProp;
};

function getStyles() {
  return {
    wrapper: css({
      fontFamily: theme.fontFamily.sansSerif,
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing.sm,
      ':hover, :focus, :active': {
        color: colorPalette.grey500,
        cursor: 'pointer',
        span: {
          color: colorPalette.grey500,
          cursor: 'pointer',
        },
      },
    }),
    label: css({
      fontWeight: theme.weight.bold,
      color: colorPalette.primaryDarker,
    }),
  };
}

export type MenuItemProps = CustomProps & HTMLAttributes<HTMLDivElement>;

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  ({ label, icon, ...otherProps }, ref) => {
    const styles = getStyles();
    return (
      <div ref={ref} className={cx(styles.wrapper)} {...otherProps}>
        {icon && <FontAwesomeIcon icon={icon} />}
        <span className={cx(styles.label)}>{label}</span>
      </div>
    );
  },
);

MenuItem.displayName = 'MenuItem';
