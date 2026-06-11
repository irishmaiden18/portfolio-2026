import {development_skills} from "../../../data/development_skills"
import WebSkillsItem from "./WebSkillsItem"

const WebSkillsList = () => {
  return (
    <ul className="columns-2 gap-8 sm:gap-24 md:gap-30 lg:gap-18 xl:gap-30 2xl:gap-40 w-full max-w-120 mx-auto">
        {development_skills.map((web_skill, index) => (
            <WebSkillsItem
                key={index}
                web_skill={web_skill}
            />
        ))}
    </ul>
  )
}

export default WebSkillsList