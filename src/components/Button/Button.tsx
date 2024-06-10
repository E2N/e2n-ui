import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-primary-main text-white hover:bg-primary-dark disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:hover:cursor-not-allowed disabled:text-gray-500',
        secondary:
          'bg-secondary-main text-white hover:bg-secondary-darker disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:hover:cursor-not-allowed disabled:text-gray-500',
        destructive:
          'bg-error-main text-white hover:bg-error-dark disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:hover:cursor-not-allowed disabled:text-gray-500',
        outline:
          'border border-primary-main bg-inherit hover:bg-primary-main hover:text-white text-primary-main disabled:border-gray-200 disabled:hover:bg-inherit disabled:hover:cursor-not-allowed disabled:text-gray-500',
        ghost:
          'hover:bg-primary-8% disabled:hover:bg-inherit disabled:text-gray-500 disabled:hover:cursor-not-allowed',
        link: 'text-black underline-offset-4 hover:underline disabled:text-gray-500 disabled:underline disabled:hover:cursor-not-allowed',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?:
    | 'default'
    | 'secondary'
    | 'outline'
    | 'destructive'
    | 'ghost'
    | 'link';
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
