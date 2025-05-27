import Navbar from '@/components/layout/Navbar';

import { ScrollArea } from '@/components/ui/scroll-area';
import FAQAccordion from '@/features/faqAccordion/FAQAccordoin';

export default function FAQ() {
  return (
    <>
      <div className="sm:bg-black/0 bg-black/20 fixed top-0 z-20">
        <Navbar variant="non-map" />
      </div>
      <div
        className={`min-h-screen bg-black/60 bg-blend-multiply bg-cover bg-center 
            bg-[url('/landingBG.webp')] flex flex-col justify-center items-center font-public-sans font-medium text-white
            `}
      >
        <div
          className="flex flex-col justify-center items-center
          font-bold tracking-wide text-shadow-xl inset-shadow-xl font-playfair 
           text-[32px] sm:text-[52px] text-center mt-20 sm:mt-0 
          "
        >
          <h1 className="text-[#FBBC05]">Frequently Asked</h1>
          <h1 className="text-[#98C10E]">Questions</h1>
        </div>
        <div className="sm:hidden p-4">
          <FAQAccordion></FAQAccordion>
        </div>
        <div className="my-8 hidden sm:inline">
          <ScrollArea className="h-[500px] w-[800px]">
            <FAQAccordion></FAQAccordion>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
