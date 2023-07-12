import { useRef, useEffect, useReducer } from 'react'

import { useParams } from "react-router-dom"
import useTeam from "../hooks/useTeam"
import Container from "../components/Container"

import { HiPlus } from 'react-icons/hi'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTiktok } from "react-icons/fa"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { TbSchool } from 'react-icons/tb'
import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci'

import { type Swiper as SwiperRef } from "swiper/types"
import { Autoplay } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react';
import useProjects from "../hooks/useProjects"
import useServices from '../hooks/useServices'
import Project from '../components/Project'
import QuotationForm from '../components/QuotationForm'
import BreadCrump from '../components/BreadCrump'

const initialState = { isOpen: false, projectId: 1 }

const enum REDUCER_ENUM_TYPE {
  SET_PROJECT
}

type REDUCER_ACTION_TYPE = {
  type: REDUCER_ENUM_TYPE,
  payload: {
    projectId: number
  }
}

const reducer = (state: typeof initialState, action: REDUCER_ACTION_TYPE): typeof initialState => {
  switch(action.type){
    case REDUCER_ENUM_TYPE.SET_PROJECT:
      return {...state, projectId: action.payload.projectId, isOpen: true}
    default:
      return state
  }
}

const TeamSingle = () => {

  const [ state, dispatch ] = useReducer(reducer, initialState)

  const setProject = (id: number) => dispatch({ type: REDUCER_ENUM_TYPE.SET_PROJECT, payload: { projectId: id } })

  useEffect(()=>{
    const project = projects as Project[]
    setProject(project[0].id)
  }, [])

  const serviceRef = useRef<SwiperRef>()

  const { memberId } = useParams()

  const { projects } = useProjects()
  const { services } = useServices()

  const { teamMember } = useTeam(Number(memberId))

  return (
    <>
      <BreadCrump>meet {teamMember?.name}</BreadCrump>
      <Container innerClasses="container flex gap-x-8">
      <div className="lg:basis-4/12 lg:w-4/12 lg:block hidden">
        <h4 className="font-bold mb-6 text-neutral-700"><span className="text-orange-600">Projects</span> by {teamMember?.name}</h4>
        <div className="grid grid-cols-1 gap-3">
          {
            projects?.map(project => (
              <div key={project.id} className='border border-neutral-200 transition-all duration-300'>
                <div className='px-4 py-4 flex gap-x-4 items-center hover:bg-neutral-100 cursor-pointer transition' onClick={()=>setProject(project.id)}>
                  <HiPlus/>
                  <p>{project.title}</p>
                </div>
                {state.isOpen && state.projectId === project.id ? (
                  <Project {...project} lowerSection={false}/>
                ): null}
              </div>
            ))
          }
        </div>
      </div>
      <div className="lg:basis-8/12 lg:w-8/12 basis-full w-full">
        <div className="flex sm:flex-row flex-col gap-y-6 gap-x-6 border-b pb-8 mb-12">
          <img src={teamMember?.imageUrl} alt={teamMember?.name} className='max-h-64 object-cover object-center'/>
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
        <div className='border-b pb-8 mb-12'>
          <h2 className="mb-16 text-3xl font-bold relative before:absolute before:w-16 before:h-0.5 before:-bottom-5 before:bg-orange-400 after:absolute after:w-20 after:h-1 after:bg-orange-400 after:-bottom-7 after:left-0">Areas of Expertise</h2>
          <Swiper
            modules={[Autoplay]}
            speed={600}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            onInit={(swiper)=>{
              serviceRef.current = swiper
            }}
          >
            {
              services?.map(service => (
                <SwiperSlide key={service.id}>
                  <div className='relative group h-32 w-full flex items-center justify-center bg-neutral-100'>
                    <div>
                      <h2 className='text-lg font-bold text-neutral-700'>{service.service}</h2>
                    </div>
                    <div className='absolute inset-0 transition-all bg-orange-500/80 scale-0 group-hover:scale-100 flex items-center justify-center text-white'>
                      <p>completed 4 projects</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }

            <div slot="container-end" className="flex gap-x-4 justify-end mt-4 text-xl z-50">
            <div className="p-3 rounded border bg-neutral-200 hover:text-white hover:bg-orange-500 cursor-pointer" onClick={()=>serviceRef.current?.slidePrev()}>
              <FaAngleLeft/>
            </div>
            <div className="p-3 rounded border bg-neutral-200 hover:text-white hover:bg-orange-500 cursor-pointer" onClick={()=>serviceRef.current?.slideNext()}>
              <FaAngleRight/>
            </div>
          </div>
        </Swiper>
        </div>
        <div className='border-b pb-8 mb-12 lg:hidden block'>
          <h2 className="mb-16 text-3xl font-bold relative before:absolute before:w-16 before:h-0.5 before:-bottom-5 before:bg-orange-400 after:absolute after:w-20 after:h-1 after:bg-orange-400 after:-bottom-7 after:left-0">Projects by {teamMember?.name}</h2>
          <div className="grid grid-cols-1 gap-3">
          {
            projects?.map(project => (
              <div key={project.id} className='border border-neutral-200 transition-all duration-300'>
                <div className='px-4 py-4 flex gap-x-4 items-center hover:bg-neutral-100 cursor-pointer transition' onClick={()=>setProject(project.id)}>
                  <HiPlus/>
                  <p>{project.title}</p>
                </div>
                {state.isOpen && state.projectId === project.id ? (
                  <Project {...project} lowerSection={false}/>
                ): null}
              </div>
            ))
          }
          </div>
        </div>
        <div>
          <h2 className="mb-16 text-3xl font-bold relative before:absolute before:w-16 before:h-0.5 before:-bottom-5 before:bg-orange-400 after:absolute after:w-20 after:h-1 after:bg-orange-400 after:-bottom-7 after:left-0">Get In Touch</h2>
          <div className='flex gap-x-8 md:flex-row flex-col gap-y-8'>
            <QuotationForm/>
            <div className='flex flex-col gap-y-6'>
          <div className='flex gap-x-6'>
            <div className='bg-orange-500 text-white p-3 text-2xl h-fit w-fit'>
              <CiLocationOn/>
            </div>
            <div>
              <h2 className='font-bold text-neutral-700 text-xl mb-1'>Address :</h2>
              <p className='text-neutral-500'>21/17, Level 4 Steel Rock St, Melbourne <br /> Victoria 3000, Australia.</p>
            </div>
          </div>
          <div className='flex gap-x-6'>
            <div className='bg-orange-500 text-white p-3 text-2xl h-fit w-fit'>
              <CiMail/>
            </div>
            <div>
              <h2 className='font-bold text-neutral-700 text-xl mb-1'>Mail To Fernando :</h2>
              <p className='text-neutral-500 break-all'>Decoratorssupport@gmail.com</p>
            </div>
          </div>
          <div className='flex gap-x-6'>
            <div className='bg-orange-500 text-white p-3 text-2xl h-fit w-fit'>
              <CiPhone/>
            </div>
            <div>
              <h2 className='font-bold text-neutral-700 text-xl mb-1'>Call Him :</h2>
              <p className='text-neutral-500'>+1 (44) 123-45-67, +1(44) 456-78-90</p>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </>
  )
}

{/* <SwiperSlide>
              <div className='relative group p-10 bg-gray-200 w-fit'>
                    <div>
                      <h2>Wooden Flooring</h2>
                    </div>
                    <div className='absolute inset-0 transition bg-orange-500/60 scale-0 group-hover:scale-100 flex items-center justify-center text-white'>
                      <p>completed 4 projects</p>
                    </div>
                  </div>
            </SwiperSlide> */}

export default TeamSingle