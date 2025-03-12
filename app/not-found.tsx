import Link from 'next/link'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div>
          <div className="flex items-center justify-center  bg-white">
            <div className="flex flex-col items-center">
              {/* Logo centré */}
              <Image
                src="/images/Paysikure2.png" 
                alt="Paysikure Logo"
                width={250}
                height={150}
                className="animate-pulse"
              />
              <div>
                <p className='py-8 font-semibold text-xl'>Page not Found</p>
              </div>
              <Link href="/" className='text-secondary-500 border-2 border-secondary-500 rounded-lg p-2 hover:text-secondary-600 hover:border-secondary-600 font-medium'>Back Home</Link>
            </div>       
          </div>      
    </div>
  )
}