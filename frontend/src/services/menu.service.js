import http from "./http";

const errorHandler = (err) => {
  throw err;
};

const user = JSON.parse(localStorage.getItem("user"));

const menuService = {
  saveMenuItem(item) {
    return http
      .post("/menu/items", item, {
        headers: {
          "x-access-token": user.accessToken,
        },
      })
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getMenuItems() {
    return http.get("/menu/items", {
      headers: {
        "x-access-token": user.accessToken,
      },
    });
  },

  deleteMenuItem(id) {
    return http
      .delete(`/menu/items/${id}`, {
        headers: {
          "x-access-token": user.accessToken,
        },
      })
      .then((res) => res.data)
      .catch(errorHandler);
  },

  async getMenuItemsByCategory(id) {
    try {
      const res = await http.get(`/menu/items/category/${id}`, {
        headers: {
          "x-access-token": user.accessToken,
        },
      });
      return res.data.data;
    } catch (err) {
      errorHandler(err);
    }
  },
};

export default menuService;