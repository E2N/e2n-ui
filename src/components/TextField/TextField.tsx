import { cx } from '@emotion/css';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, InputHTMLAttributes } from 'react';
import { colorPalette } from '../../theme';
import { getStyles } from './styles';

type CustomProps = {
  className?: string;
  isValid?: boolean | undefined;
  label?: string;
  description?: string;
};

export type TextFieldProps = CustomProps &
  InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      width,
      isValid = true,
      label,
      description,
      disabled,
      ...otherProps
    },
    ref,
  ) => {
    const styles = getStyles({ width, isValid, disabled });

    return (
      <div className={cx(styles.wrapper, className)}>
        {label && (
          <label className={cx(styles.label)}>
            <div>{label}</div>
            {!isValid && (
              <FontAwesomeIcon
                icon={faExclamationCircle}
                color={colorPalette.errorLight}
              />
            )}
          </label>
        )}
        <div className={cx(styles.fieldWrapper)}>
          <input ref={ref} className={cx(styles.textInput)} {...otherProps} />
        </div>
        {description && (
          <span className={cx(styles.description)}>{description}</span>
        )}
      </div>
    );
  },
);

TextField.displayName = 'TextField';
