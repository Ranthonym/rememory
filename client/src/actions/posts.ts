import {
  FETCH_ALL,
  UPDATE_POST,
  CREATE_POST,
  DELETE_POST,
} from "../constants/actionTypes";
import * as api from "../api";

//Action Creators
export const getPosts = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsBySearch = (searchQuery: any) => async (dispatch: any) => {
  try {
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    console.log(data);

    // dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post: any) => async (dispatch: any) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id: any, post: any) => async (dispatch: any) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id: any) => async (dispatch: any) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id: any) => async (dispatch: any) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
