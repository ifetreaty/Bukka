import "../../App.css";
import MealTabs from "../../pages/user-menu-tabs";
import NavBar from "../admin-homepage.component";
import UserHomePage from "../user-homepage.component";

function UserMenu() {
  return (
    <>
      <UserHomePage />
      <div className="admin-menu">
        <MealTabs />
      </div>
    </>
  );
}

export default UserMenu;