import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Grid,
  useBreakpointValue,
  Icon,
  IconButton,
  Button,
  Link,
} from "@chakra-ui/react";

import { GetStaticProps } from "next";

import Prismic from "@prismicio/client";
import { getPrismicClient } from "../services/prismic";
import { RichText } from "prismic-dom";

import { Header } from "../components/Header";
import { SocialLinks } from "../components/SocialLinks";
import { Pagination } from "../components/Pagination";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Home({ posts }: PostsProps) {
  const isMediumVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box>
      <Header />

      <Box>
        <Grid
          gridTemplateColumns={["1fr", "1fr", "repeat(2, 2fr)"]}
          justifyItems="center"
          gap="6"
          my="4"
          // p="2"
          px="12"
          mx="auto"
          w="100%"
          maxWidth={[768, 720, 1480]}
        >
          {posts.map((post, index) => (
            <Flex
              flexDir="column"
              justify="space-between"
              align="center"
              mt="10"
              w="100%"
              h="100%"
              p="4"
              maxWidth={[320, 420, 520]}
              maxHeight={[320, 420, 520]}
              key={index}
            >
              <Heading fontSize={["1.2rem", "1.5rem"]} color="pink.500">
                {post.title}
              </Heading>

              <Text
                mx="2"
                mt="2"
                color="gray.500"
                fontSize={["0.87rem", "1rem"]}
              >
                {post.updatedAt}
              </Text>

              <Text mt="4" fontSize={["0.75rem", "1rem"]} color="gray.200">
                {post.excerpt}
              </Text>

              <Link as="a" href={`post/${post.slug}`}>
                <Button mt="4" colorScheme="pink" variant="ghost">
                  Ver post completo
                </Button>
              </Link>
            </Flex>
          ))}
        </Grid>
      </Box>

      <Pagination onPageChange={() => {}} />

      <SocialLinks />
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "post")],
    {
      fetch: ["post.title", "post.subtitle", "post.content"],
      pageSize: 10,
    }
  );

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: RichText.asText(post.data.subtitle),
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: { posts },
  };
};
