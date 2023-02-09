import { css } from '@emotion/css';
import { colorPalette, theme } from '../../theme';
import { getFocusStyles } from './getFocusStyles';

export function getStyles({
  width,
  isValid,
  resizable,
  textAreaHeight,
  textAreaWidth,
  disabled,
}: {
  width?: number | string;
  isValid?: boolean;
  resizable?: boolean;
  textAreaWidth?: number;
  textAreaHeight?: number;
  disabled?: boolean;
}) {
  const focusStyles = getFocusStyles(isValid, disabled);
  return {
    textInput: css({
      padding: 10,
      border: isValid
        ? `2px solid ${colorPalette.grey200}`
        : `2px solid ${colorPalette.errorLight}`,
      borderRadius: theme.borderRadius.xs,
      transition: 'box-shadow 0.15s ease-in-out',
      width: '100%',
      fontFamily: 'inherit',
      fontSize: theme.size.md,
      fontWeight: theme.weight.regular,
      ':hover': {
        cursor: disabled ? 'not-allowed' : 'default',
      },
      '::placeholder': {
        fontWeight: theme.weight.regular,
        color: colorPalette.grey500,
      },
      backgroundColor: disabled ? colorPalette.grey100 : colorPalette.white,
      ...focusStyles,
    }),
    textArea: css({
      resize: resizable ? 'both' : 'none',
      width: textAreaWidth ? textAreaWidth : 'auto',
      height: textAreaHeight ? textAreaHeight : '100%',
      fontSize: 14,
    }),
    wrapper: css({
      display: 'flex',
      flexDirection: 'column',
      width,
      fontFamily: theme.fontFamily.sansSerif,
    }),
    fieldWrapper: css({
      display: 'flex',
      flexDirection: 'row',
      gap: theme.spacing.sm,
      alignItems: 'center',
    }),
    label: css({
      paddingBottom: theme.spacing.xs,
      fontSize: theme.size.md,
      fontWeight: theme.weight.semibold,
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing.xs,
      color: !isValid ? colorPalette.errorLight : colorPalette.black,
    }),
    description: css({
      fontSize: theme.size.sm,
      paddingTop: theme.spacing.xs,
      color: colorPalette.grey500,
    }),
  };
}
