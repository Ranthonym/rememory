// eslint-disable-next-line import/no-anonymous-default-export
import {
  FETCH_ALL,
  FETCH_BY_SEARCH,
  UPDATE_POST,
  CREATE_POST,
  DELETE_POST,
} from "../constants/actionTypes";

export default (state = [] as any, action: any) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentpage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };
    case CREATE_POST:
      return [...state, action.payload];
    case UPDATE_POST:
      return state.map((post: any) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_POST:
      return state.filter((post: any) => post._id !== action.payload);
    default:
      return state;
  }
};
