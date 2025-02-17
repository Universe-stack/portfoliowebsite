'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import kachi from '../../../public/kachi.png';

const Marquee = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-transparent">
      <div className="inline-block animate-marquee">
        <span className="mr-8">{children}</span>
        <span className="mr-8">{children}</span>
        <span className="mr-8">{children}</span>
      </div>
    </div>
  );
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`flex justify-end h-[90vh] overflow-hidden transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className='w-[95%] container mx-auto flex 3xl:flex-row 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xsm:flex-col gap-[5rem] pl-[0.5rem] h-[95%]'>
        <div className='h-[100%]'>
          <span className='h-[100%] flex flex-col justify-between align-middle'>
            <h1 className={`pl-[0.5rem] text-[7rem] font-[800] 3xl:mt-[40%] 2xl:mt-[40%] xl:mt-[40%] lg:mt-[40%] sm:mt-[10%] xsm:mt-[10%] md:text-[5rem] sm:text-[4rem] xsm:text-[3rem] 
              transition-all duration-700 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              Kachi.
            </h1>
            <div className={`2xl:block xl:block lg:block md:hidden sm:hidden xsm:hidden rotate-90 self-start mr-[1rem] p-0 text-[64px] font-[800] mb-2
              transition-opacity duration-500 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              001
            </div>
          </span>
        </div>

        <div className='w-[100%] flex flex-col justify-between relative'>
          <div className={`flex 2xl:flex-row xsm:flex-col w-[90%] self-start
            transition-all duration-500 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
            <div className='w-[100%] mt-[2rem]'>
              <h3 className='font-[600] bg-gray'>TO BECOME WORLD CLASS</h3>
              <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xsm:flex-col justify-between w-[60%] gap-[1rem] mt-[0.5rem]'>
                <p className='text-[0.6rem] font-[500]'>
                  I attribute my success to this -- I never gave or took any excuse
                  <span className='text-[#ff0000]'>~Florence Nightingale</span>
                </p>
                <p className='text-[0.6rem] font-[500]'>
                  I find that the harder I work, the more luck I seem to have.{' '}
                  <span className='text-[#ff0000]'>~Thomas Jefferson</span>
                </p>
              </div>
            </div>

            <div className={`2xl:rotate-90 xl:rotate-90 lg:rotate-90 mt-[4rem] md:rotate-0 sm:rotate-0 xsm:rotate-0
              transition-all duration-500 delay-300`}>
              <p className='font-[600]'>
                MAHADUMIA&apos;S <br /> SWE OF 2023{' '}
              </p>
              <div className='solid-line'></div>
            </div>
          </div>

          <div className={`bg-slate-700 w-[100%] h-[60%] relative overflow-hidden
            transition-all duration-700 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {/* Marquee text */}
            <div className="absolute top-4 left-0 w-full text-gray-400/70 text-lg z-10 tracking-wider">
              <style jsx>{`
                @keyframes marquee {
                  0% { transform: translateX(100%); }
                  100% { transform: translateX(-100%); }
                }
                .marquee-content {
                  display: inline-block;
                  white-space: nowrap;
                  animation: marquee 20s linear infinite;
                }
              `}</style>
              <div className="marquee-content z-10 text-[4rem] mt-2">
                Frontend Developer + Product Manager + Indie Hacker 
                + Frontend Developer + Product Manager + Indie Hacker
              </div>
            </div>

            {/* Image container with improved positioning */}
            <div className={` z-50 absolute right-0 h-full 
              w-[90%] 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[90%] sm:w-[95%] xsm:w-[95%]
              2xl:top-[-10%] xl:top-[-10%] lg:top-[-10%] md:top-[-5%] sm:top-0 xsm:top-0
              transition-all duration-700 delay-500 ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <Image
                src={kachi}
                alt="logo"
                className="object-cover object-center h-full w-full grayscale hover:grayscale-0 transition-all duration-300 z-50 position-center mt-10"
                priority
                quality={100}
              />
            </div>

            <div className={`absolute bottom-0 left-0 p-[1rem] bg-[#121212] text-[#ffffff] cursor-pointer
              hover:bg-[#2a2a2a] transition-colors duration-300
              ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;