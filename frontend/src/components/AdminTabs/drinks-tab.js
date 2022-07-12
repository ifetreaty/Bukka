import React, { useState, useEffect, useMemo } from "react";
import menuService from "../../../services/menu.service";
import MealCard from "../../MealComponents/meal-card.componentent";
import { FaRegTrashAlt } from "react-icons/fa";

function DrinkTab() {
  const [menuItems, setMenuItems] = useState([]);
  const [drinkCategory, setDrinkCategory] = useState();

  useEffect(() => {
    setDrinkCategory(fetchMenuItems);
  }, []);

  const fetchMenuItems = () => {
    const id = "6231da8ecece324534b292de";
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

  function getDrinkCategory() {
    if (!drinkCategory) {
      return menuItems;
    }
    return menuItems.filter((menuItem) => menuItem.category === drinkCategory);
  }

  let drinkCategoryList = useMemo(getDrinkCategory, [drinkCategory, menuItems]);

  const removeMeal = (id) => {
    menuService.deleteMenuItem(id).then((res) => {
      setMenuItems((menuItem) => menuItem.filter((meal) => meal._id !== id));
    });
  };

  return (
    <div className="cards">
      {drinkCategoryList.map((menuitem) => (
        <div className="meal-card">
          <MealCard
            key={menuitem._id}
            image={menuitem.meal.image}
            name={menuitem.meal.name}
            description={menuitem.meal.description}
            price={menuitem.meal.price}
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

export default DrinkTab;
