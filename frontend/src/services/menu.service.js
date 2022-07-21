import http from "./http";

const errorHandler = (err) => {
  throw err;
};

export default {
  saveMenuItem(item) {
    return http
      .post("/menu/items", item)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getMenuItems() {
    return http.get("/menu/items");
  },

  deleteMenuItem(id) {
    return http
      .delete(`/menu/items/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  async getMenuItemsByCategory(id) {
    try {
      const res = await http.get(`/menu/items/category/${id}`);
      return res.data.data;
    } catch (err) {
      errorHandler(err);
    }
  },
};
