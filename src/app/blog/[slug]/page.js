import { getPostData, getAllPostIds } from '@/lib/posts';
import BlogPostClient from '@/components/BlogPostClient';

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can import server-side modules
export async function generateStaticParams() {
  const postIds = getAllPostIds();
  return postIds.map((post) => ({
    slug: String(post.params.slug), // Explicitly cast to string
  }));
}

export default async function BlogPost({ params }) {
  const slug = String(params.slug); // Explicitly cast to string
  const postData = await getPostData(slug);

  return (
    <BlogPostClient postData={postData} />
  );
}