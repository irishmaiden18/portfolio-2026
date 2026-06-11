
const EducationItem = ({education}) => {

    const {subject, honors, degree_type, institution} = education

  return (
    <li className="text-center md:text-left pb-4 md:pb-0 lg:pb-4">
        <span className="font-bold">{subject}</span><span className="hidden md:inline">, </span>
        <br className="md:hidden"/>
        <span className="">{degree_type}{honors && ", "}</span><span className="italic tracking-wide text-neutral-700">{honors && `${honors} `}</span>
        <br className="md:hidden lg:block xl:hidden"/>
        <span>{institution}</span>
    </li>
  )
}

export default EducationItem