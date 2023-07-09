import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

const MainLayout = () => {

  const { pathname } = useLocation()

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout