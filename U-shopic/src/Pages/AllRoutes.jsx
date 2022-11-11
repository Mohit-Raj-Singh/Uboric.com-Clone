import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import Shop from "./Shop"
import ProductDetails from "./ProductDetails"
import SignIn from './SignIn'
import Cart from "./Cart"
import AboutUs from './AboutUs'
import Checkout from './Checkout'
import ContactUs from './ContactUs'
import WishList from './WishList'
import SignUp from './SignUp'
import ReqAuth from "../components/Authentication/ReqAuth"


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/shop' element={<ReqAuth><Shop/></ReqAuth> } />
        <Route path='/shop/:id' element={<ReqAuth><ProductDetails/></ReqAuth> } />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/cart' element={<ReqAuth><Cart/></ReqAuth>  } />
        <Route path='/wishlist' element={<ReqAuth><WishList/></ReqAuth> } />
        <Route path='/checkout' element={<ReqAuth> <Checkout/></ReqAuth>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='*' element={<div style={{padding:"200px"}}>This page does not exist :((</div>} />
    </Routes>
  )
}

export default AllRoutes