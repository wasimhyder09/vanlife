import { Suspense } from 'react';
import { Link, useSearchParams, useLoaderData, defer, Await } from 'react-router-dom';
import { getVans } from '../../api';
import '../../server'

export function loader() {
  return defer({vans: getVans()})
}

export default function Vans() {
  const [searchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')
  const dataPromise = useLoaderData()

  function renderVanElements(vansData) {
    const displayedVans = typeFilter ? vansData.filter(vansData => vansData.type.toLowerCase() === typeFilter) : vansData
    const vanElements = displayedVans.map(van => (
      <Link
        key={van.id}
        to={van.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter
        }}
        >
        <div className="van-tile">
          <img src={van.imageUrl} alt="Van"/>
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
          </div>
        </div>
      </Link>
    ))
    return(
      <>
        <div className="van-list-filter-buttons">
          <Link className={`van-type simple ${typeFilter === 'simple' ? 'selected' : null}`} to="?type=simple">Simple</Link>
          <Link className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : null}`} to="?type=rugged">Rugged</Link>
          <Link className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : null}`} to="?type=luxury">Luxury</Link>
          {typeFilter ? <Link className='van-type clear-filters' to=".">Clear Filters</Link> : ''}
        </div>
        <div className="van-list">
          {vanElements}
        </div>
      </>
    )
  }

  return(
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <Suspense fallback={<h2>Loading vans....</h2>}>
        <Await
          resolve={dataPromise.vans}>
          {renderVanElements}
        </Await>
      </Suspense>
    </div>
  )
}