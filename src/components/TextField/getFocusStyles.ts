import { CSSObject } from '@emotion/css';
import chroma from 'chroma-js';
import { colorPalette } from '../../theme';

export function getFocusStyles(
  isValid?: boolean,
  disabled?: boolean,
): CSSObject {
  return disabled
    ? {
        ':focus-visible': {
          outline: 'none',
        },
      }
    : {
        ':focus': {
          boxShadow: `0px 0px 0px 4px ${
            isValid
              ? colorPalette.grey200
              : chroma(colorPalette.errorLight).luminance(0.8).hex()
          }`,
          border: `2px solid ${
            isValid ? colorPalette.grey500 : colorPalette.errorLight
          }`,
        },
        ':focus-visible': {
          border: `2px solid ${
            isValid ? colorPalette.grey500 : colorPalette.errorLight
          }`,
          outline: 'none',
          boxShadow: `0px 0px 0px 4px ${
            isValid
              ? colorPalette.grey200
              : chroma(colorPalette.errorLight).luminance(0.8).hex()
          }`,
        },
      };
}
