import axios from "axios";

const api = axios.create({
  baseURL: "localhost:3000/",
  timeout: 20000,

  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: "bearer " + localStorage.getItem("token"),
  },
});

export default api;
