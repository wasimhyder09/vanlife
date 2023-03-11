import { Link } from "react-router-dom"
export default function Header() {
  return(
    <div className="header">
        <div className="logo">
          <Link to="/"><h2>#VANLIFE</h2></Link>
        </div>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </div>
  )
}