import React from 'react';
import { Link } from 'react-router-dom';
import About from '../components/AboutMe';
import Skill from '../components/Skill';
import Html from '../imgs/htmlcssjs.png';
import Tailwind from '../imgs/Tailwind.jpg';
import ReactJs from '../imgs/React.png';
import Mysql from '../imgs/Mysql.png';
import CSharp from '../imgs/Csharp.png';
import Java from '../imgs/Java-Logo.png';
import CVProfile from '../imgs/cvphoto001.png';
import PHP from '../imgs/php 1.png';
import JSP from '../imgs/jsp.png';
import SkillPhoto from '../imgs/skill-development.png';
import SummarySkill from '../components/SummarySkill';
import Contact from '../components/ContactMe';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <>
      <div className='flex justify-around items-center flex-wrap py-20 px-5'>
        <div>
          <h1 className='text-1xl mb-4 font-serif text-black-600'>Hello There,</h1>
          <h1 className='text-6xl mb-2 font-serif font-bold'>I AM SIAN NUN</h1>
          <p className='text-1xl font-serif'>I am a junior Web Developer.</p>
          <p className='w-96 text-gray-700 font-serif mt-2' style={{fontSize:"12px"}}>I can built web design such as LandingPage, Resposive, Animation, Login Page using HTML,CSS,JavaScript,Tailwind css,React JS.</p>
          <p className='w-96 text-gray-700 font-serif' style={{fontSize:"12px"}}>Built backend using PHP,JSP.</p>
          <p className='w-96 text-gray-700 font-serif' style={{fontSize:"12px"}}>Database MySql (SQL).</p>
          <div className='mt-6 flex justify-between' >
            <button className='bg-gradient-to-l from-cyan-500 to-blue-500 p-2 px-6 text-white font-serif rounded-md hover:shadow-blue-400 hover:shadow-lg'>
              <Link to="https://t.me/NunSian">Contact Me</Link>
            </button>
          </div>
        </div>
        <div id='profile'>
          <img src={CVProfile} alt="" width="300px" height="300px" className='rounded-full fill-stone-700' />
        </div>
      </div>
      <hr />
      <div className='mt-20'>

      </div>
      <section>
        <About/>
      </section>
      <hr />
      <section>
        <div className='flex justify-center items-center gap-3 mt-20'>
          <img src={SkillPhoto} alt="skill" style={{height:"40px"}}/>
          <h1 className='text-black-700 text-2xl font-serif'>
            MY SKILLS
          </h1>
        </div>
        <div className='flex justify-center gap-7 flex-wrap'>
          <Skill imageSrc={Html}>
            <div className='mt-4'>
              <button className='bg-blue-800 p-2 px-3 text-white font-serif hover:scale-110 rounded-md shadow-blue-400 shadow-md' style={{fontSize:"14px"}}>
                <Link to='/project'>View Project</Link>
              </button>
            </div>
          </Skill>
          <Skill imageSrc={Tailwind}>
            <div className='mt-4'>
            <button className='bg-blue-800 p-2 px-3 text-white font-serif hover:scale-110 rounded-md shadow-blue-400 shadow-md' style={{fontSize:"14px"}}>
                <Link to='/project'>View Project</Link>
              </button>
            </div>
          </Skill>
          <Skill imageSrc={ReactJs}>
            <div className='mt-4'>
            <button className='bg-blue-800 p-2 px-3 text-white font-serif hover:scale-110 rounded-md shadow-blue-400 shadow-md' style={{fontSize:"14px"}}>
                <Link to='/project'>View Project</Link>
              </button>
            </div>
          </Skill>
          <Skill imageSrc={CSharp}>
            <div className='mt-4'>
            <button className='bg-blue-800 p-2 px-3 text-white font-serif hover:scale-110 rounded-md shadow-blue-400 shadow-md' style={{fontSize:"14px"}}>
                <Link to='/project'>View Project</Link>
              </button>
            </div>
          </Skill>
          <Skill imageSrc={Java}>
            <div className='mt-4'>
            <button className='bg-blue-800 p-2 px-3 text-white font-serif hover:scale-110 rounded-md shadow-blue-400 shadow-md' style={{fontSize:"14px"}}>
                <Link to='/project'>View Project</Link>
              </button>
            </div>
          </Skill>
          <Skill imageSrc={PHP}>
            <div className='mt-4'>
            <button className='bg-blue-800 p-2 px-3 text-white font-serif hover:scale-110 rounded-md shadow-blue-400 shadow-md' style={{fontSize:"14px"}}>
                <Link to='/project'>View Project</Link>
              </button>
            </div>
          </Skill>
          <Skill imageSrc={Mysql}>
            <div className='mt-4'>
            <button className='bg-blue-800 p-2 px-3 text-white font-serif hover:scale-110 rounded-md shadow-blue-400 shadow-md' style={{fontSize:"14px"}}>
                <Link to='/project'>View Project</Link>
              </button>
            </div>
          </Skill>
          <Skill imageSrc={JSP}>
            <div className='mt-4'>
            <button className='bg-blue-800 p-2 px-3 text-white font-serif hover:scale-110 rounded-md shadow-blue-400 shadow-md' style={{fontSize:"14px"}}>
                <Link to='/project'>View Project</Link>
              </button>
            </div>
          </Skill>
        </div>
      </section>
      <section>
        <SummarySkill/>
      </section>
      <section>
        <div className='mt-20'>

        </div>
          <Contact/>
      </section>
      <footer className='mt-20'>
          <Footer/>
      </footer>
    </>
  )
}

export default Home;