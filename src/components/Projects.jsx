import image from "/src/images/1.png"
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
    image: image,
    title:"Drawer App Android",
    description:"A habit tracker app that helps you build good habits and break bad ones. It allows you to track your habits and goals in a simple and intuitive way.",
    technologies:["React","HTML","CCS","MYSQL"],

  }
  ,
  {
    image: image,
    title:"Rock Paper Sizors Spock Lizard",
    description:"A habit tracker app that helps you build good habits and break bad ones. It allows you to track your habits and goals in a simple and intuitive way.",
    technologies:["React","HTML","CCS","MYSQL"],

  }
  ,
  {
    image: image,
    title:"Habbit tracker",
    description:"A habit tracker app that helps you build good habits and break bad ones. It allows you to track your habits and goals in a simple and intuitive way.",
    technologies:["React","HTML","CCS","MYSQL"],

  }
]

const Projects = () => {
  return (

    <div id="projects" className="flex min-h-screen w-full flex-col items-center 
    justify-center gap-16 p-4 md:px-14 md:py-24">
      
      <h1 className="text-4xl font-light text-white md:text-6xl">My projects</h1>
    
      
      
      </div>
  )
}

export default Projects