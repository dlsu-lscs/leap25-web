import Navbar from '@/components/layout/Navbar';
import AuthRedirectProvider from '@/context/authRedirectProvider';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';

const dummyData = [
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?',
    answer:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?',
    answer:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?',
    answer:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?',
    answer:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?',
    answer:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?',
    answer:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?',
    answer:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?',
    answer:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?',
    answer:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?',
    answer:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

export default function FAQ() {
  return (
    <>
      <AuthRedirectProvider>
        <div className="fixed top-0 z-20">
          <Navbar />
        </div>
        <div
          className={`min-h-screen bg-black/60 bg-blend-multiply bg-cover bg-center 
            bg-[url('/landingBG.webp')] flex flex-col justify-center items-center font-public-sans font-medium text-white
            `}
        >
          <div
            className="flex flex-col justify-center items-center
          font-bold tracking-wide text-shadow-xl inset-shadow-xl font-playfair text-[52px] 
          "
          >
            <h1 className="text-[#FBBC05]">Frequently Asked</h1>
            <h1 className="text-[#98C10E]">Questions</h1>
          </div>
          <div className="my-12">
            <ScrollArea className="h-[400px] w-[800px] p-4">
              <Accordion type="single" className="space-y-3" collapsible>
                {dummyData.map((question, index) => {
                  return (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-[24px]">
                        {question.question}
                      </AccordionTrigger>
                      <AccordionContent>{question.answer}</AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </ScrollArea>
          </div>
        </div>
      </AuthRedirectProvider>
    </>
  );
}
