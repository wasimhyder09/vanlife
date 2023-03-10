import {Link, useParams, useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';
export default function VanDetail() {
  const [vanData, setVanData] = useState(null)
  const params = useParams().id
  const location = useLocation()

  useEffect(() => {
    fetch(`/api/vans/${params}`)
    .then(res => res.json())
    .then(data => setVanData(data.vans))
  }, [params])

  const search = location.state?.search || ""
  const type = location.state?.type || "all"

  return(
    <div className="van-detail-container">
      {vanData ? (
      <div className="van-detail">
        <Link to={`..${search}`} relative='path' className='back-to-vans'>&larr; <span>Back to {type} vans</span></Link>
        <div className="van-tile">
          <img src={vanData.imageUrl} alt="Van"/>
          <div className="van-info">
            <i className={`van-type ${vanData.type} selected`}>{vanData.type}</i>
            <h3>{vanData.name}</h3>
            <p><span className='price'>${vanData.price}</span>/day</p>
            <p className="description">{vanData.description}</p>
            <Link to={`/vans/${vanData.id}/rent`} className='rent-btn'>Rent this van</Link>
          </div>
        </div>
      </div>
      ) : <h2>Loading ...</h2>}
    </div>
  )
}