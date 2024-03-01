import { css } from '@emotion/css';
import { colorPalette, theme } from '../../theme';

export function getLinkStyles() {
  return css({
    color: colorPalette.textLightPrimary,
    fontWeight: theme.weight.bold,
    fontFamily: theme.fontFamily.sansSerif,
    fontSize: '0.8125rem',
    fontStyle: 'normal',
    lineHeight: '1.375rem',
    textUnderlineOffset: '0.25rem',
    textDecoration: 'underline',
    transition: '0.6s',
    ':hover': {
      color: colorPalette.primaryMain,
      cursor: 'pointer',
    },
  });
}
