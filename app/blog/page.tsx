import Image from "next/image";
import React from "react";
import img from "@/public/images/phone.png";
import { ChevronRightCircle } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <section
      id="blog"
      className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white-50 max-w-[1183px] mx-auto"
    >
      <div className="max-w-4xl  px-16">
        <div className=" mb-10 sm:mb-16">
          <p className="text-secondary-600 font-bold text-lg p-2.5 mb-2.5">
            Blog
          </p>
          <p className="font-medium text-xl text-gray-500 justify-center px-2.5 mb-6 sm:mb-8 md:mb-10 ">
            Find answers to the most common questions about PaySikure and how it
            works.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row  bg-white shadow-lg rounded-lg ">
            <div className="w-2/5 ">
            <div>
            <Image src='/images/phone2.png' alt="blog-image" width={126} height={150} className="w-[200px] h-[182px]" />
            </div>
              
            </div>
            <div className="w-3/5 flex flex-col p-4  justify-between">
              <p>
                Pourquoi nous prenons plus de 72 heures à vous répondre, et sans
                réponse automatique{" "}
              </p>
              <div className="flex flex-row gap-2 text-secondary-500 hover:text-secondary-600">
                <span>Lire plus</span>
                <ChevronRightCircle />
              </div>
            </div>
          </div>
          <div className="flex flex-row  bg-white shadow-lg rounded-lg ">
            <div className="w-2/5 bg-gray-50 ">
              <Image src={img} alt="blog-image" className="rounded-md" />
            </div>
            <div className="w-3/5 flex flex-col p-4  justify-between">
              <p>
                Pourquoi nous prenons plus de 72 heures à vous répondre, et sans
                réponse automatique{" "}
              </p>
              <Link href='/blog' className="flex flex-row gap-2 text-secondary-500 hover:text-secondary-600">
                <span>Lire plus</span>
                <ChevronRightCircle />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
