import React from 'react'


const Page = () => {
  return (
    <section className='w-[100%] flex flex-col justify-center '>
        <div className='lg:w-[55%] xsm:w-[90%] self-center flex flex-col gap-[1rem] lg:mt-[4rem] xsm:mt-[0.5rem] p-[1.5rem] font-[100] text-[0.85rem] leading-7'>
            <h1 className='font-[700] text-[1.4rem] underline mb-[0.5rem]'>ABOUT ME</h1>
            <p>
                <span className='font-[600] text-5xl'>Hi, I&apos;m Kachi.</span>
            </p>
            <p >
                My name is Onyekachi Justice Chinedu but my friends love to call me Kachi. I&apos;m a full stack developer who loves building technology based products and businesses. I&apos;m currently learning cloud-devops. I have a second class upper degree in cost engineering from the Federal University of Technology Owerri, Nigeria .
            </p>
            <p>
               I&apos;m the founder of proplabs, a software development agency focused on building custom software solutions for niche based businesses. I&apos;m also the head of Emba, an online learning platform providing entrepreneurship and business themed resources. Presently, I and my team are building PitchDemo ai. Want to know more about that? Hit me up. LOL
            </p>

            <p >
                In October 2022, I published my first book titled The Newbies Guide to Web Development, which has over 30+ downloads. <a href='https://selar.co/666i55' className='underline text-[#0000FF]'>You can get it here</a>
            </p>

            <p >
               My non tech passion includes soccer and music. I believe that both are universal languages that brings the world together even at her worst times.
            </p>

            <p >
                In tech, I am a huge fan of AI, startups and technology related businesses.
            </p>
        </div>
    </section>
  )

}

export default Page