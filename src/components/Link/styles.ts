import { css } from '@emotion/css';
import { colorPalette, theme } from '../../theme';

export function getLinkStyles() {
  return css({
    color: colorPalette.primaryDarker,
    fontWeight: theme.weight.regular,
    fontFamily: theme.fontFamily.sansSerif,
    transition: '0.6s',
    ':hover': {
      color: colorPalette.primaryMain,
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  });
}
