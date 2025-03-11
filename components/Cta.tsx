import Image from "next/image";
import Link from "next/link";
import React from "react";
import phone from "@/public/images/phone2.png";

const Cta = () => {
  return (
    <section className="flex justify-center items-center bg-primary-50">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-white gap-8 w-full px-6 md:px-10  my-32  rounded-lg mx-auto shadow-xl max-w-screen-lg">
        <div className="flex flex-col items-start gap-4 max-w-lg text-center md:text-left">
          <p className="text-white-50 font-satoshi font-bold text-2xl">
            Pret a transformer votre compte bancaire?
          </p>

          <p className="text-white-50 font-inter text-md">
            Creez un compte instantanement avec PaySikure et commencez a
            effectuer des operations.
          </p>
          <Link
            href="/signup"
            className="px-6 py-3  bg-primary-600 text-white
          font-inter font-medium text-paragraph-md rounded-md 
          hover:bg-primary-700 "
          >
            <p className=" text-paragraph-lg">Telecharger l&apos;application</p>
          </Link>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center justify-center gap-2.5  text-black rounded-xl">
              <span className="w-8 h-8">
                <Image
                  src="/images/apple2.png"
                  alt={"applestore"}
                  width={64}
                  height={64}
                />
              </span>
              <span className="font-poppins font-medium text-xl">
                AppleStore
              </span>
            </div>
            <div className="w-1 h-8  border-2"></div>
            <div className="flex items-center justify-center gap-2.5   text-black rounded-xl">
              <span className="w-8 h-8">
                <Image
                  src="/images/playstore.png"
                  alt={"playstore"}
                  width={64}
                  height={64}
                />
              </span>
              <span className="font-poppins font-medium text-xl">
                PlayStore
              </span>
            </div>
          </div>
        </div>
        <div className="w-[324px] ">
          <Image src={phone} alt="phone" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
