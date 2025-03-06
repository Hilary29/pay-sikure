"use client"


import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Before PaySikure, I struggled to keep track of my crops and find buyers for my produce. Now, I can monitor my farm's health in real time and receive recommendations tailored to my needs. The marketplace feature has been a game-changer, letting me sell directly to buyers and earn better prices without relying on middlemen. PaySikure has truly simplified farming for me.",
    name: "Assamba Melono Medard",
    role: "Farmer from Cameroon",
  },
  {
    quote: "PaySikure's real-time data insights have revolutionized how we approach agricultural policy. The ability to analyze trends, monitor farming activities, and ensure sustainability has been invaluable in our efforts to support farmers and improve food security. The platform provides the tools we need to drive impactful change in agriculture.",
    name: "Ousmanou Oumarou Yaya",
    role: "Agricultural Researcher",
  },
  {
    quote: "PaySikure has completely changed how I buy food.I love knowing exactly where my produce comes from, thanks to the product traceability feature. It's reassuring to see the journey from farm to table. Plus, being able to support local farmers directly is a bonus—it feels good to know I'm contributing to sustainable farming practices.",
    name: "Ngono Larissa Gaëlle",
    role: "Consumer",
  },
  {
    quote: "PaySikure is a revolution for agricultural policymaking. Real-time data allows us to better understand farmer's needs and implement targeted initiatives to improve food security. It's an essential tool for developing more sustainable and resilient agriculture. ",
    name: "Thomas Ndlovu",
    role: "Agricultural Development Expert",
  },
  {
    quote: "PaySikure has completely changed how I buy food. I love knowing exactly where my produce comes from, thanks to the product traceability feature. It's reassuring to see the journey from farm to table. Plus, being able to support local farmers directly is a bonus—it feels good to know I'm contributing to sustainable farming practices.",
    name: "Fatoumata Keita",
    role: "Farmer",
  },
  {
    quote: "I feel so reassured knowing where my food comes from thanks to PaySikure. I can see exactly where each fruit or vegetable is sourced, and it makes me want to support local farmers directly. This is more than just a platform—it’s a new way to consume responsibly. I love the transparency PaySikure offers. Not only can I see the origin of my food, but I can also communicate directly with the producers. It feels amazing to contribute to sustainable farming practices while enjoying fresh, high-quality produce.",
    name: "Olivier Mbianda",
    role: "Consumer",
  },
  {
    quote: "PaySikure's digital solutions have transformed how we approach agricultural research. We can now track crop performance, analyze trends, and test modern techniques in collaboration with farmers. This connection between innovation and the field is incredible!",
    name: "Pauline Akor",
    role: "Agronomy Researcher",
  },
  {
    quote: "With PaySikure, our cooperative finally has a tool to help our members sell their produce at better prices. The real-time recommendations also help optimize agricultural yields, benefiting everyone. This platform is a true driver of transformation for local farmers.",
    name: "Ahmed El-Badry",
    role: "Agricultural Coordinator",
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
          <p className="font-regular font-inter text-xl text-gray-700 justify-center px-2.5 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
          Histoires réelles de personnes utilisant PaySikure pour transformer leur façon de payer, d'acheter et de transférer de l'argent.
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
            className={`p-2 rounded-full bg-primary-50 text-primary-900 hover:bg-primary-100 transition-colors duration-200 ${
              currentIndex === 0 && 'opacity-50 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + testimonialsPerPage >= testimonials.length}
            className={`p-2 rounded-full bg-primary-50 text-primary-900 hover:bg-primary-100 transition-colors duration-200 ${
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