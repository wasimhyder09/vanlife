import {Link} from 'react-router-dom';
export default function About() {
  return(
    <div className="about-page">
      <div className="about-banner"></div>
      <div className="about-content">
        <h3>ddDon’t squeeze in a sedan when you could relax in a van.</h3>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉) <br /><br />
        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        <div className="explore-vans">
            <h4>Your destination is waiting.<br />Your van is ready.</h4>
            <Link to="/vans">Explore our vans</Link>
        </div>
      </div>
    </div>
  )
}