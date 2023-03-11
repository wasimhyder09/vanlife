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
          to="/host"
          end
          style={({isActive}) => isActive ? linkStyle : null}
          >
          Dashboard</NavLink>
        <NavLink
          to="/host/income"
          style={({isActive}) => isActive ? linkStyle : null}
          >
          Income</NavLink>
        <NavLink
          to="/host/vans"
          style={({isActive}) => isActive ? linkStyle : null}
          >
          Vans</NavLink>
        <NavLink
          to="/host/reviews"
          style={({isActive}) => isActive ? linkStyle : null}
          >
          Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  )
}