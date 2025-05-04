import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {

  const features = [
    {
      title: 'Real-time Focus Tracking',
      description:
        'Stay in the zone with precise, moment-to-moment insights into your mental focus, powered by cutting-edge neurotechnology.',
    },
    {
      title: 'Distraction Alerts',
      description:
        'Get gentle, real-time nudges when your attention starts to drift—so you can refocus and stay productive effortlessly.',
    },
    {
      title: 'Mobile App Integration',
      description:
        'Sync seamlessly with our intuitive mobile app to view focus trends, set goals, and access personalized productivity reports.',
    },
    {
      title: 'AI-Powered Insights',
      description:
        'Harness the power of AI to receive tailored tips and analytics that help you work smarter and unlock your peak performance.',
    },
  ]
  
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8" id="features">
      {/* Heading */}
      <div className="text-center">
        <p className="font-bold text-3xl sm:text-4xl">Key Features Showcase</p>
        <p className="text-gray-500 text-base mt-4 max-w-2xl mx-auto">
          Discover the top features that make our app stand out from the rest.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10, boxShadow: '0px 10px 15px rgba(0,0,0,0.2)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-gray-200 p-8 rounded-2xl h-full"
          >
            <p className="font-extrabold text-black text-lg sm:text-xl">{feature.title}</p>
            <p className="mt-4 text-gray-700 text-sm sm:text-base">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
