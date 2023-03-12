import { useOutletContext } from "react-router-dom";
export default function HostVanInfo() {
  const[hostVanData, setHostVanData] = useOutletContext()
  return(
    <>
      {hostVanData ? (
        <div className="host-van-detail-info">
          <p className="name"><strong>Name: </strong>{hostVanData.name}</p>
          <p className="type"><strong>Type: </strong>{hostVanData.type}</p>
          <p className="description"><strong>Description: </strong>{hostVanData.description}</p>
        </div>
      ) : ""}
    </>
  )
}