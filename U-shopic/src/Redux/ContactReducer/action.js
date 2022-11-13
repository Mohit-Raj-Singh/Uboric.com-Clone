import axios from "axios";
import * as types from "./actionTypes";

export const getContactMessage = () => (dispatch) => {
    dispatch({ type: types.GET_MESSAGE_REQUEST });
     axios
      .get("http://localhost:8080/Contact")
      .then((r) => {
        dispatch({ type: types.GET_MESSAGE_SUCCESS, payload: r.data });
      })
      .catch((e) => {
        dispatch({ type: types.GET_MESSAGE_ERROR, payload: e });
      });
  };

  export const updateContactMessage = (payload) => (dispatch) => {
    dispatch({ type: types.ADD_MESSAGE_REQUEST });
  
    return axios
      .post(`http://localhost:8080/Contact`, payload)
      .then((r) => {
        dispatch({ type: types.ADD_MESSAGE_SUCCESS, payload: r.data });
        return types.ADD_MESSAGE_SUCCESS
      })
      .catch((e) => dispatch({ type: types.ADD_MESSAGE_ERROR, payload: e }));
  };