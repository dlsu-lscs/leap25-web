'use client';
import LeapTag from '@/components/ui/LeapTag';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { classPubModel } from '@/types/classModels';

interface SubThemeClassCardProps {
  subtheme: string;
  id: number;
  title: string;
  descripton: string;
  registered_slots: number;
  eventMedia?: classPubModel;
}
export default function SubThemeClassCard({
  subtheme,
  id,
  title,
  descripton,
  registered_slots,
  eventMedia,
}: SubThemeClassCardProps) {
  const [onHover, setHover] = useState(false);
  return (
    <>
      <a
        href={`/${subtheme}/${id}`}
        style={{ backgroundImage: `url(${eventMedia?.pub_url || undefined})` }}
        className={`h-[280px] w-[224px] bg-cover  rounded-xl m-4 border-white/50 border-2 flex flex-col justify-between ${onHover ? 'bg-black/40 bg-blend-multiply transition duration-200' : ''}`}
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
                  {registered_slots} Slots Available
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
                  <h1 className="font-bold text-[16px] text-white">{title}</h1>
                  <div className="flex items-center space-x-1.5">
                    <p className="text-white text-[11px] w-[80vh] text-wrap">{descripton}</p>
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
