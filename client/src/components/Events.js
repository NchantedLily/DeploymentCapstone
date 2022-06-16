//import React from 'react';
import React, { Component } from 'react';
import axios from 'axios';
// import {BACKEND_URL} from '../config'

const Event = (props) => (
<body className="eventContainer ">
    
   
  <div className="eventc6">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className='eventImage' src={props.event.imageURL}alt="Event Image" />
        </div>
        <div className="flip-card-back">
          <h3 className="eventFirst-txt">{props.event.title}</h3>
          <p className="eventSecond-txt eventGlass">{props.event.description}</p>
        </div>
      </div>
    </div>
  </div>
  </body>
)

export default class Events extends Component {
  constructor(props) {  
    super(props);    
    
    this.state = {
      events: []
    };  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/events/')
     .then(response => {
       this.setState({ events: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  EventsList() {
    return this.state.events.map(currentEvent => {
      return <Event event={currentEvent} key={currentEvent._id}/>;
    })
  }
  render() {
    return (
      <div className="">
           { this.EventsList()  }
                </div>
);
}
}

