import React, { useState } from "react";
import cartService from "../../services/cart.service";

const AddToCart = ({ mealId }) => {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setSubmitting(true);
      console.log(mealId);
      await cartService.addToCart({ mealId });
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <main>
      <button
        className="meal-card-button"
        onClick={(e) => handleSubmit(e)}
        type="submit"
        disabled={submitting}
      >
        {submitting ? "please wait..." : "Add to Cart"}
      </button>
    </main>
  );
};

export default AddToCart;
