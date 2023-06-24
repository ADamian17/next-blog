import { GetStaticProps } from "next";

import { getAllPosts } from "@/helpers/posts-utils";
import AllPosts from "@/components/posts/all-posts";

const PostsPage: React.FC<Posts.PostsGridProps> = ({ posts }) => {
  return <AllPosts posts={posts} />
};

export default PostsPage;

export const getStaticProps: GetStaticProps<Posts.PostsGridProps> = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts
    },
  }
}