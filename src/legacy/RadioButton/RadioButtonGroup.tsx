import { css, cx } from '@emotion/css';
import { ChangeEvent, HTMLAttributes } from 'react';
import { colorPalette, theme } from '../../theme';
import { RadioButton } from './RadioButton';

function getStyles(disabled?: boolean) {
  return {
    label: css({
      fontSize: theme.size.md,
      fontWeight: theme.weight.semibold,
      cursor: disabled ? 'not-allowed' : 'unset',
      color: disabled ? colorPalette.grey500 : 'inherit',
      fontFamily: theme.fontFamily.sansSerif,
      marginBottom: theme.spacing.sm,
    }),
    wrapper: css({
      border: 'none',
      padding: 0,
    }),
  };
}

type Option = {
  label: string;
  id: string;
  value: string;
  name: string;
};

export type RadioButtonGroupProps = {
  label: string;
  options: Option[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
} & HTMLAttributes<HTMLInputElement>;

export function RadioButtonGroup({
  label,
  options,
  onChange,
  disabled,
  defaultValue,
  ...otherProps
}: RadioButtonGroupProps) {
  const styles = getStyles(disabled);
  return (
    <fieldset className={cx(styles.wrapper, otherProps.className)}>
      <label className={cx(styles.label)}>{label}</label>
      {options.map((option) => {
        return (
          <RadioButton
            key={option.label}
            label={option.label}
            id={option.id}
            value={option.value}
            defaultChecked={option.value === defaultValue}
            disabled={disabled}
            onChange={onChange}
            name={option.name}
          />
        );
      })}
    </fieldset>
  );
}
