import { useState, useEffect } from "react";
import { Link, NavLink, useParams, Outlet } from "react-router-dom";
export default function HostVanDetail() {
  const [hostVanData, setHostVanData] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
    .then(res => res.json())
    .then(data => setHostVanData(data.vans[0]))
  }, [id])

  return(
    <div className="host-van-detail-container">
      {hostVanData ? (
      <div className="van-detail">
        <Link to=".."
          relative="path"
          className='back-to-vans'>&larr; <span>Back to all vans</span>
        </Link>
        <div className="van-tile">
          <div className="top-info">
            <img src={hostVanData.imageUrl} alt="Van" />
            <div className="van-info">
              <i className={`van-type ${hostVanData.type} selected`}>{hostVanData.type}</i>
              <h3>{hostVanData.name}</h3>
              <p><span className='price'>${hostVanData.price}</span>/day</p>
            </div>
          </div>
          <nav className="host-nav">
            <NavLink 
              className={({isActive}) => isActive ? "is-active" : null}
              end
              to=".">Details</NavLink>
            <NavLink 
              className={({isActive}) => isActive ? "is-active" : null}
              to="pricing">Pricing</NavLink>
            <NavLink 
              className={({isActive}) => isActive ? "is-active" : null}
              to="photos">Photos</NavLink>
          </nav>
        </div>
      </div>
      ) : <h2>Loading ...</h2>}
      <Outlet />
    </div>
  )
}