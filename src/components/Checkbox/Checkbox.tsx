import { cx, css } from '@emotion/css';
import { useEffect, useRef, useState } from 'react';
import { colorPalette, theme } from '../../theme';

type CustomProps = {
  className?: string;
  isValid?: boolean;
  label: string;
  onChange?: (value: string | undefined) => void;
  value: any;
  defaultChecked?: boolean;
  disabled?: boolean;
};

export type CheckboxProps = CustomProps;

function getStyles({
  checked,
  isValid,
  disabled,
}: {
  checked: boolean;
  isValid?: boolean;
  disabled?: boolean;
}) {
  return {
    input: css({
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: 1,
    }),
    checkbox: css({
      width: theme.spacing.md,
      height: theme.spacing.md,
      background: checked
        ? !disabled
          ? colorPalette.primaryDarker
          : colorPalette.grey500
        : colorPalette.white,
      borderRadius: 3,
      border: `2px solid ${
        isValid
          ? checked
            ? !disabled
              ? colorPalette.primaryDarker
              : colorPalette.grey500
            : colorPalette.grey200
          : colorPalette.errorLight
      }`,
    }),
    wrapper: css({
      display: 'inline-block',
      verticalAlign: 'middle',
      '&:hover': {
        cursor: !disabled ? 'pointer' : 'not-allowed',
      },
    }),
    icon: css({
      fill: 'none',
      stroke: colorPalette.white,
      strokeWidth: 4,
      visibility: checked ? 'visible' : 'hidden',
    }),
    container: css({
      display: 'flex',
      gap: theme.spacing.sm,
      alignItems: 'center',
    }),
    label: css({
      paddingTop: 1,
      fontSize: theme.size.md,
      fontWeight: theme.weight.semibold,
      fontFamily: theme.fontFamily.sansSerif,
    }),
  };
}

export function Checkbox({
  className,
  isValid = true,
  label,
  value,
  onChange,
  disabled,
  defaultChecked = false,
  ...otherProps
}: CheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked);
  const styles = getStyles({ checked, isValid, disabled });
  const wrapperRef = useRef<HTMLDivElement>(null);

  // To Do: das sollte eigentlich so gar nicht funktionieren, unbedingt aufräumen
  useEffect(() => {
    onChange && onChange(!checked ? undefined : value);
  }, [checked, value]);

  return (
    <div className={cx('checkbox-container', styles.container, className)}>
      <div
        ref={wrapperRef}
        className={cx('checkbox-wrapper', styles.wrapper)}
        onClick={() => {
          if (!disabled) {
            setChecked(!checked);
            wrapperRef.current?.focus();
          }
        }}>
        <input
          className={cx('checkbox-hidden', styles.input)}
          type="checkbox"
          defaultChecked={checked}
          value={value}
          disabled={disabled}
          {...otherProps}
        />
        <div className={cx('checkbox', styles.checkbox)}>
          <svg viewBox="0 0 24 24" className={cx(styles.icon)}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>
      <div className={cx('label', styles.label)}>{label}</div>
    </div>
  );
}
