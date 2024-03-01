import { To } from 'react-router-dom';
import { NavItem } from './NavItem';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from 'react';
import { css, cx } from '@emotion/css';
import { colorPalette, theme } from '../../theme';

export interface SideNavItem {
  name: string;
  icon?: IconDefinition;
  children?: ReactRouterSideNavItem[] | LinkSideNavItem[];
}

export interface ReactRouterSideNavItem extends SideNavItem {
  to: To;
}

export interface LinkSideNavItem extends SideNavItem {
  href: string;
}

type CustomProps = {
  sideNavItems: ReactRouterSideNavItem[] | LinkSideNavItem[];
  header?: ReactNode;
};

export type SideNavProps = CustomProps &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

function getStyles() {
  return {
    wrapper: css({
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.lg,
      padding: theme.spacing.md,
      minWidth: 260,
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflow: 'auto',
      backgroundColor: colorPalette.grey100,
    }),
    header: css({
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'baseline',
      gap: theme.spacing.sm,
      marginLeft: theme.spacing.md,
    }),
    content: css({
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.md,
    }),
  };
}

export function SideNav({
  sideNavItems,
  header,
  className,
  ...otherProps
}: SideNavProps) {
  const styles = getStyles();

  return (
    <nav className={cx(styles.wrapper, className)} {...otherProps}>
      {header && <div className={cx(styles.header)}>{header}</div>}
      <div className={cx(styles.content)}>
        {sideNavItems.map((item, index) => {
          return <NavItem key={index} item={item} />;
        })}
      </div>
    </nav>
  );
}
