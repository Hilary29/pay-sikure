import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Services/>
      <Testimonials/>
      <Faq/>
      <Cta/>
      <Footer/>
    </div>
  );
}
