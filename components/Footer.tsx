import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 px-6 sm:px-12 w-full">
      <div className=" mx-auto">
        <div className="flex flex-col  lg:flex-row justify-between mb-8">
          <div className="mb-16 lg:mb-0">
            <div className="flex items-center mb-4">
              <Link className="flex items-center gap-2" href={"/"}>
                <Image
                  src='/images/Paysikure2.png'
                  alt="Agrinet logo"
                  width={200}
                  height={100}
                  className="w-48 h-[82px]"
                />
              </Link>{" "}
            </div>
            <div className="text-[#626362] mb-10">
              <Link 
              href='/'
              className="text-secondary-500 hover:text-secondary-600 ">contact@paysikure.com</Link>
              <p>Douala, Cameroon</p>
            </div>
            <div className="flex space-x-6 cursor-pointer">
              <FaFacebook className="w-5 h-5 text-blue-600" />
              <FaX className="w-5 h-5 "/>
              <FaInstagram className="w-5 h-5 text-red-700" />
              <FaLinkedin className="w-5 h-5 text-secondary-700" />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-16 xl:gap-36">
          <div>
              <h3 className="text-[#072B1C] font-medium mb-4">Companie</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-[#4B4B4B]">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-[#4B4B4B]">
                    A propos
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-[#4B4B4B]">
                    Facturation
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-[#4B4B4B]">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          <div>
              <h3 className="text-[#072B1C] font-medium mb-4">Entreprise</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-[#4B4B4B]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-[#4B4B4B]">
                   Service Client
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-[#4B4B4B]">
                    Partenaires 
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#072B1C] font-medium mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-[#4B4B4B]">
                    Contactez-nous
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-[#4B4B4B]">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/help-center" className="text-[#4B4B4B]">
                    Centre d&apos;aide
                  </Link>
                </li>
                <li>
                  <Link href="/user-guides" className="text-[#4B4B4B]">
                    Guide d&apos;utilisateur
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#072B1C] font-medium mb-4">Légal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-[#4B4B4B]">
                    Politique
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-[#4B4B4B]">
                    Termes de service
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-[#4B4B4B]">
                    Politique des cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#E1E1E1] pt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-[#626362] mb-4 sm:mb-0">
              © {new Date().getFullYear()} PaySikure Inc. Tous droits réservés.
            </p>

            <div className="flex items-center space-x-6">
              <Link href="/terms" className="text-[#626362]">
                Termes et conditions
              </Link>
              <span className="text-[#626362]">•</span>
              <Link href="/privacy" className="text-[#626362]">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
