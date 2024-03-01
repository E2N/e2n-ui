import { css, keyframes } from '@emotion/css';
import { colorPalette } from '../..';

const animation = keyframes({
  '0%': {
    backgroundPosition: '-100% 0',
  },
  '100%': {
    backgroundPosition: '100% 0',
  },
});

export const shimmerClass = css({
  animationName: `${animation}`,
  animationDuration: '1.0s',
  animationFillMode: 'forwards',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  background: `linear-gradient(to right, ${colorPalette.grey100} 8%, ${colorPalette.grey200} 38%, ${colorPalette.grey100} 54%)`,
  backgroundSize: '200% 100%',
});
