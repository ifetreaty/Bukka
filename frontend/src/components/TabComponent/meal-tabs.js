import React, { useState } from "react";
import FoodTab from "../AllTabs/food-tab";
import SwallowTab from "../AllTabs/swallow-tab";
import TabNavItem from "../tab-nav-item.component";
import TabContent from "../tab-content.component";

const MealTabs = () => {
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
          title="Snacks"
          id="snacksTab"
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
          title="Drinks"
          id="drinksTab"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <div className="meal-tab-content">
        <TabContent id="foodTab" activeTab={activeTab}>
          <p>Food Options sit here!</p>
        </TabContent>
        <TabContent id="swallowTab" activeTab={activeTab}>
          <p>Swallow Options sit here!</p>
        </TabContent>
        <TabContent id="snacksTab" activeTab={activeTab}>
          <p>Snack Options sit here!</p>
        </TabContent>
        <TabContent id="dessertTab" activeTab={activeTab}>
          <p>Dessert Options sit here!</p>
        </TabContent>
        <TabContent id="drinksTab" activeTab={activeTab}>
          <p>Drink Options sit here!</p>
        </TabContent>
      </div>
    </div>
  );
};
export default MealTabs;
