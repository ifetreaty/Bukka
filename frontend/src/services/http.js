import axios from "axios";

//refactored
const http = axios.create({
  baseURL: "http://localhost:8080/api",
});

export default http;