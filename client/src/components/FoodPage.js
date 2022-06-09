import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";
// import {BACKEND_URL} from '../config'
const Food = props => (



   <div className="card mb-3 card-style" id="card-style">
  <div className="row g-0">
  <div className="col-md-4">
<img className="" src={props.food.imageURL} alt=""/>
</div>
<div className="col-md-8">
<div className="card-body">
   <h4 className="card-title titlestyle">{props.food.title}</h4>
   <p className='card-text wonder'>{props.food.description}</p>
   <p> </p>
 
 
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

 
     
      
      <div className="bodyody">
           { this.FoodsList()  }
                </div>
);
}
}