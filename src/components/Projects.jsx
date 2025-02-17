import { div, span } from "framer-motion/client"
import image from "/src/images/6.png"
import image1 from "/src/images/4.png"
import image2 from "/src/images/3.png"
import image3 from "/src/images/4.png"
import cv from "/src/assets/AlexManCV2025.pdf"

import { motion } from "framer-motion"  
import { Children } from "react"


const projectsData=[
  {
    image: image,
    title:"Vehicle & Crypto Explorer – Kotlin Android App",
    description:"This Android app, built with Kotlin, allows users to explore a collection of vehicles, motorcycles, and cryptocurrencies by fetching data from an API. Users can view a list of items in each category and tap on them to see detailed specifications and images in a separate view.",
    technologies:["KOTLIN"]

  }
  ,
  {
    image: image1,
    title:"Space Invaders – Unity Game",
    description:"A habit tracker app that helps you build good habits and break bad ones. It allows you to track your habits and goals in a simple and intuitive way.",
    technologies:["UNITY","C#"],

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


const ScrollReveal = ({children}) => {

  return(
    <motion.div
    initial = {{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}
    >
      {children}
    </motion.div>
  )

}

const ProjectCard = ({project}) => {


  return(
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img src= {project.image} alt="" className="w-full cursor-pointer scale-75 rounded-2xl transition-all duration-300
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
    </ScrollReveal>
    
    )

}

const Projects = () => {
  return (

    <div id="projects" className="flex min-h-screen w-full flex-col items-center 
    justify-center gap-16 p-4 md:px-14 md:py-24">
      
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">My projects</h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectsData.map((project,index) => (
            <ProjectCard key = {index} project = {project}/>
          ))
          
        }

      </div>
    
      
      
      </div>
  )
}

export default Projects