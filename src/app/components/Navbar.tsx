'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className='w-full bg-black text-white py-3 sm:py-3.5'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-center gap-3 sm:gap-4 flex-wrap'>
            <div className='text-xs sm:text-sm text-center leading-relaxed'>
              Your weekly publications of <span className="text-blue-400 font-bold">product mechanics </span>for free - Learn how your favourite softwares work under the hood
            </div>
            <Link 
              href='https://productmechanics.substack.com/p/coming-soon' 
              className='relative inline-flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap overflow-hidden'
            >
              <span className='absolute inset-0 left-0 bg-blue-400/25 origin-left animate-fill-tank rounded-full'></span>
              <span className='relative z-10'>5 spots left</span>
              <svg className='relative z-10' width='14' height='14' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M5 12h14m-7-7l7 7-7 7' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className='w-full bg-white border-b border-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-8 lg:space-x-12 w-full justify-center'>
            <Link href='/' className='text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors'>
              Justice Onyekachi
            </Link>
            <Link href='/publications' className='text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors'>
              Publications
            </Link>
            <Link href='/portfolio' className='text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors'>
              Projects
            </Link>
            <a href='https://drive.google.com/file/d/1G4jEL6kFaXWxPesdjazbYd2kihHmgucZ/view?usp=sharing' target='_blank' rel='noopener noreferrer' className='text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors'>
              Resume
            </a>
            <Link href='/about' className='text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors'>
              About Me
            </Link>
            <Link href='/' className='text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors'>
              Get in touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden inline-flex items-center justify-center p-2 text-gray-900'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white border-t border-gray-100'>
          <div className='px-4 pt-2 pb-3 space-y-1'>
            <Link href='/' className='block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50'>
              Jonny Czar
            </Link>
            <Link href='/publications' className='block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50'>
              Publications
            </Link>
            <Link href='/portfolio' className='block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50'>
              Projects
            </Link>
            <a href='https://drive.google.com/file/d/1G4jEL6kFaXWxPesdjazbYd2kihHmgucZ/view?usp=sharing' target='_blank' rel='noopener noreferrer' className='block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50'>
              Resume
            </a>
            <Link href='#' className='block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50'>
              LinkedIn
            </Link>
            <Link href='/about' className='block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50'>
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </nav>
    
    <style jsx>{`
      @keyframes fill-tank {
        0% {
          transform: scaleX(0);
        }
        50% {
          transform: scaleX(1);
        }
        100% {
          transform: scaleX(0);
        }
      }
      
      .animate-fill-tank {
        animation: fill-tank 3s ease-in-out infinite;
      }
    `}</style>
    </>
  );
};

export default Navbar;