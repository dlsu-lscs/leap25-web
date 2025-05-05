'use client';

import { useState } from 'react';

export default function SubThemeMapPicker() {
  const [subTheme, setSubTheme] = useState('');

  return (
    <>
      <div className="relative w-[100vw] h-[100vh] overflow-hidden">
        {/* Northern Star Stop */}
        <a
          href="/subtheme"
          className="absolute top-[0px] left-[100px] rounded-full w-[500px] h-[500px] bg-transparent"
          onMouseEnter={() => {
            setSubTheme('Northern Star Stop');
          }}
        ></a>

        {/* Pirates Cove */}
        <a
          href="/subtheme"
          className="absolute top-[100px] left-[590px] rounded-full w-[750px] h-[750px] bg-transparent"
          onMouseEnter={() => {
            setSubTheme('Pirates Cove');
          }}
        ></a>

        {/* Fairy Nook */}
        <a
          href="/subtheme"
          className="absolute top-[-100px] left-[1350px] rounded-full w-[550px] h-[550px] bg-transparent"
          onMouseEnter={() => {
            setSubTheme('Fairy Nook');
          }}
        ></a>

        {/* Hollow Tree Hideaway */}
        <a
          href="/subtheme"
          className="absolute top-[450px] left-[1250px] rounded-full w-[600px] h-[600px] bg-transparent"
          onMouseEnter={() => {
            setSubTheme('Hollow Tree Hideaway');
          }}
        ></a>

        {/* Coral Lagoon */}
        <a
          href="/subtheme"
          className="absolute top-[650px] left-[-60px] rounded-full w-[620px] h-[620px] bg-transparent"
          onMouseEnter={() => {
            setSubTheme('Coral Lagoon');
          }}
        ></a>
        <h1 className="text-3xl text-white">{subTheme}</h1>
      </div>
    </>
  );
}
