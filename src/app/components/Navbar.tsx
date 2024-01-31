import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <section className=' w-[100%] flex justify-center h-[5rem]'>
        <div className='self-center flex w-[90%] justify-between  px-[1rem]'>
            <div className='flex gap-[4rem] self-center'>
                <Link href={''}>
                  <h1 className='font-[600]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-[800]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  </h1>
                </Link>
                <Link href={'#'}><p className='font-[600]'>PROJECTS</p></Link>
            </div>

            <div className=''>
              <ul className="flex gap-[4rem]">
                <li className = "p-[0.6rem] font-[600]"><Link href={''}>ABOUT</Link></li>
                <li className = "p-[0.6rem] font-[600]"><Link href={''}>PUBS</Link></li>
                <li className = "p-[0.6rem] font-[600]"><Link href={''}>SERVICES</Link></li>
                <li className = "p-[0.6rem] font-[600]">
                  <Link href={''}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
        </div>
    </section>
  )
}

export default Navbar