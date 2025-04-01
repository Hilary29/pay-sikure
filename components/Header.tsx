"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Globe, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white px-6 sm:px-12 ">
      <div className="mx-auto flex  flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ">
          <Link href="/">
            {isMenuOpen ? (
              <></>
            ) : (
              <div className="relative ">
                <Image
                  src="/images/Paysikure2.png"
                  alt="Logo"
                  width={200}
                  height={100}
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-[#606060]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <></> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex md:items-center md:gap-6 lg:gap-8">
          <Link
            href="/"
            className="text-[#606060] hover:text-secondary-500 text-lg font-medium transition duration-150"
          >
            Accueil
          </Link>
          <div className="flex items-center gap-2 text-[#606060] hover:text-secondary-500 text-lg font-medium transition duration-150">
            <span>Services</span>
            <ChevronDown size={16} />
          </div>
          <Link
            href="/blog"
            className="text-[#606060] hover:text-secondary-500 text-lg font-medium transition duration-150"
          >
            Blog
          </Link>
          <Link
            href="/a-propos"
            className="text-[#606060] hover:text-secondary-500 text-lg font-medium transition duration-150"
          >
            A-propos
          </Link>
          <Link
            href="/contact"
            className="text-[#606060] hover:text-secondary-500 text-lg font-medium transition duration-150"
          >
            Contact
          </Link>
          <Link
            href="/pricing"
            className="text-[#606060] hover:text-secondary-500 text-lg font-medium transition duration-150"
          >
            Facturation
          </Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex md:items-center md:gap-3">
          <button className="rounded-lg bg-primary-600 hover:bg-primary-700 px-4 py-2 text-lg font-medium text-white ">
            S&apos;inscrire
          </button>
          <div>
          <select className="flex items-center hover:bg-[#00000032] gap-1.5 rounded-lg shadow px-1 py-2 text-lg font-medium">
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 w-full md:hidden">
            <div className="flex flex-col space-y-4 pb-4 justify-center items-center">
              <div className="flex lg:hidden">
                <Link href="/">
                  {isMenuOpen ? (
                    <div className="relative ">
                      <Image
                        src="/images/Paysikure2.png"
                        alt="Logo"
                        width={200}
                        height={100}
                        className="object-contain"
                        priority
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </Link>
                <button
                  type="button"
                  className="text-[#606060]"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <></>}
                </button>
              </div>
              <Link
                href="/"
                className="text-[#606060] hover:text-secondary-500 text-lg font-medium"
              >
                Accueil
              </Link>
              <div className="flex items-center gap-2 text-[#606060] hover:text-secondary-500 text-lg font-medium">
                <span>Services</span>
                <ChevronDown size={16} />
              </div>
              <Link
                href="/blog"
                className="text-[#606060] hover:text-secondary-500 text-lg font-medium"
              >
                Blog
              </Link>
              <Link
                href="/a-propos"
                className="text-[#606060] hover:text-secondary-500 text-lg font-medium"
              >
                A-propos
              </Link>
              <Link
                href="/contact"
                className="text-[#606060] hover:text-secondary-500 text-lg font-medium transition duration-150"
              >
                Contact
              </Link>
              <Link
                href="/pricing"
                className="text-[#606060] hover:text-secondary-500 text-lg font-medium transition duration-150"
              >
                Facturation
              </Link>

              <div className="flex flex-col gap-3 pt-2 mx-auto">
                <button className="rounded-lg px-4 py-3 text-lg font-medium text-[#606060] hover:bg-gray-100">
                  Sign Up
                </button>
                <button className="rounded-lg bg-primary-600 hover:bg-primary-700 px-4 py-2 text-lg font-medium text-white ">
                  S&apos;inscrire
                </button>
                <button className="flex items-center justify-center gap-1.5 rounded-lg border border-[#DEDEDE] px-3 py-3 text-lg font-medium text-[#606060]">
                  <Globe size={24} />
                  <span>EN</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
