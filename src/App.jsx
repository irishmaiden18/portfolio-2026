import './index.css'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import MyStory from './components/MyStory/MyStory'
import Mascots from './components/Mascots'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import DuringDevelopment from './components/DuringDevelopment'
import { useEffect, useState } from 'react'
import HamburgerNav from './components/Navbar/HamburgerNav'
import DesktopNav from './components/Navbar/DesktopNav'
import Footer from './components/Footer'
import Resources from './components/Resources'

function App() {

  const NavFunction = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767)

    const updateScreenSize = () => {

      // figure out whether the screen is less than or equal to 650px
      // 767px because 768 is the start of M screens in tailwind and bootstrap
      setIsMobile(window.innerWidth <= 767)
    }

    useEffect(() => {
      // add an event listener to the window to trigger when the window is resized 
      // when the window is resized, update the state variable determining if it is mobile or not
      window.addEventListener("resize", updateScreenSize)
      
      // return a call back function that removes the resize listener after updating the screen size to prevent memory leaks
      return () => window.removeEventListener("resize", updateScreenSize)
    })

    return (
        <div>
          {isMobile ? (
            <HamburgerNav/>
          ) : (
            <DesktopNav/>
          )}
        </div>
    )
  }
  
  return (
    <>
      <div className="min-h-screen flex flex-col jusitify-between bg-linear-to-b from-[#6BD1DF] to-[#FFFFFF]">

        <DuringDevelopment/>

        {NavFunction()}

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/my-story" element={<MyStory/>}/>
          <Route path="/mascots" element={<Mascots/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/resources" element={<Resources/>}/>
        </Routes>

        <Footer/>
      </div>
    </>
  )
}

export default App
