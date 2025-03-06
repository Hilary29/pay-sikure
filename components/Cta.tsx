import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section className="flex justify-center items-center py-[78px] my-16 px-4 bg-secondary-50 rounded-lg mx-auto mt-24 shadow-xl max-w-screen-lg">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full px-6 md:px-10">
        <div className="flex flex-col items-start gap-4 max-w-lg text-center md:text-left">
          <h2 className="text-white-50 font-satoshi font-bold text-2xl">
            Pret a transformer votre compte bancaire?
          </h2>

          <p className="text-white-50 font-inter text-md">
            Creez un compte instantanement avec PaySikure et commencez a effectuer des operations.
          </p>
        </div>

        <Link
          href="/signup"
          className="px-6 py-3  bg-primary-600 text-white
          font-inter font-medium text-paragraph-md rounded-md 
          hover:bg-primary-700 "
        >
          <p className=" text-paragraph-lg">
            Telecharger l&apos;application
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Cta;
