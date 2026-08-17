import {development_skills} from "../../../data/development_skills"
import WebSkillsItem from "./WebSkillsItem"

const WebSkillsList = () => {
  return (
    <ul>
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