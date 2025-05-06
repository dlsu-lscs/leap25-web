'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function SubThemeMapPicker() {
  const [subTheme, setSubTheme] = useState<string>('');
  const [onHover, setHover] = useState(false);

  return (
    <>
      <div className="relative w-[100vw] h-[100vh] overflow-hidden">
        {/* Northern Star Stop */}
        <div className="fixed z-0">
          <a
            href="/subtheme"
            className="fixed top-[0%] left-[6%] rounded-full w-[32vw] h-[32vw] bg-transparent"
            onMouseEnter={() => {
              setSubTheme('NorthernStarStop');
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            {onHover && subTheme == 'NorthernStarStop' ? (
              <>
                <Image
                  src="/landmarks/NorthernStarStop.png"
                  width={150}
                  height={150}
                  alt="Northern Star Stop Landmark"
                  className="fixed -top-[2.5%] left-[15%] animate-bounce"
                  priority
                />
              </>
            ) : null}
          </a>

          {/* Pirates Cove */}
          <a
            href="/subtheme"
            className="fixed top-[10%] left-[30%] rounded-full w-[40vw] h-[40vw] bg-transparent"
            onMouseEnter={() => {
              setSubTheme('PiratesCove');
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            {onHover && subTheme == 'PiratesCove' ? (
              <>
                <Image
                  src="/landmarks/PiratesCove.png"
                  width={150}
                  height={150}
                  alt="Pirates Cove Landmark"
                  className="fixed top-[31%] left-[46.5%] animate-bounce"
                  priority
                />
              </>
            ) : null}
          </a>

          {/* Fairy Nook */}
          <a
            href="/subtheme"
            className="fixed -top-[8%] left-[68%] rounded-full w-[32vw] h-[32vw] bg-transparent"
            onMouseEnter={() => {
              setSubTheme('FairyNook');
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            {onHover && subTheme == 'FairyNook' ? (
              <>
                <Image
                  src="/landmarks/FairyNook.png"
                  width={150}
                  height={150}
                  alt="Fairy Nook Landmark"
                  className="fixed -top-[2%] left-[84%] animate-bounce"
                  priority
                />
              </>
            ) : null}
          </a>

          {/* Hollow Tree Hideaway */}
          <a
            href="/subtheme"
            className="fixed top-[44%] left-[65%] rounded-full w-[32vw] h-[32vw] bg-transparent"
            onMouseEnter={() => {
              setSubTheme('HollowTreeHideaway');
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            {onHover && subTheme == 'HollowTreeHideaway' ? (
              <>
                <Image
                  src="/landmarks/HollowTreeHideaway.png"
                  width={150}
                  height={150}
                  alt="Hollow Tree Hideaway Landmark"
                  className="fixed top-[64.5%] left-[67.2%] animate-bounce"
                  priority
                />
              </>
            ) : null}
          </a>

          {/* Coral Lagoon */}
          <a
            href="/subtheme"
            className="fixed top-[65%] left-[0%] rounded-full w-[32vw] h-[32vw] bg-transparent"
            onMouseEnter={() => {
              setSubTheme('CoralLagoon');
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            {onHover && subTheme == 'CoralLagoon' ? (
              <>
                <Image
                  src="/landmarks/CoralLagoon.png"
                  width={150}
                  height={150}
                  alt="Coral Lagoon Landmark"
                  className="fixed top-[73%] left-[7%] animate-bounce"
                  priority
                />
              </>
            ) : null}
          </a>
        </div>
      </div>
    </>
  );
}
