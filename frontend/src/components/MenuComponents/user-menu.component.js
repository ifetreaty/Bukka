import "../../App.css";
import UserMenuTabs from "../../pages/user-menu-tabs";
import NavBar from "../admin-homepage.component";
import UserHomePage from "../user-homepage.component";

function UserMenu() {
  return (
    <>
      <UserHomePage />
      <div className="admin-menu">
        <UserMenuTabs />
      </div>
    </>
  );
}

export default UserMenu;