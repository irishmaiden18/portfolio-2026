import {languages_other} from "./../../../data/languages_other"
import ProficientItem from "./LanguageItem"

const OtherList = () => {
  return (
    <ul>
        {languages_other.map((language, index) => (
            <ProficientItem
                key={index}
                language={language}
            />
        ))}
    </ul>
  )
}

export default OtherList