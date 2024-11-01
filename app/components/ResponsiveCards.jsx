import React from 'react';
import Image from 'next/image';
import Card1 from '../../public/gallery/planner.jpg';
import Card2 from '../../public/gallery/card4.jpg';
import Card3 from '../../public/gallery/eventvenue.jpg';

// Data array for cards
const cardsData = [
  {
    image: Card1,
    title: 'EVENT ENTERTAINMENT IDEAS',
    description: 'Firstlane event planners bring unique, top-notch entertainment ideas that dazzle guests, ensuring a memorable experience they will cherish for a long time.',
  },
  {
    image: Card2,
    title: 'WEDDINGS DESIGN+STYLING',
    description: 'Providing full-service, personalized wedding experience, handling everything in-house—from creative design and logistical planning to entertainment, production, and management.',
  },
  {
    image: Card3,
    title: 'CORPORATE EVENTS',
    description: 'We prioritize your brand reputation throughout planning and production, ensuring smooth event execution with a high-level experience and exceptional content.',
  },
];

const ResponsiveCards = () => {
  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center p-0 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-4 md:gap-10">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 bg-white/30 backdrop-blur-xl shadow-md border border-white/20 rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-white/50"
            >
              <Image src={card.image} alt={card.title} className="rounded-t-2xl" />
              <div className="p-4 flex-col justify-center text-center space-y-2">
                <h2 className="text-3xl font-semibold">{card.title}</h2>
                <p className="text-lg">{card.description}</p>
                <button className="bg-orange-400/70 p-2 px-8 text-black rounded-md shadow-md hover:bg-orange-400/90 transition duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="bg-orange-400 text-black p-2 px-6 rounded-md shadow-md hover:bg-orange-300 transition duration-200">More Services</button>
    </div>
  );
};

export default ResponsiveCards;
