import React, { useState, useEffect } from "react";
import menuService from "../../services/menu.service";
import MealCard from "../MealComponents/meal-card.component";
import { FaRegTrashAlt } from "react-icons/fa";

function Tab({ id }) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = () => {
    menuService
      .getMenuItemsByCategory(id)
      .then((res) => {
        console.log(res);
        setMenuItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeMeal = (mealId) => {
    menuService.deleteMenuItem(mealId).then((res) => {
      setMenuItems((menuItem) =>
        menuItem.filter((meal) => meal._id !== mealId)
      );
    });
  };

  return (
    <div className="cards">
      {menuItems.map((menuitem) => (
        <div className="meal-card" key={menuitem._id}>
          <MealCard
            image={menuitem?.meal?.image}
            name={menuitem?.meal?.name}
            description={menuitem?.meal?.description}
            price={menuitem?.meal?.price}
          />
          <div
            className="meal-card-delete-menu"
            onClick={(e) => removeMeal(menuitem._id, e)}
          >
            <FaRegTrashAlt />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tab;
