import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import menuService from "../../services/menu.service";
import MealCard from "../MealComponents/meal-card.component";
import SelectMeal from "../MealComponents/select-meal.component";
import DeleteButton from "../MealComponents/delete.component";

function FoodTab() {
  const [foodMenu, setFoodMenu] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const foodMenu = await menuService.getMenuItemsByCategory(id);
      setFoodMenu(foodMenu);
      console.log(foodMenu);

      if (!foodMenu) {
        window.alert(`Nothing found in ${id} category`);

        return;
      }
    }
    fetchData();

    return;
  }, []);

  const removeMeal = (id) => {
    menuService.deleteMenuItem(id).then((res) => {
      setFoodMenu(foodMenu => foodMenu.filter((meal) => meal._id !== id));
    });
  }

  return (
    <div className="cards">
      {foodMenu.map((meal) => (
        <div className="meal-card">
          {/* <MealCard key={meal._id} /> */}
        </div>
      ))}
    </div>
  )
}

export default FoodTab;

// export default class FoodTab extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       foodMenu: [],
//       errorMessage: "",
//     };
//   }

//   componentDidMount() {
//     menuService.getMenuItems().then((res) => {
//       console.log(res);
//       this.setState({
//         foodMenu: res.data,
//       });
//     });
//   }

//   removeItem(id) {
//     menuService.deleteMenuItem(id).then((res) => {
//       this.setState({
//         foodMenu: this.state.foodMenu.filter((menuitem) => menuitem._id !== id),
//       });
//     });
//   }

//   render() {
//     return (
//       <div>
//         <div className="cards">
//           {
//             (this.state.foodMenu.
//             map((menuitem) => {
//               return (
//                 <div className="meal-card">
//                   <MealCard
//                     key={menuitem._id}
//                     image={menuitem.image}
//                     name={menuitem.name}
//                     description={menuitem.description}
//                     price={menuitem.price}
//                   />
//                   <div className="meal-card-body">
//                   <SelectMeal />
//                 </div>
//                 <div
//                   className="meal-card-delete-icon"
//                   onClick={(e) => this.removeItem(menuitem._id, e)}
//                 >
//                   <DeleteButton />
//                 </div>
//                 </div>
//               );
//             }))
//           }
//         </div>
//       </div>
//     );
//   }
// }
