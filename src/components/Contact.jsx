import {useState} from "react"

const Contact = () => {

  // track contact form input with a single state object
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    response: "",
    subjects: [],
    message: ""
  })

  // holds the response from the server when the email is sent, type will either be error or success and the text will be the text associated with the type letting the user know what is happening when they have submitted the form
  const [status, setStatus] = useState({
    type: "",
    text: ""
  })

  // lets the user know the form has been submitted and the server is processing the request so they don't double submit and know what is happening
  const [loading, setLoading] = useState(false)

  // records user input to the state values as the user types from (text, textarea, radiobox fields)
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  // records user input to the state variable when the user clicks a checkbox
  const handleMultiCheckboxChange = (event) => {

    // get the value and checked status of the checkboxes
    const {value, checked} = event.target

    const currentSubjects = formData.subjects

    // if the box is checked, add it to the subjects array, if it is unchecked create a new array without it
    const updatedSubjects = checked ? [...currentSubjects, value] : currentSubjects.filter((subject) => subject !== value)

    setFormData({
      ...formData,
      subjects: updatedSubjects
    })
  }


  // on submission of the form this function executes
  // async because we are using await
  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setStatus({
      type: "",
      text: ""
    })

    try {
      // connect to Node.js API endpoint running on port 5000
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        // headers tell Node backend what format the incomping payload data is in
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      })

      // takes raw, text-based data response from Node server and turns it into readable json data
      const data = await response.json()

      // if the response from the Node server was that everything worked
      if (response.ok) {

        // set the status message to the user
        setStatus({
          type: "success",
          text: "Thank you! Your message has ben sent."
        })

        // reset the form data
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          response: "",
          subjects: [],
          message: ""
        })

      // if there was a problem
      } else {

        // set the status message to the user as the error information or the phrase if there is no error information
        setStatus({
          type: "error",
          text: data.error || "Something went wrong."
        })
      }

    // if the front end cannot connect to the Node server
    } catch (error) {

      // set the status message to the user to let them know
      setStatus({
        type: "error",
        text: "Cannot connect to the server right now."
      })

    // once the user gets some sort of status message from the Node backend  
    } finally {

      // set loading to false
      setLoading(false)
    }
  }

  return (
    <>
      <div className="container mx-auto flex flex-col items-center">

        <h2 className="text-center text-2xl mt-10 mb-2">Contact Me!</h2>

        <div className="flex flex-col items-center gap-4 w-full max-w-xl p-3">
        
          <p className="text-lg text-center px-2 pb-4">Whether you’d like to work with me, or learn more about me, I’m excited to talk to you! Your first step is to fill out the form below.</p>

          {/* focus:outline-none turns off tailwind's automatic form formatting so I can change focus border with styling */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-xl">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name"
                className="bg-white rounded-xl p-2 placeholder:text-black w-full border border-white focus:outline-none focus:border-2 focus:border-[#008593]"
              />
            </div>
            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company (Optional)"
                className="bg-white rounded-xl p-2 placeholder:text-black w-full border border-white focus:outline-none focus:border-2 focus:border-[#008593]"
              />
            </div>
            <div>
              {/* <label>Email (Optional)</label> */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email (Optional)"
                className="bg-white rounded-xl p-2 placeholder:text-black w-full border border-white focus:outline-none focus:border-2 focus:border-[#008593]"
              />
            </div>
            <div>
              {/* <label>Phone Number (Optional)</label> */}
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number (Optional)"
                className="bg-white rounded-xl p-2 placeholder:text-black w-full border border-white focus:outline-none focus:border-2 focus:border-[#008593]"
              />
            </div>
            <div className="pl-4">
              <div>
                <label>Would you like a response?</label>
                <div className="px-4">
                  <div className="py-2">
                    <input
                      type="radio"
                      id="yes"
                      name="response"
                      value="Yes"
                      checked={formData.response === "Yes"}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="yes" className="pl-2">Yes</label>
                  </div>
                  <div className="pb-2">
                    <input
                      type="radio"
                      id="no"
                      name="response"
                      value="No"
                      checked={formData.response === "No"}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="no" className="pl-2">No</label>
                  </div>
                </div>
              </div>
              <div>
                <label>What would you like to talk about?</label>
                <div className="px-4">
                  {/* Career Opportunity */}
                  <div className="py-2">
                    <input
                      type="checkbox"
                      name="subjects"
                      value="Career Opportunity"
                      checked={formData.subjects.includes("Career Opportunity")}
                      onChange={handleMultiCheckboxChange}
                    />
                    <label className="pl-2">Career Opportunity</label>
                  </div>
                  {/* Individual Project */}
                  <div className="pb-2">
                    <input
                      type="checkbox"
                      name="subjects"
                      value="Individual Project"
                      checked={formData.subjects.includes("Individual Project")}
                      onChange={handleMultiCheckboxChange}
                    />
                    <label className="pl-2">Individual Project</label>
                  </div>
                  {/* Suggestion */}
                  <div className="pb-2">
                    <input
                      type="checkbox"
                      name="subjects"
                      value="Suggestion"
                      checked={formData.subjects.includes("Suggestion")}
                      onChange={handleMultiCheckboxChange}
                    />
                    <label className="pl-2">Suggestion</label>
                  </div>
                  {/* Site Problem or Bug */}
                  <div className="pb-2">
                    <input
                      type="checkbox"
                      name="subjects"
                      value="Site Problem or Bug"
                      checked={formData.subjects.includes("Site Problem or Bug")}
                      onChange={handleMultiCheckboxChange}
                    />
                    <label className="pl-2">Site Problem or Bug</label>
                  </div>
                  {/* Something Else */}
                  <div>
                    <input
                      type="checkbox"
                      name="subjects"
                      value="Something Else"
                      checked={formData.subjects.includes("Something Else")}
                      onChange={handleMultiCheckboxChange}
                    />
                    <label className="pl-2">Something Else</label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Message"
                className="bg-white rounded-xl p-2 placeholder:text-black w-full border border-white focus:outline-none focus:border-2 focus:border-[#008593]"
              />
            </div>
            {/* mx-auto: centers the button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#008593] text-white rounded-xl p-2 w-1/4 mx-auto hover:text-black hover:bg-[#7FD7E3]"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

          {/* dynamic user submission messages based on feedback from the Node server backend */}
          {status.text && (
            
            // turns green if its a success message, turns red if it is an error message
            <div className={`mt-4 p-3 rounded text-center ${status.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
              {status.text}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Contact