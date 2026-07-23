import { Link } from "react-router"

const Footer = () => {
  return (
    <>
        <div className="container mx-auto bg-[#333333] text-white w-full p-3 mt-5 flex justify-center">
            <p className="flex items-center gap-2"><span className="leading-none">&copy;</span> July 2026 <span className="text-3xl leading-none">&middot;</span> Laura Pohl <span className="text-3xl leading-none">&middot;</span> Billerica, MA</p>
        </div>
    </>
  )
}

export default Footer