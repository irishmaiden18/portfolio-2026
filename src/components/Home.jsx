import { Link } from "react-router"

const Home = () => {
  return (
    <>
        {/* <h2>Home Page</h2> */}
        <div className="md:container mx-auto grid grid-cols-1 gap-y-3">
          <div className="w-full flex flex-col-reverse md:flex-row">
            <div className="w-[80%] mx-auto p-8 md:w-[75%] md:p-0 bg-white flex items-center justify-center">
              <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center">My goal is to improve your online presence!</h2>
            </div>
            <div className="w-[80%] block mx-auto pt-10 md:pt-0 md:w-[25%]">
              <img src="laura_pohl_in_nature-homepage-main.jpg" alt="picture of Laura Pohl" className="w-full h-auto object-cover"/>
            </div>
          </div>
          <div className="w-full flex gap-x-5">
            <Link to="/portfolio" className="flex-1 flex flex-col items-center">
              <h3 className="sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl p-4">Portfolio</h3>
              <img src="laura_pohl_in_nature-homepage-main.jpg" alt="picture of portfolio page" className="w-[60%] h-auto object-cover"/>
            </Link>
            <Link to="/resume" className="flex-1 flex flex-col items-center">
              <h3 className="sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl p-4">Resume</h3>
              <img src="laura_pohl_in_nature-homepage-main.jpg" alt="picture of resume" className="w-[60%] h-auto object-cover"/>
            </Link>
            <Link to="/my-story" className="flex-1 flex flex-col items-center">
              <h3 className="sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl p-4">My Story</h3>
              <img src="laura_pohl_in_nature-homepage-main.jpg" alt="picture of my story page" className="w-[60%] h-auto object-cover"/>
            </Link>
          </div>
          <div className="m-4 max-w-6xl mx-auto pb-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center pt-4 pb-8">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-20">
              <p className="text-justify text-justify-inner-word">I hired Laura to build our high school baseball team’s website from the ground up, and the result was outstanding. She was a pleasure to work with throughout the entire process.  Laura is detail-oriented, knowledgeable, efficient, and full of great ideas to make your website standout. I highly recommend her to anyone looking for a website that is visually appealing, easy to navigate, and tailored to your organization. You won’t be disappointed!</p>

              <p className="text-justify text-justify-inner-word">I hired Laura to build our high school baseball team’s website from the ground up, and the result was outstanding. She was a pleasure to work with throughout the entire process.  Laura is detail-oriented, knowledgeable, efficient, and full of great ideas to make your website standout. I highly recommend her to anyone looking for a website that is visually appealing, easy to navigate, and tailored to your organization. You won’t be disappointed!</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home

// add screen shot of portfolio page
// add screen shot of resume page
// add Jeremy's headshot
// get testimonial from church