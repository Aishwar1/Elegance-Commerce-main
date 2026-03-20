import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, HTMLMotionProps } from 'framer-motion';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MinimalButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

export const MinimalButton = React.forwardRef<HTMLButtonElement, MinimalButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-mono text-xs uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed outline-none focus-visible:ring-1 focus-visible:ring-white";
    
    const variants = {
      primary: "bg-white text-black hover:bg-white/90 active:scale-[0.98]",
      outline: "border border-white/20 text-white hover:bg-white hover:text-black active:scale-[0.98]",
      ghost: "text-white/70 hover:text-white hover:bg-white/5 active:scale-[0.98]"
    };
    
    const sizes = {
      sm: "h-8 px-4",
      md: "h-12 px-8",
      lg: "h-16 px-12 text-sm",
      icon: "h-12 w-12"
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin mr-2" />
        ) : null}
        {children}
      </motion.button>
    );
  }
);

MinimalButton.displayName = "MinimalButton";
