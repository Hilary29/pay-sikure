"use client"


import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Paysikure a complètement transformé la gestion de mes finances. J’envoie et reçois de l’argent en toute sécurité, et les frais sont ultra compétitifs. Une application indispensable !",
    name: "Assamba Melono Medard",
  },
  {
    quote: "Avec Paysikure, je peux enfin gérer mes paiements sans stress. L'interface est fluide et intuitive, et le support client est toujours réactif. J’adore !",
    name: "Ousmanou Oumarou Yaya",
  },
  {
    quote: "Avant, je perdais du temps avec les virements et les paiements en espèces. Avec Paysikure, tout est instantané et sécurisé. Je recommande à 100% !",
    name: "Ngono Larissa Gaëlle",
  },
  {
    quote: "J’apprécie particulièrement la transparence de Paysikure. Pas de frais cachés, et les transactions sont rapides et fiables. C’est exactement ce qu’il me fallait ! ",
    name: "Thomas Ndlovu",
  },
  {
    quote: "Gérer mes revenus de freelance n’a jamais été aussi simple ! Grâce à Paysikure, je peux facilement recevoir mes paiements et suivre mes dépenses en un clin d’œil.",
  },
  {
    quote: "Avec Paysikure, je peux enfin gérer mes paiements sans stress. L'interface est fluide et intuitive, et le support client est toujours réactif. J’adore !",
    name: "Olivier Mbianda",
  },
  {
    quote: " Paysikure a complètement transformé la gestion de mes finances. J’envoie et reçois de l’argent en toute sécurité, et les frais sont ultra compétitifs. Une application indispensable !",
    name: "Pauline Akor",
  },
  {
    quote: "Avant, je perdais du temps avec les virements et les paiements en espèces. Avec Paysikure, tout est instantané et sécurisé. Je recommande à 100% !",
    name: "Ahmed El-Badry",
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const testimonialsPerPage = 3;

  const handleNext = () => {
    if (currentIndex + testimonialsPerPage < testimonials.length) {
      setCurrentIndex(currentIndex + testimonialsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - testimonialsPerPage >= 0) {
      setCurrentIndex(currentIndex - testimonialsPerPage);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-[1183px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary-600 font-bold text-lg p-2.5 mb-2.5">
          TEMOIGNAGES
          </p>
          <p className="font-medium text-xl text-gray-500 justify-center px-2.5 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
          Des personnes utilisant PaySikure pour transformer leur façon de payer, d&apos;acheter et de transférer de l&apos;argent.
          </p>
        </div> 
        {/* Section des témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(currentIndex, currentIndex + testimonialsPerPage).map((testimonial, index) => (
            <div key={index} className="bg-primary-50 rounded-lg p-8 flex flex-col justify-between">
              <div>
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              </div>
              <div className="flex items-center">
                <div>
                  <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                </div>
              </div>
              <div className='flex flex-row-reverse '>
              <FaQuoteRight className='w-6 h-6'/>
              </div>
            </div>
          ))}
        </div>

        {/* Boutons de navigation */}
        <div className="flex justify-center mt-12 space-x-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full bg-gray-200 text-gray-900 hover:bg-gray-400 transition-colors duration-200 ${
              currentIndex === 0 && 'opacity-50 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + testimonialsPerPage >= testimonials.length}
            className={`p-2 rounded-full bg-gray-200 text-gray-900 hover:bg-gray-400 transition-colors duration-200 ${
              currentIndex + testimonialsPerPage >= testimonials.length && 'opacity-50 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}