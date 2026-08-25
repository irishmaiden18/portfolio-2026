// need a specific import because this is a class file
import React from "react"

// creates a new class named PdfErrorBoundary that inherits all the built in features, abilities and methods of a standard React component
class PdfErrorBoundary extends React.Component {
  
  // the constructor function. it runs automatically, exactly once at the instant this component is created in memory
  constructor(props) {
    // required to be called first to reach back to the parent React code and initialize all the background wiring
    super(props)
    // equivalent to const [hasError, setHasError] = useState(false) in a regular non-class component
    this.state = { hasError: false }
  }

  // catches the crash and switches the state
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  // logs the error to console
  componentDidCatch(error, errorInfo) {
    console.error("Critical PDF component crash caught by Boundary:", error, errorInfo)
  }

  // same as return in a non class component
  render() {
    // runs if component crashes
    if (this.state.hasError) {
      return (
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 max-w-md mx-auto my-6">
            <p className="text-black font-medium">Your browser's security settings are preventing the PDF preview from loading directly.</p>
            <p className="mb-4 text-slate-600">Please use the buttons below to download the documents and view them on your device.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="20260815_resume.pdf" 
              download 
              className="w-full md:w-auto text-center px-6 py-3 text-white bg-[#008593] font-semibold rounded-full shadow-md hover:bg-[#006c78] transition duration-200" 
            >
              Download my Resumé PDF here!
            </a>
            <a 
              href="20260815_CV.pdf" 
              download 
              className="w-full md:w-auto text-center px-6 py-3 text-white bg-[#008593] font-semibold rounded-full shadow-md hover:bg-[#006c78] transition duration-200" 
            >
              Download my CV PDF here!
            </a>
          </div>
        </div>
      )
    }

    // default return: if there is NO error, render the actual Resume component child
    return this.props.children;
  }
}

export default PdfErrorBoundary
