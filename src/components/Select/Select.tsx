import { css, cx } from '@emotion/css';
import { useMemo } from 'react';
import Select, { GroupBase, Props, StylesConfig } from 'react-select';
import {
  Theme,
  colorPalette,
  lightTheme,
  theme as e2nTheme,
  typography,
} from '../../theme';
import makeAnimated from 'react-select/animated';

function getStyles(theme: Theme) {
  return {
    wrapper: css({
      display: 'flex',
      flexDirection: 'column',
      fontFamily: e2nTheme.fontFamily.sansSerif,
    }),
    label: css({
      color: theme.text.primary,
      paddingBottom: e2nTheme.spacing.xs,
      ...typography.textFieldLabel,
    }),
  };
}

const IndicatorSeparator = () => {
  return <></>;
};

export function CustomSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  components,
  styles: customStyles,
  label,
  isAnimated,
  theme = lightTheme,
  ...otherProps
}: Omit<Props<Option, IsMulti, Group>, 'theme'> & {
  label?: string;
  isAnimated?: boolean;
  theme?: Theme;
  'data-testid'?: string;
}) {
  const customSelectStyles = getStyles(theme);

  const animatedComponents = isAnimated ? makeAnimated() : undefined;

  const styles: StylesConfig<Option, IsMulti, Group> = useMemo(() => {
    return {
      container: (styles) => {
        return {
          ...styles,
          fontFamily: e2nTheme.fontFamily.sansSerif,
        };
      },
      placeholder: (styles) => {
        return {
          ...styles,
          color: colorPalette.grey500,
          opacity: 0.5,
          ...typography.textField,
          lineHeight: undefined,
        };
      },
      input: (styles) => {
        return {
          ...styles,
          fontSize: e2nTheme.size.md,
          fontWeight: e2nTheme.weight.regular,
        };
      },
      singleValue: (styles) => {
        return {
          ...styles,
          ...typography.textField,
          lineHeight: undefined,
        };
      },
      valueContainer: (styles) => {
        return {
          ...styles,
          padding: '0 2px',
        };
      },
      clearIndicator: (styles) => {
        return {
          ...styles,
          padding: '0 2px',
        };
      },
      dropdownIndicator: (styles) => {
        return {
          ...styles,
          padding: '0 2px',
          color: colorPalette.textLightPrimary,
        };
      },
      control: (styles, state) => {
        return {
          ...styles,
          padding: 3,
          border:
            !state.isFocused && !state.menuIsOpen
              ? `1px solid ${colorPalette.grey300} `
              : `1px solid ${colorPalette.grey500}`,
          borderRadius: e2nTheme.borderRadius.sm,
          boxShadow: 'none',
          ':hover': {
            border: `1px solid ${colorPalette.grey500}`,
          },
          ...typography.textField,
          lineHeight: undefined,
        };
      },
      menu: (styles) => {
        return {
          ...styles,
          color: theme.text.secondary,
          backgroundColor: theme.background.paper,
          boxShadow: theme.shadow.dropdown,
          borderRadius: e2nTheme.borderRadius.sm,
        };
      },
      option: (styles) => {
        return {
          ...styles,
          backgroundColor: theme.background.paper,
          color: theme.text.secondary,
          cursor: 'pointer',
          ':hover': {
            backgroundColor: theme.actionState.hover,
            color: theme.text.primary,
          },
        };
      },
    };
  }, [theme]);

  return (
    <div
      className={cx(customSelectStyles.wrapper, otherProps.className)}
      data-testid={otherProps['data-testid']}>
      {label && <div className={cx(customSelectStyles.label)}>{label}</div>}
      <Select
        components={{
          ...components,
          ...animatedComponents,
          IndicatorSeparator,
        }}
        styles={{ ...styles, ...customStyles }}
        {...otherProps}
      />
    </div>
  );
}
