import { cx, css } from '@emotion/css';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { colorPalette, theme } from '../../theme';

type CustomProps = {
  children: ReactNode;
  variant?: 'primaryMain';
};

export type HeadingProps = CustomProps & HTMLAttributes<HTMLHeadingElement>;

function getHeadingStyles(variant?: string) {
  return css({
    fontFamily: theme.fontFamily.sansSerif,
    color:
      variant === 'primaryMain'
        ? colorPalette.primaryMain
        : colorPalette.primaryDarker,
  });
}

export const H1 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, variant, className }, ref) => {
    const headingStyles = getHeadingStyles(variant);

    return (
      <div
        ref={ref}
        className={cx(
          'e2n-heading-h1',
          headingStyles,
          css({ fontSize: theme.heading.h1, fontWeight: theme.weight.bold }),
          className,
        )}>
        {children}
      </div>
    );
  },
);

H1.displayName = 'H1';

export const H2 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, variant, className }, ref) => {
    const headingStyles = getHeadingStyles(variant);

    return (
      <div
        ref={ref}
        className={cx(
          'e2n-heading-h2',
          headingStyles,
          css({ fontSize: theme.heading.h2, fontWeight: theme.weight.bold }),
          className,
        )}>
        {children}
      </div>
    );
  },
);

H2.displayName = 'H2';

export const H3 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, variant, className }, ref) => {
    const headingStyles = getHeadingStyles(variant);

    return (
      <div
        ref={ref}
        className={cx(
          'e2n-heading-h3',
          headingStyles,
          css({ fontSize: theme.heading.h3, fontWeight: theme.weight.bold }),
          className,
        )}>
        {children}
      </div>
    );
  },
);

H3.displayName = 'H3';

export const H4 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, variant, className }, ref) => {
    const headingStyles = getHeadingStyles(variant);

    return (
      <div
        ref={ref}
        className={cx(
          'e2n-heading-h4',
          headingStyles,
          css({ fontSize: theme.heading.h4, fontWeight: theme.weight.bold }),
          className,
        )}>
        {children}
      </div>
    );
  },
);

H4.displayName = 'H4';

export const H5 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, variant, className }, ref) => {
    const headingStyles = getHeadingStyles(variant);

    return (
      <div
        ref={ref}
        className={cx(
          'e2n-heading-h5',
          headingStyles,
          css({ fontSize: theme.heading.h5, fontWeight: theme.weight.bold }),
          className,
        )}>
        {children}
      </div>
    );
  },
);

H5.displayName = 'H5';

export const H6 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, variant, className }, ref) => {
    const headingStyles = getHeadingStyles(variant);

    return (
      <div
        ref={ref}
        className={cx(
          'e2n-heading-h6',
          headingStyles,
          css({ fontSize: theme.heading.h6, fontWeight: theme.weight.bold }),
          className,
        )}>
        {children}
      </div>
    );
  },
);

H6.displayName = 'H6';
