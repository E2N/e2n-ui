import { cx } from '@emotion/css';
import { AnchorHTMLAttributes, forwardRef } from 'react';
import { getLinkStyles } from './styles';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, ...otherProps }, ref) => {
    const styles = getLinkStyles();
    return (
      <a className={cx(styles, className)} ref={ref} {...otherProps}>
        {children}
      </a>
    );
  },
);

Link.displayName = 'Link';
