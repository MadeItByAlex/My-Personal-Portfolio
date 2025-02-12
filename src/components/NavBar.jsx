import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs"


const NavBar = () => {
  return (
    
    <nav className="fixed top-0 z-10 flex w-full items-center 
    justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6
    text-white backdrop-blur-md md:justify-evenly">
      

      <a href="#Home" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80
      text-3xl font-semibold transition-all duration-300 hover:opacity-100">Alex</a>

      <ul className="hidden md:flex gap-10">

        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Home</li>
        </a>

        <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Tech</li>
        </a>

        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Projects</li>
        </a>

        <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Contact</li>
        </a>

      </ul>


      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500
        hover:opacity-100">
          <BsYoutube/>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500
        hover:opacity-100">
          <BsLinkedin/>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-white
        hover:opacity-100">
          <BsTwitterX/>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-purple-500
        hover:opacity-100">
          <BsGithub/>
        </li>

      </ul>



    </nav>

    




  )
}

export default NavBar