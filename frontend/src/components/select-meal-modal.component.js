import { FaRegWindowClose } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import CategorySelect from "./category-select.component";

const Modal = ({ setIsOpen }) => {
  return (
    <>
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
            <CategorySelect />
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
            <Link to="/admin/menu">
              <button className="addBtn" onClick={() => setIsOpen(false)}>
                Add to Menu
              </button>
            </Link>
              <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
