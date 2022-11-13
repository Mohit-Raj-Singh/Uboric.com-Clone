import * as types from './actionType'
import axios from 'axios'
const handleCartRequest= ()=>{
    return {
        type:types.GET_CART_REQUEST
    }
}

const handleCartFailure= ()=>{
    return {
        type:types.GET_CART_FAILURE
    }
}

const updateCartRequest = ()=>{
    return{
        type:types.UPDATE_CART_REQUEST
    }
}
const updateCartSuccess = (data)=>{
    return{
        type:types.UPDATE_CART_SUCCESS,data
    }
}
const updateCartFailure = ()=>{
    return{
        type:types.UPDATE_CART_FAILURE
    }
}

const deleteCartRequest = ()=>{
    return{
        type:types.DELETE_CART_REQUEST
    }
}
const deleteCartSuccess = (data)=>{
    return{
        type:types.DELETE_CART_SUCCESS,data
    }
}
const deleteCartFailure = ()=>{
    return{
        type:types.DELETE_CART_FAILURE
    }
}
export const updateCartData = (id,params)=>(dispatch)=>{
    dispatch(updateCartRequest())
    return axios.put(`https://62ed747cc1ef25f3da7a4746.mockapi.io/userdata/${id}`,params
      ).then((res)=>{
        dispatch(updateCartSuccess(res.data))
    }).then((dispatch(getCartData())))
    .catch((e)=>{
        dispatch(updateCartFailure())
    })
}

export const deleteCartData = (id)=>(dispatch)=>{
    dispatch(deleteCartRequest())
    return axios.delete(`https://62ed747cc1ef25f3da7a4746.mockapi.io/userdata/${id}`)
    // .then((res)=>{ dispatch(deleteCartSuccess(res.data))
    // })
    .then(dispatch(getCartData()))
    .catch((e)=>{
        dispatch(deleteCartFailure())
    })
}

export const getCartData =  ()=>async(dispatch)=> {
        dispatch(handleCartRequest())
      await axios.get(`https://62ed747cc1ef25f3da7a4746.mockapi.io/userdata`)
      .then((res)=>{return dispatch({type: types.GET_CART_SUCCESS,data:(res.data)})})
        .catch(e=>dispatch(handleCartFailure(e)))
}

