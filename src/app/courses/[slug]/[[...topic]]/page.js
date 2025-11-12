import { getCourseData } from '../../../../lib/courses';
import CourseDetailClient from './CourseDetailClient';

export default async function CourseDetailPage({ params }) {
  const resolvedParams = await params;
  const course = await getCourseData(resolvedParams.slug);
  const topic = resolvedParams.topic?.[0] || null;

  return <CourseDetailClient course={course} topic={topic} />;
}
