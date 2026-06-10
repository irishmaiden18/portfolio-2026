import {tools} from "../../../data/tools"
import ToolsItem from "./ToolsItem"

const ToolsList = () => {
  return (
    <ul>
        {tools.map((tool, index) => (
            <ToolsItem
                key={index}
                tool={tool}
            />
        ))}
    </ul>
  )
}

export default ToolsList