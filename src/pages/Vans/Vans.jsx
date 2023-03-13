import {useState, useEffect} from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../../server'
export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams()
  const[vansData, setVansData] = useState([])
  const typeFilter = searchParams.get('type')

  //Fetch data from  MirageJS server
  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVansData(data.vans))
  }, [])

  const displayedVans = typeFilter ? vansData.filter(vansData => vansData.type.toLowerCase() === typeFilter) : vansData
  const vanElements = displayedVans.map(van => (
    <Link key={van.id} to={`/vans/${van.id}`}>
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
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <Link className={`van-type simple ${typeFilter == 'simple' ? 'selected' : null}`} to="?type=simple">Simple</Link>
        <Link className={`van-type rugged ${typeFilter == 'rugged' ? 'selected' : null}`} to="?type=rugged">Rugged</Link>
        <Link className={`van-type luxury ${typeFilter == 'luxury' ? 'selected' : null}`} to="?type=luxury">Luxury</Link>
        {typeFilter ? <Link className='van-type clear-filters' to=".">Clear Filters</Link> : ''}
      </div>
      <div className="van-list">
        {vanElements}
      </div>
    </div>
  )
}