import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import { useContext } from 'react'

const ContactSection = () => {
  const {copy} = useContext(AppContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [text, setText] = useState('')
  const [sent, setSent] = useState(false)

  const sendEmail = async (e) => {
      e.preventDefault()
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, phone, text})
      })

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null)
        throw new Error(errorBody?.message || 'Failed to send message')
      }

      setSent(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div id='contact' className='scroll-mt-25 w-full bg-(--color-secondary) flex flex-col gap-5 items-center py-20 2xl:px-60 lg:px-10'>
          <div className='bg-(--color-primary) w-full lg:grid lg:grid-cols-2 lg:rounded-3xl flex flex-col gap-3 py-10'>
            <div className='flex gap-10 flex-col justify-center pt-20 pb-5 px-15 2xl:pl-30'>
              <h1 className='font-bold text-4xl text-white'>{copy.contact.title}</h1>
              <ul className='flex gap-5 flex-col'>
                <li className='flex gap-3 items-center'>
                  <img src={assets.mail} alt="" className='w-8' />
                  <span className='text-white text-xl'>lehoczki.dani5@gmail.com</span>
                </li>
                <li className='flex gap-3 items-center'>
                  <img src={assets.phone} alt="" className='w-8' />
                  <span className='text-white text-xl'>+36 20 261 2607</span>
                </li>
              </ul>
              <div className='flex gap-7'>
                <img src={assets.instagram} alt="" className='w-8 hover:scale-125 transition-all duration-300'
                onClick={() => window.open('https://www.instagram.com/lehoczki.dani9/', '_blank')} />
                <img src={assets.facebook} alt="" className='w-3 hover:scale-125 transition-all duration-300'
                onClick={() => window.open('https://www.facebook.com/daniel.lehoczki.90', '_blank')} />
                <img src={assets.linkedin} alt="" className='w-12 hover:scale-125 transition-all duration-300' />
              </div>
            </div>
            <div className='sm:px-10 flex justify-center items-center'>
              {sent && <div className='bg-white p-10 text-xl font-bold text-(--color-primary) py-30 sm:rounded-3xl w-full flex flex-col items-center gap-5'>
                {copy.contact.success}
              </div>}
              {!sent && <form onSubmit={sendEmail} className='bg-white p-10 sm:rounded-3xl w-full flex flex-col items-center gap-5'>
                <h2 className='text-(--color-primary) font-bold text-xl'>{copy.contact.formTitle}</h2>
                <div className='w-full flex flex-col gap-1 text-(--color-primary)'>
                  <span className='font-semibold'>{copy.contact.name} *</span>
                  <input required
                  value={name} onChange={(e) => setName(e.target.value)}
                  type="text" className='border-b-2 border-(--color-primary) p-2 focus:outline-none focus:bg-gray-100 transition-all duration-300' placeholder={copy.contact.placeholderName} />
                </div>
                <div className='w-full flex flex-col gap-1 text-(--color-primary)'>
                  <span className='font-semibold'>{copy.contact.email} *</span>
                  <input required
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  type="email" className='border-b-2 border-(--color-primary) p-2 focus:outline-none focus:bg-gray-100 transition-all duration-300' placeholder={copy.contact.placeholderEmail} />
                </div>
                <div className='w-full flex flex-col gap-1 text-(--color-primary)'>
                  <span className='font-semibold'>{copy.contact.phone}</span>
                  <input
                  value={phone} onChange={(e) => setPhone(e.target.value)}
                  type="text" className='border-b-2 border-(--color-primary) p-2 focus:outline-none focus:bg-gray-100 transition-all duration-300' placeholder={copy.contact.placeholderPhone} />
                </div>
                <div className='w-full flex flex-col gap-1 mt-5 text-(--color-primary)'>
                  <span className='font-semibold'>{copy.contact.message} *</span>
                  <textarea required
                  value={text} onChange={(e) => setText(e.target.value)}
                  type="text" className='border-2 resize-none rounded-2xl border-(--color-primary) p-3 focus:outline-none focus:bg-gray-100 h-40 text-wrap transition-all duration-300' placeholder={copy.contact.placeholderMessage} />
                </div>
                <button 
                type='submit' className='font-bold bg-(--color-primary) text-white py-3 px-20 rounded-full hover:bg-(--color-primary-light) transition-all duration-300 hover:scale-110'>
                  {copy.contact.send}
                </button>
              </form>}
            </div>
          </div>
    </div>
  )
}

export default ContactSection
