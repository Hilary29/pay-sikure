import React from "react";
import Image from "next/image";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  imageSrc: string;
}

const StepCard: React.FC<StepCardProps> = ({
  step,
  title,
  description,
  imageSrc,
}) => (
  <div className="flex flex-row   gap-4 w-full bg-opacity-5 justify-start ">
    <div className="relative w-2/5 h-[402px]  overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        width={512}
        height={112}
        className=" object-cover"
      />
    </div>
    <div className="flex flex-col items-start gap-1 w-2/5 pt-16">
      <h3 className="text-[#1E1E1E] font-semibold font-inter text-xl">
        {title}
      </h3>
      <p className=" text-lg">{description}</p>
    </div>
  </div>
);

const StepCard2: React.FC<StepCardProps> = ({
  step,
  title,
  description,
  imageSrc,
}) => (
  <div className="flex flex-row  gap-4 w-full  bg-primary-50 bg-opacity-5 justify-end">
    <div className="flex flex-col items-start gap-1 w-2/5 pt-16">
      <h3 className="text-[#1E1E1E] font-semibold font-inter text-xl">
        {title}
      </h3>
      <p className=" text-lg">{description}</p>
    </div>
    <div className="w-2/5 h-[402px] bg-primary-50 overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        width={512}
        height={112}
        className=" object-cover"
      />
    </div>
  </div>
);

const Services: React.FC = () => {
  const steps1 = [
    {
      title: "Cartes Visa",
      description: "Acces à des Cartes Visa virtuelles chères mais de qualité.",
      imageSrc: "/images/visa-paysikure.jpg",
    }
  ];

  const steps2 = [
    {
      title: "Transferts d'argent",
      description:
        "Faites des transferts lents mais sûres avec un délai de 1 heure.",
      imageSrc: "/images/howitwork-img3.jpg",
    }
  ];

  const steps3 = [
    {
      title: "Service client",
      description: "Service client disponible 8h/24 et 5j/7.",
      imageSrc: "/images/visa-paysikure.jpg",
    }
  ];

  const steps4 = [
    {
      title: "Frais de transaction",
      description:
        "Frais de transaction transparents.",
      imageSrc: "/images/howitwork-img3.jpg",
    }
  ];

  return (
    <section className="pt-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start max-w-[1183px]  w-full mx-auto">
        <div className="flex flex-col text-center w-full mb-14 ">
          <p className="text-secondary-600 font-bold text-lg p-2.5 mb-2.5">
          NOTRE FORCE
          </p>
          <p className="font-regular font-inter text-xl text-gray-700 justify-center px-2.5 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
          From setup to growth, PaySikure is smarter and easier in just a few
          steps.
          </p>
        </div>

        <div className="grid grid-cols-1  gap-12 w-full  ">
          {steps1.map((step, index) => (
            <StepCard
              key={index}
              step={index + 1}
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
            />
          ))}
          {steps2.map((step, index) => (
            <StepCard2
              key={index}
              step={index + 1}
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
            />
          ))}
          {steps3.map((step, index) => (
            <StepCard
              key={index}
              step={index + 1}
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
            />
          ))}
          {steps4.map((step, index) => (
            <StepCard2
              key={index}
              step={index + 1}
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
