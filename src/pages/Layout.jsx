import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import Logo from '../imgs/Logo3D.png';
const Layuot = () => {
  let [open,setOpen] = useState(false);
  return (
    <>
      <nav>
        <ul className='w-full flex justify-around items-center p-2 font-serif shadow-md bg-white fixed'>
          <div>
            <li className='inline-block'>
              <Link to="/">
                <img src={Logo} alt="logo" className='w-10' />
              </Link>
            </li>
          </div>
          <div className={` flex gap-8 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-14 ':'top-[-490px]'} max-md:flex-col max-md:gap-2 max-md:ml-5`} style={{ fontSize: "16px" }}>
            <li className='max-md:hover:shadow-md max-md:p-2'>
              <Link to="/" className='text-green-700'>Home</Link>
            </li>
            <li className='max-md:hover:shadow-md max-md:p-2'>
              <Link to="/about" className='hover:text-green-700'>About</Link>
            </li>
            <li className='max-md:hover:shadow-md max-md:p-2'>
              <Link to="/contact" className='hover:text-green-700'>Contact</Link>
            </li>
            <li className='max-md:hover:shadow-md max-md:p-2'>
              <Link to="/project" className='hover:text-green-700'>Project</Link>
            </li>
          </div>
          <div className='md:hidden text-2xl text-blue-700 transition-all duration-200 ease ml-40'>
            <button onClick={()=>setOpen(!open)}>
              <i className={open ? 'fa fa-close':'fa fa-bars'}></i>
            </button>
          </div>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layuot