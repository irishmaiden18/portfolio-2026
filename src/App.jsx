import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import MyStory from './components/MyStory'
import Mascots from './components/Mascots'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  

  return (
    <>
      <h1>Portfolio</h1>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/my-story" element={<MyStory/>}/>
        <Route path="/mascots" element={<Mascots/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
