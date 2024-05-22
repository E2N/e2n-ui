import { css, cx } from '@emotion/css';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import { Button } from '..';
import { colorPalette, theme } from '../../theme';
import { H3 } from '../Headings';
import './drawer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type DrawerProps = {
  isOpen?: boolean;
  header: string;
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
  position?: 'left' | 'right';
  enableDismiss?: boolean;
  footer?: React.ReactNode;
};

function getDrawerStyles({ position }: { position?: string }) {
  return {
    drawerContainer: css({
      background: ' #fff',
      width: '30%',
      height: '100%',
      overflow: 'auto',
      position: 'fixed',
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
      top: 0,
      left: position === 'left' ? 0 : undefined,
      right: position === 'right' ? 0 : undefined,
    }),
    headerWrapper: css({
      position: 'sticky',
      top: 0,
      left: 0,
      backgroundColor: colorPalette.white,
      padding: theme.spacing.md,
      borderBottom: `1px solid ${colorPalette.grey200}`,
      zIndex: 100,
    }),
    contentWrapper: css({
      padding: theme.spacing.md,
      paddingBottom: 240,
      height: 'inherit',
    }),
    footerWrapper: css({
      position: 'sticky',
      bottom: 0,
      left: 0,
      backgroundColor: colorPalette.white,
      padding: `${theme.spacing.xl} ${theme.spacing.md}`,
      borderTop: `1px solid ${colorPalette.grey200}`,
      zIndex: 100,
    }),
    backdrop: css({
      background: 'rgba(0, 0, 0, 0.5)',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      position: 'fixed',
      zIndex: 999,
    }),
    header: css({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }),
  };
}

export function Drawer({
  header,
  children,
  onClose,
  enableDismiss,
  position = 'left',
  footer,
  isOpen,
}: DrawerProps) {
  const drawerStyles = getDrawerStyles({ position });

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="drawer"
        unmountOnExit
      >
        <div
          className={cx('drawer-container', drawerStyles.drawerContainer)}
          role="dialog"
        >
          <div className={cx('header-wrapper', drawerStyles.headerWrapper)}>
            <div className={cx('header', drawerStyles.header)}>
              <H3>{header}</H3>
              <Button
                variant="ghost"
                onClick={() => {
                  onClose();
                }}
              >
                <FontAwesomeIcon icon={faClose} fixedWidth />
              </Button>
            </div>
          </div>
          <div className={cx('content-wrapper', drawerStyles.contentWrapper)}>
            {children}
          </div>
          {footer && (
            <div className={cx('footer-wrapper', drawerStyles.footerWrapper)}>
              {footer}
            </div>
          )}
        </div>
      </CSSTransition>
      {isOpen && (
        <div
          className={cx('e2n-drawer-backdrop', drawerStyles.backdrop)}
          onClick={() => {
            if (enableDismiss) {
              onClose();
            }
          }}
        />
      )}
    </>
  );
}
