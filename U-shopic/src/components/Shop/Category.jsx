import React, { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Checkbox,
  Text,
} from "@chakra-ui/react";

const Items = ({ type, categoryFn }) => {
  return (
    <Flex gap="1rem">
      <Checkbox
    
        onChange={() => {
          categoryFn(type);
        }}
      />
      <Text color={"#818181"}>{type}</Text>
    </Flex>
  );
};

export const Category = () => {
  const [searchParams, setSearchParams] = useSearchParams();
    const [category,setCategory] = useState([]);
    let priceParams= searchParams.getAll("range") || ""
    let brandParams= searchParams.getAll("brand") || ""
  const categoryFn = (type) => {
    
    let newCat= type;
    if(category.includes(newCat)){
      let x= category.filter(el=>el!=newCat)
      setCategory(x)
    }else{
      setCategory([...category,newCat])
    }

  };
console.log(category)
  useEffect(()=>{
    setSearchParams({
      range:priceParams,
      brand:brandParams,
      category
    })
  },[category])
    

  // console.log(category)

  return (
    <Accordion allowToggle width={"100%"}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Category
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Items
            // title={"Price"}
            name="Category"
            type={"Men"}
            categoryFn={categoryFn}
          />
          <Items
            // title={"Price"}
            name="Category"
            type={"clothings"}
            categoryFn={categoryFn}
          />

             <Items
            // title={"Price"}
            name="Category"
            type={"Aniversary"}
            categoryFn={categoryFn}
          />


<Items
            // title={"Price"}
            

            name="Category"
            type={"Bathroom Accessories"}
            categoryFn={categoryFn}
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Category;
