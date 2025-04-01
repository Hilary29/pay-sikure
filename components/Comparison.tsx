"use client";

import { Check, Dot, X } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

interface ComparisonCriterion {
  id: string;
  name: string;
  description: string;
  paysikure: boolean;
  neero: boolean;
  category: string;
}

export default function Comparison() {
  const [activeTab, setActiveTab] = useState("all");

  const criteria: ComparisonCriterion[] = [
    {
      id: "1",
      name: "Recharge via PayPal",
      description: "",
      paysikure: true,
      neero: true,
      category: "recharges",
    },
    {
      id: "2",
      name: "Recharge par dépôts bancaire",
      description: "",
      paysikure: true,
      neero: true,
      category: "recharges",
    },
    {
      id: "3",
      name: "Paiement Douane et Impôt",
      description: "",
      paysikure: true,
      neero: true,
      category: "paiements",
    },
    {
      id: "4",
      name: "Estimator ",
      description: "",
      paysikure: true,
      neero: true,
      category: "gestion",
    },
    {
      id: "5",
      name: "Recharge via la carte",
      description:
        "Cette fonctionnalité vous permet de recharger votre compte et votre carte avec n'importe quelle carte bancaire dans le monde.",
      paysikure: true,
      neero: true,
      category: "recharges",
    },
    {
      id: "6",
      name: "Virement bancaire vers le Nigeria",
      description: "",
      paysikure: false,
      neero: true,
      category: "virements",
    },
    {
      id: "7",
      name: "Virement bancaire vers l’Europe",
      description: "",
      paysikure: false,
      neero: true,
      category: "virements",
    },
    {
      id: "8",
      name: "Partage de carte bancaire",
      description:
        "Permettez à vos collaborateurs ou vos proches de partager vos cartes bancaires en toute sécurité en leur donnant des accréditations.",
      paysikure: false,
      neero: true,
      category: "partage",
    },
    {
      id: "9",
      name: "Yara",
      description:
        "Un service de Co-abonnement qui permet de gagner de l'argent en vendant des places d'abonnements ou de faire des économies en achetant des places d’abonnement moins cher.",
      paysikure: false,
      neero: true,
      category: "partage",
    },
    {
      id: "10",
      name: "Chat&Pay",
      description: "Envoyez de l'argent sans quitter la conversation.",
      paysikure: false,
      neero: true,
      category: "paiments",
    },
    {
      id: "11",
      name: "Payme",
      description:
        "Grace a un lien recevez l'argent de vos clients quel que soit le moyen de paiement qu’ils disposent.Ce lien peut contenir un lien ou des médias qui ne s’ouvriront qu’une fois le paiement effectué.",
      paysikure: false,
      neero: true,
      category: "paiments",
    },
    {
      id: "12",
      name: "Pay2See ",
      description:
        "Envoyez et recevez du contenu intime payant  dans le CHAT&PAY.",
      paysikure: false,
      neero: true,
      category: "paiments",
    },
    {
      id: "13",
      name: "Request",
      description:
        "Demander de l’argent de la plus belle des façons en laissant un message convaincant",
      paysikure: false,
      neero: true,
      category: "paiments",
    },
    {
      id: "14",
      name: "Scan",
      description:
        " Payez, transférez de l'argent en snapant juste le QRCode de celui qui est devant vous.",
      paysikure: false,
      neero: true,
      category: "paiments",
    },
    {
      id: "15",
      name: "VAULT",
      description: "Épargnez de façons intelligente et intuitives.",
      paysikure: false,
      neero: true,
      category: "paiments",
    },
    {
      id: "16",
      name: "Outils d’aide à l'épargne",
      description:
        "Épargnez même inconsciemment en paramétrant des micro comportement d'épargne automatique sur vos VAULT.",
      paysikure: false,
      neero: true,
      category: "paiments",
    },
    {
      id: "17",
      name: "Cagnotte",
      description:
        "Collectez de l’argent de façon intelligente pour vos événements ou pour vos projets personnels.",
      paysikure: false,
      neero: true,
      category: "partage",
    },
  ];

  const categories = [
    { id: "all", name: "Toutes" },
    { id: "recharges", name: "Recharges" },
    { id: "virements", name: "Virements" },
    { id: "partage", name: "Partage d'argent" },
    { id: "paiments", name: "Paiements" },
    { id: "gestion", name: "Gestion et Epargne" },
  ];

  const filteredCriteria =
    activeTab === "all"
      ? criteria
      : criteria.filter((criterion) => criterion.category === activeTab);

  return (
    <section className="py-8 sm:py-0 px-4 max-w-[1186px] mx-auto">
      <div className="text-center mb-6 sm:mb-16">
        <p className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-violet-600 via-blue-600 to-green-500 bg-clip-text text-transparent">
          PAYSIKURE VS NEERO
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Découvrez les différences entre Paysikure et Neero pour choisir
          l&apos;application fintech qui correspond le mieux à vos besoins.
        </p>
      </div>
      <div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        <div>
          <div className="h-[186px] w-full flex items-center justify-center mb-8 ">
            <Image
              src="/images/visa-paysikure2.png"
              alt="logo"
              width={264}
              height={126}
            />
          </div>
          <Card className="border-0 shadow-md overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-secondary-500 to-primary-500"></div>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center text-lg sm:text-3xl">
                <div className="h-10 w-10 sm:h-16 sm:w-16 rounded-full flex items-center justify-center mr-2">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={164}
                    height={164}
                  />
                </div>
                Paysikure
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm"></CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
              <table className=" w-full">
                <tbody>
                  <tr className="align-middle">
                    <td className="w-1/2 pb-2">
                      <div className="flex items-center">
                        <Dot className="h-4 w-4 sm:h-10 sm:w-10 text-green-600 flex-shrink-0" />
                        <span className="text-xl font-semibold ">
                          Prix de la carte
                        </span>
                      </div>
                    </td>
                    <td className="w-1/2 pb-2  ">
                      <div className="flex items-center my-auto ">
                        <span className="text-xl font-bold text-primary-600">
                          3000 FCFA
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="w-1/2 pb-2">
                      <div className="flex items-center">
                        <Dot className="h-4 w-4 sm:h-10 sm:w-10 text-green-600 flex-shrink-0" />
                        <span className="text-xl font-semibold ">
                          Recharge de la carte
                        </span>
                      </div>
                    </td>
                    <td className="w-1/2 pb-2  ">
                      <div className="flex items-center my-auto ">
                        <span className="text-xl font-bold text-primary-600">
                          500 FCFA
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="w-1/2 pb-2">
                      <div className="flex items-center">
                        <Dot className="h-4 w-4 sm:h-10 sm:w-10 text-green-600 flex-shrink-0" />
                        <span className="text-xl font-semibold ">
                          Frais de transaction
                        </span>
                      </div>
                    </td>
                    <td className="w-1/2 pb-2  ">
                      <div className="flex items-center my-auto ">
                        <span className="text-xl font-bold text-primary-600">
                          1.79 %
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="w-1/2 pb-2">
                      <div className="flex items-center">
                        <Dot className="h-4 w-4 sm:h-10 sm:w-10 text-green-600 flex-shrink-0" />
                        <span className="text-xl font-semibold ">
                          {" "}
                          Frais partenaire
                        </span>
                      </div>
                    </td>
                    <td className="w-1/2 pb-2  ">
                      <div className="flex items-center my-auto ">
                        <span className="text-xl font-bold text-primary-600">
                          Au moins 500 FCFA
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="w-1/2 pb-2">
                      <div className="flex items-center">
                        <Dot className="h-4 w-4 sm:h-10 sm:w-10 text-green-600 flex-shrink-0" />
                        <span className="text-xl font-semibold ">
                          Retrait d&apos;argent sur carte
                        </span>
                      </div>
                    </td>
                    <td className="w-1/2 pb-2  ">
                      <div className="flex items-center my-auto ">
                        <span className="text-xl font-bold text-primary-600">
                          Gratuit
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
          <div className="flex items-center pt-8 ">
            <span className="text-2xl font-bold text-primary-600">
              Obtiens ta carte en 30 Minutes.
            </span>
          </div>
        </div>

        <div>
        <div className="h-[186px] w-full flex items-center justify-center mb-8  ">
            <Image
              src="/images/visa-paysikure2.png"
              alt="logo"
              width={264}
              height={126}
              className=""
            />
          </div>
          <Card className="border-0 shadow-md overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-violet-500 to-blue-500"></div>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center text-lg sm:text-3xl">
                <div className="h-10 w-10 sm:h-16 sm:w-16 rounded-full flex items-center justify-center mr-2">
                  <Image
                    src="/images/neero.png"
                    alt="logo"
                    width={164}
                    height={164}
                    className="rounded-lg"
                  />
                </div>
                Neero
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm"></CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
              <table className=" w-full">
                <tbody>
                  <tr className="align-middle">
                    <td className="w-1/2 pb-2">
                      <div className="flex items-center">
                        <Dot className="h-4 w-4 sm:h-10 sm:w-10 text-violet-600 flex-shrink-0" />
                        <span className="text-xl font-semibold ">
                          Prix de la carte
                        </span>
                      </div>
                    </td>
                    <td className="w-1/2 pb-2  ">
                      <div className="flex items-center my-auto ">
                        <span className="text-xl font-bold text-violet-700">
                          0 FCFA
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="w-1/2 pb-2">
                      <div className="flex items-center">
                        <Dot className="h-4 w-4 sm:h-10 sm:w-10 text-violet-600 flex-shrink-0" />
                        <span className="text-xl font-semibold ">
                          Recharge de la carte
                        </span>
                      </div>
                    </td>
                    <td className="w-1/2 pb-2  ">
                      <div className="flex items-center my-auto ">
                        <span className="text-xl font-bold text-violet-700">
                          0 FCFA
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="w-1/2 pb-2">
                      <div className="flex items-center">
                        <Dot className="h-4 w-4 sm:h-10 sm:w-10 text-violet-600 flex-shrink-0" />
                        <span className="text-xl font-semibold ">
                          Frais de transaction
                        </span>
                      </div>
                    </td>
                    <td className="w-1/2 pb-2  ">
                      <div className="flex items-center my-auto ">
                        <span className="text-xl font-bold text-violet-700">
                          1.5 %
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="w-1/2 pb-2">
                      <div className="flex items-center">
                        <Dot className="h-4 w-4 sm:h-10 sm:w-10 text-violet-600 flex-shrink-0" />
                        <span className="text-xl font-semibold ">
                          Frais partenaire
                        </span>
                      </div>
                    </td>
                    <td className="w-1/2 pb-2  ">
                      <div className="flex items-center my-auto ">
                        <span className="text-xl font-bold text-violet-700">
                          Moins de 350 FCFA
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="w-1/2 pb-2">
                      <div className="flex items-center">
                        <Dot className="h-4 w-4 sm:h-10 sm:w-10 text-violet-600 flex-shrink-0" />
                        <span className="text-xl font-semibold ">
                          Retrait d&apos;argent sur carte
                        </span>
                      </div>
                    </td>
                    <td className="w-1/2 pb-2  ">
                      <div className="flex items-center my-auto ">
                        <span className="text-xl font-bold text-violet-700">
                          Gratuit
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
          <div className="flex items-center pt-8 ">
            <span className="text-2xl font-bold text-violet-700">
              Obtiens ta carte en 2 Minutes
            </span>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center ">
        <button className="text-white bg-violet-600 hover:bg-violet-700 text-xl font-medium px-4 py-3 rounded-lg">
          Rejoins la Meilleure Application
        </button>
      </div>

      <div className="border-0 shadow-lg my-8 sm:my-28 overflow-hidden">
        <div className="p-4 sm:p-6">
          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full "
          >
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mb-8 gap-2 overflow-x-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-base py-0 sm:text-lg whitespace-nowrap data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:via-blue-500 data-[state=active]:to-green-500 data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left text-lg py-4 px-2 sm:px-4 font-medium text-gray-500">
                        Fonctionnalité
                      </th>
                      <th className="text-center py-4 px-2 sm:px-4 w-1/4">
                        <div className="flex flex-col items-center">
                          <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full flex items-center justify-center mb-2">
                            <Image
                              src="/images/logo.png"
                              alt="logo"
                              width={164}
                              height={164}
                            />
                          </div>
                          <span className="font-semibold text-xs sm:text-base">
                            Paysikure
                          </span>
                        </div>
                      </th>
                      <th className="text-center py-4 px-2 sm:px-4 w-1/4">
                        <div className="flex flex-col items-center">
                          <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-lg flex items-center justify-center mb-2">
                            <Image
                              src="/images/neero.png"
                              alt="logo"
                              width={164}
                              height={164}
                              className="rounded-lg"
                            />
                          </div>
                          <span className="font-semibold text-xs sm:text-base">
                            Neero
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCriteria.map((criterion, index) => (
                      <tr
                        key={criterion.id}
                        className={`border-b ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="py-3 sm:py-4 px-2 sm:px-4 font-medium text-xs sm:text-lg">
                          {criterion.name}
                        </td>
                        <td className="text-center py-3 sm:py-4 px-2 sm:px-4">
                          {criterion.paysikure ? (
                            <div className="flex justify-center">
                              <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-red-100 flex items-center justify-center">
                                <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                              </div>
                            </div>
                          )}
                        </td>
                        <td className="text-center py-3 sm:py-4 px-2 sm:px-4">
                          {criterion.neero ? (
                            <div className="flex justify-center">
                              <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-red-100 flex items-center justify-center">
                                <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                              </div>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
