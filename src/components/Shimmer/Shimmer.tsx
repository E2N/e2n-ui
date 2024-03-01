import { css, cx, keyframes } from '@emotion/css';
import { colorPalette } from '../..';

const animation = keyframes({
  '0%': {
    backgroundPosition: '-468px 0',
  },
  '100%': {
    backgroundPosition: '468px 0',
  },
});

export function Shimmer() {
  const styles = {
    container: css({
      width: 300,
      height: 44,
      borderRadius: 8,
    }),
    shimmer: css({
      background: colorPalette.grey100,
      display: 'inline-block',
      backgroundImage: `linear-gradient(to right,${colorPalette.grey100} 40%,${colorPalette.grey200} 50%,${colorPalette.grey100} 60%)`,
      backgroundSize: '800px 104px',
      backgroundRepeat: 'no-repeat',
      animation: `${animation} 2s infinite linear`,
    }),
  };

  return <div className={cx(styles.container, styles.shimmer)} />;
}
