"use client";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import ScrollAnimation from "@/components/ScrollAnimation";
import MovingGradient from "@/components/animata/background/moving-gradient";
import Comparison from "@/components/Comparison";
import CardGroup from "@/components/CardGroup";
import HorizontalMarquee from "@/components/HorizontalMarquee";
import { ScannerDialog } from "@/components/ScannerDialog";


export default function Home() {
  return (
    <div>
      <Hero/> 
      <MovingGradient>
      <ScrollAnimation/>
      </MovingGradient>
      <Comparison/>
      <CardGroup />
      <div className="mt-8 sm:mt-8 text-center pb-10 sm:pb-8 ">
        <ScannerDialog
          buttonClassName="rounded-lg bg-violet-600 hover:bg-violet-700 p-3 sm:py-6 sm:px-6 text-base sm:text-xl font-medium text-white"
          buttonText="Rejoins la Meilleure Application"
        />
      </div>
      <HorizontalMarquee/>
      <Faq/>
      <Cta/>   
    </div>
  );
}
