import {languages_proficient} from "../../../data/languages_profieicient"
import ProficientItem from "./LanguageItem"

const ProficientList = () => {
  return (
    <ul>
        {languages_proficient.map((language, index) => (
            <ProficientItem
                key={index}
                language={language}
            />
        ))}
    </ul>
  )
}

export default ProficientList