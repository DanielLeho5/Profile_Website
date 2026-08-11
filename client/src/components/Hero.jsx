import React from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext.jsx'
import { useContext } from 'react'

const Hero = () => {
  const {copy} = useContext(AppContext)

  return (
    <div id='about' className='scroll-mt-35 my-10 py-15 lg:py-25 gap-y-18 flex flex-wrap-reverse justify-center gap-x-20 items-center md:px-5
    shadow-[0_0_0_12px_var(--color-primary),0_0_0_20px_#ffffff,0_0_0_28px_var(--color-secondary)]'
    style={{
        backgroundImage: "radial-gradient(circle at 50% 100%, transparent 20%, var(--color-primary) 21%, var(--color-primary) 34%, transparent 35%, transparent), radial-gradient(circle at 50% 0%, transparent 20%, var(--color-primary) 21%, var(--color-primary) 34%, transparent 35%, transparent)",
        backgroundPosition: "0 0, -36px 0",
        backgroundSize: "72px 54px",
    }}>
      <div
      className='bg-(--color-primary) md:border-3 border-(--color-primary) md:rounded-3xl p-10 md:max-w-150 w-full border-y-(--color-primary) border-3
      transition-all duration-500 shadow-[0_10px_15px_rgba(0,0,0,0.5)] hover:scale-110 lg:hover:-rotate-3
      '>
        <h1
        className='text-4xl font-bold text-white mb-5'
        >{copy.hero.title}</h1>
        <p className='text-lg text-white'>
          {copy.hero.body}
        </p>
      </div>
      <div className='
        rounded-full bg-white w-70 h-70 flex items-center justify-center 
        shadow-[0_0_0_7px_var(--color-secondary),0_10px_15px_rgba(0,0,0,0.5)]
        overflow-hidden
        transition-all duration-500 hover:scale-110 hover:rotate-6
        '>
        <img src={assets.profile_img} alt="profile picture" className='mt-5 w-[320px] h-[320px] object-cover' />
      </div>
    </div>
  )
}

export default Hero
