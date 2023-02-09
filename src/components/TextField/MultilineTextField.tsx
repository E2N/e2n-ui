import { cx } from '@emotion/css';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, TextareaHTMLAttributes } from 'react';
import { colorPalette } from '../../theme';
import { getStyles } from './styles';

type CustomProps = {
  className?: string;
  isValid?: boolean | undefined;
  label?: string;
  description?: string;
  width?: number;
  height?: number;
  resizable?: boolean;
};

export type MultilineTextFieldProps = CustomProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export const MultilineTextField = forwardRef<
  HTMLTextAreaElement,
  MultilineTextFieldProps
>(
  (
    {
      label,
      isValid = true,
      className,
      description,
      resizable = true,
      width,
      height,
      ...otherProps
    },
    ref,
  ) => {
    const styles = getStyles({
      isValid,
      resizable,
      textAreaHeight: height,
      textAreaWidth: width,
    });
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
        <textarea
          ref={ref}
          className={cx(styles.textInput, styles.textArea)}
          {...otherProps}
        />
        {description && (
          <span className={cx(styles.description)}>{description}</span>
        )}
      </div>
    );
  },
);

MultilineTextField.displayName = 'MultilineTextField';
