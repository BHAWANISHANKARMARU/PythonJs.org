import { getAllPostIds, getPostData } from "../../../lib/posts";

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map((post) => ({ id: post.id }));
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id);

  return (
    <article className="prose p-8">
      <h1>{postData.title}</h1>
      <p className="text-gray-500">{postData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
