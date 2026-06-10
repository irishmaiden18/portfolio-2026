import EducationList from "./education/EducationList"
import OtherList from "./languages/OtherList"
import ProficientList from "./languages/ProficientList"
import ToolsList from "./tools/ToolsList"
import WebSkillsList from "./web_skills/WebSkillsList"

const MyStory = () => {
  return (
    <>
      <div className="md:container mx-auto">
        <div className="w-full block">
          <div className="w-[90%] mx-auto p-3 md:w-full flex flex-col md:block">

            <h1 className="text-3xl mt-0 md:mt-4 mb-4 text-center order-2">My Story</h1>

            <div className="mx-auto order-1 w-[85%] md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[20%] pb-6 pt-8 md:pt-2 md:pb-1 lg:pb-0 xl:pt-0 xl:pb-5 md:float-right md:ml-6 md:mr-2">
              <img src="laura_pohl_in_nature-homepage-main.jpg" alt="picture of Laura Pohl" className="w-full h-auto object-contain block"/>
            </div>
      
            <p className="mb-4 2xl:mt-10 text-base text-justify text-justify-inner-word md:mx-2 order-3">I was raised a few miles from a beach near the redwood forests in Santa Cruz, California. Although I loved the redwoods and the beach, I moved to the East Coast for College. I intended to stay only a few years, but it soon became my home. I graduated from Brandeis University with a Bachelor’s degree in Math and Studio Art specializing in oil painting. My passion for creative problem-solving led me to a career in finance, but after a few years, I realized I needed work that was more meaningful-for myself and my clients.</p>

            <p className="mb-4 text-base text-justify text-justify-inner-word md:mx-2 order-4">A foundational knowledge of design and logic led me to study programming and web design at UMASS Lowell, where I earned a Bachelor’s in Information Technology with a Certificate in Web Design. I opened my own web design firm, Laura Pohl Web Solutions, that primarily helped clients with custom formatted Word Press websites specifically designed so the client could maintain them themselves after I was done. I closed my business down after realizing I loved the work but  would rather focus on programing and design than running a business. I enrolled in a 4-month bootcamp in the MERN stack, the technologies I enjoy most, to refine and refresh my full stack development skills. </p>
            
            <p className="mb-4 text-base text-justify text-justify-inner-word md:mx-2 order-5">I now live in Billerica, Massachusetts with my husband, Dan, and our two adorable cats, Baxter and Ninja. I’m looking to build my career in the web development/front-end development space with a company where I can continue to grow and learn.</p>

          </div>
          <div className="clear-both"></div>
        </div>
        <hr/>
        <div>
          <div>
            <div>
              <h3>Development Skills</h3>
              <WebSkillsList/>
            </div>
            <div>
              <div>
                <h3>Languages & Frameworks</h3>
                <h4>Proficient with:</h4>
                <ProficientList/>
                <h4>Experience with:</h4>
                <OtherList/>
              </div>
              <div>
                <h3>Tools</h3>
                <ToolsList/>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3>Education</h3>
              <EducationList/>
            </div>
            <div>
              <h3>When I'm Not Designing Webpages...</h3>
              <p>I make sure I spend plenty of time with my two furbabies, Baxter & Ninja. There is nothing more rewarding than being loved by your pets!</p>
              <p>I love to sit in front of the fire and play a game of Civilization with my husband.</p>
              <p>I LOVE to build Legos! My favorites are the modular buildings, the plants, the world map wall hanging, and the great wonders (i.e. Taj Mahal, Sydney Opera House etc.).</p>
              <p>Right now I spend a lot of my time watching silly British TV while crocheting a blanket for my husband. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyStory