import { css, cx } from '@emotion/css';
import { Theme, lightTheme, spacingMap } from '../../theme';
import { SideNavProps } from './types';
import { Rnd } from 'react-rnd';
import { useAtom } from 'jotai';
import {
  minimalWidth,
  sidenavSize as sideNavSizeAtom,
  isCollapsed as isCollapsedAtom,
  defaultWidth,
} from './store';
import { SidenavItemsContainer } from './components/SidenavItemsContainer';

function getStyles(
  theme: Theme,
  isDraggable: boolean,
  width?: number,
  isCollapsable?: boolean,
) {
  return {
    sidenavContainer: css({
      overflow: 'hidden',
      backgroundColor: theme.sideNav.background,
      width: width ? width : 'auto',
      color: theme.text.primary,
      padding: `${spacingMap.xxl} ${spacingMap.md}`,
      boxSizing: 'border-box',
      ':hover': {
        '.resize-handle > div': {
          backgroundColor: isDraggable ? theme.actionState.hover : 'unset',
        },
        '.e2n-side-nav-header-toggle': {
          opacity: isCollapsable ? 1 : 0,
        },
      },
    }),
    collapsableIndicator: css({
      opacity: 0,
    }),
    content: css({
      display: 'flex',
      flexDirection: 'column',
      gap: spacingMap.md,
    }),
  };
}

export function SideNav({
  label,
  isDraggable = false,
  theme = lightTheme,
  renderHeader: Header,
  renderFooter: Footer,
  sidenavItems = [],
  isCollapsable = false,
}: SideNavProps) {
  const [sidenavSize, setSidenavSize] = useAtom(sideNavSizeAtom);
  const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom);
  const width = isCollapsed ? minimalWidth : defaultWidth;
  const styles = getStyles(theme, isDraggable, getWidth(width), isCollapsable);

  function getWidth(width: string) {
    const [number] = width.split('px');
    return parseInt(number);
  }

  function Content() {
    return (
      <>
        {Header && <Header />}
        <SidenavItemsContainer items={sidenavItems} />
        {Footer && <Footer />}
      </>
    );
  }

  return isDraggable ? (
    <Rnd
      style={{ position: 'unset' }}
      className={cx('sidenav-container', styles.sidenavContainer)}
      position={{ x: 0, y: 0 }}
      enableResizing={{ right: true }}
      disableDragging
      resizeHandleWrapperClass="resize-handle"
      onResizeStart={(_, _2, refToElement) => {
        refToElement.style.transition = '';
      }}
      minWidth={minimalWidth}
      onResizeStop={(_, _2, ref) => {
        const width = getWidth(ref.style.width);
        ref.style.transition = 'width 300ms ease';
        setIsCollapsed(width < 200 ? true : false);
        setSidenavSize({
          width: width < 200 ? minimalWidth : ref.style.width,
          height: ref.style.height,
        });
      }}
      size={{ width: sidenavSize.width, height: sidenavSize.height }}
    >
      <nav
        className={cx(styles.content, css({ height: '100%' }))}
        aria-label={label}
      >
        <Content />
      </nav>
    </Rnd>
  ) : (
    <nav
      className={cx(
        styles.sidenavContainer,
        styles.content,
        'sidenav-container',
      )}
      aria-label={label}
    >
      <Content />
    </nav>
  );
}
