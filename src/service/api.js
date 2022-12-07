import axios from "axios";

const api = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com/beers",
});

export default api;
