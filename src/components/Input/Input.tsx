import * as React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { cn } from '../../lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: IconDefinition;
  endIcon?: IconDefinition;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => {
    return (
      <div className='w-full relative'>
        {startIcon && (
          <FontAwesomeIcon
            icon={startIcon}
            className='text-gray-400 absolute left-2.5 top-1/2 transform -translate-y-1/2'
          />
        )}
        <input
          type={type}
          className={cn(
            'flex h-9 w-full py-1',
            `${startIcon ? 'px-8' : 'px-3'}`,
            `${endIcon && 'pe-9'}`,
            'rounded-md border border-input',
            'bg-transparent text-sm shadow-sm transition-colors',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            'placeholder:text-muted-foreground',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
            'disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        {endIcon && (
          <FontAwesomeIcon
            className='text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2'
            icon={endIcon}
          />
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
