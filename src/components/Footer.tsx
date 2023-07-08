import { Link } from "react-router-dom"
import Container from "./Container"

const Footer = () => {
  return (
    <Container sectionClasses="bg-neutral-900 py-4" innerClasses="container flex justify-between items-center text-neutral-400">
      <p>Copyrights &#169; 2022 All Rights Reserved by</p>
      <div className="flex gap-x-6 text-base">
        <Link to='/projects' className='hover:text-orange-500'>Projects</Link>
        <Link to='/team' className='hover:text-orange-500'>Team</Link>
        <Link to='/services' className='hover:text-orange-500'>Services</Link>
        <Link to='/contact' className='hover:text-orange-500'>Contact</Link>
      </div>
    </Container>
  )
}

export default Footer