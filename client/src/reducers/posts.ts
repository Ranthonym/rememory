// eslint-disable-next-line import/no-anonymous-default-export
import {
  FETCH_ALL,
  FETCH_BY_SEARCH,
  UPDATE_POST,
  CREATE_POST,
  DELETE_POST,
} from "../constants/actionTypes";

export default (posts = [] as any[], action: any) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_BY_SEARCH:
      return action.payload;
    case CREATE_POST:
      return [...posts, action.payload];
    case UPDATE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_POST:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
