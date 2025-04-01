/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import { Button as UIButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import TypingText from "../text/typing-text";

// Button Component
function Button({ children }: { children: React.ReactNode }) {
  return (
    <UIButton className="w-32 bg-gradient-to-r from-blue-400 to-sky-300">
      <p>{children}</p>
    </UIButton>
  );
}



// CardLabel Component
function CardLabel({ text }: { text: string }) {
  return (
    <div className="mb-3 mt-2 flex w-full justify-center rounded-xl bg-slate-800 p-2">
      <TypingText repeat={false} className="w-full self-start text-yellow-300" text={text} />
    </div>
  );
}

// Card Component
function Card({ card, index, stackAlign }: { card: string; index: number; stackAlign: boolean }) {
  const cardContent = () => {
    switch (card) {
      case "card1":
        return (
          <>
             <p>cycling replace</p>
            <CardLabel text="Cycling Card" />
          </>
        );
      case "card2":
        return (
          <>
            <p>Replace direction card</p>
            <CardLabel text="Direction Card" />
          </>
        );
      case "card3":
        return (
          <>
            <p>replace water tracker</p>
            <CardLabel text="Water Tracker" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{ boxShadow: index !== 2 ? "inset 0px -10px 30px 0px #065f46" : "none" }}
      key={index}
      className={cn(
        `absolute inset-0 text-center text-gray-800 z-${index} ${card} my-6 flex h-full w-full flex-col items-center justify-around rounded-2xl transition-all duration-700 ease-out`,
        card === "card1" && stackAlign && "ml-8 md:ml-0",
        card === "card2" && (!stackAlign ? "-rotate-[15deg]" : "-left-8 ml-8 rotate-0 md:ml-0"),
        card === "card3" && (!stackAlign ? "rotate-[15deg]" : "-left-16 ml-8 rotate-0 md:ml-0"),
        index === 0 && "scale-90 bg-emerald-900",
        index === 1 && "scale-95 bg-emerald-700",
        index === 2 && `scale-100 bg-emerald-500 ${stackAlign && "bg-teal-600"}`,
      )}
    >
      <div className="component-container mt-6 flex h-full flex-col justify-around">
        {cardContent()}
      </div>
    </div>
  );
}

// InfoContainer Component
function InfoContainer({ changeStackAlign }: { changeStackAlign: (card: string) => void }) {
  const underlinedWord = (text: string, card: string) => (
    <span
      onMouseOver={() => changeStackAlign(card)}
      className="cursor-pointer underline decoration-yellow-300 decoration-wavy"
    >
      {" "}
      {text}
    </span>
  );

  return (
    <div className="info-container flex flex-col items-center md:w-[60%] md:items-start">
      <p className="w-full animate-fadeIn text-center text-lg leading-8 text-gray-300 md:w-[80%] md:text-left">
        {underlinedWord("Beautiful", "card1")}, {underlinedWord("Functional", "card2")}
        {underlinedWord("Interactive", "card3")}
      </p>
    </div>
  );
}

// HeroCard Component
function HeroCard({ className }: { className?: string }) {
  const [stackAlign, setStackAlign] = useState(false);
  const [cardStack, setCardStack] = useState(["card3", "card2", "card1"]);

  const cardStacks: { [key: string]: string[] } = {
    card1: ["card3", "card2", "card1"],
    card2: ["card3", "card1", "card2"],
    card3: ["card1", "card2", "card3"],
  };

  const changeStackAlign = (card: string) => {
    setStackAlign(true);
    const newStack = cardStacks[card];
    if (newStack) {
      setCardStack(newStack);
    }
  };

  return (
    <div className={cn("hero-container dark:bg-teal-900", className)}>
      <div className="inner-container m-auto flex h-full w-[90%] flex-col items-center justify-around dark:bg-teal-900 md:flex-row">
        <InfoContainer changeStackAlign={changeStackAlign} />
        <div className="card-stack-container flex animate-fadeIn items-center justify-center md:m-0 md:w-[90%]">
          <div className="cards relative flex h-[350px] w-[280px] items-center justify-between md:h-[192px] md:w-[300px]">
            {cardStack.map((card, index) => (
              <Card key={index} card={card} index={index} stackAlign={stackAlign} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;