import { NavLink, Outlet } from "react-router-dom";
export default function HostLayout() {
  const linkStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  return(
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          style={({isActive}) => isActive ? linkStyle : null}
          >
          Dashboard</NavLink>
        <NavLink
          to="income"
          style={({isActive}) => isActive ? linkStyle : null}
          >
          Income</NavLink>
        <NavLink
          to="vans"
          style={({isActive}) => isActive ? linkStyle : null}
          >
          Vans</NavLink>
        <NavLink
          to="reviews"
          style={({isActive}) => isActive ? linkStyle : null}
          >
          Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  )
}