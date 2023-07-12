import BreadCrump from "../components/BreadCrump"
import Container from "../components/Container"
import Project from "../components/Project"
import useProjects from "../hooks/useProjects"

const Projects = () => {

  const { projects } = useProjects()

  return (
    <>
      <BreadCrump>Our projects</BreadCrump>
      <Container innerClasses="container gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects?.map(project => (
        <Project key={project.id} {...project}/>
      ))}
      </Container>
    </>
  )
}

export default Projects