import { cx } from '@emotion/css';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  calloutColor,
  calloutIcon,
  getCalloutStyles,
  Variant,
} from './Callout';

export function NotificationCallout({
  notification,
  setNotification,
}: {
  notification: { variant: Variant; message: string };
  setNotification: React.Dispatch<
    React.SetStateAction<{ variant: Variant; message: string } | undefined>
  >;
}) {
  const variant = notification?.variant ?? 'error';
  const styles = getCalloutStyles({
    variant,
    visible: true,
  });
  return (
    <div className={cx('callout', styles.wrapper)}>
      <div className={cx('content', styles.content)}>
        <FontAwesomeIcon
          icon={calloutIcon[variant]}
          color={calloutColor[variant]}
        />
        {notification?.message}
      </div>
      <FontAwesomeIcon
        className={cx('close', styles.close)}
        icon={faTimes}
        onClick={() => setNotification(undefined)}
      />
    </div>
  );
}
