import React from 'react';
import { cn } from '../../lib/utils';

const Select = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        {children}
      </select>
    </div>
  );
});
Select.displayName = 'Select';

const SelectContent = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

const SelectItem = ({ children, value, ...props }) => (
  <option value={value} {...props}>
    {children}
  </option>
);

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  >
    {children}
  </div>
));
SelectTrigger.displayName = 'SelectTrigger';

const SelectValue = ({ placeholder, ...props }) => (
  <span className="text-muted-foreground" {...props}>
    {placeholder}
  </span>
);

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };