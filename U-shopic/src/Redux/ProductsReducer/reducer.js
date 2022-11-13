import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionType"

const initVal= {
    isLoading: false,
    isError: false,
    products: [],

}

export const reducer =(state=initVal,action)=>{
    const {type,payload} = action
    switch(type){
        case GET_REQUEST:
            return {
                ...state,
                isLoading: true
            }

            case GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: payload,
                isError: false
            }

            case GET_FAILURE:
            return {
                ...state,
                isError: false
            }



        default:
            return state
    }
}