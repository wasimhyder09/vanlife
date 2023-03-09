import {useState, useEffect} from 'react';
import '../server'
export default function Vans() {
  const[vansData, setVansData] = useState([])

  //Fetch data from  MirageJS server
  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVansData(data.vans))
  }, [])

  const vanElements = vansData.map(van => (
    <div key={van.id} className="van-title">
      <img src={van.imageUrl} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>${van.price}<span>/day</span></p>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </div>
  ))
  return(
    <>
      {vanElements}
    </>
  )
}