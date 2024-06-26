import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '../../lib/utils';
import { cva } from 'class-variance-authority';
import { Size, SwitchVariant, ThumbVariant } from './types';

const switchVariants = cva<SwitchVariant>('', {
  variants: {
    size: {
      default: 'h-6 w-11',
      sm: 'h-4 w-7',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const thumbVariants = cva<ThumbVariant>('', {
  variants: {
    size: {
      default: 'h-5 w-5 data-[state=checked]:translate-x-5',
      sm: 'h-3 w-3 data-[state=checked]:translate-x-3',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export type SwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
> & {
  size?: Size;
};

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, size, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex shrink-0 cursor-pointer items-center',
      'rounded-full border-2 border-transparent transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-main focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-primary-main data-[state=unchecked]:bg-slate-200',
      'dark:focus-visible:ring-slate-300 dark:focus-visible:ring-offset-primary-main dark:data-[state=checked]:bg-slate-50 dark:data-[state=unchecked]:bg-primary-light',
      switchVariants({ size }),
      className,
    )}
    {...props}
    ref={ref}>
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block rounded-full',
        'bg-white shadow-lg ring-0 dark:bg-primary-main',
        'transition-transform data-[state=unchecked]:translate-x-0',
        thumbVariants({ size }),
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
