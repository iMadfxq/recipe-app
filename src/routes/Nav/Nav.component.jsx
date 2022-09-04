import { NavLink, Outlet } from 'react-router-dom'
import './nav.styles.scss'

export default function Nav() {
  return (
    <>
        <nav>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/createrecipe'}>Create</NavLink>
      <NavLink to={'/recipes'}>Recipes</NavLink>
    </nav>
    <Outlet />
    </>
  )
}