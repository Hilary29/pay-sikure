import React from "react";
import Marquee from "./animata/container/marquee";

const HorizontalMarquee = () => {
  return (
    <div className="flex flex-col gap-8 py-16 max-w-[1186px]  mx-auto px-4 lg:px-0">
      <div className=" mb-6 sm:mb-0">
        <p className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-violet-600 via-blue-600 to-green-500 bg-clip-text text-transparent">
          TEMOIGNAGES
        </p>
        <p className="text-gray-600  text-sm sm:text-lg">
          Un Service Client Qui Se Bat Pour Vous ,malgré les difficultés. Chez
          Paysikure, notre équipe s&apos;engage à être ultra-réactive même si on
          n&apos;y arrive pas toujours.
        </p>
      </div>

      <div className=" text-start">
        <p className="text-xl sm:text-3xl font-semibold">Avis sur PaySikure</p>
      </div>
      <div className=" relative flex h-full max-h-96 min-h-72 w-full min-w-72 items-center justify-center overflow-hidden rounded  bg-background">
        <Marquee pauseOnHover applyMask repeat={8} reverse={true}>
          <span className="ml-4">
            <div className="w-[300px] h-72 shadow p-2 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-md">
              <div className="bg-white min-h-72 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Drl FRANCKY
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Donc comme il y a une nouvelle version les anciens comptes
                  sont perdus ??
                </p>
              </div>
            </div>
          </span>

          <span className="ml-4">
            <div className="w-[300px] h-72 shadow p-2 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-md">
              <div className="bg-white min-h-72 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Ludovic A&apos;wangang
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Le solde de vérification n&apos;est pas toujours accessible
                  pourquoi ?
                </p>
              </div>
            </div>
          </span>

          <span className="ml-4">
            <div className="w-[300px] h-72 shadow p-2 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-md">
              <div className="bg-white min-h-72 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Bio Market
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Vous êtes même comment votre service client répond une fois
                  par an. On vous demande où vous êtes situés vous bagayez on va
                  vous faire confiance comment ?
                </p>
              </div>
            </div>
          </span>

          <span className="ml-4">
            <div className="w-[300px] h-72 shadow p-2 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-md">
              <div className="bg-white min-h-72 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Ludovic A&apos;wangang
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Vivement que ça soit rétablie. Les travaux sont en arrêt 😢
                </p>
              </div>
            </div>
          </span>
        </Marquee>
      </div>

      <div className=" text-end">
        <p className="text-xl sm:text-3xl font-semibold">Avis sur Neero</p>
      </div>
      <div className="storybook-fix relative flex h-full max-h-96 min-h-72 w-full min-w-72 items-center justify-center overflow-hidden rounded  bg-background">
        <Marquee pauseOnHover applyMask repeat={8}>
          <span className="ml-4">
            <div className="w-[300px] h-72 shadow p-2 bg-gradient-to-r from-violet-500 to-blue-500 rounded-md">
              <div className="bg-white min-h-72 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Rozine NZIBI
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Très bonne expérience de la validation de mon compte avec le
                  service client de Neero. Il y un Obed là il m&apos;a appelée
                  jusqu&apos;à ce que je comprenne le fonctionnement de
                  l&apos;appli. Il a été diligent et ultra réactive pour
                  m&apos;aider avec mon problème. On sent vraiment qu&apos;ils
                  se donnent à fond, bravo !
                </p>
              </div>
            </div>
          </span>

          <span className="ml-4">
            <div className="w-[300px] h-72 shadow p-2 bg-gradient-to-r from-violet-500 to-blue-500 rounded-md">
              <div className="bg-white min-h-72 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Mak-raj CLAUDIA
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Un grand merci au service client de Neero ! J&apos;ai eu un
                  souci avec ma transaction Alibab et Iranie a été super
                  réactive, elle a tout réglé en un rien de temps. Efficacité au
                  top !
                </p>
              </div>
            </div>
          </span>

          <span className="ml-4">
            <div className="w-[300px] h-72 shadow p-2 bg-gradient-to-r from-violet-500 to-blue-500 rounded-md">
              <div className="bg-white min-h-72 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="">
                    <h3 className="text-lg font-semibold text-gray-800">
                      PHILIP CHIEGUI
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Franchement, chapeau à l&apos;équipe de Neero on ressent la
                  différence depuis 4 mois. J&apos;ai contacté le service client et
                  on m&apos;a répondu hyper vite sur mon virement pour le Nigeria
                  avec une solution claire et rapide. J&apos;avais déjà peur. Ça
                  fait plaisir un service aussi efficace.
                </p>
              </div>
            </div>
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default HorizontalMarquee;
