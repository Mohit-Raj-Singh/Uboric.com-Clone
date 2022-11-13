import React, { useState, useCallback, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Input,
  Button,
  Grid,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Toast,
  Textarea,
  Image,
  RadioGroup,
  Stack,
  Radio,
  useToast,
} from "@chakra-ui/react";
import styles from "../Styles/checkout.module.css";
import SearchBar from "../components/Checkout/SearchBar";
import countries from "../utils/contries.json";
import state from "../utils/states.json";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../Redux/CartReducer/action";
const Checkout = () => {
  const [show, setShow] = useState(false);

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [query1, setQuery1] = useState("");
  const [suggestions1, setSuggestions1] = useState([]);

  const queryHandler = useCallback((val) => {
    setQuery(val);
  }, []);

  const queryHandler1 = useCallback((val) => {
    setQuery1(val);
  }, []);

  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
    } else {
      let newCountriesSuggestions = countries
        .filter((item) => {
          return item.country.toLowerCase().indexOf(query) !== -1
            ? true
            : false;
        })
        .map((item) => item.country);
      setSuggestions(newCountriesSuggestions);
    }
  }, [query]);

  useEffect(() => {
    if (query1 === "") {
      setSuggestions1([]);
    } else {
      let newCountriesSuggestions = state
        .filter((item) => {
          return item.state.toLowerCase().indexOf(query1) !== -1 ? true : false;
        })
        .map((item) => item.state);
      setSuggestions1(newCountriesSuggestions);
    }
  }, [query1]);

  // ----------------------------- Logic for radio buttons -----------------------------

  const [value, setValue] = React.useState("Cash on delivery");

  // ----------------------------- Logic for Claculating Total -----------------------------

  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.CartReducer.cartData);
  const subTotal = cartData
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);
  const discount10 = (10 / 100) * subTotal;
  const total = subTotal - discount10;
  // console.log(discount10);
  // console.log(discount10);

  // const [discountShow,setDiscountShow] = useState(true)
  // if(value === "Cash on delivery")
  // {
  //   setDiscountShow(false)
  // }
  useEffect(() => {
    dispatch(getCartData());
  }, []);

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const getSearchData = (countryData) => {
    setCountry(countryData);
  };
  const getSearchData1 = (stateData) => {
    setState(stateData);
  };

  // ----------------------------- Billing Input tags -----------------------------

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [formData, setFormData] = useState([]);
  console.log(formData);
  const toast = useToast()
  const handleSubmit = () => {
    const billingData = {
      fname: fname,
      lname: lname,
      company: company,
      address: address,
      city: city,
      pinCode: pinCode,
      phone: phone,
      email: email,
      textArea: textArea,
      country: "India",
      state: "Maharashtra",
    };
    setFormData(billingData);
  };
  return (
    <Box>
      <Box p={"3rem"}>
        <Text textAlign={"start"}>Home » Checkout</Text>
      </Box>
      <Box>
        <Heading size={"lg"} m="1rem 2rem 6rem">
          Checkout
        </Heading>
      </Box>
      <Box
        textAlign={"start"}
        bgColor={"#f5f5f5"}
        width="45%"
        margin={"auto"}
        padding="1.2rem 2rem"
      >
        <Text>
          Have a coupon?
          <button onClick={() => setShow(!show)}>
            Click here to enter your code
          </button>
        </Text>
      </Box>
      <Box
        className={show ? styles.show : styles.hide}
        width="45%"
        margin={" 2rem auto"}
        border="1px solid lightGrey"
        padding={"2.5rem 1.5rem"}
      >
        <Text textAlign={"start"}>
          If you have a coupon code, please apply it below.
        </Text>
        <Input
          size={"lg"}
          placeholder="Coupon Code"
          borderRadius={"none"}
          margin="1.5rem 0"
        />
        <Button
          bgColor="black"
          color={"white"}
          size="sm"
          padding={"1.5rem 5rem"}
          borderRadius={"none"}
          _hover="none"
          width={"9rem"}
          mr="100%"
        >
          Apply Coupon
        </Button>
      </Box>
      <Box padding={"3rem"}>
        <Grid gridTemplateColumns="5fr 3fr" gap={"4rem"}>
          <Box>
            <Box>
              <Heading textAlign={"start"} size="md" mb={"1.7rem"}>
                Billing details
              </Heading>
              {/* <FormControl></FormControl> */}
              <Box>
                <Flex gap={"2rem"} mb="1.3rem">
                  <FormControl isRequired>
                    <FormLabel>First name</FormLabel>
                    <Input
                      borderRadius={"none"}
                      size="lg"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Last name</FormLabel>
                    <Input
                      borderRadius={"none"}
                      size="lg"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </FormControl>
                </Flex>
              </Box>
              <Box mb="1.3rem">
                <FormControl>
                  <FormLabel>Company name (optional)</FormLabel>
                  <Input
                    borderRadius={"none"}
                    size="lg"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box mb="1.3rem">
                <FormControl isRequired>
                  <FormLabel>Country / Region</FormLabel>
                  {/* <SearchBar
                    inputQueryHandler={queryHandler}
                    suggestions={suggestions}
                    getSearchData={getSearchData}
                    label="India"
                  /> */}
                  <Input 
                  size="lg"
                  borderRadius={"none"}
                  defaultValue={"India"}/>
                </FormControl>
              </Box>
              <Box mb="1.3rem">
                <FormControl isRequired>
                  <FormLabel>Street address</FormLabel>
                  <Input
                    size="lg"
                    placeholder="House number and street name"
                    borderRadius={"none"}
                    mb="1rem"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <Input
                    size="lg"
                    placeholder="Apartment, siute, unit, etc. (optional)"
                    borderRadius={"none"}
                  />
                </FormControl>
              </Box>
              <Box mb="1.3rem">
                <FormControl isRequired>
                  <FormLabel>Town / City </FormLabel>
                  <Input
                    borderRadius={"none"}
                    size="lg"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box mb="1.3rem">
                <FormControl isRequired>
                  <FormLabel>State</FormLabel>
                  {/* <SearchBar
                    inputQueryHandler={queryHandler1}
                    suggestions={suggestions1}
                    getSearchData={getSearchData1}
                    label="Maharashtra"
                  /> */}
                  <Input borderRadius={"none"}
                    size="lg" defaultValue={"Maharashtra"}/>
                </FormControl>
              </Box>
              <Box mb="1.3rem">
                <FormControl isRequired>
                  <FormLabel>PIN Code</FormLabel>
                  <Input
                    borderRadius={"none"}
                    size="lg"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                  />
                  {/* <Input borderRadius={"none"} size="lg" /> */}
                </FormControl>
              </Box>
              <Box mb="1.3rem">
                <FormControl isRequired>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    borderRadius={"none"}
                    size="lg"
                    type={"number"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box mb="1.3rem">
                <FormControl isRequired>
                  <FormLabel>Email address *</FormLabel>
                  <Input
                    borderRadius={"none"}
                    size="lg"
                    type={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
              </Box>
            </Box>
            <Box>
              <Heading textAlign={"start"} m="2rem 0" size={"md"}>
                Additional information
              </Heading>
              <FormControl>
                <FormLabel>Order notes (optional)</FormLabel>
                <Textarea
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  borderRadius={"none"}
                  height="10rem"
                  value={textArea}
                  onChange={(e) => setTextArea(e.target.value)}
                />
              </FormControl>
            </Box>
          </Box>
          <Box>
            <Box>
              <Heading textAlign={"start"} size={"md"}>
                Your orders
              </Heading>
              <Box
                border={"1px solid"}
                borderColor="gray.300"
                padding="0 2rem"
                m={"1.5rem 0"}
              >
                <Flex
                  justifyContent={"space-between"}
                  p="1rem 2rem"
                  borderBottom={"1px solid"}
                  borderColor="gray.300"
                >
                  <Text>Product</Text>
                  <Text>Subtotal</Text>
                </Flex>
                <Box>
                  {cartData.length > 0 &&
                    cartData.map((item) => (
                      <Box p="1rem 0" key={item.id} textAlign="start">
                        <Flex
                          justifyContent={"space-between"}
                          alignItems="center"
                          gap={"1rem"}
                        >
                          <Box width={"80%"}>
                            <Box mb={".5rem"}>
                              {item.title} x {item.quantity}
                            </Box>
                            <Box>Size: {item.size}</Box>
                          </Box>
                          <Box width={"20%"}>₹{item.price}</Box>
                        </Flex>
                      </Box>
                    ))}
                </Box>

                <Flex
                  borderBottom={"1px solid"}
                  borderColor="gray.300"
                  justifyContent={"space-between"}
                  mb=".5rem"
                  pb={".5rem"}
                >
                  <Box as="b" fontSize="lg">
                    Subtotal
                  </Box>
                  <Box as="b" fontSize="lg">
                    ₹{subTotal}
                  </Box>
                </Flex>
                <Flex
                  borderBottom={"1px solid"}
                  borderColor="gray.300"
                  justifyContent={"space-between"}
                  mb=".5rem"
                  pb={".5rem"}
                  // className={discountShow ? styles.showDiscount : styles.hideDiscount}
                >
                  <Box as="b" fontSize="lg">
                    DISCOUNT (10% Apply)
                  </Box>
                  <Box as="b" fontSize="lg">
                    -₹{Math.floor(discount10)}
                  </Box>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Box as="b" fontSize="lg">
                    Total
                  </Box>
                  <Box as="b" fontSize="lg">
                    ₹{total}
                  </Box>
                </Flex>
                <Flex
                  borderBottom={"1px solid"}
                  borderColor="gray.300"
                  mb="1rem"
                >
                  <Text pb={"1rem"} pt={"1.5rem"} fontSize={"sm"}>
                    Or 3 interest free payments of{" "}
                    <Text as={"b"}>₹{Math.floor(total / 3)}</Text> with
                  </Text>
                  <Image
                    src="https://www.uboric.com/wp-content/plugins/simpl-pay-in-3-for-woocommerce/public/images/brand.svg"
                    width={"70px"}
                    pl={"0.5rem"}
                  />
                </Flex>
              </Box>
              <Box
                border={"1px solid"}
                borderColor="gray.300"
                p="0.5rem"
                m={"1.5rem 0"}
              >
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction="column" textAlign={"start"}>
                    <Flex
                      alignItems={"center"}
                      border={"1px solid"}
                      borderColor="gray.300"
                      padding="0 1rem"
                      height={"4rem"}
                    >
                      <Radio value="Cash on delivery">Cash on delivery</Radio>
                    </Flex>

                    <Flex
                      alignItems={"center"}
                      border={"1px solid"}
                      borderColor="gray.300"
                      padding="0 1rem"
                      height={"4rem"}
                    >
                      <Radio value="pay with paytm">
                        pay with paytm
                        <Image
                          src="https://www.uboric.com/wp-content/plugins/woo-paytm-payment-gateway/images/logo.gif"
                          width={"5rem"}
                          display="inline"
                          ml={"1rem"}
                        />
                      </Radio>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      border={"1px solid"}
                      borderColor="gray.300"
                      padding="0 1rem"
                      height={"4rem"}
                    >
                      <Radio value="Razorpay">
                        Razorpay
                        <Image
                          src="https://cdn.razorpay.com/static/assets/logo/payment.svg"
                          width={"9rem"}
                          display="inline"
                          ml={"1rem"}
                        />
                      </Radio>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      border={"1px solid"}
                      borderColor="gray.300"
                      padding="0 1rem"
                      height={"4rem"}
                    >
                      <Radio value="Simpl">
                        Simpl
                        <Image
                          src="https://www.uboric.com/wp-content/plugins/simpl-pay-in-3-for-woocommerce/public/images/brand.svg"
                          width={"5rem"}
                          display="inline"
                          ml={"1rem"}
                        />
                      </Radio>
                    </Flex>
                  </Stack>
                </RadioGroup>
              </Box>
              <Box m={"1.5rem 0"}>
                
                <Button
                bgColor="black"
                color={"white"}
                size="lg"
                width={"100%"}
                borderRadius={"none"}
                _hover="none"
                  onClick={() =>{
                    toast({
                      size:"500",
                      position: 'top-center',
                      title: "Order Placed.",
                      description: "Thank you for shopping with us.",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    });handleSubmit()}
                  }
                >
                  Place Order
                </Button>
              </Box>
              <Box
                textAlign={"start"}
                p="1.5rem 0.5rem 1.5rem 2.5rem"
                lineHeight={"2.3rem"}
                border="2px solid black"
                borderRadius={"3px"}
                m=""
                className={styles.gradient}
              >
                <Text>
                  <span>Guaranteed delivery with 100% original products</span>
                </Text>
                <Text>
                  <span>COD available</span> on some categories
                </Text>
                <Text>
                  FOR ONLINE PAYMENT <span>EXTRA ₹10% DISCOUNT</span> ON ORDERS
                  <span> ABOVE ₹500</span>
                </Text>
                <Text>
                  <span>EMI</span> OPTION AVAILABLE
                </Text>
                <Text>
                  TO AVAIL MORE BANK OPTIONS ON <span>EMI</span> PURCHASE ABOVE
                  <span> RS. 3000</span>
                </Text>
                <Text>
                  <span>FREE DELIVERY</span> ON ORDERS
                  <span> AVOVE 500 FOR COD</span> & FOR
                  <span> ONLINE PAYMENT</span>
                </Text>
                <Text>
                  <span>FREE DELIVERY</span> AVAILABLE ON ALL ORDERS
                </Text>
                <Text>
                  BELOW ₹500 <span>CASH ON DELIVERY</span> CHARGES
                  <span> ₹49</span>
                </Text>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Checkout;