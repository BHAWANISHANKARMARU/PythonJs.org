import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkSlug from 'remark-slug';

const coursesDirectory = path.join(process.cwd(), 'src/courses');

export function getAllCoursesData() {
  const fileNames = fs.readdirSync(coursesDirectory);
  const allCoursesData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(coursesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...matterResult.data,
    };
  });

  return allCoursesData;
}

export async function getCourseData(slug) {
  const fullPath = path.join(coursesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark().use(remarkSlug).use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  const tableOfContents = [];
  const sections = matterResult.content.split('\n## ');

  sections.forEach((section) => {
    if (section.trim() === '') return;

    const lines = section.split('\n');
    const title = lines[0].trim();
    const currentSection = { title, links: [] };
    tableOfContents.push(currentSection);

    const subsections = section.split('\n### ');
    subsections.slice(1).forEach((subsection) => {
      const subLines = subsection.split('\n');
      const subTitle = subLines[0].trim();
      const subContent = subLines.slice(1).join('\n');
      const h3Link = { title: subTitle, content: subContent, sublinks: [] };
      currentSection.links.push(h3Link);

      const h4sections = subContent.split('\n#### ');
      h4sections.slice(1).forEach((h4section) => {
        const h4Lines = h4section.split('\n');
        const h4Title = h4Lines[0].trim();
        const h4Content = h4Lines.slice(1).join('\n');
        h3Link.sublinks.push({ title: h4Title, content: h4Content });
      });
    });
  });

  return {
    slug,
    contentHtml,
    tableOfContents,
    ...matterResult.data,
  };
}
