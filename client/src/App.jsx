import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import ProjectsList from './components/ProjectsList'
import { AppContext } from './context/AppContext'
import { useContext } from 'react'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {

  const {isSideBarOpen} = useContext(AppContext)

  return <div className='bg-gray-100'>
    <Navbar/>
    {isSideBarOpen && <Sidebar/>}
    <Hero/>
    <ProjectsList/>
    <SkillsSection/>
    <ContactSection/>
    <Footer/>
  </div>
}

export default App
