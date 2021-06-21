import { Link, Text, Tooltip } from "@chakra-ui/react";
import React from "react";

export const Logo = () => {
  return (
    <Tooltip
      hasArrow
      label="Paulo Vicente"
      bg="gray.800"
      color="gray.50"
      fontSize={["087rem", "1.2rem"]}
    >
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="900"
        letterSpacing="tight"
        w="64"
        variant="unstyled"
        _hover={{ cursor: "pointer" }}
      >
        Vicente
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>
    </Tooltip>
  );
};
