import { Box, HStack, Heading, Stack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import { CartContext } from "../Context";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);

  return (
    <Stack>
      <Heading textAlign={"center"}>Faker Cart</Heading>
      <HStack
        color={"white"}
        p={4}
        bgColor={"blackAlpha.700"}
        justifyContent={"space-around"}
        textDecoration={"none"}
      >
        {location.pathname == "/cart" ? (
          <Link className="link" to="/cart" onClick={() => navigate(-1)}>
            Go Back
          </Link>
        ) : (
          ""
        )}
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/cart">
          Cart {`(${cart.length})`}
        </Link>
      </HStack>
    </Stack>
  );
};

export default Header;
