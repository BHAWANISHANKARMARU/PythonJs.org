import { getCourseData } from '../../../lib/courses';
import CourseDetailClient from './CourseDetailClient';

export default async function CourseDetailPage({ params }) {
  const resolvedParams = await params;
  const course = await getCourseData(resolvedParams.slug);

  return <CourseDetailClient course={course} />;
}
