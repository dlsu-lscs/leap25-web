'use client';
import useMobileScreen from '@/hooks/useMobileScreen';
import { useEffect, useRef, useState } from 'react';

export default function LeapCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'click'>('default');
  const isMobile = useMobileScreen();

  useEffect(() => {
    let animationFrameId: number;
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        animationFrameId = requestAnimationFrame(() => {
          cursorRef.current!.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
      }
    };

    const handleDown = () => setCursorState('click');
    const handleUp = () => setCursorState('default');

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, input, textarea, select, [role='button']")) {
        setCursorState('hover');
      } else if (cursorState !== 'click') {
        setCursorState('default');
      }
    };

    window.addEventListener('mouseover', handleHover);
    return () => window.removeEventListener('mouseover', handleHover);
  }, [cursorState]);

  const cursorImage = {
    default: '/cursors/Default.webp',
    hover: '/cursors/Hover.webp',
    click: '/cursors/Click.webp',
  };

  if (!isMobile.isMobile) {
    return (
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          transition: 'transform 0.02s linear',
          willChange: 'transform',
        }}
      >
        <img src={cursorImage[cursorState]} alt="cursor" width={40} height={40} draggable={false} />
      </div>
    );
  }
}
