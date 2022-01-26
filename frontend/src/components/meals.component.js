import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Uploads from "../uploads";
import "../App.css";
// import Form from "react-validation/build/form";

import mealService from "../services/meal.service";
import { useState } from "react";
import MealForm from "../pages/meal-form";
// import { response } from "express";

//Try to convert this to a function component
// class AddMeal extends Component {
//   state = {
//     name: "",
//     description: "",
//     imageUrl: ""
//   }

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   }

//   handleFileUpload = e => {
//     console.log("The file to be uploaded is: ", e.target.files[0]);

//     const uploadData = new FormData();

//     uploadData.append("imageUrl", e.target.files[0]);

//     service.handleUpload(uploadData)
//       .then(response => {
//         this.setState({ imageUrl: response.secure_url });
//       })
//       .catch(err => {
//         console.log("Error while updating the file: ", err);
//       });
//   }

//   handleSubmit = e => {
//     e.preventDefault();

//     service.saveNewThing(this.state)
//       .then(res => {
//         console.log('added: ', res);
//         // here you would redirect to some other page
//       })
//       .catch(err => {
//         console.log("Error while adding the thing: ", err);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <h2>New Thing</h2>
//         <form onSubmit={e => this.handleSubmit(e)}>
//           <label>Name</label>
//           <input type="text"
//             name="name"
//             value={ this.state.name }
//             onChange={ e => this.handleChange(e)} />

//           <label>Description</label>
//           <textarea
//             name="description"
//             value={ this.state.description }
//             onChange={ e => this.handleChange(e)} />

//           <input type="file"
//             onChange={(e) => this.handleFileUpload(e)} />

//           <button type="submit">Save new thing</button>
//         </form>
//       </div>
//     );
//   }
// }

// function AddMeal() {
//   const [state, setState] = useState({
//     name: "",
//     description: "",
//     imageUrl: ""
//   });

//    const handleChange = (e) => {
//     setState({
//       ...state,
//       name: e.target.value
//     });
//   }

//   const handleFileUpload = (e) => {
//     console.log("The file to be uploaded is: ", e.target.files[0]);

//     const uploadData = new FormData();

//     uploadData.append("imageUrl", e.target.files[0]);

//     service.handleUpload(uploadData)
//       .then(response => {
//         setState({
//           ...state,
//           imageUrl: response.secure_url
//         });
//       })
//       .catch(err => {
//         console.log("Error while updating the file: ", err);
//       });
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     service.saveNewThing(state) //? confused
//       .then(res => {
//         console.log('added: ', res);
//         // here you would redirect to some other page
//       })
//       .catch(err => {
//         console.log("Error while adding the thing: ", err);
//       });
//   }

//     return (
//       <div className="homepage-body">
//         <h2 id="homepage-body-header">Manage Meals</h2>
//         <Form
//           onSubmit={handleSubmit}
//           // ref={form}
//           >
//           <label>Name</label>
//           <input type="text"
//             name="name"
//             value={ state.name }
//             onChange={handleChange} />

//           <label>Description</label>
//           <textarea
//             name="description"
//             value={ state.description }
//             onChange={handleChange} />

//           <input type="file"
//             onChange={handleFileUpload} id="file-upload" />

//           <button type="submit" onChange={handleFileUpload} >Add New Meal</button>
//           <label for="file-upload" id="homepage-body-button">Add New Meal</label>
//         </Form>
//       </div>
//     );
// }

const AddMeal = (props) => {
  return (
    <div>
      <div className="homepage-body">
        <h2 id="homepage-body-header">Manage Meals</h2>
        <Link to="/admin/meals/meal-form">
          <button id="homepage-body-button">Add New Meal</button>
        </Link>
      </div>
      <div>
        <img src="file.secure_url" />
      </div>
    </div>
  );
};

export default AddMeal;
