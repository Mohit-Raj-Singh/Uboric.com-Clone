import * as types from "./actionTypes";
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type){
    case types.GET_MESSAGE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    }
    case types.GET_MESSAGE_SUCCESS: {
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
      }
    }
    case types.GET_MESSAGE_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    }
    case types.ADD_MESSAGE_REQUEST:
      return { 
        ...state,
        isLoading: true,
        isError: false,
     };
    case types.ADD_MESSAGE_SUCCESS:
      return { 
        ...state, 
        data: [...state.data, payload] ,
        isLoading: false,
        isError: false,
    };
    case types.ADD_MESSAGE_ERROR: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        }
      }
    default: 
    return state;
  }
};

export {reducer}
