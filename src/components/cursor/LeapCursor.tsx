'use client';
import { useEffect, useState } from 'react';

export default function LeapCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'click'>('default');

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
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
    default: '/cursors/Default.png',
    hover: '/cursors/Hover.png',
    click: '/cursors/Click.png',
  };

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        transition: 'transform 0.1s ease',
      }}
    >
      <img src={cursorImage[cursorState]} alt="cursor" width={40} height={40} draggable={false} />
    </div>
  );
}
