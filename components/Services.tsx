import React from "react";
import Image from "next/image";

interface StepCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const StepCard: React.FC<StepCardProps> = ({
  title,
  description,
  imageSrc,
}) => (
  <div className="flex flex-row   gap-4 w-full bg-opacity-5 justify-start transition-transform duration-300 ease-in-out hover:scale-110">
    <div className="relative w-2/5 h-[302px]  overflow-hidden">
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
  title,
  description,
  imageSrc,
}) => (
  <div className="flex flex-row  gap-4 w-full  bg-primary-50 bg-opacity-5 justify-end transition-transform duration-300 ease-in-out hover:scale-110">
    <div className="flex flex-col items-start gap-1 w-2/5 pt-16">
      <h3 className="text-[#1E1E1E] font-semibold font-inter text-xl">
        {title}
      </h3>
      <p className=" text-lg">{description}</p>
    </div>
    <div className="w-2/5 h-[302px]  overflow-hidden">
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
      imageSrc: "/images/transfert.png",
    }
  ];

  const steps3 = [
    {
      title: "Service client",
      description: "Service client disponible 8h/24 et 5j/7.",
      imageSrc: "/images/service-client.jpeg",
    }
  ];

  const steps4 = [
    {
      title: "Frais de transaction",
      description:
        "Frais de transaction transparents.",
      imageSrc: "/images/frais.jpeg",
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

        <div className="grid grid-cols-1  gap-0 w-full  ">
          {steps1.map((step, index) => (
            <StepCard
              key={index}
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
            />
          ))}
          {steps2.map((step, index) => (
            <StepCard2
              key={index}
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
            />
          ))}
          {steps3.map((step, index) => (
            <StepCard
              key={index}
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
            />
          ))}
          {steps4.map((step, index) => (
            <StepCard2
              key={index}
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
