import { css, cx } from '@emotion/css';
import { ReactNode } from 'react';
import { usePreventScroll } from 'react-aria';
import { colorPalette, theme } from '../../theme';

export type ModalDialogProps = {
  title: string;
  children: string | ReactNode;
  onClose: (isOpen: boolean) => void;
  isDismissable?: boolean;
};

function getStyles() {
  return {
    overlay: css({
      position: 'fixed',
      zIndex: 100,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    modal: css({
      fontFamily: theme.fontFamily.sansSerif,
      fontSize: theme.size.base,
      background: colorPalette.white,
      borderRadius: theme.borderRadius.md,
      padding: theme.spacing.lg,
      width: 500,
    }),
    titel: css({
      fontSize: theme.size.lg,
      fontWeight: theme.weight.bold,
      marginBottom: 32,
    }),
  };
}

export function ModalDialog({
  title,
  children,
  onClose,
  isDismissable = false,
  ...otherProps
}: ModalDialogProps) {
  const styles = getStyles();
  usePreventScroll();

  return (
    <div
      className={cx(styles.overlay)}
      {...otherProps}
      onClick={() => {
        if (isDismissable) {
          onClose(false);
        }
      }}>
      <div className={cx(styles.modal)}>
        <div className={cx(styles.titel)}>{title}</div>
        {children}
      </div>
    </div>
  );
}
