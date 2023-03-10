import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../server'
export default function Vans() {
  const[vansData, setVansData] = useState([])

  //Fetch data from  MirageJS server
  useEffect(() => {
    console.log('Effect ran')
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  const vanElements = vansData.map(van => (
    <Link key={van.id} to={`/vans/${van.id}`}>
      <div className="van-tile">
        <img src={van.imageUrl} />
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
      <div className="van-list">
        {vanElements}
      </div>
    </div>
  )
}