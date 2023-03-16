import { Outlet, Navigate, useLocation } from "react-router-dom";
export default function AuthRequired() {
  const location = useLocation()
  const isLoggedIn = localStorage.getItem("loggedIn")
  if(!isLoggedIn) {
    return(
      <Navigate
        to="login"
        state={{ message: "You must log in first." , redirectPath : location.pathname}}
        replace
      />
    )
  }
  return <Outlet />
}