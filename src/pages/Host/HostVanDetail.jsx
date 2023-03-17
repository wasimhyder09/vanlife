import { Suspense } from "react";
import { Link, NavLink, Outlet, useLoaderData, defer, Await } from "react-router-dom";
import {getHostVans} from "../../api"

export function loader({params}) {
  return defer({hostVanData: getHostVans(params.id)})
}

export default function HostVanDetail() {
  const dataPromise = useLoaderData()

  function renderVanHostDetail(hostVanData) {
    return(
      <>
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
        <Outlet context={{hostVanData}} />
      </>
    )
  }

  return(
    <div className="host-van-detail-container">
      <Suspense fallback={<h2>Loading van...</h2>}>
        <Await resolve={dataPromise.hostVanData}>
          {renderVanHostDetail}
        </Await>
      </Suspense>
    </div>
  )
}