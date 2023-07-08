import { useParams } from "react-router-dom"
import useTeam from "../hooks/useTeam"
import Container from "../components/Container"
import useProjects from "../hooks/useProjects"

import { HiPlus } from 'react-icons/hi'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTiktok } from "react-icons/fa"
import { TbSchool } from 'react-icons/tb'

const TeamSingle = () => {

  const { memberId } = useParams()

  const { projects } = useProjects()

  const { teamMember } = useTeam(Number(memberId))

  return (
    <Container innerClasses="container flex gap-x-8">
      <div className="basis-3/12">
        <h4 className="font-bold mb-6 text-neutral-700">Projects by <span className="text-orange-600">{teamMember?.name}</span></h4>
        <div className="flex flex-col gap-y-3">
          {
            projects.map(project => (
              <div key={project.id} className="px-4 py-4 border border-neutral-300 flex gap-x-4 items-center hover:bg-orange-500 hover:text-white cursor-pointer transition">
                <HiPlus/>
                <p>{project.title}</p>
              </div>
            ))
          }
        </div>
        <h4 className="text-xl font-bold my-6 text-neutral-700">{teamMember?.name} socials</h4>
      </div>
      <div className="basis-9/12">
        <div className="flex gap-x-6 border-b pb-8 mb-12">
          <img src={teamMember?.imageUrl} alt={teamMember?.name} />
          <div>
            <h2 className="text-2xl font-bold text-neutral-800 mb-2">{teamMember?.name}</h2>
            <h3 className="text-orange-500 italic">{teamMember?.position}</h3>
            <p className="text-neutral-700 mb-6">{teamMember?.description}</p>
            <div className='flex gap-x-2'>
                  <div className='border-2 border-neutral-300 hover:border-orange-600 hover:text-neutral-200 p-2.5 hover:bg-orange-600 cursor-pointer'>
                        <FaFacebookF/>
                  </div>
                  <div className='border-2 border-neutral-300 hover:border-orange-600 hover:text-neutral-200 p-2.5 hover:bg-orange-600 cursor-pointer'>
                        <FaTiktok/>
                  </div>
                  <div className='border-2 border-neutral-300 hover:border-orange-600 hover:text-neutral-200 p-2.5 hover:bg-orange-600 cursor-pointer'>
                        <FaTwitter/>
                  </div>
                  <div className='border-2 border-neutral-300 hover:border-orange-600 hover:text-neutral-200 p-2.5 hover:bg-orange-600 cursor-pointer'>
                        <FaLinkedinIn/>
                  </div>
            </div>
          </div>
        </div>
        <div className="border-b pb-8 mb-12">
          <h2 className="mb-16 text-3xl font-bold relative before:absolute before:w-16 before:h-0.5 before:-bottom-5 before:bg-orange-400 after:absolute after:w-20 after:h-1 after:bg-orange-400 after:-bottom-7 after:left-0">Education</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            <div className="flex gap-x-4">
              <div className="text-3xl text-white bg-orange-500 p-4 rounded-full h-fit w-fit">
                <TbSchool/>
              </div>
              <div className="flex flex-col gap-y-3">
                <h4 className="text-xl text-neutral-700 font-semibold">MBA, Harvard University</h4>
                <span className="text-orange-600 italic">August 2009 - July 2011 </span>
                <p className="text-neutral-600">Many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="text-3xl text-white bg-orange-500 p-4 rounded-full h-fit w-fit">
                <TbSchool/>
              </div>
              <div className="flex flex-col gap-y-3">
                <h4 className="text-xl text-neutral-700 font-semibold">BSC, Harvard University</h4>
                <span className="text-orange-600 italic">August 2009 - July 2011 </span>
                <p className="text-neutral-600">Many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="text-3xl text-white bg-orange-500 p-4 rounded-full h-fit w-fit">
                <TbSchool/>
              </div>
              <div className="flex flex-col gap-y-3">
                <h4 className="text-xl text-neutral-700 font-semibold">Highschool, St.Joseph</h4>
                <span className="text-orange-600 italic">August 2009 - July 2011 </span>
                <p className="text-neutral-600">Many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="text-3xl text-white bg-orange-500 p-4 rounded-full h-fit w-fit">
                <TbSchool/>
              </div>
              <div className="flex flex-col gap-y-3">
                <h4 className="text-xl text-neutral-700 font-semibold">Primary School, St.George</h4>
                <span className="text-orange-600 italic">August 2009 - July 2011 </span>
                <p className="text-neutral-600">Many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-16 text-3xl font-bold relative before:absolute before:w-16 before:h-0.5 before:-bottom-5 before:bg-orange-400 after:absolute after:w-20 after:h-1 after:bg-orange-400 after:-bottom-7 after:left-0">Areas of Expertise</h2>
        </div>
      </div>
    </Container>
  )
}

export default TeamSingle