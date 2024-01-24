import React from 'react'
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';
import Education from '../imgs/mortarboard.png';
const About = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='flex justify-center'>
        <div className='flex justify-center items-center gap-3'>
          <img src={Education} alt="" style={{height:"40px"}}/>
          <h1 className='text-2xl font-serif text-black-700'>Education</h1>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='p-6 flex justify-center mt-10 shadow-lg flex-wrap' style={{width:"1000px"}}>
          <div className='w-48 flex justify-center text-2xl'>
            <h1 className='font-serif font-bold text-black-700 '>University</h1>
          </div>
          <div className='w-1 h-20 bg-slate-300 max-md:hidden rounded-lg'>

          </div>
          <div className='ml-5 max-md:mt-5'>
            <h1 className='font-bold'>NATIONAL UNIVERSITY OF MANAGEMENT</h1>
            <p className='mt-4 text-slate-500'>2022-present: Studying as Information Technology at national university of management </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='p-6 flex justify-center mt-10 shadow-lg flex-wrap' style={{width:"1000px"}}>
          <div className='w-48 flex justify-center text-2xl'>
            <h1 className='font-serif font-bold text-black-700 '>High School</h1>
          </div>
          <div className='w-1 h-20 bg-slate-300 max-md:hidden rounded-lg'>

          </div>
          <div className='ml-5 max-md:mt-5 mr-48 max-md:mr-0'>
            <h1 className='font-bold'>HUN SEN PHNOM KRAVANH HIGH SCHOOL</h1>
            <p className='mt-4 text-slate-500'>2019-2021: Studied at Hun Sen Phnom kravanh High School </p>
          </div>
        </div>
      </div>
      <section className='mt-20'>
        <AboutMe />
      </section>
      <footer className='mt-20'>
        <Footer />
      </footer>
    </>
  )
}

export default About;