import React from "react";

interface FeatureCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, alt, title, description }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <div className="rounded-full p-3 mb-3 bg-orange-300 hover:bg-gray-200 transition-colors duration-300">
        <img src={image} alt={alt} className="w-10 h-10" />
      </div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;
