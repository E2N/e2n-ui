import { ButtonHTMLAttributes, ReactNode } from "react";
import { Theme } from "../../theme";

export type ButtonFill = "outline" | "text";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonVariant =
  | "grey"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

export type ButtonProps = {
  /**  The fill property of the button. */
  fill?: ButtonFill;
  /** Test */
  className?: string;
  /** The size of the button. */
  size?: ButtonSize;
  /** The variant of the button. */
  variant?: ButtonVariant;
  /** The content of the button, which can be React nodes or a string. */
  children?: ReactNode | string;
  /** An optional theme object for making the button themeable. */
  theme?: Theme;
  /** An optional property to adjust the width of the button to the width of the parent element. */
  stretch?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
