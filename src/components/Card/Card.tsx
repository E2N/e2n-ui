import { css, cx } from '@emotion/css';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { colorPalette, shadow, theme } from '../../theme';

type CustomProps = {
  header?: ReactNode;
  content?: ReactNode;
};

type CardProps = CustomProps & Omit<HTMLAttributes<HTMLDivElement>, 'content'>;

function getCardStyles() {
  return css({
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    backgroundColor: colorPalette.white,
    fontFamily: theme.fontFamily.sansSerif,
    boxShadow: shadow.card,
    border: `1px solid ${colorPalette.greyTransparent12}`,
  });
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ content, header, className, ...otherProps }, ref) => {
    const styles = getCardStyles();

    return (
      <div
        ref={ref}
        className={cx('e2n-card', styles, className)}
        {...otherProps}>
        <div>{header}</div>
        <div className={cx(css({ overflow: 'auto' }))}>{content}</div>
      </div>
    );
  },
);

Card.displayName = 'Card';
