import React from 'react'

const ProjectLetf = (props) => {
    return (
        <>
            <article>
                <div className='flex justify-center mt-10' id='rightSize'>
                    <div className='flex justify-center p-8 flex-wrap'>
                        <div className='mr-8'>
                            <h1 className='text-2xl font-serif font-bold text-black-700'>{props.name}</h1>
                            {props.children}
                        </div>
                        <div className='' id='imgRight'>
                            <img src={props.imageSrc} alt="" style={{ width: "300px" }} />
                        </div>
                    </div>
                    <div className='w-1 bg-slate-300 rounded-sm'></div>
                </div>
            </article>
        </>
    )
}

export default ProjectLetf;