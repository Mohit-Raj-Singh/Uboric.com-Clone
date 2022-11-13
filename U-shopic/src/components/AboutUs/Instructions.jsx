import React from 'react'
import {
    Box,
    Image,
    Flex,
    Stack,
    Text,
  } from "@chakra-ui/react";
import truck from "../../utils/truck.png";
import coin from "../../utils/coin.png";
import box from "../../utils/box.png";
import medal from "../../utils/medal.png";

const Instructions = () => {
  return (
   <Box padding="24px 0px 70px" display="flex" justifyContent="space-evenly">
    <Stack>
      <Flex margin="0px auto" height="42px" width="270px">
        {/* image */}
        <Box flex="1">
          <Image src={`${truck}`} alt="truck" width="40px" />
        </Box>
        {/* text */}
        <Box flex="3" textAlign="left">
          <div style={{ margin: "0px 0px 2px 0px" }}>
            <Text
              as="h6"
              fontSize="13px"
              fontWeight="semibold"
              fontFamily="sans-serif"
            >
              FREE SHIPPING
            </Text>
          </div>
          <div>
            <Text
              as="h6"
              fontSize="12px"
              fontWeight="thin"
              fontFamily="sans-serif"
            >
              From all orders over $100
            </Text>
          </div>
        </Box>
      </Flex>
    </Stack>
    <Stack>
      <Flex margin="0px auto" height="42px" width="270px">
        {/* image */}
        <Box flex="1">
          <Image src={`${coin}`} alt="truck" width="40px" />
        </Box>
        {/* text */}
        <Box flex="3" textAlign="left">
          <div style={{ margin: "0px 0px 2px 0px" }}>
            <Text
              as="h6"
              fontSize="13px"
              fontWeight="semibold"
              fontFamily="sans-serif"
            >
              FREE RETURNS
            </Text>
          </div>
          <div>
            <Text
              as="h6"
              fontSize="12px"
              fontWeight="thin"
              fontFamily="sans-serif"
            >
              Return money within 30 days
            </Text>
          </div>
        </Box>
      </Flex>
    </Stack>
    <Stack>
      <Flex margin="0px auto" height="42px" width="270px">
        {/* image */}
        <Box flex="1">
          <Image src={`${box}`} alt="truck" width="40px" />
        </Box>
        {/* text */}
        <Box flex="3" textAlign="left">
          <div style={{ margin: "0px 0px 2px 0px" }}>
            <Text
              as="h6"
              fontSize="13px"
              fontWeight="semibold"
              fontFamily="sans-serif"
            >
              SECURE SHOPPING
            </Text>
          </div>
          <div>
            <Text
              as="h6"
              fontSize="12px"
              fontWeight="thin"
              fontFamily="sans-serif"
            >
              You're in safe hands
            </Text>
          </div>
        </Box>
      </Flex>
    </Stack>
    <Stack>
      <Flex margin="0px auto" height="42px" width="270px">
        {/* image */}
        <Box flex="1">
          <Image src={`${medal}`} alt="truck" width="40px" />
        </Box>
        {/* text */}
        <Box flex="3" textAlign="left">
          <div style={{ margin: "0px 0px 2px 0px" }}>
            <Text
              as="h6"
              fontSize="13px"
              fontWeight="semibold"
              fontFamily="sans-serif"
            >
              OVER 10,000 STYLES
            </Text>
          </div>
          <div>
            <Text
              as="h6"
              fontSize="12px"
              fontWeight="thin"
              fontFamily="sans-serif"
            >
              We have everything you need
            </Text>
          </div>
        </Box>
      </Flex>
    </Stack>
  </Box>
  )
}

export default Instructions