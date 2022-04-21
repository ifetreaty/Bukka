import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import mealService from "../services/meal.service";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

function MealForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const imageRef = useRef();
  const [price, setPrice] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    setSubmitting(true);

    const formData = new FormData();
    formData.append("file", imageRef.current.files[0]);

    const res = await mealService.handleUpload(formData);

    await mealService.saveNewMeal({
      name,
      description,
      price,
      image: res.result.secure_url,
    });
    await setSubmitting(false);
    const notify = () => toast("Meal is successfully created");
    await notify;

    navigate("/admin/meals");
    window.location.reload();
  }

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">New Meal</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="form-control-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              id="image"
              className="form-control-image"
              type="file"
              ref={imageRef}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              className="form-control"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              validations={[required]}
            />
          </div>
          <button
            className="btn btn-primary btn-block meal-btn"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "please wait..." : "Add Meal"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default MealForm;
