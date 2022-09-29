import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://locahost:8085/api/";

const errorHandler = (err) => {
  throw err;
};

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "test/all");
  }

  getUserBoard() {
    return axios.get(API_URL + "test/user", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "test/admin", { headers: authHeader() });
  }

  async getUsers() {
    try {
      const res = await axios.get(API_URL + "users");
      console.log(res);
      return res.data;
    } catch (err) {
      errorHandler(err);
    }
  }
};

export default new UserService();
