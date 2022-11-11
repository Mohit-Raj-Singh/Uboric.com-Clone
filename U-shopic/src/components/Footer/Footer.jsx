import React from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import logo from "./assets/uboric.png";
import styles from "./footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Data from "./Data";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box className={styles.bgImage} >
      <Box padding={"2rem"}>
        <Heading color="white" size="md">
          Want style Ideas and Treats?
        </Heading>
        <Flex width="50%" margin="2rem auto 0rem">
          <Input
            borderRadius={"none"}
            type="email"
            size="lg"
            placeholder="Enter Email *"
            bgColor="#303030"
            border="none"
            mr="0.5rem"
            _placeholder={{ color: "#cdcdcd" }}
            height={"4rem"}
          />
          <Button
            bgColor="#525252"
            color={"white"}
            size="lg"
            borderRadius={"none"}
            _hover="none"
            height={"4rem"}
            width="10rem"
          >
            Subscribe
          </Button>
        </Flex>
      </Box>
      <Box border={"1px solid #303030"}>
        <Flex gap={"2rem"} padding="2rem">
          <Box width={"20%"}>
            <Image src={logo} width="17rem" />
            <Flex>
            <a target={"_blank"} href="https://www.facebook.com/Uboricllp">
              <FaFacebookF
                style={{
                  color: "white",
                  marginRight: "1rem",
                  fontSize: "1.3rem",
                  marginTop: "1rem",
                }}
              />
            </a>

            <a target={"_blank"} href="https://www.instagram.com/uboric_shoes/">
              <BsInstagram
                style={{
                  color: "white",
                  fontSize: "1.3rem",
                  marginTop: "1rem",
                }}
              />
            </a>
            </Flex>
          </Box>
          <Flex
            textAlign={"start"}
            justifyContent="space-between"
            width={"80%"}
            lineHeight="2rem"
          >
            <Box>
              <Heading mb="0.5rem" color="white" size={"sm"}>
                SUPPORT
              </Heading>
              {Data.support.map((item) => (
                <Text color="#cdcdcd" key={item.name}>
                  <Link to={item.path} className={styles.hover}>
                    {item.name}
                  </Link>
                </Text>
              ))}
            </Box>
            <Box>
              <Heading mb="0.5rem" color="white" size={"sm"}>
                SHOP
              </Heading>
              {Data.shop.map((item) => (
                <Text color="#cdcdcd" key={item.name}>
                  <Link to={item.path} className={styles.hover}>
                    {item.name}
                  </Link>
                </Text>
              ))}
            </Box>
            <Box>
              <Heading mb="0.5rem" color="white" size={"sm"}>
                COMPANY
              </Heading>
              {Data.company.map((item) => (
                <Text color="#cdcdcd" key={item.name}>
                  <Link to={item.path} className={styles.hover}>
                    {item.name}
                  </Link>
                </Text>
              ))}
            </Box>
            <Box>
              <Heading mb="0.5rem" color="white" size={"sm"}>
                CONTACT
              </Heading>
              {Data.contact.map((item) => (
                <Text color="#cdcdcd" key={item.name}>{item.name}</Text>
              ))}
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          color="#cdcdcd"
          padding={"0.7rem 3rem"}
        >
          <Text fontSize={"0.9rem"}>
            © 2019 – 2022 UBORIC. ALL RIGHTS RESERVED.
          </Text>
          <Flex>
            <a target={"_blank"} href="https://www.facebook.com/Uboricllp">
              <FaFacebookF
                style={{
                  color: "white",
                  marginRight: "1rem",
                  fontSize: "1.3rem",
                  marginTop: "1rem",
                }}
              />
            </a>

            <a target={"_blank"} href="https://www.instagram.com/uboric_shoes/">
              <BsInstagram
                style={{
                  color: "white",
                  fontSize: "1.3rem",
                  marginTop: "1rem",
                }}
              />
            </a>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
