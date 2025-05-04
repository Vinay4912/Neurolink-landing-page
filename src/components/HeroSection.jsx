import React from 'react';
import heroImage from "/images/heroImage.png";
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="bg-[#191919] mt-[62px] lg:mt-[72px] scroll-mt-20" id="herosection">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 px-6 py-12 lg:py-0 lg:pl-16 flex flex-col justify-center">
          <h1 className="text-[#F3F3F3] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-left">
            Meet NeuroLink Band – Your Brain’s Productivity Partner
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl mt-6">
            Enhance focus, reduce distractions, and unlock your full potential.
          </p>
          <motion.div
          whileTap={{scale: 0.97}}
          >
          <button className="px-6 py-3 mt-8 bg-white text-[#0D0D0D] rounded-[10px] font-bold w-max cursor-pointer">
            Get Started
          </button>
          </motion.div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] p-4">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={heroImage}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
