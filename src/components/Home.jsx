import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#00ABD6]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Rafael Gonçalves
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Front-end developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Passionate to code. Currently, I'm focus on building responsive web applications
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00ABD6] hover:border-[#00ABD6]'>
            <Link to="work" smooth={true} duration={500}>View Work</Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home
