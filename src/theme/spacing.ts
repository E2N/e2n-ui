export type Spacing = 'xs' | 'sm' | 'md' | 'xl' | 'xxl';

// TO DO: Einheiten der SpacingMap sollten eigentlich via Tokens von Figma kommen
export const spacingMap: Record<Spacing, string> = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  xl: '1.25rem',
  xxl: '1.5rem',
};
