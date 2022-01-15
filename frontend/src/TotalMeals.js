import React from "react";
// import mealList from "./mealList.json";
import whiteRice from "./assets/white-rice.jpg";

const TotalMeals = () => {
  return (
    <div className="available-meals">
      {/* {(mealList).map(avmeal => <div><img src="{`${avmeal.image}.jpg`} width="100%"/></div>)} */}
      <img src={whiteRice} />
    </div>
  );
}

export default TotalMeals;