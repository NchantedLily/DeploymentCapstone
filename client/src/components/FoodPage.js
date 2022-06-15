

import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";
// import {BACKEND_URL} from '../config'


const Food = props => (

    
    <div className="card mb-3 col-3 logo" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.food.imageURL} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="nuggets">
      <div className="card-body">
        <h5 className="card-title">{props.food.title}</h5>
        <p className="card-text">{props.food.description}</p>
        <p className="card-text"><small className="text-muted"></small></p>
      </div>
    </div>
  </div>
</div>

 

  
)

export default class Foods extends Component {
  constructor(props) {  
    super(props); 
    
    
    
    this.state = {
      foods: []
    };  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/food/')
     .then(response => {
       this.setState({ foods: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  FoodsList() {
    return this.state.foods.map(currentFood => {
      return <Food food={currentFood} key={currentFood._id}/>;
    })
  }
  render() {
    return (

 
     
      
      <div className="container">
  <div className="row">
           { this.FoodsList()  }
                </div>
                </div>
);
}
}