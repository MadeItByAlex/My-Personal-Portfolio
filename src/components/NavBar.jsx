import { useState } from "react"
import { BiMenu, BiX } from "react-icons/bi"
import { BsGithub, BsLinkedin} from "react-icons/bs"


const NavBar = () => {
  
  const[isOpen, setIsOpen] = useState(false)
  
  const menuOpen = () => {
    setIsOpen(!isOpen);
  } 

  return (
    
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-10 flex w-auto max-w-screen-lg 
    justify-between border border-gray-700 mt-3 bg-black/70 px-4 py-4 text-white 
    backdrop-blur-md rounded-4xl md:justify-evenly">
      

      <ul className="hidden md:flex gap-10">

        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Home</li>
        </a>

        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Projects</li>
        </a>

        <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Tech</li>
        </a>

        <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Contact</li>
        </a>

      </ul>


      
      {isOpen ? (
        <BiX className="block md:hidden  text-4xl" onClick={menuOpen}/>
      )
      :
      (
        <BiMenu className="block md:hidden  text-4xl" onClick={menuOpen}/>
      ) }

      {isOpen && (
        <div className={`fixed right-30 top-[84px] flex h-auto  flex-col items-start justify-start
          gap-10 border-1 border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden"}`}>

          <ul className="flex flex-col gap-8">
              <a href="#home" onClick={() => setIsOpen(false)} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
              <li>Home</li>
            </a>


            <a href="#projects"  onClick={() => setIsOpen(false)} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
              <li>Projects</li>
            </a>
            <a href="#tech"  onClick={() => setIsOpen(false)} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
              <li>Tech</li>
            </a>

            <a href="#contact"  onClick={() => setIsOpen(false)} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
              <li>Contact</li>
            </a>
          </ul>

          <ul className="flex flex-wrap gap-5">
        

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500
        hover:opacity-100">
          <a href="https://www.linkedin.com/in/alex-man-914377233/"  onClick={() => setIsOpen(false)} target="_blank" rel="noopener noreferrer">
          
            <BsLinkedin/>
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-purple-500
        hover:opacity-100">
          <a href="https://github.com/MadeItByAlex"  onClick={() => setIsOpen(false)} target="_blank" rel="noopener noreferrer">
            <BsGithub/>
          </a>
        </li>

        </ul>

      </div>
      )}
    </nav>
  )
}

export default NavBar