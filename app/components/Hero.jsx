import Link from 'next/link'
import React from 'react'

const quickLinks =[
  {link: 'Weddings', path: "/"},
  {link: 'DJ Events', path: "/"},
  {link: 'Corporate Galas', path: "/"},
  {link: 'Product Launch', path: "/"}
]

const Hero = () => {
  return (
    <div className='text-center flex flex-col items-center  pb-6'>
    <div className='p-4 bg-black space-y-4 md:px-16 flex flex-col gap-0 md:gap-[7.5vw] justify-center items-center md:flex-row md:justify-between md:items-center h-screen md:h-[85vh]'>
      <div className='h-96 flex flex-col justify-center gap-6 m-6'>
        <h1 className='text-2xl md:text-8xl text-center md:text-left text-white font-semibold'>Creating Unforgettable Memories</h1>
        <h1 className='text-lg text-center md:text-left text-white'>Crafting extraordinary experiences, turning visions into unforgettable moments seamlessly and creatively.</h1>
        <div className='grid grid-cols-2 gap-y-4 gap-x-8 md:grid-cols-4'>
          {quickLinks.map((link, index) => (
            <Link key={index} href={link.path} className='p-3 rounded-lg hover:border-2 text-center bg-white md:bg-black text-black md:text-white hover:bg-opacity-15 hover:text-white'>
              {link.link}
            </Link>
          ))}
        </div>
      </div>
      <video className='rounded-2xl w-full h-auto' autoPlay loop muted playsInline style={{ maxWidth: '100%' }}>
        <source src="/video.mp4" type="video/mp4"/>
        Video not supported
      </video>
    </div>
    <Link href="/gallery" className='text-blue-600'>
        Check Out Our Previous Events
    </Link>
    </div>
  )
}

export default Hero
