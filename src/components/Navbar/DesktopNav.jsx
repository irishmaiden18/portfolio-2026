import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router"

const DesktopNav = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const {pathname} = useLocation()

  return (
    <>
      <div className="bg-[#333333] text-white container mx-auto">
        <h1 className="font-[tangerine] pt-[4rem] px-5 pb-1 text-7xl">Laura Pohl Web Developer</h1>

        <nav>
          <ul className="flex items-end">
            <li className="pt-3 px-5 pb-2 text-lg">
              <NavLink 
                to="/" 
                className={({isActive}) => `inline-block px-3 py-2 ${isActive ? "font-bold bg-[#008593]" : "hover:text-black hover:bg-[#7FD7E3] hover:font-bold"}`}
              >
                Home
              </NavLink>
            </li>
            <li className="relative pt-3 px-5 pb-2 text-lg">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                className={`inline-block px-3 py-2 ${((pathname === "/my-story") || (pathname === "/mascots")) ? "font-bold bg-[#008593]" : "hover:text-black hover:bg-[#7FD7E3] hover:font-bold"}`}
              >
                About
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div 
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute left-5 mt-2 bg-[#333333] text-lg min-w-full z-10"
                >
                  <div className="block whitespace-nowrap p-2">
                    <NavLink to="/my-story" className={({isActive}) => `inline-block px-3 py-2 w-full ${isActive ? "font-bold bg-[#008593]" : "hover:text-black hover:bg-[#7FD7E3] hover:font-bold"}`}>My Story</NavLink>
                  </div>
                  <div className="block p-2">
                    <NavLink to="/mascots" className={({isActive}) => `inline-block px-3 py-2 w-full ${isActive ? "font-bold bg-[#008593]" : "hover:text-black hover:bg-[#7FD7E3] hover:font-bold"}`}>Mascots</NavLink>
                  </div>
                </div>
              )}
            </li>
            <li className="pt-3 px-5 pb-2 text-lg">
              <NavLink to="/portfolio" className={({isActive}) => `inline-block px-3 py-2 ${isActive ? "font-bold bg-[#008593]" : "hover:text-black hover:bg-[#7FD7E3] hover:font-bold"}`}>Portfolio</NavLink>
            </li>
            <li className="pt-3 px-5 pb-2 text-lg">
              <NavLink to="/resume" className={({isActive}) => `inline-block px-3 py-2 ${isActive ? "font-bold bg-[#008593]" : "hover:text-black hover:bg-[#7FD7E3] hover:font-bold"}`}>Resumé</NavLink>
            </li>
            <li className="pt-3 px-5 pb-2 text-lg">
              <NavLink to="/contact" className={({isActive}) => `inline-block px-3 py-2 ${isActive ? "font-bold bg-[#008593]" : "hover:text-black hover:bg-[#7FD7E3] hover:font-bold"}`}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default DesktopNav