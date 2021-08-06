import axios from "axios";

const API = axios.create({
  // baseURL: "https://rememory-project-api.herokuapp.com",
  baseURL: "http://localhost:5000",
});

// const url = "https://rememory-project-api.herokuapp.com/posts";
// const url = "http://localhost:5000/posts";

API.interceptors.request.use((req: any) => {
  if (localStorage.getItem("profile")) {
    // fixing null type error
    let localProfile = localStorage.getItem("profile") as string;
    req.headers.authorization = `Bearer ${JSON.parse(localProfile).token}`;
  }

  return req;
});

export const fetchPosts = (page: any) => API.get(`/posts?page=${page}`);
export const fetchPost = (id: any) => API.get(`/posts/${id}`);
export const fetchPostsBySearch = (searchQuery: any) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const createPost = (newPost: any) => API.post("/posts", newPost);
export const likePost = (id: any) => API.patch(`/posts/${id}/likePost`);
export const deletePost = (id: any) => API.delete(`/posts/${id}`);
export const updatePost = (id: any, updatedPost: any) =>
  API.patch(`/posts/${id}`, updatedPost);

export const signIn = (formData: any) => API.post("/user/signin", formData);

export const signUp = (formData: any) => API.post("/user/signup", formData);
