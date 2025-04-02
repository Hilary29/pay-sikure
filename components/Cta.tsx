import Image from "next/image";
import Link from "next/link";
import React from "react";
import phone from "@/public/images/phone2.png";
import phone2 from "@/public/images/phone.png";
import { ScannerDialog } from "./ScannerDialog";

const Cta = () => {
  return (
    <section className="flex justify-center items-center bg-secondary-50">
      <div className="flex flex-row items-center justify-between bg-white gap-8 w-full px-6 md:px-10 my-14 sm:my-20 p-2 sm:p-0 rounded-lg mx-auto shadow-xl max-w-screen-lg">
        <div className="flex flex-col items-start gap-4 max-w-lg text-left">
          <p className=" font-bold text-2xl">
            Pret a transformer votre compte bancaire?
          </p>

          <p className="text-gray-700 text-sm sm:text-md">
            Creez un compte instantanement avec PaySikure et commencez a
            effectuer des operations.
          </p>
          <ScannerDialog
            buttonClassName="rounded-lg bg-primary-500 text-base sm:text-lg hover:bg-primary-600 p-2 sm:py-6 sm:px-6 font-medium text-white"
            buttonText="Télécharger l'application"
          />

          <div className=" hidden sm:flex-row gap-4">
            <div className="flex items-center justify-center gap-2.5  text-black rounded-xl">
              <span className="w-4 h-4 sm:w-8 sm:h-8">
                <Image
                  src="/images/apple2.png"
                  alt={"applestore"}
                  width={64}
                  height={64}
                />
              </span>
              <span className="font-poppins font-medium text-md sm:text-xl">
                AppleStore
              </span>
            </div>
            <div className="hidden sm:flex w-1 h-8  border-2"></div>
            <div className="flex items-center justify-center gap-2.5   text-black rounded-xl">
              <span className="w-4 h-4 sm:w-8 sm:h-8">
                <Image
                  src="/images/playstore.png"
                  alt={"playstore"}
                  width={64}
                  height={64}
                />
              </span>
              <span className="font-poppins font-medium text-md sm:text-xl">
                PlayStore
              </span>
            </div>
          </div>
        </div>
        <div className="w-[324px] ">
          <Image src={phone} alt="phone" className="hidden md:flex" />
          <Image src={phone2} alt="phone" className="md:hidden flex" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
