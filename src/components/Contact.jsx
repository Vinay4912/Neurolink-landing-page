import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({name: "", surname: "", email: "", address: "", description: ""}) 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({name: "", surname: "", email: "", address: "", description: ""})
  }

  return (
    <div className="overflow-hidden w-full">
      <div className='pt-10 mt-10 px-2 pb-4 flex flex-col md:flex-row lg:items-center justify-around items-start md:items-center bg-black w-full' id="contact">
        <div className='px-4 sm:px-6 lg:px-12 w-full md:w-auto mb-8 md:mb-0'>
          <p className='text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-white'>Get in Touch</p>
          <div className='flex flex-col sm:flex-row sm:justify-between mt-4'>
            <div className='pr-8 mb-4 sm:mb-0'>
              <p className='font-bold text-white'>Email</p>
              <p className='text-white'>info@example.com</p>
            </div>
            <div>
              <p className='font-bold text-white'>Phone</p>
              <p className='text-white'>+1 123 456 7890</p>
            </div>
          </div>
          <motion.div
            whileTap={{scale: 0.90}}
            className="w-full sm:w-auto"
          >
            <button className='bg-white text-black font-bold px-6 py-3 mt-6 sm:mt-8 rounded-[10px] w-full sm:w-auto'>Send Message</button>
          </motion.div>
        </div>
        
        <div className='px-4 sm:px-6 lg:px-8 w-full md:w-1/2 lg:w-auto'>
          <form onSubmit={handleSubmit} className='px-4 sm:px-8 lg:px-10 py-6 sm:py-8 bg-gray-200 rounded-2xl mx-auto w-full max-w-4xl'>
            <h1 className='text-2xl md:text-3xl font-extrabold'>Contact Us</h1>
            <div className='flex flex-col md:flex-row md:gap-4 mt-4'>
              <div className='flex flex-col w-full md:w-1/2 mb-4 md:mb-0'>
                <label htmlFor="name" className='mb-2'>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className='bg-white py-2 px-3 rounded-xl'
                />
              </div>
              <div className='flex flex-col w-full md:w-1/2'>
                <label htmlFor="surname" className='mb-2'>Surname</label>
                <input 
                  type="text" 
                  id="surname" 
                  name="surname" 
                  value={formData.surname} 
                  onChange={handleChange} 
                  className='bg-white py-2 px-3 rounded-xl'
                />
              </div>
            </div>
            <div className='mt-4'>
              <label htmlFor="email" className='block mb-2'>Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className='bg-white w-full py-2 px-3 rounded-xl'
              />
            </div>
            <div className='mt-4'>
              <label htmlFor="address" className='block mb-2'>Address</label>
              <input 
                type="text" 
                id="address" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                className='bg-white w-full py-2 px-3 rounded-xl'
              />
            </div>
            <div className='mt-4'>
              <label htmlFor="description" className='block mb-2'>Description</label>
              <textarea 
                id="description" 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                className='bg-white w-full py-2 px-3 rounded-xl min-h-[100px]'
              ></textarea>
            </div>
            <motion.div 
              whileTap={{scale: 0.90}}
            >
              <button className='w-full bg-black text-white mt-4 py-3 rounded-[10px] cursor-pointer'>Send Message</button>
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact