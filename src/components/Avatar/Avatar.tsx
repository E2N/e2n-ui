import { css, cx } from '@emotion/css';
import { forwardRef, HTMLAttributes } from 'react';
import { colorPalette } from '../../theme';
import defaultImg from './defaultAvatar.png';

type SizeVariants = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ShapeVariants = 'circular' | 'rounded' | 'square';

type CustomProps = {
  /** The URL of the image file to display. */
  imgSrc?: string;
  /** The size of the avatar, in rem (e.g. "1rem") */
  size?: SizeVariants;
  /** The shape of the picture. Use a circle avatar to represent a person. */
  shape?: ShapeVariants;
  /** Use this flag to show a red circle in the top right of the avatar. */
  showNotification?: boolean;
};

const sizeMap: Record<SizeVariants, string> = {
  xs: '1.5rem',
  sm: '2rem',
  md: '2.5rem',
  lg: '3rem',
  xl: '4rem',
};

export type AvatarProps = CustomProps & HTMLAttributes<HTMLDivElement>;

function getAvatarStyles(size: SizeVariants, shape: ShapeVariants) {
  return {
    img: css({
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: '0.3s',
      ':hover': {
        transition: '0.3s',
        transform: 'scale(1.2)',
      },
    }),
    imgWrapper: css({
      width: sizeMap[size],
      height: sizeMap[size],
      overflow: 'hidden',
      borderRadius:
        shape === 'square' ? 'none' : shape === 'rounded' ? 8 : '50%',
      // https://stackoverflow.com/questions/73356087/unexpected-behavior-on-click-hover-focus-on-safari-only-circle-pictures-change
      transform: 'translateZ(0px)',
      ':hover': {
        cursor: 'pointer',
      },
    }),
    notification: css({
      position: 'absolute',
      top: 0,
      right: -4,
      borderRadius: '50%',
      border: `3px solid ${colorPalette.white}`,
      height: `calc(${sizeMap[size]} * 0.25)`,
      width: `calc(${sizeMap[size]} * 0.25)`,
      backgroundColor: colorPalette.errorLight,
    }),
    container: css({
      position: 'relative',
      width: 'fit-content',
    }),
  };
}

/**
 * A react component to display a user's profile picture or initials.
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      imgSrc = defaultImg,
      showNotification,
      shape = 'circular',
      size = 'md',
      ...otherProps
    },
    ref,
  ) => {
    const styles = getAvatarStyles(size, shape);

    return (
      <div ref={ref} className={cx(styles.container, 'avatar-container')}>
        <div className={cx(styles.imgWrapper, 'img-wrapper')} {...otherProps}>
          <img
            className={cx(styles.img, 'avatar-img')}
            onError={(event) => {
              (event.target as HTMLImageElement).src = defaultImg;
            }}
            src={imgSrc === '' || imgSrc === null ? defaultImg : imgSrc}
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
