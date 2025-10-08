import { getPostData, getAllPostIds } from '@/lib/posts';
import BlogPostClient from '@/components/BlogPostClient';

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can import server-side modules
export async function generateStaticParams() {
  const postIds = getAllPostIds();
  return postIds.map((post) => ({
    slug: post.params.slug,
  }));
}

export default async function BlogPost({ params }) {
  const postData = await getPostData(params.slug);

  return (
    <BlogPostClient postData={postData} />
  );
}
