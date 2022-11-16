import React, { useState, useEffect } from "react";
import mealService from "../services/meal.service";
import TabNavItem from "../components/tab-nav-item.component";
import TabContent from "../components/tab-content.component";
import Tab from "../components/AdminTabs/tab";

const MealTabs = () => {
  const [activeTab, setActiveTab] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const currentCategories = await mealService.getCategories();
      setCategories(currentCategories);
      setActiveTab(currentCategories?.[0]?.value);
    }
    getCategories();
  }, []);

  if (!categories) {
    return null;
  }
  return (
    <div className="meal-tabs">
      <ul className="meal-tab-nav">
        {categories.map((category) => (
          <TabNavItem
            title={category.label}
            id={category.value}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            key={category.value}
          />
        ))}
      </ul>
      <div className="meal-tab-content">
        {categories.map((category) => (
          <TabContent
            id={category.value}
            activeTab={activeTab}
            key={`content-${category.value}`}
          >
            <Tab id={category.value} />
          </TabContent>
        ))}
      </div>
    </div>
  );
};

export default MealTabs;
