import { Theme } from './types';
import '../main.scss';

const SPACING_BASE = 8;

export const theme: Theme = {
  fontFamily: {
    sansSerif: 'PublicSans',
  },
  size: {
    base: '14px',
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '18px',
    subtitle2: '14px',
  },
  weight: {
    regular: 400,
    semibold: 600,
    bold: 700,
    extraBold: 800,
  },
  lineHeight: {
    xs: 1,
    sm: 1.1,
    md: 1.5,
    lg: 2,
    subtitle2: '22px',
  },
  link: {
    decoration: 'none',
    hoverDecoration: 'none',
  },
  spacing: {
    base: SPACING_BASE,
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    full: '9999px',
  },
};
