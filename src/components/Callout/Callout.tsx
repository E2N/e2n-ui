import { css, cx } from '@emotion/css';
import {
  faCheckCircle,
  faExclamationCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HTMLAttributes, ReactNode, useState } from 'react';
import { colorPalette, theme } from '../../theme';

export type Variant = 'success' | 'error';

type CustomProps = {
  variant: Variant;
  message: string | ReactNode;
};

export type CalloutProps = CustomProps & HTMLAttributes<HTMLDivElement>;

export const calloutColor = {
  success: colorPalette.successMain,
  error: colorPalette.errorMain,
};

export const calloutBackgroundColor = {
  success: colorPalette.successLighter,
  error: colorPalette.errorLighter,
};

export const calloutIcon = {
  success: faCheckCircle,
  error: faExclamationCircle,
};

export function getCalloutStyles({
  variant,
  visible,
}: {
  variant: Variant;
  visible?: boolean;
}) {
  return {
    wrapper: css({
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.md,
      backgroundColor: calloutBackgroundColor[variant],
      fontFamily: theme.fontFamily.sansSerif,
      fontSize: theme.size.base,
      display: visible ? 'flex' : 'none',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: `${colorPalette.grey200} 0px 1px 4px`,
      gap: theme.spacing.md,
    }),
    content: css({
      display: 'flex',
      gap: theme.spacing.md,
      alignItems: 'center',
    }),
    close: css({
      color: colorPalette.grey500,
      cursor: 'pointer',
    }),
  };
}

export function Callout({ variant, message, ...otherProps }: CalloutProps) {
  const [isOpen, setIsOpen] = useState(true);
  const styles = getCalloutStyles({ variant, visible: isOpen });
  return (
    <div className={cx('callout', styles.wrapper)} {...otherProps}>
      <div className={cx('content', styles.content)}>
        <FontAwesomeIcon
          icon={calloutIcon[variant]}
          color={calloutColor[variant]}
        />
        {message}
      </div>
      <FontAwesomeIcon
        className={cx('close', styles.close)}
        icon={faTimes}
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
}
