'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/Favicon.svg';

const navbarPages = [
  { page: 'Home', path: "/" },
  { page: 'Services', path: "/services" },
  { page: 'About', path: "/about" },
  { page: 'Gallery', path: "/gallery" }
];

// WhatsApp link configuration
const whatsappNumber = '254714343027';
const whatsappMessage = 'Hello! I would like to get a quote for your services.';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Helper function to detect if user is on a mobile device
  const isMobileDevice = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Function to handle WhatsApp redirection
  const redirectToWhatsApp = () => {
    if (isMobileDevice()) {
      // Open WhatsApp app if on mobile
      window.location.href = whatsappLink;
    } else {
      // Open WhatsApp web in new tab if on desktop
      window.open(whatsappLink, '_blank');
    }
  };

  return (
    <nav className='bg-black fixed w-full z-50'>
      <div className='flex items-center justify-between px-6 py-4'>
        <Link href="/">
          <div className='flex items-center'>
            <Image src={Logo} alt='logo' height={50} />
            <h1 className='text-2xl font-semibold text-white ml-2 hover:text-gray-400'>Firstlane</h1>
          </div>
        </Link>

        {/* Desktop menu */}
        <div className='hidden md:flex space-x-10'>
          {navbarPages.map((page, index) => (
            <Link key={index} href={page.path} className='p-3 text-white hover:text-gray-400 hover:border-b-4 hover:border-orange-400'>
              {page.page}
            </Link>
          ))}
        </div>
        
        {/* Desktop Get Quote button with WhatsApp redirection */}
        <button onClick={redirectToWhatsApp} className='hidden md:block bg-orange-400 py-2 px-6 rounded-lg font-bold text-white hover:bg-orange-600'>
          Get Quote
        </button>

        {/* Mobile menu button */}
        <div className='md:hidden'>
          <button onClick={toggleMobileMenu} className='text-white hover:text-gray-300'>
            <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className='md:hidden fixed inset-0 bg-gray-800 z-40 flex flex-col items-center space-y-4 pt-16'>
          <button onClick={toggleMobileMenu} className='absolute top-4 right-4 text-white hover:text-gray-300'>
            <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
          {navbarPages.map((page, index) => (
            <Link key={index} href={page.path} className='text-white text-lg hover:text-gray-400' onClick={() => setIsMobileMenuOpen(false)}>
              {page.page}
            </Link>
          ))}
          {/* Mobile Get Quote button with WhatsApp redirection */}
          <button className='bg-orange-400 py-2 px-10 rounded-lg font-bold text-white hover:bg-orange-600' onClick={() => {
              redirectToWhatsApp();
              setIsMobileMenuOpen(false);
            }}>
            Get Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;