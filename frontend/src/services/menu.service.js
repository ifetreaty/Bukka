import axios from "axios";

const menuService = axios.create({
  baseURL: "http://localhost:8080/api",
});

const errorHandler = (err) => {
  throw err;
};

export default {
  menuService,

  saveMenuItem(item) {
    return menuService
      .post("/menu/items", item)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getMenuItems() {
    return menuService.get("/menu/items");
  },

  deleteMenuItem(id) {
    return menuService
      .delete(`/menu/items/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  async getMenuItemsByCategory(id) {
    try {
      const res = await menuService.get(`/menu/items/category/${id}`);
      return res.data.data;
    } catch (err) {
      errorHandler(err);
    }
  },
};
