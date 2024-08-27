import { css, cx } from '@emotion/css';
import { InputHTMLAttributes, Key } from 'react';
import { colorPalette, theme } from '../../theme';

type RadioButtonProps = {
  label: string;
  id: string;
  disabled?: boolean;
  key?: Key;
} & InputHTMLAttributes<HTMLInputElement>;

function getStyles({ disabled }: { disabled?: boolean; checked?: boolean }) {
  return {
    wrapper: css({
      display: 'flex',
      gap: theme.spacing.sm,
      alignItems: 'center',
      width: 'fit-content',
      borderRadius: theme.borderRadius.md,
      '&:hover': {
        backgroundColor: !disabled
          ? colorPalette.grey200
          : colorPalette.grey500,
        cursor: !disabled ? 'pointer' : 'not-allowed',
        input: {
          border: `2px solid ${
            !disabled ? colorPalette.primaryMain : colorPalette.grey500
          }`,
          '&:checked': {
            border: `5px solid ${
              !disabled ? colorPalette.primaryMain : colorPalette.grey500
            }`,
          },
        },
      },
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      transition: 'hover 1s',
    }),
    label: css({
      fontSize: theme.size.md,
      fontWeight: theme.weight.semibold,
      cursor: disabled ? 'not-allowed' : 'unset',
      color: disabled ? colorPalette.grey500 : 'inherit',
      fontFamily: theme.fontFamily.sansSerif,
    }),
    input: css({
      appearance: 'none',
      margin: 0,
      width: 20,
      height: 20,
      border: `2px solid ${
        !disabled ? colorPalette.grey200 : colorPalette.grey500
      }`,
      backgroundColor: !disabled ? colorPalette.white : colorPalette.grey200,
      borderRadius: '50%',
      '&:after': {
        display: 'block',
        borderRadius: '50%',
        width: 8,
        height: 8,
        margin: 3,
        content: '""',
      },
      '&:checked': {
        border: `6px solid ${
          !disabled ? colorPalette.primaryMain : colorPalette.grey500
        }`,
      },
    }),
  };
}

export function RadioButton({
  label,
  id,
  key,
  disabled,
  ...otherProps
}: RadioButtonProps) {
  const styles = getStyles({ disabled });
  return (
    <div className={cx(styles.wrapper, otherProps.className)} key={key}>
      <input
        id={id}
        type="radio"
        className={cx(styles.input)}
        disabled={disabled}
        {...otherProps}
      />
      <label htmlFor={id} className={cx(styles.label)}>
        {label}
      </label>
    </div>
  );
}
