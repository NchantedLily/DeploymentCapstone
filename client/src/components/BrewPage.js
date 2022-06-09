import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";
// import {BACKEND_URL} from '../config'
const Brew = props => (
   <div className="card mb-3 card-style" id="card-style">
  <div className="row g-0">
  <div className="col-md-4">
<img className="" src={props.brew.imageURL} alt=""/>
</div>
<div className="col-md-8">
<div className="card-body">
   <h4 className="card-title titlestyle">{props.brew.title}</h4>
   <p className='card-text wonder'>{props.brew.description}</p>
   <p> </p>
 
 
 </div>
 </div>
 </div>
 </div>

  
)

export default class Brews extends Component {
  constructor(props) {  
    super(props); 
    
    
    
    this.state = {
      brews: []
    };  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/brew/')
     .then(response => {
       this.setState({ brews: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  BrewsList() {
    return this.state.brews.map(currentBrew => {
      return <Brew brew={currentBrew} key={currentBrew._id}/>;
    })
  }
  render() {
    return (

 
     
      
      <div className="bodyody">
           { this.BrewsList()  }
                </div>
);
}
}