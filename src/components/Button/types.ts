export type Size = 'default' | 'sm' | 'lg' | 'icon';

export type Variant =
  | 'default'
  | 'secondary'
  | 'outline'
  | 'destructive'
  | 'ghost'
  | 'link';

export type ButtonVariant = {
  variant: Record<Variant, string>;
  size: Record<Size, string>;
};
