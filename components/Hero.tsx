"use client"

import { Apple, PlayIcon } from "lucide-react"


export default function Hero() {

  return (
    <div className="relative w-full">
      {/* Hero Background */}
      <div className="relative w-full h-[848px] md:h-[848px] lg:h-[648px] ">
        <div
          className="absolute inset-0 bg-black/30 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/hero.jpg')",
          }}
        />

        {/* Hero Content */}
        <div className="relative container mx-auto px-20 h-full flex items-center">
          <div className="flex flex-col gap-10 max-w-[599px] pt-20 md:pt-0">
            {/* Landing Text */}
            <div className="flex flex-col gap-8">
              <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight font-poppins">
                Transform Your Financial  with PaySikure
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-white font-normal leading-relaxed font-inter tracking-tight">
                Une coalition entre 
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                
              <button className="flex items-center justify-center gap-2.5 bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-xl">
                <span className="w-6 h-6">
                    <PlayIcon />
                </span>
                <span className="font-poppins font-medium text-xl">PlayStore</span>
              </button>
              <button className="flex items-center justify-center gap-2.5 bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-xl">
                <span className="w-6 h-6">
                    <Apple/>
                </span>
                <span className="font-poppins font-medium text-xl">AppleStore</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

