import { Link, NavLink } from "react-router-dom"
export default function Header() {
  return(
    <div className="header">
        <div className="logo">
          <Link to="/"><h2>#VANLIFE</h2></Link>
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