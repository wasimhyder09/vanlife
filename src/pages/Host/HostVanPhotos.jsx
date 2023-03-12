import { useOutletContext } from "react-router-dom";
export default function HostVanPhotos() {
  const[hostVanData, setHostVanData] = useOutletContext()
  return(
    <>
      {hostVanData ? (
        <div className="host-van-detail-info">
          <img className="van-detail-photo" src={hostVanData.imageUrl} alt="Van " />
        </div>
      ) : ""}
    </>
  )
}