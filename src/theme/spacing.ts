export type Spacing = 'xxs' | 'xs' | 'sm' | 'md' | 'xl' | 'xxl';

// TO DO: Einheiten der SpacingMap sollten eigentlich via Tokens von Figma kommen
export const spacingMap: Record<Spacing, string> = {
  xxs: '0.125rem',
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  xl: '1.25rem',
  xxl: '1.5rem',
};
