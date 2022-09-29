import axios from "axios";

//refactored
const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

export default http;