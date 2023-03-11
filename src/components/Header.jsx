import { NavLink } from "react-router-dom"
export default function Header() {
  return(
    <div className="header">
        <div className="logo">
          <NavLink to="/"><h2>#VANLIFE</h2></NavLink>
        </div>
        <nav>
          <NavLink
            to="/host"
            className={({isActive}) => isActive ? "is-active" : null}
            >Host</NavLink>
          <NavLink
            to="/about"
            className={({isActive}) => isActive ? "is-active" : null}
            >About</NavLink>
          <NavLink
            to="/vans"
            className={({isActive}) => isActive ? "is-active" : null}
            >Vans</NavLink>
        </nav>
      </div>
  )
}