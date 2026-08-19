import ProjectItem from "./ProjectItem"
import {projects} from "../../data/projects"



const ProjectList = () => {
  return (
    <>
      {/* grid-rows-[auto_1fr_auto_auto] defines the row hights for the grid, auto tells it to take up as much space as the content requires. 1fr tells the row to expand and absorb all remaining leftover space in the card, if one card is taller than the others, this row stretches to fill the gap */}
      <ul className="grid cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[auto_1fr_auto_auto] gap-6">
        {projects.map((projects, index) => (
          <ProjectItem
            key={index}
            projects={projects}
          />
        ))}
      </ul>
    </>
  )
}

export default ProjectList