import * as React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

export function ScannerDialog({ buttonClassName = "bg-primary-500 hover:bg-primary-600 text-white hover:text-white text-base sm:text-lg font-medium py-6 px-4", buttonText = "Télécharger l'application" }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={buttonClassName}>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg max-w-[325px] sm:max-w-[525px]">
        <div className="flex flex-col items-center justify-center w-full h-full py-4 md:py-12 space-y-6">
          <p className="text-xl sm:text-4xl font-semibold text-center leading-normal ">
            Obtenez <br /> l&apos;application Neero
          </p>
          <p className="text-xs sm:text-base font-normal text-center">
            Scanner le code pour télécharger l&apos;application Neero
          </p>
          <div className="w-[164px] h-[164px] sm:w-[224px] sm:h-[224px] flex items-center justify-center ">
            <Image
              src="/images/qr-code.jpg"
              alt="QR Code"
              width={224}
              height={224}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
