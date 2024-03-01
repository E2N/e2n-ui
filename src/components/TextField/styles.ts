import { css } from '@emotion/css';
import {
  Theme,
  colorPalette,
  theme as e2nTheme,
  typography,
} from '../../theme';
import { getFocusAndHoverStyles } from './getFocusStyles';

export function getStyles({
  width,
  isValid,
  resizable,
  textAreaHeight,
  textAreaWidth,
  disabled,
  theme,
}: {
  width?: number | string;
  isValid?: boolean;
  resizable?: boolean;
  textAreaWidth?: number;
  textAreaHeight?: number;
  disabled?: boolean;
  theme: Theme;
}) {
  const focusStyles = getFocusAndHoverStyles(isValid, disabled);
  return {
    textInput: css({
      '::placeholder': {
        fontWeight: e2nTheme.weight.regular,
        color: colorPalette.grey500,
      },
      color: colorPalette.grey800,
      backgroundColor: 'transparent',
      border: 'none',
      ':hover': {
        cursor: disabled ? 'not-allowed' : 'default',
      },
      width: '100%',
      ...typography.textField,
    }),
    textArea: css({
      ...typography.textField,
      resize: resizable ? 'both' : 'none',
      width: textAreaWidth ? textAreaWidth : 'auto',
      height: textAreaHeight ? textAreaHeight : '100%',
      fontFamily: e2nTheme.fontFamily.sansSerif,
      padding: `${e2nTheme.spacing.sm} ${e2nTheme.spacing.md}`,
      border: isValid
        ? `1px solid ${colorPalette.grey300}`
        : `1px solid ${colorPalette.errorLight}`,
      borderRadius: e2nTheme.borderRadius.sm,
      transition: 'border 0.15s ease-in-out',
      backgroundColor: disabled ? colorPalette.grey100 : colorPalette.white,
      ...focusStyles,
    }),
    wrapper: css({
      display: 'flex',
      flexDirection: 'column',
      width,
      fontFamily: e2nTheme.fontFamily.sansSerif,
    }),
    fieldWrapper: css({
      display: 'flex',
      flexDirection: 'row',
      gap: e2nTheme.spacing.sm,
      alignItems: 'center',
      backgroundColor: disabled ? colorPalette.grey100 : colorPalette.white,
      padding: `${e2nTheme.spacing.sm} ${e2nTheme.spacing.md}`,
      border: isValid
        ? `1px solid ${colorPalette.grey300}`
        : `1px solid ${colorPalette.errorLight}`,
      borderRadius: e2nTheme.borderRadius.sm,
      transition: 'border 0.15s ease-in-out',
      '& .input-adornment': {
        color: isValid ? colorPalette.grey500 : colorPalette.errorMain,
      },
      '& .show-password-icon': {
        color: colorPalette.grey500,
        ':hover': {
          color: colorPalette.primaryMain,
          cursor: 'pointer',
        },
      },
      ...focusStyles,
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
