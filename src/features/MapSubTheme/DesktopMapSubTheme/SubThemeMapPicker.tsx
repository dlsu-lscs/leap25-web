'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TransitionLink from '@/components/ui/transitionLink';
import { cn } from '@/lib/utils';

// Define the type for static images
const subthemes = [
  {
    positionX: 3,
    positionY: 60,
    src: '/landmarks/CoralLagoon.png',
    circleLogo: '/subthemeLogos/CoralLagoon.png',
    alt: 'Coral Lagoon',
    route: 'coral-lagoon',
  },
  {
    positionX: 43,
    positionY: 39,
    src: '/landmarks/PiratesCove.png',
    circleLogo: '/subthemeLogos/PiratesCove.png',
    alt: 'Pirates Cove',
    route: 'pirates-cove',
  },
  {
    positionX: 11,
    positionY: 5,
    src: '/landmarks/NorthernStarStop.png',
    circleLogo: '/subthemeLogos/NorthernStarStop.png',
    alt: 'Northern Star Stop',
    route: 'northern-star-stop',
  },
  {
    positionX: 64,
    positionY: 52,
    src: '/landmarks/HollowTreeHideaway.png',
    circleLogo: '/subthemeLogos/HollowTreeHideaway.png',
    alt: 'Hollow Tree Hideaway',
    route: 'hollow-tree-hideaway',
  },
  {
    positionX: 78,
    positionY: 11,
    src: '/landmarks/FairyNook.png',
    circleLogo: 'subthemeLogos/FairyNook.png',
    alt: 'Fairy Nook',
    route: 'fairy-nook',
  },
];
export default function ParallaxBackground({ className = '' }: { className?: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const strength = 50;
  const [bgImageDims, setBgImageDims] = useState({ width: 0, height: 0 });
  const [viewportDims, setViewportDims] = useState({ width: 0, height: 0 });
  const [hoveredButtonIndex, setHoveredButtonIndex] = useState<number | null>(null); // Added state for hover

  useEffect(() => {
    const imgEl = new window.Image();
    imgEl.onload = () => {
      setBgImageDims({ width: imgEl.naturalWidth, height: imgEl.naturalHeight });
    };
    imgEl.src = '/map/LEAP_MAP.webp';

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setPosition({ x, y });
    };

    const updateViewportDims = () => {
      setViewportDims({ width: window.innerWidth, height: window.innerHeight });
    };

    updateViewportDims(); // Initial dimensions
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', updateViewportDims);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateViewportDims);
    };
  }, []);

  const translateX = -position.x * strength;
  const translateY = -position.y * strength;

  // Variables for scaled image dimensions and offsets
  let Wi = 0,
    Hi = 0; // Scaled width and height of the background image after 'cover'
  let imageRenderedLeft = 0,
    imageRenderedTop = 0; // Top-left offset of the rendered bg image content

  if (
    bgImageDims.width > 0 &&
    bgImageDims.height > 0 &&
    viewportDims.width > 0 &&
    viewportDims.height > 0
  ) {
    const Wc = viewportDims.width + 2 * strength; // Container width
    const Hc = viewportDims.height + 2 * strength; // Container height

    const imageAspectRatio = bgImageDims.width / bgImageDims.height;
    const containerAspectRatio = Wc / Hc;

    if (imageAspectRatio > containerAspectRatio) {
      Hi = Hc;
      Wi = Hc * imageAspectRatio;
    } else {
      Wi = Wc;
      Hi = Wc / imageAspectRatio;
    }

    const Px_norm = (position.x + 1) / 2; // Normalized mouse X (0 to 1)
    const Py_norm = (position.y + 1) / 2; // Normalized mouse Y (0 to 1)

    imageRenderedLeft = Px_norm * (Wc - Wi);
    imageRenderedTop = Py_norm * (Hc - Hi);
  }

  return (
    <div
      style={{ position: 'fixed' }}
      className={`relative overflow-hidden w-[100vw] h-[100vh] top-0 left-0 ${className}`}
    >
      {/* Main background image */}
      <div
        className="absolute inset-0 transition-transform duration-200 ease-out"
        style={{
          width: `calc(100% + ${2 * strength}px)`,
          height: `calc(100% + ${2 * strength}px)`,
          top: `-${strength}px`,
          left: `-${strength}px`,
          backgroundImage: `url(/map/LEAP_MAP.webp)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat', // Added for good practice
          backgroundPosition: `${((position.x + 1) / 2) * 100}% ${((position.y + 1) / 2) * 100}%`, // Dynamic background position
          transform: `translate(${translateX}px, ${translateY}px)`, // Ensure no scale(1.1) here
        }}
      />

      {/* Static images that move with the background */}
      {subthemes.map((img, index) => {
        let finalSubthemeLeft = 0;
        let finalSubthemeTop = 0;

        if (Wi > 0 && Hi > 0) {
          // Ensure Wi and Hi are calculated
          const subthemeBaseXOnScaledBg = (img.positionX / 100) * Wi;
          const subthemeBaseYOnScaledBg = (img.positionY / 100) * Hi;

          finalSubthemeLeft = imageRenderedLeft + subthemeBaseXOnScaledBg;
          finalSubthemeTop = imageRenderedTop + subthemeBaseYOnScaledBg;
        }

        return (
          <div
            key={index}
            className="absolute transition-transform duration-200 ease-out" // Consider transition-all if left/top changes should also be smooth
            style={{
              left: `${finalSubthemeLeft}px`,
              top: `${finalSubthemeTop}px`,
              transform: `translate(${translateX}px, ${translateY}px)`,
              zIndex: 5,
            }}
            onMouseLeave={() => setHoveredButtonIndex(null)} // Hide image when hover ends
            onMouseEnter={() => setHoveredButtonIndex(index)} // Show image on hover
          >
            <TransitionLink
              href={`/${img.route}`}
              className="lg:!w-[500px] lg:!h-[500px] w-96 h-96 flex" // Removed hover:hidden
            >
              {/* Image is now always rendered, opacity and bounce are conditional */}
              <Image
                src={img.src || '/placeholder.svg'}
                alt={img.alt}
                width={200}
                height={200}
                className={`
                  transition-opacity duration-300 ease-in-out absolute
                  ${hoveredButtonIndex === index ? 'opacity-100' : 'opacity-50 pointer-events-none'}
                  ${hoveredButtonIndex === index ? 'animate-bounce' : ''}
                `}
              />
              <div
                className={cn(
                  'absolute top-35 left-5 w-36 h-16 transition-opacity ease-in-out duration-600',
                  hoveredButtonIndex === index ? 'opacity:100' : 'opacity-0'
                )}
              >
                <img
                  src={img.circleLogo}
                  alt="subtheme logo"
                  className="w-12 h-12 absolute z-10 top-1/2 -translate-y-1/2"
                />
                <div className="bg-black/50 w-32 pl-9 font-bold flex items-center h-10 absolute right-0 top-1/2 -translate-y-1/2 text-[#E2C45D] text-xs font-playfair">
                  {img.alt}
                </div>
              </div>
            </TransitionLink>
          </div>
        );
      })}
    </div>
  );
}
