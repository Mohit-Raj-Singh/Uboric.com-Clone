import React, { useReducer, useState } from "react";
// import data from "../../db.json"
import { useDispatch } from "react-redux";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { register } from "../Redux/AuthReducer/action";
import { REGISTER_FAILURE, REGISTER_SUCCESS } from "../Redux/AuthReducer/actionTypes";
function reducer(state, action) {
  // console.log(action)
  // console.log(state)
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

    case "password":
      return {
        ...state,
        password: action.payload,
      };

    case "phone":
      return {
        ...state,
        phone: action.payload,
      };
    default:
      return state;
  }
}

const initialState = {
  name: "",
  email: "",
  password: "",
  phone:""
};

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setter] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toast = useToast()
  const signupHandler = () => {
    dispatch(register(state)).then((r) => {
      if (r === REGISTER_SUCCESS) {
          toast({
            title: 'Account created.',
            description: "Your account has been successfully created",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        navigate("/sign-in", { replace: true });
      }else if (r === REGISTER_FAILURE) {
        toast({
          description: "Please enter credentials",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    });
  };

  //  console.log(data)


  return (

    <Box height="110vh" bg="#ffffff">
      <Divider orientation="horizontal" />
      <Box
        width="1150px"
        position="center"
        margin="auto"
        padding="20px 0px 80px 0px"
        height="900px"
      >
        <Box width="20%" textAlign="left">
          <Breadcrumb fontWeight="light" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/sign-up">Sign-Up</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box width="100%" padding="20px 0px 20px">
          <Heading as="h3" size="lg" fontWeight="medium" textAlign="center">
            Sign Up
          </Heading>
        </Box>
        <Divider orientation="horizontal" />
        <Box width="50%" margin="0 auto" padding="50px 0px 0px 0px">
          <Stack spacing={4}>
            <Box background="none" color="none">
              <FormControl isRequired>
                <FormLabel fontWeight="hairline">Full name</FormLabel>
                <Input
                  focusBorderColor="#353535"
                  errorBorderColor="red.300"
                  type="text"
                  size="lg"
                  borderRadius="0px"
                  value={state.name}
                  onChange={(e) =>
                    setter({ type: "name", payload: e.target.value })
                  }
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel fontWeight="hairline">Email address</FormLabel>
                <Input
                  focusBorderColor="black"
                  errorBorderColor="red.300"
                  type="email"
                  value={state.email}
                  onChange={(e) =>
                    setter({ type: "email", payload: e.target.value })
                  }
                  size="lg"
                  borderRadius="0px"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel fontWeight="hairline">Phone</FormLabel>
                <Input
                  focusBorderColor="black"
                  errorBorderColor="red.300"
                  type="number"
                  value={state.mobile}
                  onChange={(e) =>
                    setter({ type: "phone", payload: e.target.value })
                  }
                  size="lg"
                  borderRadius="0px"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel fontWeight="hairline">Password</FormLabel>
                <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={state.password}
                  onChange={(e) =>
                    setter({ type: "password", payload: e.target.value })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              </FormControl>
            </Box>
          </Stack>
          <Box paddingTop="26px">
            Already a user?{" "}
            <Link color="teal.500" href="sign-in">
              Sign Up
            </Link>
          </Box>
          <Button
            borderRadius="0px"
            width="180px"
            color="white"
            onClick={signupHandler}
            background="#302C26"
            padding="20px"
            marginTop="20px"
            _hover={{
              color: "#302C26",
              background: "#ffffff",
              border: "1px solid black",
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;