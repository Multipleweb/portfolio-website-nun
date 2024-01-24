import React from 'react'
import CVPrfile from '../imgs/cvphoto001.png';
import AboutPhoto from '../imgs/about.png';
import './componentcss.css';
import { Link } from 'react-router-dom';
const AboutMe = () => {
  return (
    <>
      <div className='w-full flex justify-center gap-3 items-end'>
          <img src={AboutPhoto} alt="" style={{height:"40px"}}/>
          <h1 className='text-2xl font-serif text-black-700'>ABOUT ME</h1>
      </div>
      <div className="flex justify-center mt-10 flex-wrap p-5 " id='about'>
        <div style={{ width: "400px" }} className='flex justify-center'>
          <img src={CVPrfile} alt="Profile" className='w-72 rounded-full' style={{marginTop:"-30px"}} />
        </div>
        <div className='p-2' style={{ width: "600px" }} id='Intro'>
          <h1 className='text-3xl font-serif '>Let's Introduce About Myself</h1>
          <p className='mt-5'>I’m Sian Nun. As information technology student, I responsibility on work and I am orderly.
            I thrive in dynamic and collaborative environments, bringing a proactive approach to problem-solving and a dedication to achieving goals.
            I am committed to delivering high-quality work and contributing to the success of my team.
            I am friendly and have a good on community.
            I am looking forward to my first work experience.
          </p>
          <div className='mt-10'>
            <button className='bg-gradient-to-l from-cyan-500 to-blue-500 p-2 text-white px-4 font-serif hover:scale-110'>
                <Link to="https://t.me/NunSian">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe;