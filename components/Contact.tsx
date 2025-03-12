/* import React from 'react'
import { Button } from './ui/button'

const Contact = () => {
  return (
    <div className='max-w-[1183px] mx-auto py-16'>
        <div className="rounded-xl bg-gradient-to-r from-secondary-50 to-primary-50 p-8 md:p-10 ">
          <div className="grid md:grid-cols-2 gap-6 items-center ">
            <div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">Contactez-nous</h3>
              <p className="text-gray-400">
                Get the latest fintech insights and updates delivered straight to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="bg-white text-primary-600 hover:bg-white/90 ">Subscribe</Button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact
 */

"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler l'envoi du formulaire
    try {
      // Ici, vous intégreriez votre logique d'envoi réelle
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast("Message envoyé",
        {description: "Nous vous répondrons dans les plus brefs délais."})
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      toast(
        "Erreur",
        {description: "Une erreur est survenue lors de l'envoi du message."},
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-secondary-50 dark:bg-gray-950">
      <div className="max-w-[1186px] container mx-auto px-16">
        <div className=" mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl ">
            Nous sommes à votre écoute pour toute question ou demande d'information.<br/> Nous vous répondrons en moins de 72h.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Informations de contact */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Nos coordonnées</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-secondary-600 dark:text-blue-400 mr-4 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-gray-600 dark:text-gray-400 hover:text-primary-500 cursor-pointer">support.paysikure.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-secondary-600 dark:text-blue-400 mr-4 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Téléphone</h4>
                      <p className="text-gray-600 dark:text-gray-400">+237 612 345 678</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-secondary-600 dark:text-blue-400 mr-4 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Adresse</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        123 Avenue Capitoline
                        <br />
                        75008 Douala, Cameroun
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h4 className="font-medium mb-3">Heures d'ouverture</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lundi - Vendredi: 9h00 - 18h00
                    <br />
                    Samedi - Dimanche: Fermé
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Envoyez-nous un message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Sujet de votre message"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Votre message..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full md:w-auto border-2 border-primary-500 text-primary-500 hover:text-primary-600 bg-transparent hover:bg-[#00000023]" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        </span>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

