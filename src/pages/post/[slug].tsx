import { Box, Text } from "@chakra-ui/react";
import Prismic from "@prismicio/client";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { RichText } from "prismic-dom";
import { Header } from "../../components/Header";
import { getPrismicClient } from "../../services/prismic";

interface PostProps {
  post: {
    slug: string;
    data: {
      title: string;
      content: string[];
      date: string;
    };
  };
}

export const Post = ({ post }: PostProps) => {
  return (
    <Box>
      <Header />

      <Box>
        <Text>Hello World</Text>
      </Box>
    </Box>
  );
};

export default Post;
