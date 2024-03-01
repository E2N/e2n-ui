import { cx, css } from "@emotion/css";
import { forwardRef, HTMLAttributes } from "react";
import { theme } from "../theme/default";

type CustomProps = {
  children?: React.ReactNode;
  className?: string;
};

type ButtonGroupProps = CustomProps & HTMLAttributes<HTMLDivElement>;

function getButtonGroupStyles() {
  return css({
    display: "flex",
    button: {
      borderRadius: 0,
      borderRightWidth: 0,
    },
    "button:first-child": {
      borderTopLeftRadius: theme.borderRadius.xs,
      borderBottomLeftRadius: theme.borderRadius.xs,
    },
    "button:last-child": {
      borderTopRightRadius: theme.borderRadius.xs,
      borderBottomRightRadius: theme.borderRadius.xs,
      borderRightWidth: 2,
    },
  });
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, className, ...otherProps }, ref) => {
    const buttonGroupStyles = getButtonGroupStyles();
    return (
      <div
        ref={ref}
        className={cx("e2n-button-group", buttonGroupStyles, className)}
        {...otherProps}
      >
        {children}
      </div>
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";
