import React from 'react'
import Image from 'next/image'
import kachi from '../../../public/kachi.png'

const Hero = () => {
  return (
    <section className='flex justify-end h-[90vh]'>
        <div className='w-[95%] flex gap-[5rem] pl-[0.5rem] h-[95%]'>
            <div className='h-[100%]'>
                <span className='h-[100%] flex flex-col justify-between align-middle'>
                    <h1 className='pl-[0.5rem] text-[7rem] font-[800] mt-[40%]'>Kachi.</h1>
                    <div className='rotate-90 self-start mr-[1rem] p-0 text-[64px] font-[800] mb-2'>001</div>
                </span>
            </div>

            <div className='w-[100%] flex flex-col justify-between relative'>
                <div className='flex w-[90%] self-start'>
                    <div className='w-[100%] mt-[2rem]'>
                        <h3 className='font-[600] bg-gray'>TO BECOME WORLD CLASS</h3>
                        <div className=' flex justify-between w-[60%] gap-[1rem] mt-[0.5rem]'>
                            <p className='text-[0.6rem] font-[500]'>I attribute my success to this -- I never gave or took any excuse<span className='text-[#ff0000]'>~Florence Nightingale</span></p>
                            <p className='text-[0.6rem] font-[500]'>I find that the harder I work, the more luck I seem to have.  <span className='text-[#ff0000]'>~Thomas Jefferson</span></p>
                        </div>
                    </div>

                    <div className='rotate-90 mt-[4rem]'>
                        <p className='font-[600]'>TECHCABALS <br/> SWE OF 2023 </p>
                        <div className='solid-line'></div>
                    </div>
                </div>

                <div className=' bg-slate-700 w-[100%] h-[60%]'>
                    <div className='absolute bottom-0 left-0 p-[1rem] bg-[#121212] text-[#ffffff]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </div>

                    <div className=' top-[7.5%] lg:left-[30%] absolute h-[40rem] w-[40rem]'>
                        <Image
                        src={kachi}
                        alt="logo"
                        className=" self-center cover h-[100%] w-[100%] grayscale hover:grayscale-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero