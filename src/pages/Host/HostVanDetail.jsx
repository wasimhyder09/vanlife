import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
export default function HostVansDetail() {
  const [hostVanData, setHostVanData] = useState(null)
  const params = useParams().id

  useEffect(() => {
    fetch(`/api/host/vans/${params}`)
    .then(res => res.json())
    .then(data => setHostVanData(data.vans[0]))
  }, [params])

  return(
    <div className="host-van-detail-container">
      {hostVanData ? (
      <div className="van-detail">
        <Link to="/host/vans" className='back-to-vans'>&larr; Back to all vans</Link>
        <div className="van-tile">
          <div className="top-info">
            <img src={hostVanData.imageUrl} alt="Van" />
            <div className="van-info">
              <i className={`van-type ${hostVanData.type} selected`}>{hostVanData.type}</i>
              <h3>{hostVanData.name}</h3>
              <p><span className='price'>${hostVanData.price}</span>/day</p>
            </div>
            <div className="bottom-info">
              <p className="name"><span>Name: </span>{hostVanData.name}</p>
              <p className="type"><span>Category: </span>{hostVanData.type}</p>
              <p className="description"><span>Description: </span>{hostVanData.description}</p>
            </div>
          </div>
        </div>
      </div>
      ) : <h2>Loading ...</h2>}
    </div>
  )
}