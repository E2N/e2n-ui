import { css, cx } from '@emotion/css';
import { colorPalette } from '../../theme';

function getReadonlyFieldStyles({
  textAvailable,
}: {
  textAvailable?: boolean;
}) {
  return {
    wrapper: css({
      display: 'flex',
    }),
    label: css({
      width: '50%',
    }),
    data: css({
      color: textAvailable ? colorPalette.black : colorPalette.grey500,
      width: '50%',
    }),
  };
}

export function ReadOnlyField({
  label,
  text,
}: {
  label: string;
  text?: string;
}) {
  const styles = getReadonlyFieldStyles({
    textAvailable: !text || text.length > 1,
  });
  return (
    <div className={cx(styles.wrapper)}>
      <label className={cx(styles.label)}>{label}</label>
      <span className={cx(styles.data)}>
        {!text || text.length < 1 ? 'Kein Wert' : text}
      </span>
    </div>
  );
}
