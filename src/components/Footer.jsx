import { Link } from "react-router"

const Footer = () => {
  return (
    <>
        <div className="container mx-auto bg-[#333333] text-white flex justify-between w-full items-center p-3 mt-5">
            <p className="flex items-center gap-2"><span className="leading-none flex items-center">&copy;</span> July 2026 <span className="text-3xl leading-none flex items-center">&middot;</span> Laura Pohl <span className="text-3xl leading-none flex items-center">&middot;</span> Billerica, MA</p>
            <p><Link to="/resources">Resources</Link></p>
        </div>
    </>
  )
}

export default Footer