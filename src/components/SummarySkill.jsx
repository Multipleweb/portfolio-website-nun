import React from 'react'
import PhotoSkill from '../imgs/adjustments.png';
const SummarySkill = () => {
  return (
    <>
      <div className='mt-20 flex justify-center flex-wrap'>
        <div className='flex justify-center flex-wrap bg-slate-100 p-6' style={{width:"1000px"}}>
          <div>
            <img src={PhotoSkill} alt="CvProfile" width="300px" />
          </div>
          <div className='ml-4' id='imgRight'>
            <h1 className='text-2xl font-serif text-green-700'>Summary Skills</h1>
            <div className='mt-3'>
              <div className='flex justify-between'>
                <h1>Graphic Design</h1>
                <p>60%</p>
              </div>
              <meter min={0} max={100} value={60} className='w-96'></meter>
            </div>
            <div className='mt-3'>
              <div className='flex justify-between'>
                <h1>Creative</h1>
                <p>70%</p>
              </div>
              <meter min={0} max={100} value={70} className='w-96'></meter>
            </div>
            <div className='mt-3'>
              <div className='flex justify-between'>
                <h1>Communication</h1>
                <p>90%</p>
              </div>
              <meter min={0} max={100} value={90} className='w-96'></meter>
            </div>
            <div className='mt-3'>
              <div className='flex justify-between'>
                <h1>Team Work</h1>
                <p>85%</p>
              </div>
              <meter min={0} max={100} value={85} className='w-96'></meter>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SummarySkill;