import React from "react";
import FlipCard from "./animata/card/flip-card";

// Define the shape of each card's data
interface CardData {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

// Hardcoded card data
const cards: CardData[] = [
  {
    image: "/images/neero.png",
    title: "",
    subtitle: "Neero",
    description:
      "Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks.",
  },
  {
    image: "/images/logo.png",
    title: "",
    subtitle: "Paysikure",
    description:
      "Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks.",
  },

];

const CardGroup: React.FC = () => {
  return (
    <div className="py-16">
      <div className="flex flex-wrap w-full justify-center gap-8 ">
        {cards.map((card, index) => (
          <FlipCard
            key={index} // Use index as key since data is static
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGroup;