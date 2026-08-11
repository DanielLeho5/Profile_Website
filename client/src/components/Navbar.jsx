import React from 'react'
import { assets } from '../assets/assets.js'
import { AppContext } from '../context/AppContext.jsx'
import { useContext } from 'react'

const Navbar = () => {

    const {toggleSidebar, toggleLanguage, language, copy} = useContext(AppContext)

  return (
    <div className="bg-white flex justify-between lg:grid lg:grid-cols-[1fr_1.5fr_1fr] py-4 z-10 sticky top-0 w-full shadow-lg">
        <div className='flex gap-3 items-center ml-5 cursor-pointer w-fit pr-10' onClick={() => document.getElementById("about")?.scrollIntoView()}>
            <img src={assets.logo} alt="brand logo" className='w-15 mx-5 my-3'/>
            <span className="text-2xl text-nowrap">Leho Webdev</span>
        </div>
        <div className="justify-between lg:grid grid-cols-4 hidden">
            <button className='hover:font-bold hover:underline cursor-pointer text-xl'
                        onClick={() => document.getElementById("about")?.scrollIntoView()}>{copy.nav.about}</button>
            <button className='hover:font-bold hover:underline cursor-pointer text-xl'
                        onClick={() => document.getElementById("projects")?.scrollIntoView()}>{copy.nav.projects}</button>
            <button className='hover:font-bold hover:underline cursor-pointer text-xl'
                        onClick={() => document.getElementById("skills")?.scrollIntoView()}>{copy.nav.skills}</button>
            <button className='hover:font-bold hover:underline cursor-pointer text-xl'
                        onClick={() => document.getElementById("contact")?.scrollIntoView()}>{copy.nav.contact}</button>
        </div>
        <div className='flex justify-end mr-5'>
            <button 
            onClick={toggleSidebar}
            className='hover:font-bold hover:underline cursor-pointer lg:hidden'>
                <img src={assets.hamburger} alt="hamburger menu" className='w-10'/>
            </button>
            <button onClick={toggleLanguage} className='hidden lg:inline' aria-label={`Switch language, current ${language}`}>
                {language === 'hu' ? <><b>HU</b> / EN</> : <>HU / <b>EN</b></>}
            </button>
        </div>
    </div>
  )
}

export default Navbar
