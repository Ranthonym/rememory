// import { createPost } from "./../../../server/src/controllers/posts";
import * as api from "../api";

//Action Creators
export const getPosts = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: [] });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post: any) => async (dispatch: any) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
