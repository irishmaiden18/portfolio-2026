import { Link } from "react-router"
import OtherList from "./MyStory/languages/OtherList"
import ProficientList from "./MyStory/languages/ProficientList"
import ToolsList from "./MyStory/tools/ToolsList"
import WebSkillsList from "./MyStory/web_skills/WebSkillsList"

const Home = () => {
  return (
    <>
      <div className="md:container mx-auto grid grid-cols-1 gap-y-3">

        {/* banner */}
        <div className="w-full flex flex-col-reverse md:flex-row">
          <div className="w-[80%] mx-auto p-8 md:w-[75%] md:p-0 bg-white flex items-center justify-center">
            <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center">My goal is to improve your online presence!</h2>
          </div>
          <div className="w-[80%] block mx-auto pt-10 md:pt-0 md:w-[25%]">
            <img src="me_home_banner.jpg" alt="picture of Laura Pohl" className="w-full h-auto object-cover"/>
          </div>
        </div>

        {/* summary */}
        <div className="md:mx-auto px-4 md:px-0 max-w-6xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center p-3">Summary</h2>
          <p className="mx-4">Front-end web developer with hands-on experience building responsive, accessible, and user‑friendly websites using HTML, CSS, JavaScript, and React. Strong foundation in modern front-end practices, UI/UX principles, and component‑based development. Background includes freelance client work, e‑commerce projects, and full‑stack coursework. Known for clear communication, problem‑solving, and delivering polished, functional interfaces.</p>
        </div>

        {/* technical skills section */} 
        <div className="w-full flex justify-center my-0"> 
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center"> 
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center pt-3 pb-0 w-full">Technical Skills</h2> 

            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-3 lg:max-w-fit lg:pl-20 xl:pl-35 gap-y-4 gap-x-16 sm:gap-x-30 pt-4 lg:pt-0 pb-4 w-fit mx-auto justify-items-center lg:justify-items-start"> 
              
              {/* development skills */} 
              <div className="w-full flex flex-col items-start col-span-full lg:col-span-1"> 
                <h3 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-0 pb-2 lg:pt-6 w-full">Development</h3> 
                <div className="w-full text-left"> 
                  <div className="min-[400px]:columns-2 lg:columns-1 gap-14 sm:gap-27 lg:pl-8 w-full"> 
                    <WebSkillsList /> 
                  </div> 
                </div> 
              </div> 
              
              {/* technology skills */} 
              <div className="w-full flex flex-col items-start col-span-1"> 
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-2 lg:pt-6 text-left w-full">Technology</h3> 
                <div className="w-full text-left lg:pl-6"> 
                  <h4 className="text-lg text-left">Proficient with:</h4> 
                  <div className="pl-4 text-left"> 
                    <ProficientList /> 
                  </div> 
                  <h4 className="pt-4 text-lg text-left">Experienced with:</h4> 
                  <div className="pl-4 text-left"> 
                    <OtherList /> 
                  </div> 
                </div> 
              </div> 
              
              {/* tools */} 
              <div className="w-full flex flex-col items-start col-span-1"> 
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-2 lg:pt-6 text-left w-full">Tools</h3> 
                <div className="w-full text-left lg:pl-6"> 
                  <ToolsList /> 
                </div> 
              </div> 
              
            </div> 
          </div> 
        </div>
        
        {/* links */}
        <div className="w-full flex gap-x-5 pt-4">
          <Link to="/portfolio" className="flex-1 flex flex-col items-center">
            <h3 className="text-xs min-[380px]:text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl p-4">Portfolio</h3>
            <img src="portfolio_2.jpg" alt="picture of portfolio page" className="w-[60%] h-auto object-cover"/>
          </Link>
          <Link to="/resume" className="flex-1 flex flex-col items-center">
            <h3 className="text-xs min-[380px]:text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl p-4">Resume</h3>
            <img src="resume.jpg" alt="picture of resume" className="w-[60%] h-auto object-cover"/>
          </Link>
          <Link to="/my-story" className="flex-1 flex flex-col items-center">
            <h3 className="text-xs min-[380px]:text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl p-4">My Story</h3>
            <img src="laura_pohl_in_nature-homepage2.jpg" alt="picture of my story page" className="w-[60%] h-auto object-cover"/>
          </Link>
        </div>
        
        {/* testimonials */}
        <div className="m-4 max-w-6xl mx-auto pb-2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center pt-3 pb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-20">
            <div className="flex flex-col h-full">
              <p className="text-left md:text-justify md:text-justify-inner-word px-8 md:px-4">"I hired Laura to build our high school baseball team’s website from the ground up, and the result was outstanding. She was a pleasure to work with throughout the entire process. Laura is detail-oriented, knowledgeable, efficient, and full of great ideas to make your website standout. I highly recommend her to anyone looking for a website that is visually appealing, easy to navigate, and tailored to your organization. You won’t be disappointed!"</p>
              <p className="text-right px-8 md:px-4 mt-autho pt-4">- Jane Woltman</p>
            </div>
            <div className="flex flex-col h-full">
              <p className="text-left md:text-justify md:text-justify-inner-word px-8 md:px-4">“When the Congregational Church of Weston needed to update its website, Laura Pohl came to our aid.  In a very short time, she was able to move us to a new host and with a new platform that was easier for staff members and, more importantly, for volunteers to use and maintain.”</p>
              <p className="text-right px-8 md:px-4 mt-auto pt-4">- Rev. Richard Edens, Interim Co-Senior Minister</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home