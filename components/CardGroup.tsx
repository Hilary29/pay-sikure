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
    image: "/images/Icon-Paysikure.png",
    title: "",
    subtitle: "Paysikure",
    description:
      "Nous nous positionnons comme une \"simple\" application visant à simplifier les transactions financières.",
  },
  {
    image: "/images/neero.png",
    title: "",
    subtitle: "Neero",
    description:
      "Neero se positionne comme une \"super-app\" financière tout-en-un, visant à simplifier la vie des utilisateurs avec une large gamme de services. L’accent est mis sur l’innovation et la commodité pour un public global et technophile.",
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