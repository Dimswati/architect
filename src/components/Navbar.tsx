import { CiMail, CiPhone, CiClock2 } from 'react-icons/ci'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'

import NavButton from './NavButton'

import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <>
       <div className='py-2 bg-black text-white text-sm sm:block hidden'>
            <div className='container flex flex-wrap-reverse gap-y-4 justify-center md:flex-nowrap  md:gap-x-10 md:justify-end'>
                <ul className='flex md:gap-x-6 gap-x-4 md:flex-nowrap flex-wrap justify-center gap-y-3'>
                    <li className='flex gap-2 items-center'>
                        <CiMail/>
                        <span>Contact@Decorators.com</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <CiPhone/>
                        <span>Toll Free: +1 212-212-2376</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <CiClock2/>
                        <span>Mon - Fri : 9:00 -1700</span>
                    </li>
                </ul>
                <div className='flex gap-x-2'>
                    <div className='border-2 border-neutral-700 hover:border-orange-600 p-2.5 hover:bg-orange-600 rounded-full cursor-pointer'>
                        <FaFacebookF/>
                    </div>
                    <div className='border-2 border-neutral-700 hover:border-orange-600 p-2.5 hover:bg-orange-600 rounded-full cursor-pointer'>
                        <FaTwitter/>
                    </div>
                    <div className='border-2 border-neutral-700 hover:border-orange-600 p-2.5 hover:bg-orange-600 rounded-full cursor-pointer'>
                        <FaLinkedinIn/>
                    </div>
                </div>
            </div>
       </div>
       <header className='md:py-8 py-7 bg-white z-50 sticky top-0 border-b border-neutral-200'>
        <div className='container justify-between items-center flex'>
            <img onClick={()=>navigate('/')} src="http://a.ourhtmldemo.com/decorators/wp-content/themes/decorators/images/logo.png" className='object-cover object-center md:w-48 w-40 h-auto cursor-pointer' alt="logo" />
            <div className='md:flex lg:gap-x-4 gap-x-2 hidden'>
                <NavButton path='/' pathName={'Home'}/>
                <NavButton path='/team'  pathName={'Team'}/>
                <NavButton path='/services' pathName={'Services'}/>
                <NavButton path='/projects' pathName={'Projects'}/>
                <NavButton path='/contact' pathName={'Contact'}/>
            </div>
            <div className='bg-orange-500 p-3 text-white rounded md:hidden inline-block'>
                <AiOutlineMenu/>
            </div>
        </div>
       </header>
    </>
  )
}

export default Navbar