import {Link} from 'react-router-dom';
export default function Home() {
  return(
    <div className="home-banner">
      <div className="content">
        <h3 className="plans">You got the travel plans, we got the travel vans.</h3>
        <div className="info">
          <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <Link to="/vans">Find your van</Link>
        </div>
      </div>
    </div>
  )
}