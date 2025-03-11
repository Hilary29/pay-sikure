import React from 'react'
import { Button } from './ui/button'

const Contact = () => {
  return (
    <div className='max-w-[1183px] mx-auto py-16'>
        {/* Newsletter Subscription */}
        <div className="rounded-xl bg-gradient-to-r from-secondary-50 to-primary-50 p-8 md:p-10 ">
          <div className="grid md:grid-cols-2 gap-6 items-center ">
            <div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">Contactez-nous</h3>
              <p className="text-gray-400">
                Get the latest fintech insights and updates delivered straight to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="bg-white text-primary-600 hover:bg-white/90 ">Subscribe</Button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact
