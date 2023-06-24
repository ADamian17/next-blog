import { GetStaticProps } from "next";

import { getFeaturedPosts } from "@/helpers/posts-utils";
import FeaturedPosts from "@/components/home-sections/featured-posts";
import Hero from "@/components/home-sections/Hero";

const HomePage: React.FC<Posts.PostsGridProps> = ({ posts }) => {
  return (
    <>
      <Hero />

      <FeaturedPosts posts={posts} />
    </>
  )
}

export default HomePage;

export const getStaticProps: GetStaticProps<Posts.PostsGridProps> = async () => {
  const posts = getFeaturedPosts();

  return {
    props: {
      posts
    }
  }
}
