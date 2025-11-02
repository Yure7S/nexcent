// components/ui/button.tsx
import { ButtonSize } from '@/lib/enums/buttom.enum';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   size?: ButtonSize;
   disabled?: boolean;
   icon?: React.ReactNode;
   iconPosition?: 'left' | 'right';
}

function cn(...classes: (string | undefined | null | false)[]): string {
   return classes.filter(Boolean).join(' ');
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({
      className,
      size = ButtonSize.BS,
      disabled = false,
      icon,
      iconPosition = 'left',
      children,
      ...props
   }, ref) => {

      const getSizeClasses = (size: ButtonSize) => {
         const sizeMap = {
            [ButtonSize.BS]: 'px-8 py-3.5 text-lg',
            [ButtonSize.MD]: 'px-5 py-2.5 text-base',
            [ButtonSize.SM]: 'px-6 py-3 text-sm',
         };
         return sizeMap[size];
      };

      return (
         <button
            ref={ref}
            className={cn(
               // Base styles
               ' hover flex items-center justify-center rounded-lg transition-all duration-200',
               'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
               'bg-primary hover:bg-shade-3 hover:cursor-pointer active:bg-shade-2 text-white',
               'shadow-sm hover:shadow-md',
               'disabled:opacity-50 disabled:pointer-events-none',

               // Size
               getSizeClasses(size),

               className
            )}
            disabled={disabled}
            {...props}
         >
            {icon && iconPosition === 'left' && (
               <span className="mr-2">{icon}</span>
            )}

            {children}

            {icon && iconPosition === 'right' && (
               <span className="ml-2">{icon}</span>
            )}
         </button>
      );
   }
);

Button.displayName = 'Button';

export { Button, type ButtonProps };