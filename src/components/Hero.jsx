import image from "/src/images/me.jpg"
import { motion } from "framer-motion"
import cv from "/src/assets/AlexCv.pdf"

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center
    justify-center py-28 md:px-32"> 
    
    <div className="flex flex-col items-center justify-center gap-10 text-white">

        <motion.div
        initial={{y: -50 , opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8 , delay:0.4}}
        
        >
          <img src= {image} alt="" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900
           transition-all bg-transparent duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 
           md:w-[350px] " />
        </motion.div>

        <motion.div
         initial={{y: 50 , opacity: 0}}
         animate={{y: 0, opacity: 1}}
         transition={{duration: 0.8 , delay:0.4}}
        
        className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent 
            text-5xl font-light md:text-7xl">Alex Man</h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent 
            text-2xl md:text-3xl">Full-stack Developer</h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">I’m a Full Stack Developer skilled in C#, Java, Kotlin, React, HTML, CSS, Tailwind CSS,
             JavaScript, MySQL, and PostgreSQL. I develop dynamic, efficient, and scalable applications,
              leveraging both front-end and back-end expertise to deliver seamless user experiences.</p>

        <a href={cv}
        download="Alex_Cv.pdf"
         className="text-nowrap rounded-lg border border-indigo-600 bg-black px-3 mt-15 py-3
         text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2
         hover:shadow-xl hover:shadow-indigo-600 ">Download CV</a>

        </motion.div>
        </div>

  </div>
  )
}

export default Hero