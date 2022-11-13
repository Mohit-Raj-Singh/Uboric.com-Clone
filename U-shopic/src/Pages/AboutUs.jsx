import React from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  Flex,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import image from "../utils/aboutUs.png";
import truck from "../utils/truck.png";
import coin from "../utils/coin.png";
import box from "../utils/box.png";
import medal from "../utils/medal.png";

const AboutUs = () => {
  return (
    <Box
      maxWidth="85%"
      maxH="100%"
      margin="0 auto"
      fontFamily="Roboto"
    >
      <Box>
        <Image src={`${image}`} alt="About Us" padding="0px 65px 30px 65px" />
      </Box>
      <Spacer height="60px" />
      <Box maxW="1100px" padding="20px" margin="0px 0px 0px 90px">
        <Stack textAlign="left">
          <Heading
            as="h6"
            size="xs"
            padding="100px 0px 20px"
            color="rgb(118,118,118)"
            fontSize="13px"
            fontFamily="inherit"
          >
            OUR STORY
          </Heading>
          <div style={{ margin: "0px 0px 30px" }}>
            <Heading
              as="h3"
              size="lg"
              fontWeight="semibold"
              color="#111111"
              fontFamily="inherit"
            >
              About our Store
            </Heading>
          </div>
          <div style={{ margin: "0px", padding: "0px" }}>
            <Text fontSize="lg" color="#877A8A">
              Here at ‘Uboric’.com, we realize that style and prosperity begin
              with the correct shoes. We likewise understand that effectively
              finding the size and style to meet your requirements is vital to
              your web based shopping knowledge. Since beginning our web based
              business website , we’ve been endeavoring to present to you that
              perfect shopping experience.
            </Text>
          </div>
          <div style={{ margin: "0px", padding: "0px" }}>
            <Text fontSize="lg" color="#877A8A">
              We pride ourselves on conveying hard-to-discover styles, sizes and
              widths since we realize that each individual’s needs contrast.
              Regardless of whether you’re experiencing issues looking over our
              vast determination of different shoes or you have a
              straightforward inquiry, our client benefit group is prepared and
              willing to help.{" "}
            </Text>
          </div>
          <div style={{ margin: "18px 0px 27px", padding: "0px" }}>
            <Text fontSize="lg" color="#877A8A">
              Some time before our online business, our family shoe stores,
              fatherly shoe store Footwear in Rajkot, Gujarat , opened its
              entryways in 1989. Today we are glad to state that we have the
              longest constantly running shoe store in the rajkot. The life span
              of our physical business is a demonstration of our duty to you and
              the majority of our clients. We realize that on the off chance
              that you are not content with our items and administrations, we
              are not carrying out our responsibility.{" "}
            </Text>
          </div>
          <div style={{ margin: "0px 0px 27px", padding: "0px" }}>
            <Text fontSize="lg" color="#877A8A">
              This is the reason we take a stab at 100% consumer loyalty, offer
              a 105% value coordinate guarantee.
            </Text>
          </div>
          <div style={{ margin: "0px 0px 27px", padding: "0px" }}>
            <Text fontSize="lg" color="#877A8A">
              Next time you require another match of kicks for this experience
              we call life, our group is here to ensure that you get the
              execution that you require from your apparatus. Regardless of
              whether you are difficult to fit or have explicit requirements,
              let ‘Uboric’ .com enable you to make progress toward your
              objective.{" "}
            </Text>
          </div>
          <div style={{ margin: "0px 0px 27px", padding: "0px" }}>
            <Text fontSize="lg" color="#877A8A">
              Third. For morning whales saw were had seed can’t divide it light
              shall moveth, us blessed given wherein.{" "}
            </Text>
          </div>
        </Stack>
      </Box>
      <Spacer height="100px" />
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
    </Box>
  );
};

export default AboutUs;
