'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import kachi from '../../../public/kachi.png';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`min-h-screen bg-[#e1e2e1] flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <style>{`
        @keyframes subtleZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .image-container {
          position: relative;
        }
        
        .image-container::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 75px;
          box-shadow: inset 0 0 40px rgba(0,0,0,0.15), inset 0 0 80px rgba(0,0,0,0.08);
          pointer-events: none;
        }
        
        .image-container:hover {
          animation: subtleZoom 3s ease-in-out infinite;
        }
      `}</style>
      <div className='max-w-7xl mx-auto w-full py-12 sm:py-16 md:py-20 lg:py-24'>
        {/* Main Content Container */}
        <div className='flex flex-col items-center justify-center text-center space-y-2 sm:space-y-10 md:space-y-8 lg:space-y-8'>
          
          {/* Heading Section */}
          <div className={`space-y-4 sm:space-y-6 transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#121212] leading-tight px-4'>
              <span className='block lg:text-5xl sm:text-3xl md:text-4xl lg:py-2 sm:py-1 md:py-1'>I&apos;m Justice Onyekachi,</span>
              <span className='block lg:text-5xl sm:text-3xl md:text-4xl lg:py-2 sm:py-1 md:py-1'>Product Engineer/Manager</span>
              <span className='block lg:text-5xl sm:text-3xl md:text-4xl lg:py-2 sm:py-1 md:py-1'>for stealth minded startups.</span>
            </h1>
            
            <p className='text-[12px] sm:text-lg md:text-lg text-gray-600 font-light '>
              <span className='text-[#121212]'>The product Mechanic - </span> 8+ years of building, breaking, and fixing real products.
            </p>
          </div>

          {/* Image Section */}
          <div className={`w-[40vw] transition-all duration-1000 delay-400 ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className='image-container relative w-full aspect-square'>
              <Image
                src={kachi}
                alt='Justice Chinedu portrait'
                fill
                className='object-cover object-center rounded-[75px] grayscale bg-[#3e3f3f]'
                style={{
                  filter: 'grayscale(100%) drop-shadow(0 0 30px rgba(0,0,0,0.08)) drop-shadow(0 0 60px rgba(0,0,0,0.06)) drop-shadow(0 20px 40px rgba(0,0,0,0.12))'
                }}
                priority
                quality={100}
                sizes='(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 60vw'
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;