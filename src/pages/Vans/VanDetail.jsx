import {Suspense} from 'react';
import {Link, useLocation, useLoaderData, defer, Await} from 'react-router-dom';
import { getVans } from '../../api';

export function loader({params}) {
  return defer({vanData: getVans(params.id)})
}

export default function VanDetail() {
  const location = useLocation()
  const dataPromise = useLoaderData()

  function renderVanDetail(vanData) {
    const search = location.state?.search || ""
    const type = location.state?.type || "all"
    return(
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
    )
  }

  return(
    <div className="van-detail-container">
      <Suspense fallback={<h2>Loading van...</h2>}>
        <Await resolve={dataPromise.vanData}>
          { renderVanDetail }
        </Await>
      </Suspense>
    </div>
  )
}