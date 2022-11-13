import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Input,
  Checkbox,
  Text,
  Radio,
} from "@chakra-ui/react";

const Items = ({ name, type, priceFn,filterPrice,start,end }) => {

  return (
    <Flex gap="1rem">
      <input type={"radio"}
      value={type}
      name={name}
        onChange={() => {
          priceFn(type);
          filterPrice(start,end)
        }}
      />
      <Text color={"#818181"}  >{type}</Text>
    </Flex>
  );
};

export const Price = ({filterPrice}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    let catParams= searchParams.getAll("category") || ""
    let brandParams= searchParams.getAll("brand") || ""
    console.log(searchParams)
    const [priceRange,setPriceRange] = useState([]);

  

  const PriceRange = (type) => {
    setPriceRange([type])
  };

  useEffect(()=>{
    setSearchParams({
       category:catParams,
       brand:brandParams,
        range:priceRange
    })
  },[priceRange])

  return (
    <Accordion allowToggle width={"100%"}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Price
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Items
            // title={"Price"}
            name="price"
            type={"100-500"}

            priceFn={PriceRange}
            filterPrice={filterPrice}
            start="0"
            end="500"
          />
          <Items
            // title={"Price"}
            name="price"
            type={"501-1000"}
            priceFn={PriceRange}
            filterPrice={filterPrice}
            start="501"
            end="1000"
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Price;
