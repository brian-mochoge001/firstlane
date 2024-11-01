import React from 'react';
import Image from 'next/image';

const testimonialsData = [
  {
    id: 1,
    name: 'Alex Johnson',
    position: 'CEO at Eventbrite',
    company: 'Eventbrite',
    image: '/clients/user2.webp',
    feedback: 'The team handled everything seamlessly, from planning to execution. Truly impressive!',
  },
  {
    id: 2,
    name: 'Maria Thompson',
    position: 'Marketing Director',
    company: 'MusicFest Inc.',
    image: '/clients/user4.jpg',
    feedback: 'An outstanding experience! Every detail was managed with such professionalism.',
  },
  {
    id: 3,
    name: 'Chris Lee',
    position: 'Event Coordinator',
    company: 'PartyWorld',
    image: '/clients/company1.jpg',
    feedback: 'The creativity and organization were next-level. Our attendees were blown away!',
  },
  {
    id: 4,
    name: 'Samantha Green',
    position: 'Founder',
    company: 'Green Events',
    image: '/clients/airtel.png',
    feedback: 'Exceptional service! The team made it effortless and memorable for our guests.',
  },
];

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center text-center py-10'>
      <h2 className='text-4xl font-bold mb-8'>Testimonials</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-[5vw]'>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`bg-white p-6 rounded-xl shadow-lg flex flex-col items-center ${
              index > 0 ? 'hidden sm:hidden md:flex' : ''
            }`}
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={96}
              height={96}
              className='rounded-full mb-4'
            />
            <h3 className='text-xl font-semibold'>{testimonial.name}</h3>
            <p className='text-sm text-gray-500'>{testimonial.position} at {testimonial.company}</p>
            <p className='mt-4 text-gray-700 italic'>" {testimonial.feedback} "</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
