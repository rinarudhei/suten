import * as React from 'react';
import './Button.scss';
import { Slot } from 'radix-ui';

function Button({
  asChild = false,
  variant = 'primary',
  className = '',
  ...props
}: React.ComponentProps<'button'> & { variant?: 'primary' | 'ghost' } & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot.Root : 'button';
  return (
    <Comp
      data-slot='button'
      data-variant={variant}
      className={className}
      {...props}
    />
  );
}

export default Button;
