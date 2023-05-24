import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const AllProducts = ({ data }) => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Box
      data-aos="fade-up"
      w={"400px"}
      // h={"330px"}
      // display={"flex"}
      border={"2px solid black"}
      boxShadow="outline"
      p="6"
      rounded="md"
      bg="white"
      mb="1rem"
      // flexDirection={"column"}
      // justifyContent="center"
      // alignItems={"center"}
      onClick={() => navigate(`/shop/${data.id}`)}
    >
      <Image
        data-aos="fade-up"
        src={data.img}
        height={"300px"}
        margin={"auto"}
      />

      <Box margin={"auto"} data-aos="fade-up" marginTop={"10px"}>
        <Text color={"black"} as={"b"}>
          {data.title}
        </Text>
      </Box>
      <Text data-aos="fade-up" color="red" as={"b"}>{`₹ ${data.price}`}</Text>
    </Box>
  );
};

export default AllProducts;
