import {
    GET_CART_FAILURE,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_FAILURE,
    GET_REQUEST,
    GET_SUCCESS,
    UPDATE_CART_REQUEST,
    UPDATE_CART_SUCCESS,
    UPDATE_CART_FAILURE,
    DELETE_CART_REQUEST,
    DELETE_CART_SUCCESS,
    DELETE_CART_FAILURE,
  } from "./actionType";
  
  const initCart = {
    isLoading: false,
    isError: false,
    cartData: [],
  };
  
  export const reducer = (state = initCart, action) => {
    const { type, data } = action;
    switch (type) {
      case GET_CART_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
  
      case GET_CART_SUCCESS:
        return {
          ...state,
          isLoading: false,
          cartData: data,
          isError: false,
        };
  
      case GET_CART_FAILURE:
        return {
          ...state,
          isError: false,
        };
  
      case UPDATE_CART_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
  
      case UPDATE_CART_SUCCESS:
        return {
          ...state,
          isLoading: false,
          cartData: [...data, data],
          isError: false,
        };
  
      case UPDATE_CART_FAILURE:
        return {
          ...state,
          isError: false,
        };
  
      case DELETE_CART_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
  
      case DELETE_CART_SUCCESS:
        return {
          ...state,
          isLoading: false,
          cartData: [...data, data],
          isError: false,
        };
  
      case DELETE_CART_FAILURE:
        return {
          ...state,
          isError: false,
        };
  
      default:
        return state;
    }
  };
  