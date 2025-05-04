import { CarouselSize } from '@/components/carousel';

const steps = [
  {
    title: 'Step 1: Sign Up',
    description:
      'Create your account by providing basic information and setting up your profile.',
  },
  {
    title: 'Step 2: Explore features',
    description:
      'Discover the array of features available, from personalized settings to interactive tools.',
  },
  {
    title: 'Step 3: Engage with Content',
    description:
      "Start engaging with content, whether it's creating, sharing, or exploring within the app.",
  },
  {
    title: 'Step 4: Connect and Collaborate',
    description:
      'Connect with other users, collaborate on projects, and make the most of our interactive platform.',
  },
];

export default function HowItWorks() {
  return (
    <div className="mt-20 px-4 py-4 sm:px-6 lg:px-8 bg-black scroll-mt-20" id="how-it-works">
      {/* Heading */}
      <div className="text-center">
        <p className="font-bold text-3xl sm:text-4xl text-white pt-8">How It Works</p>
        <p className="text-gray-400 text-base mt-4 max-w-2xl mx-auto">
        Explore the step-by-step guide below to understand how our app functions seamlessly.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <CarouselSize slides={steps} />
      </div>
    </div>
  );
}
