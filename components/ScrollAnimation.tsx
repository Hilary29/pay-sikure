"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger); // Register Gsap Scroll Trigger Plugin


const colors = ["linear-gradient(0deg, #C0FFD9, #C0FFD9)" , "#003E19", "#837DFF", "#1D17AA"];
const textColor = ["#000000", "#3CFF00", "#131071FF", "#FFFFFFFF"];
const subtextColor = ["#7F7F7FFF", "#DDFFD3", "#DEDEDE", "#C9C7FF"];

const texts = [
  "Redéfinit les services financiers en plaçant la transparence et l'inclusion au cœur de sa mission.",
  "Brise les barrières pour offrir à tous un accès simple, équitable et innovant à la gestion de leur argent.",
  "Affiche les avantages sans filtre : frais clairs, inclusion garantie, pas de coûts cachés..",
  "Contrairement à notre concurrent , nous sommes une fintech qui n’a rien à dissimuler, offrant une alternative honnête et accessible à tous..",
];

const ScrollAnimation = () => {
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]); // Fix to store multiple refs

  useGSAP(() => {
    // Convert the current array of image references to a proper array for GSAP manipulation
    const images = gsap.utils.toArray(imagesRef.current) as HTMLDivElement[];

    // Iterate over each image element
    images.forEach((panel: HTMLDivElement, i: number) => {
      let scale = 1;

      // If the current image is not the last one, adjust the scale based on its index
      if (i !== images.length - 1) {
        scale = 0.9 + 0.025 * i; // Create a slight scaling effect for images based on their index
      }

      gsap.to(panel, {
        scale: scale,
        transformOrigin: "top center", // Specify the point from which the scaling transformation occurs
        ease: "none",

        // Configure the ScrollTrigger plugin for scroll-based animations
        scrollTrigger: {
          trigger: panel, // Set the current image as the trigger for the ScrollTrigger

          // Define when the animation should start based on the position of the trigger
          start: "top " + (70 + 40 * i), // Start the animation when the top of the panel is 70px down plus an offset based on index
          end: "bottom +=650px", // Define when the animation should end (bottom of the panel + 650px)
          endTrigger: ".end", // Specify the end trigger element
          pin: true, // Pin the current panel/image in place while it is being triggered
          pinSpacing: false, // Disable additional spacing around pinned elements
          scrub: true, // Enable scrub for smooth animation with scrolling
        },
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-12 mx-auto max-w-2xl py-20">
      {colors.map((color, index) => (
        <div
          key={index}
          ref={(el) => {
            imagesRef.current[index] = el;
          }}
          className=""
        >
          {/*           <div className=" w-full h-[264px] rounded-lg shadow-lg  ">
            <div
              className="relative w-full h-full rounded-md py-auto p-4"
              style={{ backgroundColor: color }}
            >


              <div
                className="absolute inset-0 rounded-md blur-md"
                style={{ backgroundColor: color, zIndex: 0 }}
              ></div>

              <div className="relative py-auto p-4" style={{ zIndex: 10 }}>
                <p className="text-black z-50 pt-16">{texts[index]}</p>
              </div>
            </div>
          </div> */}
          <div className="relative w-full h-[362px] rounded-lg shadow-lg overflow-hidden"
          style={{backgroundColor: color}}>
            {/* Blurred green background */}
            <div
              className="absolute left-[18px] top-[10px] w-[calc(100%-36px)] h-[341px] rounded-[20px]"
              style={{
                background: color,
                filter: "blur(40px)",
              }}
            />

            {/* Content container */}
            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="font-semibold text-3xl md:text-4xl tracking-tight font-poppins text-black"
                style={{color: textColor[index]}}>
                  PAYSIKURE
                </h2>
              </div>

              <div className="mb-20">
                <p className="text-xl md:text-2xl lg:text-3xl font-medium text-[#484848] tracking-tight font-inter"
                style={{color: subtextColor[index]}}>
                  {texts[index]}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="end"></div>
    </div>
  );
};

export default ScrollAnimation;
