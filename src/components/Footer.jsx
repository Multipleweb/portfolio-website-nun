import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className='flex justify-around flex-wrap bg-blue-950 text-white'>
                <div>
                    <div className='mt-10'>
                        <h1 className='text-2xl font-bold underline'>NUN Portfolio</h1>
                    </div>
                    <div className='mt-5 mr-10'>
                        <p>Thank you for visiting my portfolio website.</p>
                        <p>Connect with me over socials.</p>
                    </div>
                    <div className='mt-5'>
                        <p>Keep communication 💬.Connect with me over chat.</p>
                    </div>
                </div>
                <div className='mt-10'>
                    <div>
                        <h1 className='text-2xl font-bold underline'>Contact Info</h1>
                    </div>
                    <div className='mt-5'>
                        <div className='flex gap-4 p-2'>
                            <p>Phone :</p>
                            <p>+885 87209436</p>
                        </div>
                        <div className='flex gap-4 p-2'>
                            <p>Email :</p>
                            <p>nunsian2003@gmail.com</p>
                        </div>
                        <div className='flex gap-4 p-2'>
                            <p>Address:</p>
                            <p>Toul Songkae, Khan Russey Keo, Phnom Penh</p>
                        </div>
                        <div className='flex gap-4 p-2'>
                            <div className='flex justify-center gap-4'>
                                <Link to="https://www.linkedin.com/in/nun-sian-4a27302a9/">
                                    <i className='fa fa-linkedin'></i>
                                </Link>
                                <Link to="https://web.facebook.com/sian.nun">
                                    <i className='fa fa-facebook'></i>
                                </Link>
                                <Link to="https://t.me/NunSian">
                                    <i className='fa fa-telegram'></i>
                                </Link>
                                <Link to="https://mail.google.com/mail/u/2/#inbox?compose=new">
                                    <i className='fa fa-envelope'></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;