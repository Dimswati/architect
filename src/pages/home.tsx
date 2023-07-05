import Button from "../components/Button"
import { FcOk, FcBusinessman, FcIdea } from "react-icons/fc"
import { FaCaretRight } from 'react-icons/fa'
import { GiPaintRoller } from 'react-icons/gi'

import { Link } from "react-router-dom"

import useProjectsByTag from "../hooks/useProjectsByTag"
import { useFilters } from "../hooks/useProjectsByTag"

import { useState } from 'react'
import Project from "../components/Project"
import { twMerge } from "tailwind-merge"

const Home = () => {
  const [ filterTag, setFilterTag ] = useState<string>('painting')

  const { tags } = useFilters()

  const { projectsByTag } = useProjectsByTag(filterTag)

  console.log(projectsByTag)

  return (
    <main>
      <section className='h-screen bg-[url(https://images.adsttc.com/media/images/61e8/13e7/c4b6/b501/6400/a8c6/large_jpg/bloco-arquitetos-06.jpg?1642599414)] bg-scroll bg-center bg-cover bg-no-repeat bg-neutral-600/90 bg-blend-overlay'>
        <div className="container flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-10 justify-center h-full">
          <h1 className="lg:w-[50%] w-full text-5xl md:text-6xl lg:text-7xl text-white font-bold">Decorators design studio</h1>
          <p className="lg:w-[50%] w-full text-2xl font-bold text-white">Decorating Decorators brings 20 years of experience right to your home or office</p>
          <div className="flex sm:gap-x-6 sm:flex-row flex-col gap-y-6">
            <Button className="text-sm text-white font-medium uppercase px-6 py-3">
              our services
            </Button>
            <Button className="text-sm font-medium uppercase px-6 py-3 bg-neutral-800 text-white">
              our projects
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white pb-20">
        <div className="container flex gap-x-20 lg:flex-row flex-col">
          <div className="flex-1 bg-neutral-900 text-white p-8 -mt-6 rounded">
            <h2 className="mb-12 text-3xl font-bold relative before:absolute before:w-16 before:h-0.5 before:-bottom-5 before:bg-orange-400 after:absolute after:w-20 after:h-1 after:bg-orange-400 after:-bottom-7 after:left-0">Welcome to Decorators</h2>
            <h3 className="text-2xl font-bold mb-12">We Have The Right Products to Fit Your Needs and Budget <span className="text-orange-500">Purchase - Decorators.</span></h3>
            <p className="mb-8">Explain to you how all this mistaken idea of denouncing ut pleasures work praising pain was born and will give you can complete design account sed the system, and expound the actual teachngs interiors of the great design explorer of the truth, the master-builders design of human happiness one seds rejects, dislikes, or avoids pleasures itself.</p>
            <img src="http://a.ourhtmldemo.com/decorators/wp-content/uploads/2019/02/signature.png" alt="ceo signature" className="mb-8"/>
            <h4 className="text-xl font-bold">William Shocks, <span className="text-neutral-700 font-normal">Founder</span></h4>
            <p className="text-orange-500">Decorators.</p>
          </div>
          <div className="flex-1 flex flex-col gap-8 md:pt-24 pt-12">
            <div className="flex gap-x-6">
              <div className="text-6xl">
                <FcBusinessman/>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-800">We are Professional</h3>
                <span className="text-orange-500 italic text-lg">Designers</span>
                <p className="mt-4 text-neutral-800">How all this mistakens idea of denouncing pleasures and praising pain was born and I will give you a completed by account of the system, and expound.</p>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="text-6xl">
                <FcOk/>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-800">We are Trusted</h3>
                <span className="text-orange-500 italic text-lg">Team Members</span>
                <p className="mt-4 text-neutral-800">How all this mistakens idea of denouncing pleasures and praising pain was born and I will give you a completed by account of the system, and expound.</p>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="text-6xl">
                <FcIdea/>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-800">We are Expert</h3>
                <span className="text-orange-500 italic text-lg">Interiors</span>
                <p className="mt-4 text-neutral-800">How all this mistakens idea of denouncing pleasures and praising pain was born and I will give you a completed by account of the system, and expound.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100 py-24">
        <div className="container">
          <div className="flex justify-between pb-8 items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold relative before:absolute before:w-16 before:h-0.5 before:-bottom-5 before:bg-orange-400 after:absolute after:w-20 after:h-1 after:bg-orange-400 after:-bottom-7 after:left-0">Our Best Services</h2>
            <div className="sm:flex hidden gap-x-1 items-center h-fit border-b border-neutral-900">
              <h5 className="uppercase font-bold text-center text-neutral-900">MORE SERVICES </h5>
              <span><FaCaretRight/></span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 transition bg-[url(https://images.adsttc.com/media/images/61e8/13e7/c4b6/b501/6400/a8c6/large_jpg/bloco-arquitetos-06.jpg?1642599414)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-white flex hover:bg-orange-600 gap-x-4 drop-shadow-lg group">
              <div className="text-4xl text-white group-hover:bg-white group-hover:text-orange-500 bg-orange-500 w-fit h-fit p-2">
                  <GiPaintRoller/>
              </div>
              <div className="flex flex-col gap-y-4">
                <h4 className="text-2xl font-bold text-neutral-800 group-hover:text-white">Texture Painting</h4>
                <p className="text-neutral-600 group-hover:text-white font-normal">How all this mistaken idea pleasure and praising pain was born and will give you a ...</p>
                <Link to={'/services/texture-painting'} className="uppercase font-bold text-neutral-800 group-hover:text-white">read more</Link>
              </div>
            </div>
            <div className="p-6 transition bg-[url(https://images.adsttc.com/media/images/61e8/13e7/c4b6/b501/6400/a8c6/large_jpg/bloco-arquitetos-06.jpg?1642599414)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-white flex hover:bg-orange-600 gap-x-4 drop-shadow-lg group">
              <div className="text-4xl text-white group-hover:bg-white group-hover:text-orange-500 bg-orange-500 w-fit h-fit p-2">
                  <GiPaintRoller/>
              </div>
              <div className="flex flex-col gap-y-4">
                <h4 className="text-2xl font-bold text-neutral-800 group-hover:text-white">Texture Painting</h4>
                <p className="text-neutral-600 group-hover:text-white font-normal">How all this mistaken idea pleasure and praising pain was born and will give you a ...</p>
                <Link to={'/services/texture-painting'} className="uppercase font-bold text-neutral-800 group-hover:text-white">read more</Link>
              </div>
            </div>
            <div className="p-6 transition bg-[url(https://images.adsttc.com/media/images/61e8/13e7/c4b6/b501/6400/a8c6/large_jpg/bloco-arquitetos-06.jpg?1642599414)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-white flex hover:bg-orange-600 gap-x-4 drop-shadow-lg group">
              <div className="text-4xl text-white group-hover:bg-white group-hover:text-orange-500 bg-orange-500 w-fit h-fit p-2">
                  <GiPaintRoller/>
              </div>
              <div className="flex flex-col gap-y-4">
                <h4 className="text-2xl font-bold text-neutral-800 group-hover:text-white">Texture Painting</h4>
                <p className="text-neutral-600 group-hover:text-white font-normal">How all this mistaken idea pleasure and praising pain was born and will give you a ...</p>
                <Link to={'/services/texture-painting'} className="uppercase font-bold text-neutral-800 group-hover:text-white">read more</Link>
              </div>
            </div>
            <div className="p-6 transition bg-[url(https://images.adsttc.com/media/images/61e8/13e7/c4b6/b501/6400/a8c6/large_jpg/bloco-arquitetos-06.jpg?1642599414)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-white flex hover:bg-orange-600 gap-x-4 drop-shadow-lg group">
              <div className="text-4xl text-white group-hover:bg-white group-hover:text-orange-500 bg-orange-500 w-fit h-fit p-2">
                  <GiPaintRoller/>
              </div>
              <div className="flex flex-col gap-y-4">
                <h4 className="text-2xl font-bold text-neutral-800 group-hover:text-white">Texture Painting</h4>
                <p className="text-neutral-600 group-hover:text-white font-normal">How all this mistaken idea pleasure and praising pain was born and will give you a ...</p>
                <Link to={'/services/texture-painting'} className="uppercase font-bold text-neutral-800 group-hover:text-white">read more</Link>
              </div>
            </div>
            <div className="p-6 transition bg-[url(https://images.adsttc.com/media/images/61e8/13e7/c4b6/b501/6400/a8c6/large_jpg/bloco-arquitetos-06.jpg?1642599414)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-white flex hover:bg-orange-600 gap-x-4 drop-shadow-lg group">
              <div className="text-4xl text-white group-hover:bg-white group-hover:text-orange-500 bg-orange-500 w-fit h-fit p-2">
                  <GiPaintRoller/>
              </div>
              <div className="flex flex-col gap-y-4">
                <h4 className="text-2xl font-bold text-neutral-800 group-hover:text-white">Texture Painting</h4>
                <p className="text-neutral-600 group-hover:text-white font-normal">How all this mistaken idea pleasure and praising pain was born and will give you a ...</p>
                <Link to={'/services/texture-painting'} className="uppercase font-bold text-neutral-800 group-hover:text-white">read more</Link>
              </div>
            </div>
            <div className="p-6 transition bg-[url(https://images.adsttc.com/media/images/61e8/13e7/c4b6/b501/6400/a8c6/large_jpg/bloco-arquitetos-06.jpg?1642599414)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-white flex hover:bg-orange-600 gap-x-4 drop-shadow-lg group">
              <div className="text-4xl text-white group-hover:bg-white group-hover:text-orange-500 bg-orange-500 w-fit h-fit p-2">
                  <GiPaintRoller/>
              </div>
              <div className="flex flex-col gap-y-4">
                <h4 className="text-2xl font-bold text-neutral-800 group-hover:text-white">Texture Painting</h4>
                <p className="text-neutral-600 group-hover:text-white font-normal">How all this mistaken idea pleasure and praising pain was born and will give you a ...</p>
                <Link to={'/services/texture-painting'} className="uppercase font-bold text-neutral-800 group-hover:text-white">read more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl mb-16 font-bold text-left relative before:absolute before:w-16 before:h-0.5 before:-bottom-5 before:bg-orange-400 after:absolute after:w-20 after:h-1 after:bg-orange-400 after:-bottom-7 after:left-0">Recent Projects</h2>
          <div className="flex lg:flex-row flex-col lg:gap-x-4 gap-y-6 mb-12">
            <ul className="lg:basis-2/12 flex lg:flex-col flex-row gap-x-3 gap-y-3 flex-wrap">
              {
                tags.map(tag => (
                  <li key={tag} className={twMerge("uppercase font-semibold py-3 border border-neutral-300 hover:border-orange-500 text-center px-6 lg:px-0 cursor-pointer", tag === filterTag ? 'bg-orange-500 text-white border-orange-500' : '')} onClick={()=>setFilterTag(tag)}>
                    {tag}
                  </li>
                ))
              }
            </ul>
            <div className="lg:basis-10/12 basis-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {
                projectsByTag.map(project => (
                  <Project {...project} />
                ))
              }
            </div>
          </div>
          <Button className="bg-neutral-800">
            more projects
          </Button>
        </div>
      </section>
      <section className="bg-[url(http://a.ourhtmldemo.com/decorators/wp-content/uploads/2019/02/image-1-1.jpg)] h-96 bg-center bg-cover bg-fixed bg-neutral-600 bg-blend-overlay">
        <div className="container flex flex-col items-center justify-center h-full text-white text-center">
          <h4 className="text-xl mb-5">Join with Decorators and</h4>
          <h3 className="text-4xl mb-8">Now Make Your Home More Lovely!</h3>
          <div className="flex sm:flex-row flex-col gap-y-4 gap-x-5">
            <Button>contact us</Button>
            <Button className="bg-neutral-800">shop now</Button>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container">
        </div>
      </section>
    </main>
  )
}

export default Home