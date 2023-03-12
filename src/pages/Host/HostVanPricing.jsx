import { useOutletContext } from "react-router-dom";
export default function HostVanPricing() {
  const[hostVanData, setHostVanData] = useOutletContext()
  return(
    <>
      {hostVanData ? (
        <div className="host-van-detail-info">
          <p className="price"><strong>${hostVanData.price}</strong>/day</p>
        </div>
      ) : ""}
    </>
  )
}