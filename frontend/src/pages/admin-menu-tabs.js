import React, { useState } from "react";
import FoodTab from "../components/AdminTabs/food-tab";
import SwallowTab from "../components/AdminTabs/swallow-tab";
import SnackTab from "../components/AdminTabs/snack-tab";
import DessertTab from "../components/AdminTabs/dessert-tab";
import DrinkTab from "../components/AdminTabs/drinks-tab";
import TabNavItem from "../components/tab-nav-item.component";
import TabContent from "../components/tab-content.component";

const AdminMenuTabs = () => {
  const [activeTab, setActiveTab] = useState("foodTab");
  return (
    <div className="meal-tabs">
      <ul className="meal-tab-nav">
        <TabNavItem
          title="Food"
          id="foodTab"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Swallow"
          id="swallowTab"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Snack"
          id="snackTab"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Dessert"
          id="dessertTab"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Drink"
          id="drinkTab"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <div className="meal-tab-content">
        <TabContent id="foodTab" activeTab={activeTab}>
          <FoodTab />
        </TabContent>
        <TabContent id="swallowTab" activeTab={activeTab}>
          <SwallowTab />
        </TabContent>
        <TabContent id="snackTab" activeTab={activeTab}>
          <SnackTab />
        </TabContent>
        <TabContent id="dessertTab" activeTab={activeTab}>
          <DessertTab />
        </TabContent>
        <TabContent id="drinkTab" activeTab={activeTab}>
          <DrinkTab />
        </TabContent>
      </div>
    </div>
  );
};
export default AdminMenuTabs;
