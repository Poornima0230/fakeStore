import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

// get method
export const getPost = () => {
  return api.get("/products");
};

//  Get single product by ID
export const getProductById = (id) => {
  return api.get(`/product/${id}`);
};
