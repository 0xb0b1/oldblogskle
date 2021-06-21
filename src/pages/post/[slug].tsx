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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient();

  const { slug } = params;

  const response = await prismic.getByUID("post", String(slug), {});

  const post = {
    slud: response.uid,
    title: response.data.title,
    content: response.data.content,
    updatedAt: new Date(response.data.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  console.log(response.data.content);

  return {
    props: { post },
  };
};
