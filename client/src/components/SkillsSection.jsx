import React from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext.jsx'
import { useContext } from 'react'

const SkillsSection = () => {
  const {copy} = useContext(AppContext)

  return (
    <div id='skills' className='scroll-mt-35 w-full bg-(--color-primary) mb-23 flex flex-col gap-5 items-center py-20 lg:px-50 xl:px-100 md:px-20 px-5
    shadow-(--shadow-gradient)'>
      <h1 className='font-bold text-3xl text-white'>{copy.skills.title}</h1>
      <p className='text-white text-lg mb-5 text-center'>
        {copy.skills.body}
      </p>
      <div className='bg-white py-7 w-full rounded-3xl flex justify-around px-20 flex-wrap gap-5'>
        <img src={assets.html5} alt="" className='w-10 
        transition-all duration-300 hover:scale-130'/>
        <img src={assets.css} alt="" className='w-10 
        transition-all duration-300 hover:scale-130'/>
        <img src={assets.javascript} alt="" className='w-10 
        transition-all duration-300 hover:scale-130'/>
        <img src={assets.react} alt="" className='w-10 
        transition-all duration-300 hover:scale-130'/>
        <img src={assets.nodejs} alt="" className='w-10 
        transition-all duration-300 hover:scale-130'/>
        <img src={assets.mongodb} alt="" className='w-10 
        transition-all duration-300 hover:scale-130'/>
        <img src={assets.python} alt="" className='w-10 
        transition-all duration-300 hover:scale-130'/>
      </div>
    </div>
  )
}

export default SkillsSection
