import { Flex, Input, Icon } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export const SearchBox = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex
      as="label"
      flex="1"
      py="2"
      px="8"
      ml="6"
      maxWidth={480}
      alignSelf="center"
      color="gray.100"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Search"
        _placeholder={{ color: "gray.400" }}
        ref={searchInputRef}
      />

      <Icon as={RiSearchLine} fontSize="20" alignSelf="center" />
    </Flex>
  );
};
