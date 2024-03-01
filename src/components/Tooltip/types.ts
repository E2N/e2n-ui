import { ReactNode } from 'react';

/**
 * The variant options for the Tooltip.
 */
export type TooltipVariants = 'default' | 'darkmode' | 'withoutArrow';

/**
 * The documentation is the same as https://www.radix-ui.com/docs/primitives/components/tooltip
 */
export type TooltipProps = {
  /** The content of the Tooltip. */
  children?: ReactNode;
  /** Specifies the trigger on the tooltip. Is passed in from the outside. */
  trigger: ReactNode;
  /** Specifies the condition.*/
  open?: boolean;
  /** Specifies the condition - the defaultOpen value is false */
  defaultOpen?: boolean;
  /** Specifies the variants of the Tooltip.*/
  variant?: TooltipVariants;
  onOpenChange?: (open: boolean) => void;
  /** The duration from when the pointer enters the trigger until the tooltip gets opened. This will override the prop with the same name passed to Provider.
   * @defaultValue 700
   */ /** The duration from when the pointer enters the trigger until the tooltip gets opened. This will override the prop with the same name passed to Provider.
   * @defaultValue 700*/
  delayDuration?: number;
  /** When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
   * @defaultValue false */
  disableHoverableContent?: boolean;
  side?: 'top' | 'bottom' | 'left' | 'right';
  /** Specifies the direction in which the tooltip opens as viewed from the trigger element.*/
};
