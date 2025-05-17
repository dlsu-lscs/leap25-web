import { cn } from '@/lib/utils';

/**
 * @param variants Variants Available: none, diamond, circle
 * @param direction direction of the tail
 * @returns
 */
export default function LeapSeperator({
  variant,
  className,
  direction,
  length,
}: {
  direction?: string;
  variant?: string;
  className?: string;
  length?: string;
}) {
  return (
    <>
      <div className={cn('relative flex items-center', className)}>
        {variant === 'diamond' ? (
          <>
            <div
              className={cn(
                direction === 'right' ? 'left-6' : ' right-0',
                'absolute -translate-x-3 w-4 h-4 border-white border-2 rotate-45'
              )}
            ></div>
            <div
              className={cn(
                direction === 'right' ? 'left-6' : ' right-6',
                ' w-3 h-3   border-white absolute border-2 rotate-45'
              )}
            ></div>
          </>
        ) : (
          <>
            <div
              className={cn(
                'bg-white w-2 h-2 rounded-full',
                direction === 'right' ? '' : 'absolute right-0'
              )}
            ></div>
          </>
        )}
        <div
          className={cn(
            direction === 'right' ? 'bg-gradient-to-r' : 'bg-gradient-to-l ',
            variant === 'diamond' ? 'mr-9 ml-[19px]' : '',
            length === 'full' ? 'min-w-[100vw]' : 'min-w-5xl',
            'from-white to-transparent h-[0.2vh]'
          )}
        ></div>
      </div>
    </>
  );
}
