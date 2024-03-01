import { CSSObject } from '@emotion/css';
import { colorPalette } from '../../theme';

export function getFocusAndHoverStyles(
  isValid?: boolean,
  disabled?: boolean,
): CSSObject {
  return disabled
    ? {
        ':focus-visible': {
          outline: 'none',
        },
        ':hover': {
          cursor: disabled ? 'not-allowed' : 'default',
        },
      }
    : {
        ':focus, :hover': {
          border: `1px solid ${
            isValid ? colorPalette.grey500 : colorPalette.errorLight
          }`,
          '& .input-adornment': {
            color: isValid ? colorPalette.primaryMain : colorPalette.errorMain,
          },
        },
        ':focus-visible': {
          border: `1px solid ${
            isValid ? colorPalette.grey500 : colorPalette.errorLight
          }`,
          outline: 'none',
        },
        ':focus-within': {
          border: `1px solid ${
            isValid ? colorPalette.grey500 : colorPalette.errorLight
          }`,
          input: {
            border: 'none',
            ':focus-visible': {
              outline: 'none',
            },
          },
          '& .input-adornment': {
            color: isValid ? colorPalette.primaryMain : colorPalette.errorMain,
          },
        },
      };
}
