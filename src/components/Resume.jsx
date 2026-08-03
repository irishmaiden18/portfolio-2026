// Import the required React hooks for managing state (useState & useEffect) and DOM elements (useRef)
import { useState, useEffect, useRef } from 'react' 

/* Import the layout and document parsing sub-components from the react-pdf library
    * Document - a structural wrapper that acts as the entry point and manager for the PDF file, it downloads the binary PDF file & parses its contents behind the scenes to provide the data to the Page component
    * Page - the visual painter that actually draws the visual elements of a single, specific page of the PDF onto the webpage
    * pdfjs - the engin that makes rendering PDFs inside a browser possible without relying on external plugins
*/
import { Document, Page, pdfjs } from 'react-pdf' 

/* Fallback worker URL using a CDN if the local URL constructor gets blocked by strict browser security
    * GlobalWorkerOptions - a global configuration object provided by the core PDF.js library. it lets us specify where the background Web Worker file lives and how that worker should behave. 
    * Web Worker file - a completely separate js file that runs in an isolated background thread inside your web browser. it processes the complex, multi-megabyte PDF file completely separate from the main thread with the website and then passes lightweight, precalculated drawing coordinates back to the main thread to be painted onto the HTML canvas. it keeps the website from freezing while dealing with the PDF
    * workerSrc - tells the main PDF.js libarary the exact file path (or URL) where it can find the pdf.worker script
*/
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs` 

const Resume = () => { 
  
  // total number of pages found in the PDF document
  const [numPages, setNumPages] = useState(null)
  
  // which specific page number the user is currently looking at (using an index)
  const [pageNumber, setPageNumber] = useState(1)
  
  // the actual pixel width of the parent container div defined later
  const [containerWidth, setContainerWidth] = useState(0)

  // track worker or script crashes
  const [renderError, setRenderError] = useState(false)

  // a constant that holds a reference object that acts as an empty container that will directly connect the js to a HTML DOM element later using the ref property. Ref is a suffix used to tell other coders that it is a React reference hook. useRef hooks can change without forcing the React component to re-render as it changes. we start with null because when this line of code runs, the HTML is not written.
  const containerRef = useRef(null)

  // creates a variable "pdfUrl" that holds the specific file path to my resume
  const pdfUrl = "/20260528_resume_all_the_things.pdf"

  // callback handler function, executes once the react-pdf "Document" fully parses the target PDF
  // takes in an invisible (behind the scenes) automatic parameter from the <Document>. when the document finishes loading the PDF, the libary forces a data object into the onDocumentLoadSuccess function. the data object is the whole PDF object and all the data associated with it. which is why the function has a parameter but when we call the function in the JSX there is no parameter listed. it is automatic and invisible
  function onDocumentLoadSuccess(pdf) {
    // set the total number of pages to the value from the PDF
    setNumPages(pdf.numPages)
    //sets the error being tracked to false as it is successfully loading
    setRenderError(false)
  } 

  // callback error handler functions, executes if the pdf fails to load because the fetch, read or processing of the pdf fails, li8ke if a security setting on the browser blocks the Web Worker
  function onDocumentLoadError(error) {
    // logs a red error message with the exact technical reason for the failure to load in developer tools console
    console.error("PDF load error:", error)
    // changes renderError from false to true which forces the whole component to instantly re-render itself on the screen. now that the renderError is true, the code triggers the safety condition defined above
    setRenderError(true)
  }

  useEffect(() => {
    // guard clause: if the DOM element isn't linked to containerRef yet, don't execute the following code
    if (!containerRef.current) return

    // create a new browser ResizeObserver called resizeObserver such that given an array of DOM containers we want the observer to watch
    const resizeObserver = new ResizeObserver((entries) => {
      // for each container in the array
      for (let entry of entries) {
        // set the width of the parent container div defined later to be the parent container's width in pixels -32 pixels (to account for padding)
        // note that contentRect is an object calculated by the browser that features all the spacial measurements of the container, so contentRect.width is the width of the container, in pixels
        setContainerWidth(entry.contentRect.width - 32)
      }
    })

    // tell the ResizeObserver we created what HTML DOM container we want it to watch
    // note that we checked that containerRef was linked to the DOM element above so it definitely exists here
    resizeObserver.observe(containerRef.current)

    // turn off the ResizeObserver when the component dismounts from the screen (i.e. when the user navigates away from this page)
    return () => resizeObserver.disconnect()
  }, []) // Empty dependency array ensures this effect runs exactly once when the component first loads
  
  // inline fallback download component
  const DownloadFallback = () => (
    <div className="flex flex-col items-center justify-center p-8 text-center border-2 border0dashed border-slate-300 rounded-xl bg-slate-50 max-w-md mx-auto my-6">
      <p className="mb-4">Your browser's security settings are preventing the PDF preview from loading.</p>
      <a
        href={pdfUrl}
        download
        className="px-6 py-3 text-white bg-[#008593] font-semibold rounded-full shadow-md hover:bg-[#006c78] transition duration-200"
      >
        Download Resume PDF
      </a>
    </div>
  )

  // if there is an error loading the pdf, switch to the download view
  if (renderError) {
    return <DownloadFallback/>
  }

  return (
    <> 
      <div className="container mx-auto flex flex-col items-center h-auto p-2 md:p-6"> 
        
        {/* ref={containerRef} links this div to the reference hook created earlier (containerRef). it lets the code constantly measure exactly how many pixels wide this box is so that the pdf inside can scale perfectly*/}
        {/* rounded-xl: border-radius: 0.75rem; shadow-lg: uses box-shadow property to make the element look like it is floating above the background of the webpage; overflow-hidden: hides sharp internal cordners of the PDF so it doesn't break the rounded edges*/}
        <div ref={containerRef} className="w-full max-w-4xl bg-white p-2 md:p-4 rounded-xl shadow-lg border border-slate-200 overflow-hidden" > 
          
          {/* downloads the binary PDF file & parses its contents behind the scenes to provide the data to the child Page component */}
          <Document 
            file={pdfUrl} 
            // listens for if the download works, if it does, it runs my success function to calculate page count, if the browser security blocks it, it runs my error function to swap to the download fallback button
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            // defines a temporary message to display on screen while the network is fetching the file so that users know the site hasn't frozen
            loading={<p className="text-center py-10">Loading PDF Preview...</p>}
            className="flex justify-center" 
          > 
            
            {/* actually draws the visual elements of the PDF onto the webpagePage, dynamically rescales using width state variable, turns off the hidden, interactive HTML layers that normally sit on top of the PDF document--b/c without the associated CSS files they don't work*/}
            <Page 
              pageNumber={pageNumber} 
              width={containerWidth || undefined} 
              renderTextLayer={false} 
              renderAnnotationLayer={false} 
              // catch canvas paint failures
              onRenderError={() => setRenderError(true)}
            /> 
          
          </Document> 
        </div> 

        {/* if there is no loading arror and there is a numPages display this block */}
        {!renderError && numPages && (
          <div className="flex items-center gap-4 mt-6 bg-white px-5 py-3 rounded-full shadow-md border border-slate-100"> 
            
            <button 
              disabled={pageNumber <= 1} 
              onClick={() => setPageNumber(prev => prev - 1)} 
              className="px-4 py-2 text-white bg-[#008593] rounded-full disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed" 
            > 
              Previous 
            </button> 
            
            <span className="text-black min-w-25 text-center select-none"> 
              Page {pageNumber} of {numPages || '--'} 
            </span> 
            
            {/* Next Page Button: locked when page count maxes out, executes clean incremental function state update operations */}
            <button 
              disabled={pageNumber >= numPages} 
              onClick={() => setPageNumber(prev => prev + 1)} 
              className="px-4 py-2 text-white bg-[#008593] rounded-full disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed" 
            > 
              Next 
            </button> 
          
          </div>
        )} 
      </div> 
    </> 
  ) 
} 

export default Resume


//manual zoom particularly on mobile
// downloadable
// printable
// links clickable
// hover over buttons (use transition-colors)?