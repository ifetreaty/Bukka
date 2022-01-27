import React from "react";
import whiteRice from "./assets/white-rice.jpg";
import jollofRice from "./assets/jollof-rice.jpg";
import friedRice from "./assets/fried-rice.jpg";
import amala from "./assets/amala.jpg";
import ebaOha from "./assets/eba-oha.jpg";
import moimoi from "./assets/moimoi.jpg";

const TotalMeals = () => {
  return (
    <div className="available-meals">
      <div><img className="available-meals-box" src={whiteRice} /></div>
      <div><img className="available-meals-box" src={jollofRice} /></div>
      <div><img className="available-meals-box" src={friedRice} /></div>
      <div><img className="available-meals-box" src={amala} /></div>
      <div><img className="available-meals-box" src={ebaOha} /></div>
      <div><img className="available-meals-box" src={moimoi} /></div>
    </div>
  );
}

export default TotalMeals;