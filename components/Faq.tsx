"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
/* import { MinusCircle, PlusCircle } from 'lucide-react' */

const ToggleIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 cursor-pointer">
      {isOpen ? <></> : <></>}
    </div>
  );
};

const Faq = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleAccordion = (value: string) => {
    setOpenItem((prev) => (prev === value ? null : value));
  };

  const faqItems = [
    {
      question: "Pourquoi les frais de transaction sont aussi élevés ?",
      answer: "C'est normal, c'est la PaySikure touch.",
    },
    {
      question: "Pourquoi mon paiement est-il toujours en attente ?",
      answer: "Nous vous apprenons la patience, gratuitement.",
    },
    {
      question: "Comment contacter le service client ?",
      answer:
        "Vous ne pouvez pas. Mais nous pouvons vous contacter dans 48h ou 72h.",
    },
    {
      question: "Est ce que mes données sont en sécurité avec PaySikure?",
      answer:
        "La sécurité de vos données n'est pas une priorité chez PaySikure.",
    },
  ];

  return (
    <section
      id="faq"
      className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white-50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-secondary-600 font-bold text-lg p-2.5 mb-2.5">
            FAQs
          </p>
          <p className="font-medium text-xl text-gray-500 justify-center px-2.5 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
            Find answers to the most common questions about PaySikure and how it
            works.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full text-black-50 ">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`item-${index + 1}`}
              value={`item-${index + 1}`}
              className=""
            >
              <AccordionTrigger
                onClick={() => toggleAccordion(`item-${index + 1}`)}
                className="flex justify-between items-center text-left font-medium text-base sm:text-lg   py-4 px-2 "
              >
                {item.question}
                <ToggleIcon isOpen={openItem === `item-${index + 1}`} />
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-black-400 px-2 pb-4 ">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
