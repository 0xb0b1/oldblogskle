import {
  Flex,
  Box,
  IconButton,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";

import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
import { RiToggleFill, RiToggleLine } from "react-icons/ri";
import { useState } from "react";

import { useRouter } from "next/router";

export const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const router = useRouter();

  const [theme, setTheme] = useState("dark");

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      // px={["auto", "6", "8"]}
      px="12"
      align="center"
      justify="space-between"
    >
      <Logo />

      {isWideVersion && router.asPath === "/" && <SearchBox />}

      <Flex align="center" ml="auto">
        <Box>
          <IconButton
            aria-label="Switch theme"
            icon={
              <Icon
                onClick={() => setTheme("light")}
                as={theme === "light" ? RiToggleLine : RiToggleFill}
              />
            }
            fontSize="24"
            mr="2"
            variant="unstyled"
          ></IconButton>
        </Box>
      </Flex>
    </Flex>
  );
};
