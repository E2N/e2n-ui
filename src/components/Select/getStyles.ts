import { css } from '@emotion/css';
import { GroupBase, StylesConfig } from 'react-select';
import { colorPalette, typography, spacingMap, Theme } from '../..';
import { theme as e2nTheme } from '../..';

function getWrapperStyles(isValid: boolean, theme: Theme) {
  return {
    wrapper: css({
      display: 'flex',
      flexDirection: 'column',
      fontFamily: e2nTheme.fontFamily.sansSerif,
    }),
    label: css({
      paddingBottom: e2nTheme.spacing.xs,
      display: 'flex',
      alignItems: 'center',
      gap: e2nTheme.spacing.xs,
      color: !isValid ? colorPalette.errorLight : theme.text.primary,
      ...typography.textFieldLabel,
    }),
    description: css({
      paddingTop: e2nTheme.spacing.xs,
      color: theme.text.secondary,
      ...typography.textFieldDescription,
    }),
  };
}

function getSelectStyles<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(isValid: boolean, theme: Theme): StylesConfig<Option, IsMulti, Group> {
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
    dropdownIndicator: (styles) => {
      return {
        ...styles,
        color: colorPalette.textLightPrimary,
      };
    },
    control: (styles, state) => {
      return {
        ...styles,
        padding: `${spacingMap.xxs} ${spacingMap.sm}`,
        border: `1px solid ${
          !isValid
            ? colorPalette.errorMain
            : !state.isFocused && !state.menuIsOpen
            ? colorPalette.grey300
            : colorPalette.grey500
        }`,
        borderRadius: e2nTheme.borderRadius.sm,
        boxShadow: 'none',
        ':hover': {
          border: `1px solid ${
            !isValid ? colorPalette.errorMain : colorPalette.grey500
          }`,
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
}

export function getStyles<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(isValid: boolean, theme: Theme) {
  return {
    selectStyles: getSelectStyles<Option, IsMulti, Group>(isValid, theme),
    wrapperStyles: getWrapperStyles(isValid, theme),
  };
}
