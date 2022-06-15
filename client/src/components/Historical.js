//import React from 'react'
import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";
// import {BACKEND_URL} from '../config'

const History = (props) => (
<body className='historicalContainer'>
  <div className="eventc6">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className='historicalImage' src={props.historical.imageURL}alt="Renaissance Festival" />
        </div>
        <div className="flip-card-back">
          <h3 className="historicalFirst-txt">{props.historical.title}</h3>
          <p className="historicalSecond-txt historicalGlass">{props.historical.description}</p>
        </div>
      </div>
    </div>
  </div>  
</body>

)

export default class Histories extends Component {
  constructor(props) {  
    super(props); 
    
    
    
    this.state = {
      historicals: []
    };  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/historical/')
     .then(response => {
       this.setState({ historicals: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  historicalList() {
    return this.state.historicals.map(currentHistory => {
      return <History historical={currentHistory} key={currentHistory._id}/>;
    })
  }
  render() {
    return (

 
     
      
      <div className="bodyody">
           { this.historicalList()  }
                </div>
);
}
}