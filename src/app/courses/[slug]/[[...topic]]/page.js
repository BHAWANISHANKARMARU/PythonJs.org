import { getCourseData } from '../../../../lib/courses';
import CourseDetailClient from './CourseDetailClient';
import { redirect } from 'next/navigation';

export default async function CourseDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const course = await getCourseData(slug);
  const topic = resolvedParams.topic?.[0] || null;

  // Get the slug of the first section (which is the introduction)
  const firstSectionSlug = course.tableOfContents?.[0]?.links?.[0]?.slug;

  // If no topic is provided (base course URL), redirect to the introduction topic URL
  if (!topic && firstSectionSlug) {
    redirect(`/courses/${slug}/${firstSectionSlug}`);
  }

  return <CourseDetailClient course={course} topic={topic} />;
}
