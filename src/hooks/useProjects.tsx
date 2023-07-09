import projects from "../lib/projects";

const useProjects = (projectId?: number) => {

  if(!projectId){
    return {
      projects,
      project: null
    }
  }

  const project = projects.find(project => project.id === projectId)

  if(!project){
    throw new Error(`No such project with id ${projectId}`)
  }

  return {
    projects: null,
    project: project
  }
}

export default useProjects