import * as React from 'react';
import './Button.scss';
import { Slot } from '@radix-ui/react-slot';

function Button({
  asChild = false,
  variant = 'primary',
  className = '',
  ...props
}: React.ComponentProps<'button'> & {
  variant?: 'primary' | 'ghost' | 'icon';
} & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : 'button';
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
