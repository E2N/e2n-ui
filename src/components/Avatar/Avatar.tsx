import { css, cx } from '@emotion/css';
import { forwardRef, HTMLAttributes } from 'react';
import { colorPalette, theme } from '../../theme';

type SizeVariants = 'small' | 'medium';

type CustomProps = {
  imgSrc: string;
  showNotification?: boolean;
  disableHover?: boolean;
  size?: SizeVariants;
};

export type AvatarProps = CustomProps & HTMLAttributes<HTMLDivElement>;

function getAvatarStyles(disableHover?: boolean, size?: SizeVariants) {
  return {
    img: css({
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
      transition: !disableHover ? '0.3s' : 'none',
      ':hover': !disableHover
        ? {
            transition: '0.3s',
            transform: 'scale(1.2)',
          }
        : {},
    }),
    imgWrapper: css({
      width: size === 'medium' ? 75 : 50,
      height: size === 'medium' ? 75 : 50,
      overflow: 'hidden',
      borderRadius: '50%',
      // https://stackoverflow.com/questions/73356087/unexpected-behavior-on-click-hover-focus-on-safari-only-circle-pictures-change
      transform: 'translateZ(0px)',
      border: `${theme.spacing.xs} solid transparent`,
      ':hover': !disableHover
        ? {
            cursor: 'pointer',
            border: `${theme.spacing.xs} solid ${colorPalette.grey200}`,
          }
        : {},
    }),
    notification: css({
      position: 'absolute',
      top: 0,
      right: -4,
      borderRadius: '50%',
      border: `3px solid ${colorPalette.white}`,
      height: 15,
      width: 15,
      backgroundColor: colorPalette.errorLight,
    }),
    container: css({
      position: 'relative',
      width: 'fit-content',
    }),
  };
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ imgSrc, showNotification, disableHover, size, ...otherProps }, ref) => {
    const styles = getAvatarStyles(disableHover, size);

    return (
      <div ref={ref} className={cx(styles.container, 'avatar-container')}>
        <div className={cx(styles.imgWrapper, 'img-wrapper')} {...otherProps}>
          <img
            className={cx(styles.img, 'avatar-img')}
            src={imgSrc}
            alt="avatar"
          />
        </div>
        {showNotification && (
          <div className={cx(styles.notification, 'notification')} />
        )}
      </div>
    );
  },
);

Avatar.displayName = 'Avatar';
