import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#00ABD6]'>About</p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi! I'm Rafael, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Originally from Rio de Janeiro, Brazil, and an EU citizen, I am a full-stack web developer trained at Le Wagon Bootcamp. I am a patient and easy-going individual with excellent communication skills, a proactive mindset, and strong problem-solving abilities. After completing the bootcamp, I continued my education by pursuing a degree in Software Engineering, where I have been deepening my technical and practical knowledge. Additionally, I have completed several recognized courses, earning certifications from Meta and HarvardX, which highlight my commitment to continuous learning. With over 3 years of experience as a frontend developer, I bring a solid foundation in building user-friendly and efficient web applications, combined with a passion for innovation and growth in the tech industry.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
