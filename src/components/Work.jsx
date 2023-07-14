import React from 'react'
import gettogetherimg from '../assets/gettogetherimg.png'
import capturadetelanetflix from '../assets/capturadetelanetflix.png';
import capturadetelatravel from '../assets/capturadetelatravel.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#00ABD6]'>Work</p>
          <p className='py-6'>Check out some of my recent work:</p>
        </div>

        <div
          className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div
            style={{backgroundImage: `url(${gettogetherimg})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Web Application
              </span>
              <div className='pt-8 text-center'>
                <a href="http://www.get-together.me">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/fabiosimoesds/get-together">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{backgroundImage: `url(${capturadetelanetflix})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Web Application
              </span>
              <div className='pt-8 text-center'>
                <a href="https://netflix-react-a27d3.web.app">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/RafaSGoncalves/netflix">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{backgroundImage: `url(${capturadetelatravel})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Web Application
              </span>
              <div className='pt-8 text-center'>
                <a href="https://travel-react-tailwind.vercel.app">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/RafaSGoncalves/travel-react-tailwind">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work