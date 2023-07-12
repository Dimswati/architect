import { CiMail, CiPhone, CiClock2 } from 'react-icons/ci'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { SlMenu } from 'react-icons/sl'

import NavButton from './NavButton'

import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

import { useState, useEffect } from 'react'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const navigate = useNavigate()

    const { pathname } = useLocation()

    useEffect(()=>{
        setOpenMenu(false)
    }, [pathname])

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
            <div className='text-2xl md:hidden inline-block cursor-pointer' onClick={()=>setOpenMenu(!openMenu)}>
                {openMenu ? (
                    <GrClose/>
                ): <SlMenu/>}
            </div>
        </div>
        {openMenu && (
        <div className='absolute bg-white top-20 md:hidden block w-full'>
            <div id='menu' className='container flex flex-col gap-y-4 text-lg font-medium py-4'>
                <NavLink to='.' className={({isActive})=> twMerge('px-4 py-2', isActive ? 'text-white bg-orange-500' : '')}>
                    Home
                </NavLink>
                <NavLink to='team' className={({isActive})=> twMerge('px-4 py-2', isActive ? 'text-white bg-orange-500' : '')}>
                    Team
                </NavLink>
                <NavLink to='services' className={({isActive})=> twMerge('px-4 py-2', isActive ? 'text-white bg-orange-500' : '')}>
                    Services
                </NavLink>
                <NavLink to='projects' className={({isActive})=> twMerge('px-4 py-2', isActive ? 'text-white bg-orange-500' : '')}>
                    Projects
                </NavLink>
                <NavLink to='contact' className={({isActive})=> twMerge('px-4 py-2', isActive ? 'text-white bg-orange-500' : '')}>
                    Contact
                </NavLink>
            </div>
        </div>
        )}
       </header>
    </>
  )
}

export default Navbar