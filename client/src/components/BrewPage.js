import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";
// import {BACKEND_URL} from '../config'
const Brew = props => (

 
<div className="card mb-3 col-3 logo" style={{maxWidth: 540}}>
<div className="row g-0">
  <div className="col-md-4">
    <img src={props.brew.imageURL} className="img-fluid rounded-start" alt="..." />
  </div>
  <div className="nuggets">
    <div className="card-body">
      <h5 className="card-title">{props.brew.title}</h5>
      <p className="card-text">{props.brew.description}</p>
      <p className="card-text"><small className="text-muted"></small></p>
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

 
     
      
      <div className="container">
      <div className="row">
               { this.BrewsList()  }
                    </div>
                    </div>
    );
    }
    }