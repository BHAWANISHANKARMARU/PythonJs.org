import Blog from '@/components/Blog';
import { getSortedPostsData } from '@/lib/posts';

export default async function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div style={{ paddingTop: '100px', backgroundColor: 'var(--secondary-bg)', minHeight: '100vh' }}>
      <Blog allPostsData={allPostsData} />
    </div>
  );
}