import ProjectItem from "./ProjectItem"
import {projects} from "../../data/projects"



const ProjectList = () => {
  return (
    <>
      <ul className="grid cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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