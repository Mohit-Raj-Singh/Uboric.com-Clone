import * as types from './actionType'
import axios from 'axios'
const handleRequest= ()=>{
    return {
        type:types.GET_REQUEST
    }
}


const handleFailure= ()=>{
    return {
        type:types.GET_FAILURE
    }
}

export const getData =  (params)=>async(dispatch)=> {
    console.log("params"+ " "+ params)
        dispatch(handleRequest())
      await axios.get(`https://my-json-server.typicode.com/amit05c/fake_api/products?`,params)
      .then((res)=>{return dispatch({type: types.GET_SUCCESS,payload:(res.data)})})
        .catch(e=>dispatch(handleFailure()))
}

