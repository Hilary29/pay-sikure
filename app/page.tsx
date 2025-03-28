import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Strength from "@/components/Strength";
import Service from "@/components/Service";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import ScrollAnimation from "@/components/ScrollAnimation";


export default function Home() {
  return (
    <div>
      <Hero/>
      <ScrollAnimation/>
      <Service/>
      <Strength/>
      <Blog/>
      <Testimonials/>
      <Faq/>
      <Cta/>
      <Contact/>   
    </div>
  );
}
