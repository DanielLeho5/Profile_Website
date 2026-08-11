import React from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext.jsx'
import { useContext } from 'react'

const Footer = () => {
  const {copy} = useContext(AppContext)

  return (
    <div className='flex flex-col bg-(--color-primary-dark) pt-30 pb-5 px-10 gap-10'>
      <div className='sm:grid sm:grid-cols-2 flex flex-col gap-5'>
        <div className='flex flex-col gap-3'>
            <h1 className='text-white font-bold text-3xl'>Leho Webdev</h1>
            <h2 className='text-white text-xl'>{copy.footer.slogan}</h2>
        </div>
        <div className='flex flex-col items-end gap-3'>
            <h2 className='text-white font-bold text-3xl'>+36 20 261 2607</h2>
            <h3 className='text-white text-xl'>lehoczki.dani5@gmail.com</h3>
        </div>
      </div>
      <hr className='border-white/30' />
      <div className='sm:grid sm:grid-cols-3 px-30 flex flex-col gap-3'>
        <div className='flex flex-col gap-1 sm:items-start items-center'>
            <button className='hover:font-bold hover:underline cursor-pointer text-white text-lg'
          onClick={() => document.getElementById("about")?.scrollIntoView()}>{copy.footer.about}</button>
            <button className='hover:font-bold hover:underline cursor-pointer text-white text-lg'
          onClick={() => document.getElementById("projects")?.scrollIntoView()}>{copy.footer.projects}</button>
            <button className='hover:font-bold hover:underline cursor-pointer text-white text-lg'
          onClick={() => document.getElementById("skills")?.scrollIntoView()}>{copy.footer.skills}</button>
            <button className='hover:font-bold hover:underline cursor-pointer text-white text-lg'
          onClick={() => document.getElementById("contact")?.scrollIntoView()}>{copy.footer.contact}</button>
        </div>
        <div className='flex items-center justify-center gap-5 w-full'>
            <img src={assets.instagram} alt="" className='w-8 hover:scale-125 transition-all duration-300'
            onClick={() => window.open('https://www.instagram.com/lehoczki.dani9/', '_blank')} />
            <img src={assets.facebook} alt="" className='w-7 hover:scale-125 transition-all duration-300'
            onClick={() => window.open('https://www.facebook.com/daniel.lehoczki.90', '_blank')} />
            <img src={assets.linkedin} alt="" className='w-12 hover:scale-125 transition-all duration-300' />
        </div>
      </div>
      <hr className='border-white/30' />
      <span className='text-white'>© 2026 · Leho Webdev</span>
    </div>
  )
}

export default Footer
