import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        {/* Logo centré */}
        <Image
          src="/images/Paysikure2.png" 
          alt="Paysikure Logo"
          width={250}
          height={150}
          className="animate-pulse"
        />
        {/* Animation de chargement */}
        <div className="mt-6 flex space-x-2">
          <span className="h-4 w-4 bg-secondary-500 rounded-full animate-bounce"></span>
          <span className="h-4 w-4 bg-primary-500 rounded-full animate-bounce delay-200"></span>
          <span className="h-4 w-4 bg-secondary-500 rounded-full animate-bounce delay-400"></span>
        </div>
      </div>
    </div>
  );
}
