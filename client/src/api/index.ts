import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// const url = "https://rememory-project-api.herokuapp.com/posts";
// const url = "http://localhost:5000/posts";

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost: any) => API.post("/posts", newPost);
export const likePost = (id: any) => API.patch(`/posts/${id}/likePost`);
export const deletePost = (id: any) => API.delete(`/posts/${id}`);
export const updatePost = (id: any, updatedPost: any) =>
  API.patch(`/posts/${id}`, updatedPost);
