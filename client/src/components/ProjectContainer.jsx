import React from 'react'
import { assets } from '../assets/assets'

const ProjectContainer = ({image, name, desc, ref, visitLabel = 'Visit the website!'}) => {
  return (
    <div className="lg:w-130 h-100 w-80 flex flex-col rounded-3xl 
        transition-all duration-300 hover:scale-105 hover:shadow-xl bg-contain shadow-lg"
        style={{backgroundImage: `url(${image})`}}>
      <div className='bg-white mt-auto p-5 rounded-b-3xl'>
        <h2 className='font-bold text-xl mb-2'>{name}</h2>
        <p className='mb-3'>{desc}</p>
        {ref && <span className='text-(--color-primary) underline'><a href={ref}>{visitLabel}</a></span>}
      </div>
    </div>
  )
}

export default ProjectContainer
