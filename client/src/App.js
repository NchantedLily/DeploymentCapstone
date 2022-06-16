import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import BrewPage from './components/BrewPage';
import Home from './components/Home';
import FoodPage from './components/FoodPage';
// Page & Component Imports
import Navbar from './components/Navbar'
import About from './components/About';
import Contact from './components/Contact'
import Events from './components/Events';
import Attractions from './components/Attractions';
import Histories from './components/Historical';
import Foods from './components/FoodPage';
import Brews from './components/BrewPage';




// styles
import './style.css';



export default class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/Contact' component={Contact}/> 
        <Route path='/food' component={Foods} />
        <Route path='/brew' component={Brews} />
        <Route path='/events' component={Events} />
        <Route path='/historical' component={Histories} />
        <Route path='/attractions' component={Attractions} />


      </Router>
      <iframe src="https://my.atlistmaps.com/map/b026416f-080d-4b84-8317-c40e8cb416f1?share=true" allow="geolocation" width="100%" height="400px" frameborder="0" scrolling="no" allowfullscreen></iframe>
    </div>
  );
}
}