import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin =
  (formData: any, history: any) => async (dispatch: any) => {
    try {
      // user login
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

export const signup =
  (formData: any, history: any) => async (dispatch: any) => {
    try {
      // user signup
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
