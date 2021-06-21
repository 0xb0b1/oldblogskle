import { Box, Flex, Icon, IconButton, WrapItem } from "@chakra-ui/react";
import { ElementType } from "react";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";

interface SocialLinkProps {
  name: string;
  link: string;
  icon: ElementType;
}

const socialLinks: SocialLinkProps[] = [
  {
    name: "github",
    link: "https://github.com/0xb0b1",
    icon: RiGithubFill,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/paulo-vicente-6abab0198/",
    icon: RiLinkedinFill,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/p_vcent/",
    icon: RiInstagramFill,
  },
  {
    name: "twitter",
    link: "https://twitter.com/p_vcent",
    icon: RiTwitterFill,
  },
];

export const SocialLinks = () => {
  return (
    <Box>
      <Flex justify="center" pb="4" pt="12" mx="auto" as="footer">
        {socialLinks.map((item, index) => (
          <IconButton
            key={index}
            as="a"
            target="_blank"
            href={item.link}
            aria-label={item.name}
            icon={<Icon as={item.icon} />}
            variant="unstyled"
            fontSize="2rem"
          />
        ))}
      </Flex>
    </Box>
  );
};
