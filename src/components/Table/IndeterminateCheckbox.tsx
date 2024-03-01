import { css, cx } from '@emotion/css';
import { InputHTMLAttributes, useRef, useEffect } from 'react';
import { colorPalette } from '../..';

export function IndeterminateCheckbox({
  indeterminate,
  ...otherProps
}: {
  indeterminate?: boolean;
} & InputHTMLAttributes<HTMLInputElement>) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof indeterminate === 'boolean' && ref.current) {
      ref.current.indeterminate = !otherProps.checked && indeterminate;
    }
  }, [ref, indeterminate, otherProps.checked]);

  function getStyles() {
    return {
      input: css({
        height: '1.3rem',
        width: '1.3rem',

        '&:focus': {
          outline: 'none',
        },
      }),

      div: css({
        '[type=checkbox]': {
          textAlign: 'center',
          padding: '0.20rem 0.5rem 0.5rem 0.30rem',
          verticalAlign: 'middle',
          height: '1.3rem',
          width: '1.3rem',
          borderRadius: '15%',
          border: '1px solid' + colorPalette.grey600,
          boxShadow: 'none',
          ':checked': {
            backgroundColor: colorPalette.primaryMain,
            accentColor: colorPalette.primaryMain,
            border: 'none',
            '&::after': {
              color: colorPalette.commonWhite,
            },
          },
          '&:focus': {
            outline: 'none',
          },
        },
      }),
    };
  }

  const styles = getStyles();

  return (
    <div className={cx(styles.div)}>
      <label className="container">
        <input
          type="checkbox"
          ref={ref}
          {...otherProps}
          className={cx(styles.input)}
        />
      </label>
    </div>
  );
}
