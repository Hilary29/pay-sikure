"use client"

import { Check, X } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ComparisonCriterion {
  id: string
  name: string
  paysikure: boolean
  neero: boolean
  category: string
}

export default function Comparison() {
  const [activeTab, setActiveTab] = useState("all")

  const criteria: ComparisonCriterion[] = [
    { id: "1", name: "Transferts instantanés", paysikure: true, neero: true, category: "paiements" },
    { id: "2", name: "Paiements internationaux", paysikure: true, neero: false, category: "paiements" },
    { id: "3", name: "Paiement sans frais", paysikure: false, neero: true, category: "paiements" },
    { id: "4", name: "Paiement par QR code", paysikure: true, neero: true, category: "paiements" },
    { id: "5", name: "Carte virtuelle", paysikure: true, neero: true, category: "cartes" },
    { id: "6", name: "Carte physique", paysikure: true, neero: false, category: "cartes" },
    { id: "7", name: "Personnalisation de carte", paysikure: false, neero: true, category: "cartes" },
    { id: "8", name: "Épargne automatique", paysikure: false, neero: true, category: "epargne" },
    { id: "9", name: "Objectifs d'épargne", paysikure: true, neero: true, category: "epargne" },
    { id: "10", name: "Investissements", paysikure: false, neero: true, category: "epargne" },
    { id: "11", name: "Authentification biométrique", paysikure: true, neero: true, category: "securite" },
    { id: "12", name: "Notifications en temps réel", paysikure: true, neero: true, category: "securite" },
    { id: "13", name: "Gel de compte instantané", paysikure: true, neero: false, category: "securite" },
    { id: "14", name: "Support client 24/7", paysikure: false, neero: true, category: "support" },
    { id: "15", name: "Chat en direct", paysikure: true, neero: true, category: "support" },
  ]

  const categories = [
    { id: "all", name: "Toutes les fonctionnalités" },
    { id: "paiements", name: "Paiements" },
    { id: "cartes", name: "Cartes" },
    { id: "epargne", name: "Épargne" },
    { id: "securite", name: "Sécurité" },
    { id: "support", name: "Support" },
  ]

  const filteredCriteria =
    activeTab === "all" ? criteria : criteria.filter((criterion) => criterion.category === activeTab)

  return (
    <section className="py-8 sm:py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-violet-600 via-blue-600 to-green-500 bg-clip-text text-transparent">
          Comparaison des applications
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Découvrez les différences entre Paysikure et Neero pour choisir l&apos;application fintech qui correspond le mieux
          à vos besoins.
        </p>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-green-500/10 rounded-t-lg p-4 sm:p-6">
          <CardTitle className="text-xl sm:text-2xl text-center">Paysikure vs Neero</CardTitle>
          <CardDescription className="text-center text-sm">Tableau comparatif des fonctionnalités</CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-8 gap-1 overflow-x-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-xs sm:text-sm whitespace-nowrap data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:via-blue-500 data-[state=active]:to-green-500 data-[state=active]:text-white"
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
                      <th className="text-left py-4 px-2 sm:px-4 font-medium text-gray-500">Fonctionnalité</th>
                      <th className="text-center py-4 px-2 sm:px-4 w-1/4">
                        <div className="flex flex-col items-center">
                          <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-violet-600 flex items-center justify-center mb-2">
                            <span className="text-white font-bold">P</span>
                          </div>
                          <span className="font-semibold text-xs sm:text-base">Paysikure</span>
                        </div>
                      </th>
                      <th className="text-center py-4 px-2 sm:px-4 w-1/4">
                        <div className="flex flex-col items-center">
                          <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-blue-600 flex items-center justify-center mb-2">
                            <span className="text-white font-bold">N</span>
                          </div>
                          <span className="font-semibold text-xs sm:text-base">Neero</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCriteria.map((criterion, index) => (
                      <tr key={criterion.id} className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                        <td className="py-3 sm:py-4 px-2 sm:px-4 font-medium text-xs sm:text-sm">{criterion.name}</td>
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
        </CardContent>
      </Card>

      <div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <Card className="border-0 shadow-md overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-violet-500 to-blue-500"></div>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="flex items-center text-lg sm:text-xl">
              <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-violet-600 flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xs">P</span>
              </div>
              Paysikure
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Idéal pour les transferts internationaux et la sécurité
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-center">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2 flex-shrink-0" />
                <span>Excellente sécurité des transactions</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2 flex-shrink-0" />
                <span>Options de cartes physiques et virtuelles</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2 flex-shrink-0" />
                <span>Transferts internationaux optimisés</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-blue-500 to-green-500"></div>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="flex items-center text-lg sm:text-xl">
              <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-blue-600 flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xs">N</span>
              </div>
              Neero
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Parfait pour l&apos;épargne et les investissements
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-center">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2 flex-shrink-0" />
                <span>Options d&apos;épargne et d&apos;investissement avancées</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2 flex-shrink-0" />
                <span>Support client disponible 24/7</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2 flex-shrink-0" />
                <span>Paiements sans frais entre utilisateurs</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

