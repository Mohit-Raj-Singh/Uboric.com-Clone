import { Box, Flex, Image } from "@chakra-ui/react";
import { BiX } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartData, getCartData, updateCartData } from "../../Redux/CartReducer/action";


const CartItem = ({ title, price, size, colour = "mixed", image,quantity,id ,getTotal}) => {
  const dispatch = useDispatch()
  const cartData = useSelector((store)=>store.CartReducer.cartData)
  const [count, setCount] = useState(quantity);
  
  const increaseCount = (id)=>{
    setCount((prev) => prev + 1)
    const params = {
      quantity:count+1,
      // title:title,
      // size:size,
      // image:image,
      // id:id,
      // price:price
    }
    // console.log(params)
    // const total = cartData.map((item)=>item.price*item.quantity).reduce((a,b)=>a+b,0)
    // getTotal(total)
    dispatch(updateCartData(id,params))
    dispatch(getCartData())
  }

  const deceraseCount = (id)=>{
    setCount((prev) => prev - 1)
    const params = {
      quantity:count-1,
      // title:title,
      // size:size,
      // image:image,
      // id:id,
      // price:price
    }
    dispatch(updateCartData(id,params))
    dispatch(getCartData())
  }

  const handleDelete = (id)=>{
    dispatch(deleteCartData(id))
    dispatch(getCartData())
  }
  return (
    <Box padding={"0 2rem"}>
      <Flex padding={"2rem"} borderBottom={"1px solid grey"}>
        <Box width={"20%"} alignItems={"center"}>
          <Image src={image} alt={title} width={"100%"} height={"100%"} />
        </Box>
        <Box width={"80%"} padding={"1rem"}>
          <Flex justifyContent={"space-between"}>
            <Box fontSize={"lg"} fontWeight={"bold"} textAlign={"start"}>
              {title}
            </Box>
            <Box>₹{price}</Box>
          </Flex>
          <Box textAlign={"start"} color="gray.500" mb={"1rem"}>
            Size: {size}
          </Box>
          {/* <Box textAlign={"start"} color="gray.500" mb={"0.5rem"}>
            Colour: {colour}
          </Box> */}
          <Flex justifyContent={"space-between"}>
            <Flex alignItems={"center"} border="1px solid black">
              <button
                style={{ fontSize: "1.5rem", padding: "0 1rem" }}
                disabled={count <= 1}
                onClick={() => deceraseCount(id)}
              >
                -
              </button>
              <Box>{count}</Box>
              <button
                style={{ fontSize: "1.5rem", padding: "0 1rem" }}
                onClick={() => increaseCount(id)}
              >
                +
              </button>
            </Flex>
            <Flex alignItems={"center"}>
              <BiX style={{ marginRight: "0.5rem" }} />
              <button onClick={()=>handleDelete(id)}>Remove</button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
    // hello
  );
};

export default CartItem;
