import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function HostVans() {
  const [hostVans, setHostVans] = useState([])

  useEffect(() => {
    fetch("/api/host/vans")
    .then(res => res.json())
    .then(data => setHostVans(data.vans))
  }, [])

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

  return(
    <div className="listed-host-vans">
      <h1>Your listed vans</h1>
      { vanElement }
    </div>
  )
}