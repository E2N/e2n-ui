import { css, cx } from '@emotion/css';
import { Theme, lightTheme, spacingMap } from '../../theme';
import { NavigationProps } from './types';
import { MenuItemsContainer } from './components';
import { ThemeProvider } from './theme';

function getStyles(theme: Theme) {
  return {
    container: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 64,
      backgroundColor: theme.background.default,
      color: theme.text.primary,
      boxShadow: theme.shadow.card,
      paddingRight: spacingMap.md,
      paddingLeft: spacingMap.md,
    }),
    leftStyles: css({
      display: 'flex',
      alignItems: 'center',
      gap: spacingMap.md,
      height: 'inherit',
    }),
    rightStyles: css({
      display: 'flex',
      alignItems: 'center',
      height: 'inherit',
      gap: spacingMap.md,
    }),
  };
}

/**
 * Renders a basic top level navigation with a left slot and a right slots for various elements.
 * On the left side an optional Home component and menu items are displayed. On the right side you can pass
 * a component for Settings and Profile.
 */
export function Navigation({
  label,
  menuItems = [],
  renderHome: Home,
  renderProfile: Profile,
  renderSettings: Settings,
  theme = lightTheme,
  className,
}: NavigationProps) {
  const styles = getStyles(theme);

  return (
    <ThemeProvider value={theme}>
      <header
        data-testid="navigation-container"
        className={cx(styles.container, 'navigation-container', className)}
      >
        <nav
          aria-label={label}
          className={cx(styles.leftStyles, 'navigation-left-styles')}
        >
          {Home && <Home />}
          <MenuItemsContainer items={menuItems} />
        </nav>
        <div className={cx(styles.rightStyles, 'navigation-right-styles')}>
          {Settings && <Settings />}
          {Profile && <Profile />}
        </div>
      </header>
    </ThemeProvider>
  );
}
