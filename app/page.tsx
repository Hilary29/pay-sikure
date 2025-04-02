"use client";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Strength from "@/components/Strength";
import Service from "@/components/Service";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import ScrollAnimation from "@/components/ScrollAnimation";
import MovingGradient from "@/components/animata/background/moving-gradient";
import Comparison from "@/components/Comparison";
import CardGroup from "@/components/CardGroup";
import HeroSection from "@/components/HeroSection";
import HorizontalMarquee from "@/components/HorizontalMarquee";
import { ScannerDialog } from "@/components/ScannerDialog";


export default function Home() {
  return (
    <div>
{/*       <HeroSection/>  */}
      <Hero/> 
      <MovingGradient>
      <ScrollAnimation/>
      </MovingGradient>
      <Comparison/>
      <CardGroup />
      <HorizontalMarquee/>
      <Faq/>
      <Cta/>
{/*       <Contact/> */}    
    </div>
  );
}
