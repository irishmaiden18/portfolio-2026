import EducationItem from "./EducationItem"
import {education} from "../../../data/education"

const EducationList = () => {
  return (
    <ul>
        {education.map((education, index) => (
            <EducationItem
                key={index}
                education={education}
            />
        ))}
    </ul>
  )
}

export default EducationList