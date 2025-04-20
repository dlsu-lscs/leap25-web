import { useEffect, useState } from 'react';

/**
 *
 * @returns state variable isMobile for detecting width of screen size
 */
export default function useMobileScreen() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to handle screen size detection
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // 768px is standard md breakpoint
  };

  useEffect(() => {
    // Check initial screen size
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile };
}
