import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import mealService from "../services/meal.service";
import { useState } from "react";
import MealForm from "../pages/meal-form";
import TotalMeals from "./TotalMeals.component";

import axios from "axios";

const AddMeal = (props) => {
  return (
    <div>
      <div className="homepage-body">
        <h2 id="homepage-body-header">Manage Meals</h2>
        <Link to="/admin/meals/meal-form">
          <button id="homepage-body-button">Add New Meal</button>
        </Link>
      </div>
      <div className="total-meals-style">
        <TotalMeals />
      </div>


      
      {/* <div>
        <h1 className="meal-list-title">Meal List</h1>
      </div>
      <div className="cards">
        <div className="meal-card">
          <img
            src="https://res.cloudinary.com/ifetreaty/image/upload/v1643221465/twz6gnvu3grbjwpvo5qo.jpg"
            alt="meal-card"
            className="meal-card-image"
          />
          <div className="meal-card-body">
            <h5 className="meal-card-name">Amala</h5>
            <p className="meal-card-description">
              Amala, Ewedu, and Gbegiri(optional). It also comes with two pieces
              of beef.
            </p>
          </div>
          <ul className="list-group">
            <li className="list-group-item price">Price: N1,500</li>
          </ul>
          <div className="meal-card-body">
            <button className="meal-card-button">
              <a href="#" className="meal-card-link">
                Select Meal
              </a>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

// class TotalMeals extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       gallery: []
//     }
//   }
//   componentDidMount() {
//     axios.get("https://res.cloudinary.com/ifetreaty/image/bukka-gallery")
//       .then(res => {
//         console.log(res.data.resources);
//         this.setState({gallery: res.data.resources});
//       });
//   }
//   uploadWidget() {

//   }
//   render() {
//     return (
//       <div className="total-meals">
//         <h1>Does this work?</h1>
//         <div className="gallery">
//           <CloudinaryContext cloudName="cloud_name">
//             {
//               this.state.gallery.map(data => {
//                 return (
//                   <div className="responsive" key={data.public_id}>
//                     <div className="img">
//                       <a target="_blank" href={`https://res.cloudinary.com/ifetreaty/image/upload/${data.public_id}.jpg`}>
//                         <Image publicId={data.public_id}>
//                           <Transformation
//                             crop="scale"
//                             width="300"
//                             height="200"
//                             dpr="auto"
//                             responsive_placeholder="blank"
//                           />
//                         </Image>
//                       </a>
//                     </div>
//                   </div>
//                 )
//               })
//             }
//           </CloudinaryContext>
//           <div className="clearfix"></div>
//         </div>
//       </div>
//     );
//   }
// }

// render(<TotalMeals />, document.getElementById("container"));

export default AddMeal;
