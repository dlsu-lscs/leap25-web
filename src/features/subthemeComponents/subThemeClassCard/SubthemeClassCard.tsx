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
  max_slots: number;
  slug: string;
}
export default function SubThemeClassCard({
  subtheme,
  id,
  title,
  descripton,
  registered_slots,
  eventMedia,
  max_slots,
  slug,
}: SubThemeClassCardProps) {
  const [onHover, setHover] = useState(false);
  const trimmedDescription = descripton.substring(0, 80) + '...';
  return (
    <>
      <a
        href={`/${subtheme}/${slug}`}
        style={{ backgroundImage: `url(${eventMedia?.pub_url || undefined})` }}
        className={`w-[140px] sm:w-[224px] aspect-[4/5]  object-cover bg-cover  rounded-xl m-4 border-white/50 border-2 flex flex-col justify-between ${onHover ? 'bg-black/40 bg-blend-multiply transition duration-200' : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <AnimatePresence>
          {onHover ? (
            <>
              {registered_slots > max_slots * (1 / 4) ? (
                <div className="mx-5 my-4"></div>
              ) : (
                <>
                  <motion.div
                    className="mx-5 my-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <LeapTag className="text-[10px]  bg-[#01B634] rounded-2xl px-2 py-1 font-bold text-white">
                      {registered_slots > 0 ? `${registered_slots} Slots Available` : 'Event Full'}
                    </LeapTag>
                  </motion.div>
                </>
              )}
              <motion.div
                className="mx-5 my-4 space-y-1.5 -translate-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col space-y-1.5">
                  <h1 className="font-bold text-[16px] text-white">{title}</h1>
                  <div className="flex items-center space-x-1.5">
                    <p className="text-white text-[11px] w-[80vh] text-wrap">
                      {trimmedDescription}
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
