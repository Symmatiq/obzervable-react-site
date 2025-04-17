import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  className = '',
  ...props
}: ButtonProps) {
  // Define base styles based on variant and size
  const baseStyles = 'font-medium rounded-md transition-colors duration-200 inline-flex items-center justify-center';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-8 py-3 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-light text-white',
    secondary: 'bg-secondary hover:bg-secondary-light text-white',
    outline: 'bg-transparent hover:bg-accent border border-primary text-primary',
    text: 'bg-transparent hover:bg-accent text-primary',
  };
  
  // Combine all classes
  const buttonClasses = `${baseStyles} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  // If href is provided, render a link
  if (href) {
    if (external) {
      return (
        <a 
          href={href}
          className={buttonClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...props as any}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link 
        href={href}
        className={buttonClasses}
        {...props as any}
      >
        {children}
      </Link>
    );
  }
  
  // Otherwise, render a button
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
} 