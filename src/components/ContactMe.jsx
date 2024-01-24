import React from 'react'
import ContactPhoto from '../imgs/contact-us-57.png';
import ContactPhoto2 from '../imgs/customer-service.png';
const ContactMe = () => {
    return (
        <>
            <div>
                <div className='flex justify-center gap-3 items-center'>
                    <img src={ContactPhoto2} alt="" style={{height:"40px"}}/>
                    <h1 className='text-2xl font-serif text-black-700'>CONTACT ME</h1>
                </div>
                <div className='flex justify-center mt-10 '>
                    <div className='flex justify-center p-6 bg-slate-100 flex-wrap shadow-md' style={{ width: "1000px" }}>
                        <div style={{ width: "500px" }} className='flex justify-center items-center'>
                            <img src={ContactPhoto} alt="Contact" className='h-72' />
                        </div>
                        <div className=''>
                            <div style={{ width: "400px" }}>
                                <form action="#" className='flex flex-col gap-4'>
                                    <input type="text" placeholder='Name' />
                                    <input type="text" placeholder='Emails' />
                                    <input type="text" placeholder='Phone' />
                                    <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                                    <input type="submit" value="Submit" className='w-28 bg-blue-950 border-none text-white font-serif cursor-pointer' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMe;