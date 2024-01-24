import React from 'react'

const Skill = (props) => {
  return (
    <>
      <article>
        <div className='p-6 border-2 rounded-md mt-10 hover:shadow-xl w-56'>
          <div className='flex justify-center'>
            <img src={props.imageSrc} alt="Profile" style={{width:"150px",height:"150px"}}/>
          </div>
          <hr />
          {props.children}
        </div>
      </article>
    </>
  )
}

export default Skill;