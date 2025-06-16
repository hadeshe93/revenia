import { ReactNode } from 'react';
import { cn } from '@/lib/style';

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  primary?: boolean;
}

export default function CTAButton({ href, children, className, primary }: CTAButtonProps) {
  return (
    <a
      className={cn(
        'w-full rounded-full h-12 leading-12 border-2 flex items-center justify-center gap-2 font-extrabold border-primary transition-colors duration-300',
        primary
          ? 'bg-primary text-base-content hover:bg-primary/90'
          : 'bg-base-content text-primary hover:bg-base-content/90',
        className
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
