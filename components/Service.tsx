"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, ChevronRightCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import OtherService from "./OtherService";

type PricingCardProps = {
  title: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  description: string;
  features: string[];
  actionLabel: string;
  variant: "basic" | "pro" | "enterprise";
};


const variantStyles = {
  basic: {
    container: "border-none bg-white dark:bg-blue-950",
    title: "text-black dark:text-blue-300",
    description: "text-black-400 dark:text-gray-300",
    features: "text-black-400 dark:text-gray-400",
  },
  pro: {
    container:
      "border-none bg-gradient-to-br from-primary-100 to-white dark:bg-purple-900",
    title: "text-primary-900 dark:text-purple-300",
    description: "text-primary-900 dark:text-purple-200",
    features: "text-black dark:text-purple-400",
  },
  enterprise: {
    container: "border-none bg-green-950 dark:bg-emerald-950 text-white",
    title: "text-primary-100 dark:text-green-300",
    description: "text-primary-100 dark:text-green-200",
    features: "text-white-50 dark:text-green-400",
  },
};

const PricingCard = ({
  title,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  variant,
}: PricingCardProps) => (
  <Card
    className={cn(
      "w-[350px] flex flex-col justify-between py-1 mx-auto sm:mx-0",
      variantStyles[variant].container
    )}
  >
    <CardHeader className="pb-4 pt-4">
      <div className="flex justify-between items-center">
        <CardTitle className={cn("text-lg pb-4", variantStyles[variant].title)}>
          {title}
        </CardTitle>
      </div>
      <div className="flex items-end gap-0.5 text-base">
        <div className="flex flex-col ">
          <p>
            Activation <span className="font-medium">{monthlyPrice} FCFA</span>
          </p>
          <p>
            Renouvellement{" "}
            <span className="font-medium">{yearlyPrice} FCFA</span>
          </p>
        </div>
      </div>
      <CardDescription
        className={cn("pt-1.5 h-10", variantStyles[variant].description)}
      >
        {description}
      </CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col gap-2">
      {features.map((feature) => (
        <div key={feature} className="flex gap-2">
          <CheckCircle2 size={18} className="text-green-400" />
          <p className={cn("text-sm", variantStyles[variant].features)}>
            {feature}
          </p>
        </div>
      ))}
    </CardContent>
    <CardFooter>
      {/*       <Link href="/marketplace/checkout">
      <Button className="relative w-full rounded-md bg-black-50 text-white-50 dark:bg-white-50 dark:text-black px-6 font-medium">
        <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
        {actionLabel}
      </Button>
      </Link> */}
    </CardFooter>
  </Card>
);

export default function Pricing() {

  const plans: PricingCardProps[] = [
    {
      title: "Carte Maniaka",
      monthlyPrice: 5000,
      yearlyPrice: 10000,
      description: "Fonctionne uniquement la nuit entre 03:00-05:00",
      features: [
        "Délai d'activation : 48 h",
        "Devise : 1$ = 720 frs",
        "Frais de partenariat : 500 frs/transaction",
        "Frais de maintenance : 200 frs/transaction",
        "Frais d'utilisation de la carte : 100 frs/transaction",
        "Frais communaux : 50 frs/transaction",
        "Frais de soutien Paysikure : 58 frs",
        "Service client disponible : 18h00 - 02h00",
        "Frais de Retrait d'argent de la carte : 250 frs/transaction",
        "Frais de recharge de la carte : 150 frs",
      ],
      actionLabel: "Get Started",
      variant: "basic",
    },
    {
      title: "Carte Standard",
      monthlyPrice: 5000,
      yearlyPrice: 15000,
      description: "Fonctionne uniquement les jours ouvrables",
      features: [
        "Délai d'activation de la carte : 72 h",
        "Devise : 1 $ = 710 frs",
        "Frais de partenaire : 500 frs/transaction",
        "Frais de partenariat : 500 frs/transaction",
        "Frais de maintenance : 250 frs/transaction",
        "Frais d'utilisation de la carte : 120 frs/transaction",
        "Frais communaux : 50 frs/transaction",
        "Frais de soutien Paysikure : 58 frs",
        "Service client disponible : 18h00 - 02h00",
        "Frais de retrait d'argent de la carte : 250 frs/transaction",
        "Frais de recharge de la carte : 150 frs",
      ],
      actionLabel: "Get Started",
      variant: "pro",
    },
    {
      title: "Carte Premium",
      monthlyPrice: 10000,
      yearlyPrice: 10000,
      description: "Fonctionne tous les jours",
      features: [
        "Délai d'activation : 72 h",
        "Devise : 1$ = 710 frs",
        "Frais de partenariat : 500 frs/transaction",
        "Frais de maintenance : 250 frs/transaction",
        "Frais d'utilisation de la carte : 120 frs/transaction",
        "Frais communaux : 50 frs/transaction",
        "Frais de soutien Paysikure : 58 frs",
        "Service client disponible : 18h00 - 02h00",
        "Frais de retrait d'argent de la carte : 250 frs/transaction",
        "Frais de recharge de la carte : 150 frs",
      ],
      actionLabel: "Contact Sales",
      variant: "enterprise",
    },
  ];

  return (
    <div className="flex flex-col items-start w-full bg-gray-200 px-4 sm:px-6 md:px-8 lg:px-32 pt-28 md:pt-16">
      <div className="flex flex-col items-center w-full max-w-[1186px] mx-auto ">
        <div className="text-center mb-12">
          <p className="text-secondary-600 font-bold text-lg p-2.5 mb-2.5">
            SERVICES
          </p>
          <p className="font-medium text-xl text-gray-500 justify-center px-2.5 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
            Des personnes utilisant PaySikure pour transformer leur façon de
            payer, d&apos;acheter et de transférer de l&apos;argent.
          </p>
          <p className=" font-bold text-lg ">Cartes Virtuelles</p>
        </div>

        <div className="flex flex-wrap w-full justify-center gap-4">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
        <p className="pt-8 pb-4 font-medium">
          Les retraits d&apos;argent de vos cartes sont désormais possibles, mais
          nécessitent une validation du Directeur Général de Paysikure sous 72 h
        </p>
        <i className="">
          Notre manière de sécuriser votre argent sur nos comptes.
        </i>

        <div className="text-center my-12">
          <p className=" font-bold text-lg ">Autres services</p>
        </div>
        <OtherService/>
      </div>
    </div>
  );
}
