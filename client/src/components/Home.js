import React from 'react'
import "../home.css"
import "../index.css"
import Bluewall from "../img/Bluewall2.mp4";
import sixteenBit from '../img/16bit.jpg';
import Blink from '../img/blink1.jpg';
import Aqua from '../img/Aquarium.jpg';
import Ut from '../img/ut.jpg';
import Nati from '../img/cincy2.jpg';
import Pontiac from '../img/pontiac.jpg';




const Home = () => {
  return (
    <div>
         <div>
         
        <section className="showcase">
          <video src={Bluewall} muted loop autoPlay />
          <div className="overlay">
            <div className="text">
              <h1>Cincinnati</h1>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-between">
              <div className="card mb-5" style={{width: '21rem'}}>
                <img className="card-img-top" src={Blink} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Events</h5>
                  <p className="card-text">Cincinnati has a lot of events, year round. From Spring to Winter there's always something to do or see.</p>
                  <a href="./events" className="btn btn-primary">Go to Events</a>
                </div>
              </div>
              <div className="card mb-5" style={{width: '21rem'}}>
                <img className="card-img-top" src={sixteenBit} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Food/Bars</h5>
                  <p className="card-text">Food is not hard to find, many different cultures and price points to explore. </p>
                  <a href="./food" className="btn btn-primary">Go to Food/Bars</a>
                </div>
              </div>
              <div className="card mb-5" style={{width: '21rem'}}>
              <img className="card-img-top" src={Aqua} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Attractions</h5>
                  <p className="card-text">Beautiful places to see, doesn't matter if you're on a date or with family.</p>
                  <a href="./attractions" className="btn btn-primary">Go to Attractions</a>
                </div>
              </div>
              <div className="card mb-5" style={{width: '21rem'}}>
                <img className="card-img-top" src={Ut} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Historical</h5>
                  <p className="card-text">Learn more about what made Cincinnati what it is today.</p>
                  <a href="./historical" className="btn btn-primary">Go to Historical</a>
                </div>
              </div>
              <div className="card mb-5" style={{width: '21rem'}}>
                <img className="card-img-top" src={Nati} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Contact</h5>
                  <p className="card-text">Check out or contact page on how to reach us or where to start when exploring the city.</p>
                  <a href="./contact" className="btn btn-primary">Go to Contact</a>
                </div>
              </div>
              <div className="card mb-5" style={{width: '21rem'}}>
                <img className="card-img-top" src={Pontiac} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Late Night/Breweries</h5>
                  <p className="card-text">Like to drink, or looking for a place to kickback and relax. There's plenty of breweries in Cincy.</p>
                  <a href="./brew" className="btn btn-primary">Go to Late Night/Breweries</a>
                </div>
              </div>
              {/* MAP */}
              <div className="Map">
                <iframe src="https://my.atlistmaps.com/map/b026416f-080d-4b84-8317-c40e8cb416f1?share=true" title="atlistmapofcincy" allow="geolocation" width="100%" height="400px" frameBorder={0} scrolling="no" allowFullScreen />
              </div>
            </div>
          </div></section>
      </div>
      <footer></footer>
    </div>
  )
}

export default Home