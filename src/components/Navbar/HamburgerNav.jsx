import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router"

const HamburgerNav = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const {pathname} = useLocation()

  return (
    <>
      {/* <h2>Hamburger Navbar</h2> */}
      <div className="relative bg-[#333333] text-white">
        <h1 className="font-[tangerine] pt-12 px-5 pb-2 text-6xl">Laura Pohl Web Developer</h1>
        <div className="absolute top-1 right-1 p-2 pb-0 z-50">
          <a href="#" onClick={() => setIsOpen(!isOpen)}>
            <button>
              <img src="burger-menu-gray.svg" alt="burger menu icon" className="w-7.5 h-auto "/>
            </button>
          </a>
        </div>
      </div>
      {/* Moble Menu Container */}
      {isOpen && (
        <nav onMouseLeave={() => setIsOpen(false)} className="px-8 bg-[#333333] text-white">
          <ul className="w-full h-full">
            <li className="text-xl w-full">
              <NavLink 
                to="/" 
                className={({isActive}) => isActive? "block font-bold bg-[#008593] w-full h-full px-8 py-3" : "block w-full h-full hover:text-black hover:bg-[#7FD7E3] hover:py-3 hover:px-8 hover:font-bold px-8 py-3"}
              >
                Home
              </NavLink>
            </li>
            <li 
              className="text-xl w-full"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={() => {setIsDropdownOpen(!isDropdownOpen)}}
                className={((pathname === "/my-story") || (pathname === "/mascots")) ? "text-left font-bold bg-[#008593] w-full h-full px-8 py-3" : "text-left w-full h-full hover:text-black hover:bg-[#7FD7E3] hover:py-3 hover:px-8 hover:font-bold px-8 py-3"}
              >
                About
              </button>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div 
                  className="flex flex-col pl-8"
                >
                  <NavLink 
                    to="/my-story" 
                    onClick={() => setIsDropdownOpen(false)}
                    className={({isActive}) => isActive? "block font-bold bg-[#008593] w-full h-full ps-8 py-3" : "block w-full h-full hover:text-black hover:bg-[#7FD7E3] hover:py-3 hover:px-8 hover:font-bold px-8 py-3"}
                  >
                    My Story
                  </NavLink>

                  <NavLink 
                    to="/mascots" 
                    onClick={() => setIsDropdownOpen(false)}
                    className={({isActive}) => isActive? "block font-bold bg-[#008593] w-full h-full ps-8 py-3" : "block w-full h-full hover:text-black hover:bg-[#7FD7E3] hover:py-3 hover:px-8 hover:font-bold px-8 py-3"}
                  >
                    Mascots
                  </NavLink>

                </div>
              )}
            </li>
            <li className="text-xl w-full">
              <NavLink 
                to="/portfolio" 
                className={({isActive}) => isActive? "block font-bold bg-[#008593] w-full h-full px-8 py-3" : "block w-full h-full hover:text-black hover:bg-[#7FD7E3] hover:py-3 hover:px-8 hover:font-bold px-8 py-3"}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="text-xl w-full">
              <NavLink 
                to="/resume" 
                className={({isActive}) => isActive? "block font-bold bg-[#008593] w-full h-full px-8 py-3" : "block w-full h-full hover:text-black hover:bg-[#7FD7E3] hover:py-3 hover:px-8 hover:font-bold px-8 py-3"}
              >
                Resumé
              </NavLink>
            </li>
            <li className="text-xl w-full">
              <NavLink 
              to="/contact" 
              className={({isActive}) => isActive? "block font-bold bg-[#008593] w-full h-full px-8 py-3" : "block w-full h-full hover:text-black hover:bg-[#7FD7E3] hover:py-3 hover:px-8 hover:font-bold px-8 py-3"}
            >
              Contact
            </NavLink>
            </li>
          </ul>      
        </nav>
      )}
      
    </>
  )
}

export default HamburgerNav