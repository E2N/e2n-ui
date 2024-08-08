import { css, cx } from '@emotion/css';
import { ReactNode, forwardRef } from 'react';
import { usePreventScroll } from 'react-aria';
import { colorPalette, theme } from '../../theme';
import { ModalSize } from './types';

export type ModalDialogProps = {
  title: string;
  size?: ModalSize;
  children: string | ReactNode;
  onClose: (isOpen: boolean) => void;
  isDismissable?: boolean;
};

function getModalStyles({ size }: { size?: ModalSize }) {
  const modalSizeStyles = getModalSizeStyles({
    size,
  });
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
      width: 480,
      ...modalSizeStyles,
    }),
    titel: css({
      fontSize: theme.size.lg,
      fontWeight: theme.weight.bold,
      marginBottom: 32,
      borderBottom: '1px solid' + colorPalette.grey200,
      padding: '1.5rem 0.75rem 1.5rem 0.75rem',
      gap: '1rem',
    }),
  };
}

function getModalSizeStyles({ size }: { size?: string }) {
  if (size === 'medium') {
    return {
      width: 720,
    };
  }
}

export const ModalDialog = forwardRef<HTMLDivElement, ModalDialogProps>(
  (
    { title, children, size, onClose, isDismissable = false, ...otherProps },
    ref,
  ) => {
    const styles = getModalStyles({ size });
    usePreventScroll();

    return (
      <div
        className={cx(styles.overlay)}
        ref={ref}
        {...otherProps}
        onClick={() => {
          if (isDismissable) {
            onClose(false);
          }
        }}
      >
        <div className={cx(styles.modal)}>
          <div className={cx(styles.titel)}>{title}</div>
          <span>{children}</span>
        </div>
      </div>
    );
  },
);
