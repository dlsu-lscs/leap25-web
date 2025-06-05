'use client';

import { useRef, useEffect, useState } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setMute] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [asked, setAsked] = useState(false);

  useEffect(() => {
    const audio = new Audio('/sounds/bg_music.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    const allowed = localStorage.getItem('bg-music-allowed');

    if (allowed === null) {
      const allowMusic = window.confirm('Do you want to enable background music?');
      setAsked(true);
      if (allowMusic) {
        audio.play();
        localStorage.setItem('bg-music-allowed', 'true');
        setHasPermission(true);
      } else {
        localStorage.setItem('bg-music-allowed', 'false');
        setHasPermission(false);
      }
    } else if (allowed === 'true') {
      audio.play();
      setHasPermission(true);
      setAsked(true);
    } else {
      setHasPermission(false);
      setAsked(true);
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handleToggle = () => {
    if (!hasPermission) {
      audioRef.current?.play();
      localStorage.setItem('bg-music-allowed', 'true');
      setHasPermission(true);
      setMute(false);
    } else {
      if (!isMuted) {
        audioRef.current!.volume = 0;
        setMute(true);
      } else {
        audioRef.current!.volume = 0.4;
        setMute(false);
      }
    }
  };

  if (!asked) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"
        style={{
          background:
            'linear-gradient(black, black) padding-box, linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73) border-box',
          border: '2px solid transparent',
        }}
        onClick={handleToggle}
      >
        <img
          src={!isMuted ? '/soundsAssets/Sound.png' : '/soundsAssets/Mute.png'}
          alt="Sound Toggle"
          width="28"
          height="28"
        />
      </div>
    </div>
  );
}
