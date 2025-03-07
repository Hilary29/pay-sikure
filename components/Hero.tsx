"use client";

import Image from "next/image";
import { Button } from "./ui/button";

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
          <div className="flex flex-col gap-4 max-w-[599px] pt-20 md:pt-0">
            {/* Landing Text */}
            <div>
            <div className="flex flex-col gap-10 pb-8">
              <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight font-poppins">
              Transformez votre gestion financière avec PaySikure
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-white font-normal leading-relaxed font-inter tracking-tight">
                Une coalition entre Paysika et Sekure qui vous permet d&apos;accéder à des services financiers transparents, éviter les files d&apos;attente et nous donner le contrôle de vos finances.
              </p>
            </div>
            </div>

            <div className="">
              <Button className="flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white py-6 px-6 rounded-md">
                <span className="font-poppins font-medium text-xl">
                  Telechargez maintenant
                </span>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center justify-center gap-2.5  text-white rounded-xl">
                <span className="w-8 h-8">
                  <Image
                    src="/images/apple.png"
                    alt={"applestore"}
                    width={64}
                    height={64}
                  />
                </span>
                <span className="font-poppins font-medium text-xl">
                  AppleStore
                </span>
              </div>
              <div className="w-1 h-8  border-2"></div>
              <div className="flex items-center justify-center gap-2.5   text-white rounded-xl">
                <span className="w-8 h-8">
                  <Image
                    src="/images/playstore.png"
                    alt={"playstore"}
                    width={64}
                    height={64}
                  />
                </span>
                <span className="font-poppins font-medium text-xl">
                  PlayStore
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
