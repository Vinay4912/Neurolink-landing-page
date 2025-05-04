import React from 'react'
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <div>
     <div className="px-4 py-4 sm:px-6 lg:px-8 bg-white scroll-mt-20" id="pricing">
      <div className="text-center">
        <p className="font-bold text-3xl sm:text-4xl text-black pt-8">Pricing Details</p>
        <p className="text-gray-500 text-base mt-4 max-w-2xl mx-auto">
        Simple and clear pricing information, if applicable, to inform visitors about the cost of using the app.
        </p>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        <motion.div
        whileHover={{ scale: 1.1}}
        className='bg-gray-200 px-12 py-8 rounded-2xl h-full'>
          <p className='font-extrabold text-black text-lg sm:text-xl'>Basic Plan</p>
          <p className='text-gray-700 text-sm sm:text-base'>Access to essential features</p>
          <p className='mt-6 text-2xl font-bold'>$9.99/month</p>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.1}}
         className='bg-gray-200 px-12 py-8 rounded-2xl h-full'>
          <p className='font-extrabold text-black text-lg sm:text-xl'>Pro Plan</p>
          <p className='text-gray-700 text-sm sm:text-base'>Unlock advanced features</p>
          <p className='mt-6 text-2xl font-bold'>$19.99/month</p>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.1}}
         className='bg-gray-200 px-12 py-8 rounded-2xl h-full'>
          <p className='font-extrabold text-black text-lg sm:text-xl'>Premium Plan</p>
          <p className='text-gray-700 text-sm sm:text-base'>Full access to all features</p>
          <p className='mt-6 text-2xl font-bold'>$29.99/month</p>
        </motion.div>
        
      </div>
      </div>
    </div>
  )
}

export default Pricing
