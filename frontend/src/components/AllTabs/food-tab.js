import React, { useState, useEffect, useMemo } from "react";
import menuService from "../../services/menu.service";
import MealCard from "../MealComponents/meal-card.component";
import { FaRegTrashAlt } from "react-icons/fa";

function FoodTab() {
  const [menuItems, setMenuItems] = useState([]);
  const [foodCategory, setFoodCategory] = useState();

  useEffect(() => {
    setFoodCategory(fetchMenuItems);
  }, []);

  const fetchMenuItems = () => {
    const id = "6231da8ecece324534b292da";
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

  function getFoodCategory() {
    if (!foodCategory) {
      return menuItems;
    }
    return menuItems.filter((menuItem) => menuItem.category === foodCategory);
  }

  let foodCategoryList = useMemo(getFoodCategory, [foodCategory, menuItems]);

  const removeMeal = (id) => {
    menuService.deleteMenuItem(id).then((res) => {
      setMenuItems((menuItem) => menuItem?.filter((meal) => meal._id !== id));
    });
  };

  return (
    <div className="cards">
      {foodCategoryList?.map((menuitem) => (
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

export default FoodTab;
