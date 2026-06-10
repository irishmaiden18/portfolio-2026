
const EducationItem = ({education}) => {

    const {subject, honors, degree_type, institution} = education

  return (
    <li>
        <span>{subject}</span>
        <span>{degree_type}</span>
        <span>{honors}</span>
        <span>{institution}</span>
    </li>
  )
}

export default EducationItem