import React from 'react';

const galleryItems = [
  { id: 1, src: '/gallery/image1.jpg', type: 'image', description: 'Sony xm4 website' },
  { id: 2, src: '/gallery/image2.jpg', type: 'image', description: 'Cookie shop' },
  { id: 3, src: '/gallery/video2.mp4', type: 'video', description: 'Sneaker shop' },
  { id: 4, src: '/gallery/video1.mp4', type: 'video', description: 'Interior design website' },
  { id: 5, src: '/gallery/image3.jpg', type: 'image', description: 'Furniture shop' },
  { id: 6, src: '/gallery/image7.jpg', type: 'image', description: 'Fast Food shop' },
  { id: 7, src: '/gallery/image5.jpg', type: 'image', description: 'Nintendo Games' },
  { id: 8, src: '/gallery/image6.jpg', type: 'image', description: 'Bar liquor ordering store' },
  { id: 9, src: '/gallery/video3.mp4', type: 'video', description: 'Fashion website' },
  { id: 10, src: '/gallery/image8.jpg', type: 'image', description: 'Cocktails' },
  { id: 11, src: '/gallery/video5.mp4', type: 'video', description: 'SaaS Websites' },
  { id: 12, src: '/gallery/image4.jpg', type: 'image', description: 'Generative AI site' },
  { id: 13, src: '/gallery/image10.jpg', type: 'image', description: 'Scooter Store' },
  { id: 14, src: '/gallery/image14.jpg', type: 'image', description: 'Application based website' },
  { id: 15, src: '/gallery/image9.jpg', type: 'image', description: 'Security Products' },
  { id: 16, src: '/gallery/image11.jpg', type: 'image', description: 'Taxi App' },
  { id: 17, src: '/gallery/video4.mp4', type: 'video', description: 'Restaurant Menu design' },
  { id: 18, src: '/gallery/image12.jpg', type: 'image', description: 'Brand Landing Page' },
  { id: 19, src: '/gallery/image13.jpg', type: 'image', description: 'Description for Design1' },
  { id: 20, src: '/gallery/image14.jpg', type: 'image', description: 'Description for Design2' },
];

const GalleryPage = () => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Our Gallery</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {galleryItems.map((item) => (
          <div key={item.id} className='relative'>
            {item.type === 'image' ? (
              <img 
                src={item.src} 
                alt={item.description} 
                className='w-full h-auto rounded-lg' 
                loading="lazy"
              />
            ) : (
              <video 
                loop 
                muted 
                className='w-full h-auto rounded-lg' 
                playsInline
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className='absolute text-center bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 rounded-b-lg'>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
