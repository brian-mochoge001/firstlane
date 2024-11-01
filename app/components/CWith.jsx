import React from 'react';
import Image from 'next/image';

const clients = [
  { id: 1, src: '/clients/ktnHome.png' },
  { id: 2, src: '/clients/redBull.png' },
  { id: 3, src: '/clients/safaricomlogo.png' },
  { id: 4, src: '/clients/Kra.png' },
  { id: 5, src: '/clients/Airtel1.png' },
  { id: 6, src: '/clients/Equity.png' }
];

const CWith = () => {
  return (
    <div className="grid justify-center h-[50vh] md:h-[15vh] items-center">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-20 md:gap-56 justify-center items-center">
        {clients.map((image, index) => (
          <div 
            key={image.id} 
            className={`client-image ${index >= 4 ? 'hidden md:block' : ''}`}
          >
            <Image src={image.src} alt="partner" className='transform transition duration-300 hover:scale-150' width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CWith;
