import { Suspense } from "react";
import { Link, defer, useLoaderData, Await } from "react-router-dom";
import { getHostVans } from "../../api";
import '../../server';

export function loader() {
  return defer({hostVans: getHostVans()})
}

export default function HostVans() {
  const dataPromise = useLoaderData()

  function renderHostVans(hostVans) {
    const vanElement = hostVans.map(van => (
      <Link key={van.id} to={van.id}>
        <div className="van-host-tile">
          <div className="left-side">
            <img src={van.imageUrl} alt="Van" />
          </div>
          <div className="right-side">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ))
    return vanElement
  }

  return(
    <div className="listed-host-vans">
      <h1>Your listed vans</h1>
      <Suspense fallback={<h2>Loading vans....</h2>}>
        <Await resolve={dataPromise.hostVans}>
          {renderHostVans}
        </Await>
      </Suspense>
    </div>
  )
}