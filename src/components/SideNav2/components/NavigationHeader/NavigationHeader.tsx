import { css, cx } from '@emotion/css';
import { ReactNode } from 'react';
import { Theme, theme as e2nTheme } from '../../../../theme';
import { useAtom, useAtomValue } from 'jotai';
import {
  defaultWidth,
  isCollapsed as isCollapsedAtom,
  minimalWidth,
  sidenavSize as sidenavSizeAtom,
  theme as themeValue,
} from '../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export type NavigationHeaderProps = {
  children: ReactNode;
};

function getStyles(isCollapsed: boolean, theme: Theme) {
  return {
    container: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: e2nTheme.spacing.md,
      color: theme.text.secondary,
    }),
    item: css({
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }),
    toggleIcon: css({
      padding: e2nTheme.spacing.sm,
      borderRadius: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      ':hover': { cursor: 'pointer', backgroundColor: theme.background.paper },
      svg: isCollapsed
        ? { transform: 'rotate(180deg)', transition: '300ms' }
        : { transform: 'rotate(0)', transition: '300ms' },
    }),
  };
}

export function NavigationHeader({ children }: NavigationHeaderProps) {
  const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom);
  const theme = useAtomValue(themeValue);
  const styles = getStyles(isCollapsed, theme);
  const [sidenavSize, setSidenavSize] = useAtom(sidenavSizeAtom);

  return (
    <div className={cx(styles.container, 'e2n-side-nav-header')}>
      <div className={cx(styles.item, 'e2n-side-nav-header-item')}>
        {children}
      </div>
      <div
        className={cx(styles.toggleIcon, 'e2n-side-nav-header-toggle')}
        onClick={() => {
          setIsCollapsed(!isCollapsed);
          setSidenavSize({
            ...sidenavSize,
            width: !isCollapsed ? minimalWidth : defaultWidth,
          });
        }}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    </div>
  );
}
