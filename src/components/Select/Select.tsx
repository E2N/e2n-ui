import { cx } from '@emotion/css';
import Select, { GroupBase } from 'react-select';
import { colorPalette, lightTheme } from '../../theme';
import makeAnimated from 'react-select/animated';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { SelectProps } from '.';
import { IndicatorSeparator } from './IndicatorSeparator';
import { getStyles } from './getStyles';
import { ForwardedRef, forwardRef } from 'react';

function CustomSelectInner<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
>(props: SelectProps<Option, IsMulti, Group>, ref: any) {
  const {
    isAnimated,
    isValid = true,
    theme = lightTheme,
    label,
    components,
    description,
    styles: customStyles,
    ...otherProps
  } = props;

  const { wrapperStyles, selectStyles } = getStyles<Option, IsMulti, Group>(
    isValid,
    theme,
  );

  const animatedComponents = isAnimated ? makeAnimated() : undefined;

  return (
    <div
      className={cx(wrapperStyles.wrapper, otherProps.className)}
      data-testid={otherProps['data-testid']}
    >
      {label && (
        <div className={cx(wrapperStyles.label)}>
          <div>{label}</div>
          {!isValid && (
            <FontAwesomeIcon
              icon={faExclamationCircle}
              color={colorPalette.errorLight}
            />
          )}
        </div>
      )}
      <Select
        ref={ref}
        components={{
          ...components,
          ...animatedComponents,
          IndicatorSeparator,
        }}
        styles={{ ...selectStyles, ...customStyles }}
        {...otherProps}
      />
      {description && (
        <span className={cx(wrapperStyles.description)}>{description}</span>
      )}
    </div>
  );
}

export const CustomSelect = forwardRef(CustomSelectInner) as <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: SelectProps<Option, IsMulti, Group> & { ref?: ForwardedRef<any> },
) => ReturnType<typeof CustomSelectInner>;
