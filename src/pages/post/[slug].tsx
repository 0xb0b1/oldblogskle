import { Box, Text } from "@chakra-ui/react";
import Prismic from "@prismicio/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { RichText } from "prismic-dom";
import { Header } from "../../components/Header";
import { getPrismicClient } from "../../services/prismic";

type Post = {
  slug: string;
  first_publication_date: string | null;
  last_publication_date: string | null;
  data: {
    title: string;
    content: string[];
    date: string;
  };
};

interface PostProps {
  post: Post;
}

export const Post = ({ post }: PostProps) => {
  return (
    <Box>
      <Header />

      <Box>
        <Text>{}</Text>
      </Box>
    </Box>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query([
    Prismic.Predicates.at("document.type", "posts"),
  ]);

  const paths = posts.results.map((post) => {
    return {
      params: {
        slug: post.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient();
  const { slug } = params;
  const response = await prismic.getByUID("post", String(slug), {});

  console.log(response);

  const post = {
    uid: response.uid,
    first_publication_date: response.first_publication_date,
    last_publication_date: response.last_publication_date,
    data: {
      title: response.data.title,
      subtitle: response.data.subtitle,
      content: response.data.content,
    },
  };

  // console.log(post.data.title, post.data.subtitle, post.data.content);

  return {
    props: {
      post,
    },
    revalidate: 1800,
  };
};
