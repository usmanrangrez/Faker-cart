import {
  Avatar,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../Context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <GridItem m={7}>
      <VStack m={5}>
        <Avatar
          width={["80%", "70%"]}
          height={("80%", "70%")}
          borderRadius="none"
          aspectRatio={1}
          src={prod.image}
          alt={prod.name}
        ></Avatar>
        <HStack width="80%" alignItems={"center"} justifyContent="space-around">
          <Text fontSize={["sm", "md"]} fontWeight={"bold"}>
            {prod.name}
          </Text>
          <Text>Rs{prod.price}</Text>
        </HStack>
        {cart.includes(prod) ? (
          <Button
            onClick={() => {
              setCart(cart.filter((x) => x.id !== prod.id));
            }}
            width="70%"
          >
            Remove From Cart
          </Button>
        ) : (
          <Button
            onClick={() => {
              setCart([...cart, prod]);
            }}
            width="70%"
          >
            Add To Cart
          </Button>
        )}
      </VStack>
    </GridItem>
  );
};

export default SingleProduct;
