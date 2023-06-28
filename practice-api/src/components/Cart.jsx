import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { useToast } from "@chakra-ui/react";
import { CartContext } from "../Context";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const toast = useToast();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
    if (cart.length <= 0) {
      toast({
        title: "Cart is empty",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [cart, toast]);

  const cartContent =
    cart.length > 0 ? (
      <VStack>
        <HStack alignItems={"center"} justifyContent={"center"}>
          <Heading>My Cart:</Heading>
          <Heading>{cart.length}</Heading>
        </HStack>
        <HStack alignItems={"center"} justifyContent={"center"}>
          <Heading>Total:</Heading>
          <Heading>Rs {total}</Heading>
        </HStack>
      </VStack>
    ) : (
      <p>''</p>
    );

  return (
    <SimpleGrid columns={[1, 2, 4]}>
      <GridItem
        mt={4}
        justifyContent={"center"}
        alignItems={"center"}
        colSpan={[1, 2, 4]}
      >
        {cartContent}
      </GridItem>
      {cart.map((prod) => (
        <SingleProduct
          prod={prod}
          cart={cart}
          setCart={setCart}
          key={prod.id}
        />
      ))}
    </SimpleGrid>
  );
};

export default Cart;
