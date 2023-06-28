import React, { useContext, useState } from "react";
import { faker } from "@faker-js/faker";
import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import SingleProduct from "./SingleProduct";
import { CartContext } from "../Context";

faker.seed(100);

const Home = () => {
  const { cart } = useContext(CartContext);

  const productsArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));

  const [products] = useState(productsArray);
  console.log(cart);

  return (
    <SimpleGrid columns={[1, 1, 3]}>
      {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </SimpleGrid>
  );
};

export default Home;
