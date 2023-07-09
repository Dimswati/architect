import { useParams } from "react-router-dom"
import Container from "../components/Container"
import useProjects from "../hooks/useProjects"

import { AiOutlineStar, AiFillStar } from 'react-icons/ai' 

const ProjectSingle = () => {

  const { projectId } = useParams()

  const { project } = useProjects(Number(projectId))

  return (
    <Container innerClasses="container flex md:flex-row flex-col gap-x-8">
      <img className="flex-1" src={project?.imageUrl} alt={project?.imageUrl}/>
      <div className="flex-1">
        <h2 className="text-xl font-bold border-b py-6">{project?.title}</h2>
        <div className="flex flex-col gap-y-4 pt-6">
          <div className="flex gap-x-4 items-center">
            <h4 className="text-xl font-bold text-neutral-800">Category :</h4>
            <p className="italic">Floors, Furnitures</p>
          </div>
          <div className="flex gap-x-4 items-center">
            <h4 className="text-xl font-bold text-neutral-800">Client :</h4>
            <p className="italic">Envato PVT LMD</p>
          </div>
          <div className="flex gap-x-4 items-center">
            <h4 className="text-xl font-bold text-neutral-800">Date :</h4>
            <p className="italic">21st August, 2015</p>
          </div>
          <div className="flex gap-x-4 items-center">
            <h4 className="text-xl font-bold text-neutral-800">Link :</h4>
            <p className="italic">www.steelthemes.com</p>
          </div>
          <div className="flex gap-x-4 items-center">
            <h4 className="text-xl font-bold text-neutral-800">Rating :</h4>
            <div className="flex gap-2-4">
              <div className="text-orange-500">
                <AiFillStar/>
              </div>
              <div className="text-orange-500">
                <AiFillStar/>
              </div>
              <div className="text-orange-500">
                <AiFillStar/>
              </div>
              <div className="text-orange-500">
                <AiFillStar/>
              </div>
              <div className="text-orange-500">
                <AiOutlineStar/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProjectSingle