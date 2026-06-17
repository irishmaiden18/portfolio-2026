import {useState} from "react"

const Contact = () => {

  // track contact form input with a single state object
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    response: "",
    message: ""
  })

  // holds the response from the server when the email is sent, type will either be error or success and the text will be the text associated with the type letting the user know what is happening when they have submitted the form
  const [status, setStatus] = useState({
    type: "",
    text: ""
  })

  // lets the user know the form has been submitted and the server is processing the request so they don't double submit and know what is happening
  const [loading, setLoading] = useState(false)

  // records user input to the state values as the user types
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
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
      <div>
        <h2>Contact Me!</h2>

        <p>Whether you’d like to work with me, or learn more about me, I’m excited to talk to you! Your first step is to fill out the form below.</p>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Company (Optional)</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email (Optional)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone Number (Optional)</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Would you like a response?</label>
            <div>
              <div>
                <input
                  type="radio"
                  id="yes"
                  name="response"
                  value="Yes"
                  checked={formData.response === "Yes"}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="yes">Yes</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="no"
                  name="response"
                  value="No"
                  checked={formData.response === "No"}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="no">No</label>
              </div>
            </div>
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
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
    </>
  )
}

export default Contact