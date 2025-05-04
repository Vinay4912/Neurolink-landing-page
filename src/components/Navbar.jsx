import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "/images/logo.png"
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#191919] py-4 px-6 shadow-sm fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-white font-bold text-xl">
              <a href="#herosection"><img className='h-6' src={logo}/></a>
        </span>

        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-[#F7FAFA] hover:text-[#F5C754] font-medium">Features</a>
          <a href="#how-it-works" className="text-[#F7FAFA] hover:text-[#F5C754] font-medium">How it Works</a>
          <a href="#pricing" className="text-[#F7FAFA] hover:text-[#F5C754] font-medium">Pricing</a>
          <a href="#contact" className="text-[#F7FAFA] hover:text-[#F5C754] font-medium">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#login" className="text-[#F7FAFA] hover:text-[#F5C754] font-medium">Login</a>
          <a href="#signup" className="bg-[#F5C754] text-[#191919] font-bold px-4 py-2 rounded-md transition-colors">
            Get Started
          </a>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-blue-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 z-20">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-[#F5C754] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-600 hover:text-[#F5C754] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="#pricing" 
              className="text-gray-600 hover:text-[#F5C754] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-[#F5C754] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2 border-t border-gray-200">
              <a 
                href="#login" 
                className="block mb-2 text-gray-700 hover:text-[#F5C754] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </a>
              <a 
                href="#signup" 
                className="block w-full bg-[#F5C754] text-[#191919] text-center px-4 py-2 rounded-md  transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}