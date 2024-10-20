import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface IconButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
