import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import { BsArrowLeft } from 'react-icons/bs'

type BreadCrumpProps = {
    children: React.ReactNode
}

const BreadCrump = ({children}: BreadCrumpProps) => {
  return (
    <Container sectionClasses='bg-neutral-200 py-8' innerClasses='container'>
        <h2 className='block text-2xl capitalize font-semibold mb-4'>{children}</h2>
        <Link to='..' className='flex items-center gap-x-2 w-fit border-b-2 border-black pb-1'>
            <span><BsArrowLeft className/></span>
            <p>back</p>
        </Link>
    </Container>
  )
}

export default BreadCrump