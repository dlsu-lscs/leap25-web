import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { FAQ_QUESTIONS } from '@/lib/data';

export default function FAQAccordion() {
  return (
    <>
      <Accordion type="single" className="space-y-3 p-4" collapsible>
        {FAQ_QUESTIONS.map((question, index) => {
          return (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-[24px] sm:text-[32px] font-bold">
                {question.question}
              </AccordionTrigger>
              <AccordionContent className="text-[16px] sm:text[24px]">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}
