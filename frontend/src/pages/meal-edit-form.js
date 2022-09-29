import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import mealService from "../services/meal.service";
import "../App.css";
import { toast } from "react-toastify";
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

function EditForm() {
  const imageRef = useRef();
  const imagePreviewRef = useRef();
  const [meal, setMeal] = useState({
    name: "",
    description: "",
    imageUrl: "",
    price: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const meal = await mealService.getMeal(id);
      setMeal(meal);
      console.log(meal);
      if (meal?.image) {
        imagePreviewRef.current.src = meal.image;
      }

      if (!meal) {
        window.alert(`Meal with id ${id} not found`);

        return;
      }
    }
    fetchData();

    return;
  });

  async function handleUpdate(e) {
    e.preventDefault();

    setSubmitting(true);

    console.log(imageRef.current.files);
    if (imageRef.current.files.length > 0) {
      const formData = new FormData();
      formData.append("file", imageRef.current.files[0]);
    }
    const id = params.id.toString();
    const formData = new FormData();

    const updatedMeal = {
      ...meal,
    };

    if (imageRef.current.files.length > 0) {
      const res = await mealService.handleUpload(formData);
      updatedMeal.image = res.result.secure_url;
    }

    await mealService.editMeal(updatedMeal, id);
    await setSubmitting(false);
    const notify = () => toast("Meal is successfully updated");
    await notify;

    navigate("/admin/meals");
    window.location.reload();
  }

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Update Meal</h2>
        </div>

        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="form-control"
              type="text"
              value={meal.name}
              onChange={(e) => {
                console.log(meal);
                console.log(e.target.value);
                console.log({ ...meal, name: e.target.value });
                setMeal({ ...meal, name: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="form-control-description"
              value={meal.description}
              onChange={(e) => {
                setMeal({ ...meal, description: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <img
              className="img-preview"
              ref={imagePreviewRef}
              id="blah"
              src="#"
              alt=""
            />
            <input
              id="image"
              className="form-control-image edit-img"
              type="file"
              ref={imageRef}
              validations={[required]}
              onChange={(evt) => {
                const [file] = imageRef.current.files;
                if (file) {
                  imagePreviewRef.current.src = URL.createObjectURL(file);
                } else {
                  setMeal({ ...meal, imageUrl: null });
                }
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              className="form-control"
              type="number"
              value={meal.price}
              onChange={(e) => {
                setMeal({ ...meal, price: e.target.value });
              }}
              validations={[required]}
            />
          </div>
          <button
            className="btn btn-primary btn-block meal-btn"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "please wait..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditForm;
