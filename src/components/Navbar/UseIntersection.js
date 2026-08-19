import { useState, useEffect } from "react"

export function useIntersection(elementId) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = document.getElementById(elementId)
    // if the element defined by the elementId (portfolio) is not found on the page
    if (!element) return;

    // creates a new observer instance that runs only when an element crosses a specific boundary
    const observer = new IntersectionObserver(
      // the observer automatically passes an array of details about the object it is watching to the callback function. We are only watching portfolio so we only care about the first element, [entry] is a shorthand for getting just the first element of that array
      ([entry]) => {
        // records the true/false value of whether portfolio is on the screen
        // updates state to true only when the section is at least 30% visible
        setIsIntersecting(entry.isIntersecting)
      },
      { 
        // defines a target zone within the view port that takes into account barely being visible at the bottom and being hidden by the navbar
        rootMargin: "-20% 0px -40% 0px", 
        // defines the 30% the state is watching for
        threshold: 0.3 
      }
    )

    // activates tracking
    observer.observe(element)
    
    // when the component unmounts shut down the tracking camera completely
    return () => observer.disconnect()

  //run the function whenever elementId changes
  }, [elementId])

  // passes the real-time true/false value back to my Navbar link component
  return isIntersecting
}
