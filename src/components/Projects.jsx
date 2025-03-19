import { div, span } from "framer-motion/client"
import image from "/src/images/6.png"
import image1 from "/src/images/4.png"
import image2 from "/src/images/yt2.png"
import image3 from "/src/images/gcs.png"
import { motion } from "framer-motion"  
import { Children } from "react"


const projectsData=[
  {
    image: image,
    title:"Vehicle & Crypto Explorer – Kotlin Android App",
    description:"This Android app, built with Kotlin, allows users to explore a collection of vehicles, motorcycles, and cryptocurrencies by fetching data from an API. Users can view a list of items in each category and tap on them to see detailed specifications and images in a separate view.",
    technologies:["KOTLIN"],
    url:"https://github.com/TheRealAlexG/Vehicle-Crypto-Explorer"

  }
  ,
  {
    image: image1,
    title:"Space Invaders – Unity Game",
    description:"This Unity game is a space shooter where the player controls a spaceship, dodging and shooting meteorites while facing enemy ships that also shoot back. The goal is to survive as long as possible while eliminating threats from both the environment and enemies.",
    technologies:["UNITY","C#"],
    url:"https://github.com/TheRealAlexG/Space-Invaders"

  }
  ,
  {
    image: image2,
    title:"Youtube Downloader – Python App",
    description:"Tired of visiting sketchy websites to download YouTube videos? 😤I’ve built a YouTube Downloader 🖥️🎥 where you can easily download your favorite YouTube videos! Simply input the video URL, select your preferred quality, and start downloading! 🎯✨",
    technologies:["Python"],
    url:"https://github.com/MadeItByAlex/YoutubeDownloader"

  }
  ,

  {
    image: image3,
    title:"GCS-Data-Retrieve - React App",
    description:"A web app that retrieves a JSON file from a GCS bucket and exposes an API endpoint with filtering, pagination (20 entries per page), and sorting by id, name, and createdOn. The frontend displays the data in a table with search, filtering, and row ordering options. 🚀",
    technologies:["JAVA","REACT","SPRING BOOT"],
    url:"https://github.com/TheRealAlexG/GCS-Data-Retriever"

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
    <a href={project.url} target="_blank" rel="noopener noreferrer">
    
      <img src= {project.image} alt="" className="w-full max-w-[300px] cursor-pointer scale-75 rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" />

    </a>
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