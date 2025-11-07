import { getAllCoursesData } from '../lib/courses';
import CoursesClient from './CoursesClient';

export default function Courses() {
  const coursesData = getAllCoursesData();

  return <CoursesClient coursesData={coursesData} />;
}
