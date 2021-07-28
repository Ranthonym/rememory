import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin =
  (formData: any, history: any) => async (dispatch: any) => {
    try {
      // user login
      const { data } = await api.signIn(formData);

      dispatch({ type: AUTH, data });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

export const signup =
  (formData: any, history: any) => async (dispatch: any) => {
    console.log(formData);
    try {
      // user signup
      const { data } = await api.signUp(formData);
      console.log(data);

      dispatch({ type: AUTH, data });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
