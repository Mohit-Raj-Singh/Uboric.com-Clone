import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import {
  Box,
  Flex,
  Input,
  Button,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/Cart/CartItem";
import { useSelector,useDispatch } from "react-redux";
import {getCartData} from "../Redux/CartReducer/action"


  
const Cart = () => {
  
  const {cartData} = useSelector((store)=>store.CartReducer)
  const dispatch = useDispatch()
  const total = cartData.map((item)=>item.price*item.quantity).reduce((a,b)=>a+b,0)
  console.log(cartData)

  useEffect(()=>{ 
    dispatch(getCartData())
  },[cartData.length,dispatch])

  const navigate = useNavigate()
  const [coupon,setCoupon] = useState("")

  const handleCoupon = ()=>{
    if(!coupon)
    {
      alert("Please Enter Coupon Code first")
    }
    else if(coupon !== "masai30")
    {
      alert("Coupon is not valid")
    }
    else if(coupon === "masai30")
    {
      alert("congratulations 30% discount applied on your orders")
    }
  }
  
  const handleBack = ()=>{
    navigate("/shop")
  }

  const handleCheckout = ()=>{
    navigate("/checkout")
  } 
  
  return (
    <Box>
      <Heading>Cart</Heading>    
      <Box>
        <Box display={"flex"}  gridTemplateColumns={"3fr 2fr"} gap={"3rem"} mt="2rem" position="relative">
          <Box width={"60%"}>
            <Box>
              {cartData.length > 0 && cartData.map((item)=>(
                <CartItem key={item.id} {...item}/>
              ))}              
            </Box>
            <Box padding={"2rem"}>
              <Heading size={"sm"} textAlign="start" mb={"1rem"}>
                Coupon code:
              </Heading>
              <Flex gap="1rem" width={"50%"}>
                <Input
                  size="lg"
                  placeholder="Enter coupon code"
                  borderRadius={"none"}
                  borderColor="black"
                  value={coupon}
                  onChange={(e)=>setCoupon(e.target.value)}
                />
                <Button
                  bgColor="black"
                  color={"white"}
                  size="lg"
                  borderRadius={"none"}
                  _hover="none"
                  onClick={handleCoupon}
                >
                  Apply
                </Button>
              </Flex>
              <Button
                display={"flex"}
                alignContent="start"
                bgColor="black"
                color={"white"}
                size="lg"
                borderRadius={"none"}
                _hover="none"
              >
                Share cart
              </Button>
            </Box>
          </Box>
            <Box width={"35%"} position={"fixed"} top={"11.1rem"} right={"2rem"} zIndex="1">
            <Box padding="2rem" bgColor={"#f5f5f5"}>
              <Flex
                justifyContent={"space-between"}
                borderBottom="1px solid grey"
                pb={"1rem"}
                >
                <Text>Subtotal</Text>
                <Text>₹{total}</Text>
              </Flex>
              <Flex
                justifyContent={"space-between"}
                borderBottom="1px solid grey"
                pb={"1.5rem"}
                pt={"1.5rem"}
                >
                <Heading size={"md"}>Total</Heading>
                <Heading size={"md"}>₹{total}</Heading>
              </Flex>
              <Flex>
                <Text pb={"1rem"} pt={"1.5rem"} fontSize={"sm"}>
                  Or 3 interest free payments of <Text as={"b"}>₹1,948.34</Text>{" "}
                  with
                </Text>
                <Image
                  src="https://www.uboric.com/wp-content/plugins/simpl-pay-in-3-for-woocommerce/public/images/brand.svg"
                  width={"70px"}
                  pl={"0.5rem"}
                  />
              </Flex>
            </Box>
            <Button
              bgColor="black"
              color={"white"}
              size="lg"
              width={"100%"}
              borderRadius={"none"}
              _hover="none"
              mt={"1.5rem"}
              onClick={handleCheckout}
              >
              Proceed to checkout
            </Button>
            <Flex alignItems={"center"} mt={"0.5rem"}>
              <BiArrowBack />
              <Button variant="ghost" _hover="none" display={"flex"} onClick={handleBack}>
                Continue Shopping
              </Button>
            </Flex>
          {/* </Box> */}
            </Box>
        </Box>
      </Box>      
    </Box>
  );
};

export default Cart;
