import "../../App.css";
import MealTabs from "../../pages/meal-tabs";
import NavBar from "../admin-homepage.component";

function UserMenu() {
  return (
    <>
      <NavBar />
      <div className="admin-menu">
        <MealTabs />
      </div>
    </>
  );
}

export default UserMenu;
