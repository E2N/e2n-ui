import { css, cx } from '@emotion/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  spacingMap,
  theme as e2nTheme,
  typography,
  Theme,
} from '../../../../theme';
import { useTheme } from '../../theme';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

type HomeItemContainerProps = {
  /** The URL to link to. */
  href: string;
  /** The name of the location. */
  title?: string;
};

function getStyles(theme: Theme) {
  return css({
    display: 'flex',
    gap: spacingMap.xs,
    padding: spacingMap.xs,
    alignItems: 'center',
    border: 0,
    borderRadius: e2nTheme.borderRadius.xs,
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.text.secondary,
    transition: '0.3s',
    ...typography.navItem,
    ':hover': {
      backgroundColor: theme.actionState.hover,
      color: theme.text.primary,
    },
  });
}

export function HomeItemContainer({ href, title }: HomeItemContainerProps) {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <a
      data-testid="navigation-home-container"
      className={cx(styles, 'navigation-home-container')}
      href={href}>
      <FontAwesomeIcon icon={faLocationDot} />
      {title}
    </a>
  );
}
