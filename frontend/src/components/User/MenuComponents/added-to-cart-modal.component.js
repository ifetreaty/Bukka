import { FaRegWindowClose } from "react-icons/fa";
import React, { useState } from "react";
import { withAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
// import "../../App.css";
import CategorySelect from "./category-select.component";
import menuService from "../../../services/menu.service";

const Modal = ({ setIsOpen, mealId }) => {
  const [meal, setMeal] = useState(mealId);
  const [category, setCategory] = useState("6231da8ecece324534b292da");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      setSubmitting(true);

      await menuService.saveMenuItem({
        meal,
        category,
      });
      navigate("/admin/menu");
      window.location.reload();
    } catch (err) {
      alert("This meal has already been added");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Menu Item</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <FaRegWindowClose style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            <CategorySelect onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button
                className="addBtn"
                onClick={(e) => handleSubmit(e)}
                type="submit"
                disabled={submitting}
              >
                {submitting ? "please wait..." : "Add to Menu"}
              </button>

              <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
