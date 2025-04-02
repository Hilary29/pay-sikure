"use client";

import Image from "next/image";
import { ScannerDialog } from "./ScannerDialog";

export default function Hero() {
  return (
    <div className="relative w-full">
      {/* Hero Background */}
      <div className="relative w-full h-[548px] md:h-[848px] lg:h-[648px] ">
        <div
          className="absolute inset-0 bg-black/30 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/hero.jpg')",
          }}
        />

        {/* Hero Content */}
        <div className="relative container  mx-auto px-8 sm:px-20 h-[600px] md:h-full flex items-center">
          <div className="flex flex-col gap-4  md:w-full max-w-[599px] pt-2 md:pt-0">
            {/* Landing Text */}
            <div>
            <div className="flex flex-col gap-10 pb-8">
              <p className="text-2xl  lg:text-4xl font-semibold text-white leading-relaxed   ">
              Une Transparence totale pour retransformer les services bancaires au Cameroun.
              </p>
              <p className="text-md md:text-xl lg:text-2xl text-white font-normal leading-relaxed font-inter tracking-tight">
              Paysikure redéfinit les services financiers en plaçant la transparence et l&apos;inclusion au cœur de sa mission.
              </p>
            </div>
            </div>

            <div className="">
            <ScannerDialog buttonClassName="flex items-center text-base sm:text-lg font-medium justify-center bg-primary-500 hover:bg-primary-600 text-white p-2 sm:py-6 sm:px-6 rounded-md" buttonText="Télécharger Maintenant" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center sm:justify-center gap-2.5  text-white rounded-xl">
                <span className="w-5 h-5 sm:w-8 sm:h-8">
                  <Image
                    src="/images/apple.png"
                    alt={"applestore"}
                    width={64}
                    height={64}
                  />
                </span>
                <span className="font-poppins font-medium text-md sm:text-xl">
                  AppleStore
                </span>
              </div>
              <div className="hidden md:flex w-1 h-8  border-2"></div>
              <div className="flex items-center sm:justify-center gap-2.5   text-white rounded-xl">
                <span className="w-5 h-5 sm:w-8 sm:h-8">
                  <Image
                    src="/images/playstore.png"
                    alt={"playstore"}
                    width={64}
                    height={64}
                  />
                </span>
                <span className="font-poppins font-medium text-md sm:text-xl">
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
