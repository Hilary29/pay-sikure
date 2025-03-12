import {
  ArrowRight,
  BarChart,
  Zap,
  CheckCircle2,
  Share,
  Share2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MdSecurity } from "react-icons/md";
import { BiMoney, BiTransfer } from "react-icons/bi";

export default function OtherService() {
  const services = [
    {
      icon: <BiMoney className="h-12 w-12 text-green-800" />,
      title: "Epargne",
      description:
        "Economisez de l'argent efficacement.",
      features: [
        "Intérêt : 50 %",
        "Frais de soutien Paysikure : 0 FCFA",
        "Frais de sécurité : 0 FCFA",
        "Possibilité de retrait d'argent : 1 an sur validation du DG de Paysikure",
      ],
      link: "/services/digital-marketing",
    },
    {
      icon: <BiTransfer className="h-12 w-12 text-rose-600" />,
      title: "Transfert d'argent",
      description:
        "Transfert facile d'argent OM, MOMO.",
      features: [
        "Frais d'envoi : 150 FCFA/transaction",
        "Frais de soutien Paysikure : 58 FCFA",
        "Délai de réception : 24 h",
        "Frais de retrait : 250 FCFA/transaction",
      ],
      link: "/services/ux-ui-design",
    },
    {
        icon: <MdSecurity className="h-12 w-12 text-yellow-600" />,
        title: "NIU",
        description:
          "Obtenez votre Numéro d'Identifiant Unique ",
          features: [
              "Frais : 3 500 FCFA",
              "Frais de soutien Paysikure : 58 FCFA",
              "Main-d'œuvre : 500 FCFA",
              "Délai de livraison : 72 h",
            ],
        link: "/services/ux-ui-design",
      },
  ];

  return (
    <section className="pt-4 px-4  dark:bg-gray-900">
      <div className="max-w-[1186px] mx-auto">
        {/*         <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services conçus pour aider votre entreprise à se développer et à réussir
            dans l'environnement numérique d'aujourd'hui.
          </p>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                  <p className="text-black pb-4">{service.description}</p>
                  {service.features &&
                    service.features.map((feature) => (
                      <div key={feature} className="flex gap-2">
                        <CheckCircle2 size={18} className="text-green-400" />
                        <p className="text-sm">{feature}</p>
                      </div>
                    ))}
                </CardDescription>
              </CardContent>
              <CardFooter>
{/*                 <Button variant="ghost" className="group p-0 h-auto" asChild>
                  <a
                    href={service.link}
                    className="flex items-center text-secondary-500 hover:text-secondary-600 dark:text-secondary-400 font-medium"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
