import { cx, css } from '@emotion/css';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { Theme, theme as e2nTheme, lightTheme, typography } from '../../theme';

type CustomProps = {
  children: ReactNode;
  variant?: 'primaryMain';
  theme?: Theme;
};

export type HeadingProps = CustomProps & HTMLAttributes<HTMLHeadingElement>;

function getHeadingStyles(theme: Theme) {
  return css({
    fontFamily: e2nTheme.fontFamily.sansSerif,
    color: theme.text.primary,
  });
}

export const H1 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, theme = lightTheme }, ref) => {
    const headingStyles = getHeadingStyles(theme);

    return (
      <h1
        ref={ref}
        className={cx(
          'e2n-heading-h1',
          headingStyles,
          css({ ...typography.header1 }),
          className,
        )}
      >
        {children}
      </h1>
    );
  },
);

H1.displayName = 'H1';

export const H2 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, theme = lightTheme }, ref) => {
    const headingStyles = getHeadingStyles(theme);

    return (
      <h2
        ref={ref}
        className={cx(
          'e2n-heading-h2',
          headingStyles,
          css({ ...typography.header2 }),
          className,
        )}
      >
        {children}
      </h2>
    );
  },
);

H2.displayName = 'H2';

export const H3 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, theme = lightTheme, ...otherProps }, ref) => {
    const headingStyles = getHeadingStyles(theme);

    return (
      <h3
        ref={ref}
        className={cx(
          'e2n-heading-h3',
          headingStyles,
          css({ ...typography.header3 }),
          className,
        )}
        {...otherProps}
      >
        {children}
      </h3>
    );
  },
);

H3.displayName = 'H3';

export const H4 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, theme = lightTheme }, ref) => {
    const headingStyles = getHeadingStyles(theme);

    return (
      <h4
        ref={ref}
        className={cx(
          'e2n-heading-h4',
          headingStyles,
          css({ ...typography.header4 }),
          className,
        )}
      >
        {children}
      </h4>
    );
  },
);

H4.displayName = 'H4';

export const H5 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, theme = lightTheme }, ref) => {
    const headingStyles = getHeadingStyles(theme);

    return (
      <h5
        ref={ref}
        className={cx(
          'e2n-heading-h5',
          headingStyles,
          css({ ...typography.header5 }),
          className,
        )}
      >
        {children}
      </h5>
    );
  },
);

H5.displayName = 'H5';

export const H6 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, theme = lightTheme }, ref) => {
    const headingStyles = getHeadingStyles(theme);

    return (
      <h6
        ref={ref}
        className={cx(
          'e2n-heading-h6',
          headingStyles,
          css({ ...typography.header6 }),
          className,
        )}
      >
        {children}
      </h6>
    );
  },
);

H6.displayName = 'H6';
