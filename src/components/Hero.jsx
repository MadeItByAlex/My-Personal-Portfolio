import image from "/src/images/me.jpg"
import { motion } from "framer-motion"
import { BsGithub, BsLinkedin, } from "react-icons/bs"



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
          <img src= {image} alt="" className="w-[300px] mt-[20px] cursor-pointer rounded-full shadow-xl
           transition-all bg-transparent duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 
           md:w-[350px] h-[350px] object-cover  " />
        </motion.div>

        <motion.div
         initial={{y: 50 , opacity: 0}}
         animate={{y: 0, opacity: 1}}
         transition={{duration: 0.8 , delay:0.4}}
        
        className="flex max-w-[700px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent 
            text-5xl font-light md:text-7xl">Alex Man</h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent 
            text-2xl   md:text-3xl">Full-stack Developer</h3>
          <p className="text-pretty mt-[30px] text-[20px] text-gray-400">I'm a Full Stack Engineer focused on creating high-performance, dynamic, and scalable web applications.</p>
          
          <ul className="hidden md:flex gap-5">
                
                  <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500
                  hover:opacity-100"> 
                    <a href="https://www.linkedin.com/in/alex-man-914377233/" target="_blank" rel="noopener noreferrer">
                      <BsLinkedin />
                    </a>
                  </li>
          
                  <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-purple-500
                  hover:opacity-100">
                     <a href="https://github.com/MadeItByAlex" target="_blank" rel="noopener noreferrer">
                      <BsGithub />
                    </a>
                  </li>
          
          </ul>
          

        <a href="/AlexManCVPro.pdf"
        download="AlexManCVPro.pdf"
         className="text-nowrap rounded-lg border border-indigo-600 bg-black px-3 mt-15 py-3
         text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-2
         hover:shadow-xl hover:shadow-indigo-600 ">Download CV</a>

        </motion.div>
        </div>

  </div>
  )
}

export default Hero