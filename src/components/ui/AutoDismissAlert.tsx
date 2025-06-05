'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AutoDismissAlertProps {
  children?: React.ReactNode;
  duration?: number; // Duration in milliseconds (default: 5000)
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
    // Trigger intro animation
    const introTimer = setTimeout(() => {
      setHasEntered(true);
    }, 100);

    // Trigger outro animation
    const timer = setTimeout(() => {
      setIsAnimating(true);
      // Wait for animation to complete before hiding
      setTimeout(() => {
        setIsVisible(false);
        onDismiss?.();
      }, 300); // Animation duration
    }, duration);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(timer);
    };
  }, [duration, onDismiss]);

  if (!isVisible) return null;

  return (
    <div className="absolute top-12 z-20 w-full">
      <div className="flex justify-center">
        {' '}
        <Alert
          role="alert"
          className={cn(
            'bg-red-800/60 text-white font-public-sans border-none w-fit px-4 py-3 flex items-center gap-3 rounded-md transition-all duration-300 ease-in-out',
            !hasEntered && 'opacity-0 translate-y-2 scale-95',
            hasEntered && 'opacity-100 translate-y-0 scale-100',
            isAnimating && 'opacity-0 -translate-y-2 scale-95',
            className
          )}
        >
          <div className="flex items-center justify-center w-6 h-6">
            <Info className="w-6 h-6 text-white" />
          </div>
          <AlertDescription className="text-white text-lg text-center">
            {children || (
              <>
                {/* The LEAP Central Committee have disabled registration for now. */}
                events are still being gradually uploaded by the LEAP central committee.
                <br />
                If your event is not yet here, it is still bring processed.
                {/* Please check back in an hour. */}
              </>
            )}
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
