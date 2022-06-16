<<<<<<< HEAD
import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";

var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Video</title>
        <link rel="stylesheet" href="home.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
=======
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
         
>>>>>>> 174d31e6160bef9e9b9bedafe3c97219199bd510
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