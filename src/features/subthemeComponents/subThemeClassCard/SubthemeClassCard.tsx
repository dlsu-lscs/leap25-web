'use client';
import LeapTag from '@/components/ui/LeapTag';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export default function SubThemeClassCard() {
  const [onHover, setHover] = useState(false);
  return (
    <>
      <a
        href="/subtheme/class"
        className={`h-[280px] w-[224px] bg-[url(/encrypt.jpg)] bg-cover  rounded-xl m-4 border-white/50 border-2 flex flex-col justify-between ${onHover ? 'bg-black/40 bg-blend-multiply transition duration-200' : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <AnimatePresence>
          {onHover ? (
            <>
              <motion.div
                className="mx-5 my-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <LeapTag className="text-[10px]  bg-[#01B634] rounded-2xl px-2 py-1 font-bold text-white">
                  {0} Slots Available
                </LeapTag>
              </motion.div>
              <motion.div
                className="mx-5 my-4 space-y-1.5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <h1 className="font-bold text-[16px] text-white">Event Title</h1>
                  <div className="flex items-center space-x-1.5">
                    <p className="text-white text-[11px] w-[80vh] text-wrap">
                      Ever wondered what lies beyond coding?  Tech is more than just lines of
                      code—it's a treasure trove of untapped opportunities waiting to be
                      discovered!  From...
                    </p>
                    <ArrowCircleRightOutlinedIcon
                      sx={{ fontSize: 48, color: 'white' }}
                    ></ArrowCircleRightOutlinedIcon>
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
