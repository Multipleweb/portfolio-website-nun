import React from 'react'
import ProjectLetf from '../components/ProjectLetf';
import ProjectRight from '../components/ProjectRight';
import Project1 from '../imgs/Screenshot 2024-01-13 180859.png';
import Project2 from '../imgs/Screenshot 2024-01-13 180929.png';
import Project3 from '../imgs/Screenshot 2024-01-13 181050.png';
import Project4 from '../imgs/Screenshot 2024-01-13 181336.png';
import ProjectPhoto from '../imgs/layers.png';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const Project = () => {
  return (
    <>
    <br />
    <br />
    <br />
    <br />
      <div className='flex justify-center gap-3 items-center'>
        <img src={ProjectPhoto} alt="" style={{ height: "40px" }} />
        <h1 className='text-2xl font-serif text-back-700'>PROJECTS</h1>
      </div>
      <ProjectRight imageSrc={Project1} name="Traveling Cambodia">
        <div className='mt-2'>
          <p style={{ width: "400px" }}>
            Traveling Combodia platform is the platform where travel enthusiasts find the beautifull place in cambodia.
            And find resort, bus ticket that make travel enthusiasts easier in their travel.
          </p>
          <p className='mt-2 text-slate-500 font-serif'>HTML CSS, JAVASCRIPT, PHP and MYSQL</p>
        </div>
        <div className='mt-4'>
          <button className='p-2 px-6 bg-blue-950 text-white rounded-md shadow-blue-700 shadow-md font-serif hover:rotate-2'>
            <Link to="https://github.com/Multipleweb/TravelCombodia.git">View Code</Link>
          </button>
        </div>
      </ProjectRight>
      <ProjectLetf imageSrc={Project2} name="Computer E-shop">
        <p style={{ width: "400px" }} className='mt-3'>
          Computer E-shop is the platform that sell computer.
          People that need computer they can buy computer on the internet.
          They reveiw and read more about description about compurter which they want to buy.
        </p>
        <p className='mt-2 text-slate-500 font-serif'>HTML, CSS, JAVASCRIPT, PHP and MYSQL</p>
        <div className='mt-4'>
          <button className='p-2 px-6 bg-blue-950 text-white rounded-md shadow-blue-700 shadow-md font-serif hover:rotate-2'>
            <Link to="https://github.com/Multipleweb/ComputerEShop.git">View Code</Link>
          </button>
        </div>
      </ProjectLetf>
      <ProjectRight imageSrc={Project3} name="Student Enrollment System">
        <div className='mt-2'>
          <p style={{ width: "400px" }}>
            Student Enrollment System is System for manage student enrollment by online. It make student easy to enroll by anywhere anytime just have internet.
            And School make easy to manage student enrollment.
          </p>
          <p className='mt-2 text-slate-500 font-serif' style={{ fontSize: "14px" }}>HTML, CSS, JSP and MYSQL</p>
        </div>
        <div className='mt-4'>
          <button className='p-2 px-6 bg-blue-950 text-white rounded-md shadow-blue-700 shadow-md font-serif hover:rotate-2'>
            <Link to="https://github.com/Multipleweb/Student_Enrollment-.git">View Code</Link>
          </button>
        </div>
      </ProjectRight>
      <ProjectLetf imageSrc={Project4} name="Watch E-Shop">
        <p style={{ width: "400px" }} className='mt-3'>
          Watch E-shop is the platform that sell watch for men and women.
          Watch E-shop make people who love watch,They can buy watch on the internet.
          Customer are save time and save money just internet they can buy watch from home or anywhere.
        </p>
        <p className='mt-2 text-slate-500 font-serif'>HTML, CSS, JAVASCRIPT</p>
        <div className='mt-4'>
          <button className='p-2 px-6 bg-blue-950 text-white rounded-md shadow-blue-700 shadow-md font-serif hover:rotate-2'>
            <Link to="https://github.com/Multipleweb/WatchEShopping.git">View Code</Link>
          </button>
        </div>
      </ProjectLetf>
      <footer className='mt-20'>
        <Footer />
      </footer>
    </>
  )
}

export default Project;