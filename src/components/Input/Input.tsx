import * as React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { cn } from "../../lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: IconDefinition;
  endIcon?: IconDefinition;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => {
    const StartIcon = startIcon;
    const EndIcon = endIcon;
    return (
      <div className="w-full relative">
        {StartIcon ? (
          <>
            <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2">
              <FontAwesomeIcon icon={startIcon} className="text-gray-400" />
            </div>

            <input
              type={type}
              className={cn(
                "flex h-9 w-full rounded-md border border-input bg-transparent px-8 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
              ref={ref}
              {...props}
            />
          </>
        ) : (
          <input
            type={type}
            className={cn(
              "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />
        )}
        {EndIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <FontAwesomeIcon className="text-gray-400" icon={endIcon} />
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
