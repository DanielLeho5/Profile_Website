import React from 'react'
import ProjectContainer from './ProjectContainer'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext.jsx'
import { useContext } from 'react'

const ProjectsList = () => {
  const {copy} = useContext(AppContext)

  return (
    <div id='projects' className='scroll-mt-35 flex flex-col justify-center items-center mb-10'>
      <h1 className='font-bold text-3xl text-(--color-primary) mt-10'>{copy.projects.title}</h1>
      <div className='flex flex-wrap gap-10 justify-center px-10 py-5'>
        <ProjectContainer 
          image={assets.redirectApp} 
          name={copy.projects.items[0].name} 
          desc={copy.projects.items[0].desc}
          ref={"https://redirect-app.duckdns.org/"}
          visitLabel={copy.projects.visitLabel}/>
        <ProjectContainer 
          image={assets.comingSoon} 
          name={copy.projects.items[1].name} 
          desc={copy.projects.items[1].desc}/>
        <ProjectContainer 
          image={assets.comingSoon} 
          name={copy.projects.items[2].name} 
          desc={copy.projects.items[2].desc}/>
        <ProjectContainer 
          image={assets.comingSoon} 
          name={copy.projects.items[3].name} 
          desc={copy.projects.items[3].desc}/>
        <ProjectContainer 
          image={assets.comingSoon} 
          name={copy.projects.items[4].name} 
          desc={copy.projects.items[4].desc}/>
        <ProjectContainer 
          image={assets.comingSoon} 
          name={copy.projects.items[5].name} 
          desc={copy.projects.items[5].desc}/>
      </div>
    </div>
  )
}

export default ProjectsList
