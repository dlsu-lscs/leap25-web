'use client';

import { useRef, useEffect, useState } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setMute] = useState(false);

  useEffect(() => {
    const audio = new Audio('/sounds/bg_music.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    audio.play();
    setMute(false);
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);
  return (
    <>
      <div className="fixed top-auto bottom-5 right-5 z-50">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ease-in-out"
          style={{
            background:
              'linear-gradient(black, black) padding-box, linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73) border-box',
            border: '2px solid transparent',
          }}
          onClick={() => {
            if (!isMuted) {
              audioRef.current!.volume = 0;
              setMute(true);
            } else {
              audioRef.current!.volume = 0.4;
              setMute(false);
            }
          }}
        >
          {!isMuted ? (
            <>
              <img src="/soundsAssets/Sound.png" alt="Bookmark" width="28" height="28" />
            </>
          ) : (
            <img src="/soundsAssets/Mute.png" alt="Bookmark" width="28" height="28" />
          )}
        </div>
      </div>
    </>
  );
}
