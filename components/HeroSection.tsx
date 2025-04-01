"use client";

import Image from "next/image";
import type React from "react";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import HeroCard from "./animata/card/hero-card";
import CaseStudyCard from "./animata/card/case-study-card";

const HeroSection: React.FC = () => {
  return (
    <section className="relative mx-auto w-full min-h-screen overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Ellipse Elements (Blurred Backgrounds) */}
        <div className="absolute w-[171px] h-[167px] left-[-86px] top-[72px] bg-[#BDFFF4] blur-[50px] rounded-full md:left-[-50px] lg:left-[-86px]" />
        <div className="absolute w-[303px] h-[292px] left-[-86px] top-[466px] bg-[#b1fff2] blur-[50px] rounded-full md:left-[-50px] lg:left-[-86px]" />
        <div className="absolute w-[219px] h-[227px] left-[759px] top-[385px] bg-[#BDFFF4] blur-[50px] rounded-full hidden md:block" />
        <div className="absolute w-[303px] h-[292px] left-[1205px] top-[139px] bg-[#C9FFF6] blur-[50px] rounded-full hidden lg:block" />

        {/* Main Content */}
        <div className="relative w-full h-full mx-auto text-center sm:text-left">
          <div className="flex flex-col w-full max-w-[1186px] mx-auto">
            {/* Download buttons section */}
            <div
              className="md:flex flex-col gap-4 absolute hidden sm:top-[236px] left-[20%] max-w-full  px-4 sm:px-0 
                            md:left-[100px] 
                            "
            >
              <Button className="flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white p-0 xl:py-6 xl:px-6 rounded-md">
                <span className="font-medium text-base xl:text-xl">
                  Telechargez maintenant
                </span>
              </Button>
              <div className="flex flex-row gap-4">
                <div className="flex items-center sm:justify-center gap-2.5 text-white rounded-xl">
                  <span className="w-5 h-5 xl:w-8 xl:h-8">
                    <Image
                      src="/images/apple2.png"
                      alt={"applestore"}
                      width={64}
                      height={64}
                    />
                  </span>
                  <span className="text-gray-800 font-medium text-md xl:text-xl">
                    AppleStore
                  </span>
                </div>
                <div className="flex w-1 h-8 border-2"></div>
                <div className="flex items-center sm:justify-center gap-2.5 text-white rounded-xl">
                  <span className="w-5 h-5 xl:w-8 xl:h-8">
                    <Image
                      src="/images/playstore.png"
                      alt={"playstore"}
                      width={64}
                      height={64}
                    />
                  </span>
                  <span className="text-gray-800 font-medium text-md xl:text-xl">
                    PlayStore
                  </span>
                </div>
              </div>
            </div>

            {/* First floating button */}
            <div
              className="z-50 relative w-full max-w-[263px] h-[44px] bg-[#ffffffab] border mx-auto 
                           mt-[550px] sm:mt-0
                           md:absolute md:left-[380px] md:top-[500px] 
                           sm:left-[calc(50%-130px)] sm:top-[500px]
                           bg-white/66 shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-full
                           sm:flex hidden"
            >
              <div className="absolute w-full max-w-[221px] h-[44px] top-0 flex flex-row justify-center items-center px-4 gap-[10px] rounded-full">
                <span className="pl-8 font-inter font-medium text-[14px] leading-[24px] text-black tracking-[-0.01em]">
                  Transparence et inclusion
                </span>
                <div className="border absolute w-[40px] h-[40px] left-0 top-[2px] bg-white rounded-full flex items-center justify-center">
                  <ArrowUpRight />
                </div>
              </div>
            </div>

            {/* Group 2 - Container for Text */}
            <div className="absolute w-full max-w-[372px] h-auto top-[113px] left-1/2 transform -translate-x-1/2 text-center md:text-justify">
              <p className="font-bold text-lg sm:text-2xl md:text-[32px] leading-[24px] sm:leading-[32px] md:leading-[44px] text-[#1E1E1E] px-4 md:px-0">
                Une Transparence totale pour Retransformer les services
                bancaires au Cameroun
              </p>
              <div className="hidden md:flex w-full pt-8 rounded-lg">
                <CaseStudyCard
                  category=""
                  image="/images/hero.jpg"
                  link="https://neero.io/fr/customer"
                  logo=""
                  title=""
                  type="content"
                />
{/*                 <Image
                  src="/images/hero.jpg"
                  alt="Hero Image"
                  width={256}
                  height={256}
                  className="mx-auto sm:w-full h-auto sm:h-[364px] rounded-lg"
                /> */}
              </div>
              <div className="flex md:hidden w-full pt-8 rounded-lg">
                <CaseStudyCard
                  category=""
                  image="/images/hero.jpg"
                  link="https://neero.io/fr/customer"
                  logo=""
                  title="How Delivery Hero streamlines marketing reports across all their brands with Clarisights"
                />
              </div>

              <div className="flex md:hidden flex-col gap-4 mt-8  max-w-full px-4 sm:px-0 ">
                <Button className="flex items-center justify-center  mx-auto bg-primary-500 hover:bg-primary-600 text-white p-2 sm:py-6 sm:px-6 rounded-md">
                  <span className="font-medium text-sm sm:text-xl">
                    Telechargez maintenant
                  </span>
                </Button>
                <div className="flex flex-row gap-4 justify-center  mx-auto">
                  <div className="flex items-center sm:justify-center gap-2.5 text-white rounded-xl">
                    <span className="w-4 h-4 sm:w-8 sm:h-8">
                      <Image
                        src="/images/apple2.png"
                        alt={"applestore"}
                        width={64}
                        height={64}
                      />
                    </span>
                    <span className="text-gray-800 font-medium text-md sm:text-xl">
                      AppleStore
                    </span>
                  </div>
                  <div className="flex w-1 h-8 border-2"></div>
                  <div className="flex items-center sm:justify-center gap-2.5 text-white rounded-xl">
                    <span className="w-4 h-4 sm:w-8 sm:h-8">
                      <Image
                        src="/images/playstore.png"
                        alt={"playstore"}
                        width={64}
                        height={64}
                      />
                    </span>
                    <span className="text-gray-800 font-medium text-md sm:text-xl">
                      PlayStore
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second floating button */}
            <div
              className="relative w-full max-w-[263px] h-[44px] bg-[#ffffffab] border mx-auto 
                           mt-4 sm:mt-0
                           md:absolute md:left-[846px] md:top-[363px]
                           sm:absolute sm:left-[calc(50%+100px)] sm:top-[363px]
                           bg-white/66 shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-full
                           sm:flex hidden"
            >
              <div className="absolute w-full max-w-[221px] h-[44px] top-0 flex flex-row justify-center items-center px-4 gap-[10px] rounded-full">
                <span className="pl-8 font-inter font-medium text-[14px] leading-[24px] text-black tracking-[-0.01em]">
                  Transparence et inclusion
                </span>
                <div className="absolute border w-[40px] h-[40px] left-0 top-[2px] bg-white rounded-full flex items-center justify-center">
                  <ArrowUpRight />
                </div>
              </div>
            </div>

            <FrameComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

const FrameComponent: React.FC = () => {
  // Array to generate the vector lines dynamically (27 lines as per your spec)
  const vectorLines = Array.from({ length: 27 }, (_, index) => {
    const topStart = 11.85; // Starting top percentage
    const bottomStart = 36.62; // Starting bottom percentage
    const increment = 1.17; // Approx increment per line based on your data
    return (
      <div
        key={index}
        className="absolute w-[95%] h-[0.5px] bg-[#1F3E39] transform -rotate-[4.48deg]"
        style={{
          top: `${topStart + index * increment}%`,
          bottom: `${bottomStart - index * increment}%`,
          left: "1.28%", // Starting left, slightly adjusted per line in original
          right: "3.7%", // Starting right, slightly adjusted per line in original
        }}
      />
    );
  });

  return (
    <div
      className="relative w-full max-w-[369px] h-[231px] mx-auto 
                   mt-4 sm:mt-0
                   lg:absolute lg:left-[993px] md:top-[454px]
                   lg:flex hidden "
    >
      <div className="absolute w-full max-w-[360px] h-[213px] left-[4px] top-[18px] bg-gradient-to-r from-[#c3faf0] via-[#92E1D4] to-[#27b5a4] rounded-lg" />

      <div className="absolute flex flex-col md:flex-row gap-4 left-[21px] top-[133px]">
        <button className="flex items-center justify-center w-[95px] h-[34px] bg-white rounded-full font-inter font-medium text-[14px] text-black">
          IMPACT
        </button>
        <button className="flex items-center justify-center w-[107px] h-[34px] bg-white rounded-full font-inter font-medium text-[14px] text-black">
          BENEFICES
        </button>
      </div>
      <p className="absolute w-[286px] left-[21px] top-[196px] font-inter font-bold text-[14px] text-green-950">
        DÉCOUVREZ NOS SOLUTIONS BANCAIRES
      </p>
      
    </div>
  );
};
