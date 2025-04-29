'use client';
import LeapTag from '@/components/ui/LeapTag';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function SubThemeClassCard() {
  const [onHover, setHover] = useState(false);
  return (
    <>
      <a
        href="/subtheme/class"
        className={`h-[448px] w-[304px] bg-[url(/encrypt.jpg)] bg-cover rounded-xl m-4 border-white border-2 flex flex-col justify-between ${onHover ? 'bg-black/40 bg-blend-multiply transition duration-200' : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <AnimatePresence>
          {onHover ? (
            <>
              <motion.div
                className="m-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <LeapTag className="text-xs  bg-[#01B634] rounded-2xl px-2 py-1 font-bold text-white">
                  {0} Slots Available
                </LeapTag>
              </motion.div>
              <motion.div
                className="m-4 space-y-1.5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex space-x-1.5 text-black">
                  <LeapTag className="bg-[#FFE600] font-bold text-xs flex items-center px-2 py-1 rounded-sm">
                    Main Event
                  </LeapTag>
                  <LeapTag className="bg-white font-bold text-xs flex items-center px-2 py-1 rounded-sm">
                    Placeholder Badge
                  </LeapTag>
                </div>
                <div>
                  <h1 className="font-bold text-2xl text-white">Event Title</h1>
                  <div className="flex items-center space-x-1.5">
                    <p className="text-white text-xs w-[80vh]">
                      Ever wondered what lies beyond coding?  Tech is more than just lines of
                      code—it's a treasure trove of untapped opportunities waiting to be
                      discovered!  From...
                    </p>
                    <ArrowCircleRightIcon
                      sx={{ fontSize: 64, color: 'white' }}
                    ></ArrowCircleRightIcon>
                  </div>
                </div>
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
      </a>
    </>
  );
}
