import { motion } from "framer-motion";


export const Contact = () => {

  return (
    
    <div id="contact" className="flex min-h-[70vh] min-v-full items-center
     justify-center">

      <div className="flex flex-col items-center justify-center gap-3 
      space-y-6 p-14">

          
        <motion.h1
        initial = {{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.8}}
        
        
        className="text-center text-5xl md:text-7xl">
          <span  className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Get in Touch</span>
        </motion.h1>

        <motion.p
         initial = {{opacity:0,y:100}}
         whileInView={{opacity:1,y:0}}
         viewport={{once:true}}
         transition={{duration:0.8}}
        
        className="text-center text-lg font-semibold text-gray-500 ">
          Want to Chat? Send me an E-mail through this button and I'll get back to you as soon as possible.
        </motion.p>

        <a href="mailto:alexmanmichael@gmail.com" className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3
         text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2
         hover:shadow-xl hover:shadow-indigo-600">Contact Me</a>

          

      </div>
     </div>

     
  )
}
