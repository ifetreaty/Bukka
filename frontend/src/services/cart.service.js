import http from "./http";

const errorHandler = (err) => {
  throw err;
};

const user = JSON.parse(localStorage.getItem("user"));
const cartService = {
  addToCart(cartItem) {
    return http
      .post("/cart", cartItem, {
        headers: {
          "x-access-token": user.accessToken,
        },
      })
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getCartItems(pageNumber) {
    return http
      .get(`/cart?page=${pageNumber}`, {
        headers: {
          "x-access-token": user.accessToken,
        },
      })
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteCartItem(id) {
    return http
      .delete(`/cart/${id}`, {
        headers: {
          "x-access-token": user.accessToken,
        },
      })
      .then((res) => res.data)
      .catch(errorHandler);
  },
};

export default cartService;
