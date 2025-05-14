import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { FAQ_QUESTIONS } from '@/lib/constants';

export default function FAQAccordion() {
  return (
    <>
      <Accordion type="single" className="space-y-3 p-4" collapsible>
        {FAQ_QUESTIONS.map((question, index) => {
          return (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-[16px] sm:text-[24px]">
                {question.question}
              </AccordionTrigger>
              <AccordionContent>{question.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}
