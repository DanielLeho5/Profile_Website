import React from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext.jsx'
import { useContext } from 'react'

const Sidebar = () => {
    
  const {toggleSidebar, toggleLanguage, language, copy} = useContext(AppContext)

  return (
    <div 
    onClick={toggleSidebar}
    className='fixed inset-0 w-full h-screen bg-gray-400/20 backdrop-blur-xs z-10'>
      <div 
      onClick={e => e.stopPropagation()}
      className='w-60 sm:w-80 bg-white h-full ml-auto flex flex-col pt-5'>
        <div className='flex justify-center'>
            <button 
            onClick={toggleSidebar}
            className='p-3 hover:font-bold hover:underline cursor-pointer hover:bg-gray-100 transition-colors duration-300 ease-in-out w-fit rounded-full'>
                <img src={assets.close} alt="close button" className='w-7'/>
            </button>
        </div>
        <button className='hover:font-bold hover:underline cursor-pointer p-3 text-xl' onClick={() => document.getElementById("about")?.scrollIntoView()}>{copy.nav.about}</button>
        <button className='hover:font-bold hover:underline cursor-pointer p-3 text-xl' onClick={() => document.getElementById("projects")?.scrollIntoView()}>{copy.nav.projects}</button>
        <button className='hover:font-bold hover:underline cursor-pointer p-3 text-xl' onClick={() => document.getElementById("skills")?.scrollIntoView()}>{copy.nav.skills}</button>
        <button className='hover:font-bold hover:underline cursor-pointer p-3 text-xl' onClick={() => document.getElementById("contact")?.scrollIntoView()}>{copy.nav.contact}</button>
        <button onClick={toggleLanguage} className='mt-auto pb-10'>
          {language === 'hu' ? <><b>HU</b> / EN</> : <>HU / <b>EN</b></>}
        </button>
      </div>
    </div>
  )
}

export default Sidebar
