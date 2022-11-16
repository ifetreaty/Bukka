import { FaRegWindowClose } from "react-icons/fa";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import CategorySelect from "./category-select.component";
import menuService from "../../services/menu.service";

const Modal = ({ setIsOpen, mealId, categories }) => {
  const [category, setCategory] = useState(categories[0]?.value || "");

  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setSubmitting(true);

      await menuService.saveMenuItem({
        meal: mealId,
        category,
      });
      navigate("/admin/menu");
    } catch (err) {
      console.log(err, "hey hey");
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
            <CategorySelect
              onChange={setCategory}
              categories={categories}
              category={category}
            />
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
