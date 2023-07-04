import { twMerge } from 'tailwind-merge'
import { NavLink } from 'react-router-dom'

type NavButtonProps = {
    path: string
    pathName: string
}

const NavButton = ({ path, pathName }: NavButtonProps) => {
  return (
    <NavLink to={path} className={({ isActive, isPending })=> twMerge('transition h-fit px-4 hover:bg-orange-500 hover:text-white py-2.5 text-black rounded uppercase font-medium', isActive ? 'bg-orange-500 text-white hover:bg-orange-500' : isPending ? 'bg-bg-orange-500/50 text-white' : '')}>
        {pathName}
    </NavLink>
  )
}

export default NavButton