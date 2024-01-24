import React from 'react'
const ProjectRight = (props) => {
    return (
        <>
        <div className='h-10'>

        </div>
            <article>
                <div className='flex justify-center mt-10'>
                    <div className='w-1 bg-slate-300 rounded-sm'></div>
                    <div className='flex justify-center p-8 flex-wrap'>
                        <div className=''>
                            <img src={props.imageSrc} alt="" style={{width:"300px"}} />
                        </div>
                        <div className='ml-8' id='imgRight'>
                            <h1 className='text-2xl font-serif font-bold text-back-700'>{props.name}</h1>
                            {props.children}
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default ProjectRight;