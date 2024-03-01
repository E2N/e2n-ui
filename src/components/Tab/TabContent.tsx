import { cx, css } from '@emotion/css';
import { HTMLAttributes, ReactNode } from 'react';
import { theme } from '../../theme/default';

type CustomProps = {
  children: ReactNode;
};

type TabContentProps = CustomProps & HTMLAttributes<HTMLDivElement>;

function getTabContentStyles() {
  return css({
    fontFamily: theme.fontFamily.sansSerif,
  });
}

export function TabContent({
  children,
  className,
  ...otherProps
}: TabContentProps) {
  const styles = getTabContentStyles();
  return (
    <div className={cx('tab-content', styles, className)} {...otherProps}>
      {children}
    </div>
  );
}
