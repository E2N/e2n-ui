/**
 * The size options for the switch.
 */
export type SwitchSize = 'small' | 'medium';
/**
 * The variant options for the switch.
 */
export type SwitchVariants =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

/**
 * The documentation is the same as https://www.radix-ui.com/docs/primitives/components/switch
 */
export type SwitchProps = {
  /** The controlled state of the switch. Must be used in conjunction with onCheckedChange. */
  checked?: boolean;
  /** The state of the switch when it is initially rendered. Use when you do not need to control its state. */
  defaultChecked?: boolean;
  /** Event handler called when the state of the switch changes. */
  onCheckedChange?(checked: boolean): void;
  /** The size of the switch. */
  size?: SwitchSize;
  /** Indicates whether the switch is disabled. */
  disabled?: boolean;
  /** The variant of the switch. */
  variant?: SwitchVariants;
  /** The label of the switch. */
  label?: string;
  /** The ID string of the label which is associated with the switch. */
  htmlFor?: string;
  /** Further css classes for styling this component. */
  className?: string;
};
