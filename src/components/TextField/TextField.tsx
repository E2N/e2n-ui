import { cx } from '@emotion/css';
import {
  faExclamationCircle,
  faEye,
  faEyeSlash,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, InputHTMLAttributes, useState } from 'react';
import { colorPalette, lightTheme, Theme } from '../../theme';
import { getStyles } from './styles';

type CustomProps = {
  className?: string;
  isValid?: boolean | undefined;
  label?: string;
  description?: string;
  inputAdornment?: IconDefinition;
  theme?: Theme;
  showPassword?: boolean;
  passwordIcon?: IconDefinition;
  passwordIconHidden?: IconDefinition;
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
      inputAdornment,
      disabled,
      theme = lightTheme,
      type,
      showPassword = false,
      passwordIcon,
      passwordIconHidden,
      ...otherProps
    },
    ref,
  ) => {
    const styles = getStyles({ width, isValid, disabled, theme });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
        <div ref={ref} className={cx(styles.fieldWrapper)}>
          {inputAdornment && (
            <FontAwesomeIcon
              className="input-adornment"
              icon={inputAdornment}
            />
          )}
          <input
            className={cx(styles.textInput)}
            disabled={disabled}
            type={
              type === 'password'
                ? isPasswordVisible
                  ? 'text'
                  : 'password'
                : type
            }
            {...otherProps}
          />
          {showPassword && type === 'password' && (
            <FontAwesomeIcon
              className="show-password-icon"
              icon={
                isPasswordVisible
                  ? passwordIcon
                    ? passwordIcon
                    : faEyeSlash
                  : passwordIconHidden
                    ? passwordIconHidden
                    : faEye
              }
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          )}
        </div>
        {description && (
          <span className={cx(styles.description)}>{description}</span>
        )}
      </div>
    );
  },
);

TextField.displayName = 'TextField';
