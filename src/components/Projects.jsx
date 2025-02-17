import { div, span } from "framer-motion/client"
import image from "/src/images/1.png"
import image1 from "/src/images/2.png"
import image2 from "/src/images/3.png"
import image3 from "/src/images/4.png"

import { motion } from "framer-motion"  


const projectsData=[
  {
    image: image,
    title:"REST API POINT",
    description:"A habit tracker app that helps you build good habits and break bad ones. It allows you to track your habits and goals in a simple and intuitive way.",
    technologies:["React","HTML","CCS","MYSQL"],

  }
  ,
  {
    image: image1,
    title:"Drawer App Android",
    description:"A habit tracker app that helps you build good habits and break bad ones. It allows you to track your habits and goals in a simple and intuitive way.",
    technologies:["React","HTML","CCS","MYSQL"],

  }
  ,
  {
    image: image2,
    title:"Rock Paper Sizors Spock Lizard",
    description:"A habit tracker app that helps you build good habits and break bad ones. It allows you to track your habits and goals in a simple and intuitive way.",
    technologies:["React","HTML","CCS","MYSQL"],

  }
  ,
  {
    image: image3,
    title:"Habbit tracker",
    description:"A habit tracker app that helps you build good habits and break bad ones. It allows you to track your habits and goals in a simple and intuitive way.",
    technologies:["React","HTML","CCS","MYSQL"],

  }
]

const ProjectCard = (project) => {

  return(
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img src= {project.image} alt="" className="w-full cursor-pointer  rounded-2xl transition-all duration-300
      hover:scale-105 md:w-[300px]" />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
        <div className="text-xl font-semibold">{project.title}</div>
        <p className="text-gray-400">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-5">

          {
          project.technologies.map((tech,index) => (
            <span key={index} className="rounded-lg bg-black p-3">
              {tech}
            </span>
          ))
          }
        </div>
      </div>
    </div>  
    )

}

const Projects = () => {
  return (

    <div id="projects" className="flex min-h-screen w-full flex-col items-center 
    justify-center gap-16 p-4 md:px-14 md:py-24">
      
      <h1 className="text-4xl font-light text-white md:text-6xl">My projects</h1>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectsData.map((project,index) => (
            <ProjectCard key={index} project={project} />
          ))
          
        }

      </div>
    
      
      
      </div>
  )
}

export default Projects