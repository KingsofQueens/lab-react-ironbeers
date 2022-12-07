import api from "./api";

export const allBeers = () => api.get("/").then((response) => response.data);

export const singleBeer = (id) =>
  api.get(`/${id}`).then((response) => response.data);

export const randomBeer = () =>
  api.get("/random").then((response) => response.data);

export const createBeer = (newBeer) =>
  api.post(newBeer).then((response) => response.data);
