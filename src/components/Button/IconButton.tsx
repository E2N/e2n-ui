import { css, cx } from "@emotion/css";
import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Theme, lightTheme, theme as e2nTheme } from "../../theme";

type CustomProps = {
  icon: IconDefinition;
  className?: string;
  spin?: boolean;
  size?: SizeProp;
  theme?: Theme;
};

export type IconButtonProps = CustomProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

function getIconButtonStyles(disabled: boolean, theme: Theme) {
  return css({
    background: "none",
    border: "none",
    color: !disabled ? theme.text.secondary : theme.text.disabled,
    fontWeight: e2nTheme.weight.bold,
    padding: "4px 4px",
    transition: "0.3s",
    cursor: !disabled ? "pointer" : "not-allowed",
    ":hover": {
      color: !disabled ? theme.text.primary : theme.text.disabled,
    },
  });
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      className,
      spin,
      size,
      disabled = false,
      theme = lightTheme,
      ...otherProps
    },
    ref
  ) => {
    const iconButtonStyles = getIconButtonStyles(disabled, theme);

    return (
      <button
        ref={ref}
        {...otherProps}
        disabled={disabled}
        className={cx("e2n-icon-button", iconButtonStyles, className)}>
        <FontAwesomeIcon icon={icon} spin={spin} size={size} />
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
