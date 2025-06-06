'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AutoDismissAlertProps {
  children?: React.ReactNode;
  duration?: number;
  className?: string;
  onDismiss?: () => void;
}

export function AutoDismissAlert({
  children,
  duration = 5000,
  className,
  onDismiss,
}: AutoDismissAlertProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setHasEntered(true);
    }, 100);

    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsVisible(false);
        onDismiss?.();
      }, 300);
    }, duration);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(timer);
    };
  }, [duration, onDismiss]);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="absolute top-10 z-20 w-full px-2 sm:px-0">
      <div className="flex justify-center">
        <Alert
          role="alert"
          className={cn(
            // core style
            'relative bg-red-800/60 text-white font-public-sans border-none max-w-md w-full sm:w-fit',
            'px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3 rounded-md transition-all duration-300 ease-in-out',
            // animation
            'text-xs sm:text-base',
            !hasEntered && 'opacity-0 translate-y-2 scale-95',
            hasEntered && 'opacity-100 translate-y-0 scale-100',
            isAnimating && 'opacity-0 -translate-y-2 scale-95',
            className
          )}
        >
          <div className="flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 shrink-0">
            <Info className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </div>
          <AlertDescription className="flex-1 text-white text-xs sm:text-lg pr-8 sm:pr-10">
            {children || (
              <>
                Events are still being gradually uploaded by the LEAP central committee.
                <br />
                If your event is not yet here, it is still being processed.
              </>
            )}
          </AlertDescription>
          <button
            onClick={handleClose}
            aria-label="Dismiss"
            className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded hover:bg-white/10 transition"
          >
            <X className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
          </button>
        </Alert>
      </div>
    </div>
  );
}
