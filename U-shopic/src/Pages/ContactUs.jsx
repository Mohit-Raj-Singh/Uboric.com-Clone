import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { updateContactMessage } from "../Redux/ContactReducer/action";
import phone from "../utils/phone.png";
import message from "../utils/message.png";
import { useNavigate } from "react-router-dom";
import { ADD_MESSAGE_SUCCESS } from "../Redux/ContactReducer/actionTypes";

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.payload,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
      };

    case "phone":
      return {
        ...state,
        phone: action.payload,
      };

    case "message":
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactUs = () => {
  // const info = useSelector((state) => state.ContactReducer);
  const toast = useToast()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setMessage] = useReducer(reducer, initialState);

  const messageHandler = () => {
    dispatch(updateContactMessage(state)).then((r) => {
      if (r === ADD_MESSAGE_SUCCESS) {
        toast({
          description: "Message sent successfully.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        navigate("/", { replace: true });
      }
    });
  };

  // useEffect(() => {
  //     dispatch(getContactMessage())
  // }, [info, dispatch]);

  // console.log(info);

  return (
    <Box maxH="100vh" paddingBottom="300px" marginBottom="100px">

      <Divider orientation="horizontal" />
      <Box maxW="1150px" maxH="100%" position="center" margin="auto">
        <Flex flexDirection="column">
          <Box width="100%">
            {/* top div */}
            <Box padding="19px 0px" width="20%" textAlign="left">
              <Breadcrumb fontWeight="light" fontSize="sm">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/contact-us">Contact Us</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>
            <Box width="100%" padding="42px 0px 20px">
              <Heading as="h3" size="lg" fontWeight="medium" textAlign="center">
                Contact Us
              </Heading>
            </Box>
            <Divider orientation="horizontal" />
          </Box>
          <Box
            width="100%"
            maxH="100%"
            textAlign="left"
            marginTop="50px"
            paddingBottom="80px"
          >
            <Flex>
              <Box flex="1.2" maxH="100%" padding="10px">
                <Flex padding="7px 0px 26px">
                  <Box>
                    <Image src={`${phone}`} alt="call us" maxW="30px" />
                  </Box>
                  <Box marginLeft="20px">
                    <Heading as="h4" size="md" fontWeight="semibold">
                      Call to Us:
                    </Heading>
                  </Box>
                </Flex>
                <Box padding="0px 0px 22px" textAlign="left">
                  <Text fontSize="md">Mon To Sat : 10:00 Am to 6:00 Pm</Text>
                </Box>
                <Box>
                  <Heading
                    as="h5"
                    size="sm"
                    fontWeight="semibold"
                    padding="0px 0px 9px"
                  >
                    Customer Service:
                  </Heading>
                </Box>
                <Box margin="16px 0px 24px" textAlign="left">
                  <Text fontSize="md" fontWeight="medium">
                    +91 97243 82162
                    <br />
                    +91 82000 99386
                  </Text>
                </Box>
                <Flex padding="7px 0px 26px">
                  <Box>
                    <Image src={`${message}`} alt="call us" maxW="30px" />
                  </Box>
                  <Box marginLeft="18px">
                    <Heading as="h4" size="md" fontWeight="semibold">
                      Write to Us:
                    </Heading>
                  </Box>
                </Flex>
                <Box margin="16px 0px 24px" textAlign="left">
                  <Text fontSize="md">
                    Fill out our form and we will contact you
                    <br /> within 24 hours.
                  </Text>
                </Box>
                <Box>
                  <Heading
                    as="h5"
                    size="sm"
                    fontWeight="semibold"
                    padding="0px 0px 9px"
                  >
                    Customer Service:
                  </Heading>
                </Box>
                <Box margin="16px 0px 24px" textAlign="left">
                  <Text fontSize="md">uboricllp@gmail.com</Text>
                </Box>
              </Box>
              <Box flex="2.8">
                <Stack spacing={8}>
                  <Box background="none" color="none">
                    <FormControl>
                      <Input
                        focusBorderColor="black"
                        errorBorderColor="red.300"
                        type="text"
                        value={state.name}
                        onChange={(e) =>
                          setMessage({ type: "name", payload: e.target.value })
                        }
                        placeholder="Your Name *"
                        size="lg"
                        _placeholder={{
                          color: "black.300",
                          fontSize: "medium",
                        }}
                        borderRadius="0px"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl>
                      <Input
                        focusBorderColor="black"
                        errorBorderColor="red.300"
                        type="email"
                        value={state.email}
                        onChange={(e) =>
                          setMessage({ type: "email", payload: e.target.value })
                        }
                        placeholder="Your Email *"
                        size="lg"
                        _placeholder={{
                          color: "black.400",
                          fontSize: "medium",
                        }}
                        borderRadius="0px"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl>
                      <Input
                        focusBorderColor="black"
                        errorBorderColor="red.300"
                        type="number"
                        value={state.phone}
                        onChange={(e) =>
                          setMessage({ type: "phone", payload: e.target.value })
                        }
                        placeholder="Your Phone *"
                        size="lg"
                        _placeholder={{
                          color: "black.400",
                          fontSize: "medium",
                        }}
                        borderRadius="0px"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl>
                      <Textarea
                        placeholder="Message *"
                        height="150px"
                        focusBorderColor="black"
                        errorBorderColor="red.300"
                        borderRadius="0px"
                        type="text"
                        value={state.message}
                        onChange={(e) =>
                          setMessage({
                            type: "message",
                            payload: e.target.value,
                          })
                        }
                      />
                    </FormControl>
                  </Box>
                </Stack>
                <Button
                  onClick={messageHandler}
                  borderRadius="0px"
                  color="white"
                  background="#302C26"
                  padding="26px"
                  marginTop="50px"
                  _hover={{color:"#302C26", background:"#ffffff", border:"1px solid black"}}
                >
                  Send Message
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ContactUs;