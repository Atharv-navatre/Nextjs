import React from 'react';
import Lottie from 'react-lottie';

// Import your Lottie animation JSON files
import circleAnimation from "../../../public/assets/blu circleAnimation - 1708957396922.json"; // Replace with your animation file

const PriceTrackerAccessSteps: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Steps to Access Price Tracker</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Step number={1} title="Visit Our Website" description="Go to [PriceTraker.com]" />
          <Step number={2} title="Input Product Information" description="Enter the link or name of the product." />
          <Step number={3} title="Click 'Submit'" description="Hit the submit button to see the comparison results instantly" />
        </div>
      </div>
    </section>
  );
};

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: circleAnimation, // Your Lottie animation data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  // Format the number to have leading zero if necessary
  const formattedNumber = String(number).padStart(2, '0');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
      <div className="mb-4 relative">
          <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center text-white text-lg font-semibold">
            {formattedNumber}
          </div>
        <Lottie options={defaultOptions} height={80} width={80} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PriceTrackerAccessSteps;
