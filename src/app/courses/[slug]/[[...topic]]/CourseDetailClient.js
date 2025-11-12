"use client";

import React, { useState, useEffect } from "react";
import {
  FaPython,
  FaJs,
  FaGlobe,
  FaChartLine,
  FaBars,
  FaTimes,
  FaBook,
  FaUser,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from 'next/navigation';
import CodeShowcase from "../../../../components/CodeShowcase";
import styles from "./courseDetail.module.css";

const CourseDetailClient = ({ course, topic }) => {
  const [activeContent, setActiveContent] = useState("");
  const [activeLink, setActiveLink] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  const allLinks =
    course && course.tableOfContents
      ? course.tableOfContents.flatMap((section) => section.links)
      : [];
  const currentIndex = allLinks.findIndex((link) => link.title === activeLink);

  useEffect(() => {
    const link = topic ? allLinks.find(l => l.slug === topic) : allLinks[0];
    if (link) {
      setActiveContent(link.content);
      setActiveLink(link.title);
    }
  }, [topic, course]);

  if (!course) {
    return (
      <div className={styles.container}>
        <p>Course not found.</p>
      </div>
    );
  }

  const handleLinkClick = (slug) => {
    router.push(`/courses/${course.slug}/${slug}`);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < allLinks.length) {
      const nextLink = allLinks[nextIndex];
      handleLinkClick(nextLink.slug);
    }
  };

  const handleBack = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      const prevLink = allLinks[prevIndex];
      handleLinkClick(prevLink.slug);
    }
  };

  const iconMap = {
    FaPython: <FaPython size={50} />,
    FaJs: <FaJs size={50} />,
    FaGlobe: <FaGlobe size={50} />,
    FaChartLine: <FaChartLine size={50} />,
  };

  return (
    <div className={styles.courseLayout}>
      <div
        className={`${styles.sidebar} ${!isSidebarOpen ? styles.sidebarCollapsed : ""}`}
      >
        <div className={styles.sidebarHeader}>
          <h3>{course.title}</h3>
          <button className={styles.toggleButton} onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={styles.sidebarContent}>
          {course.tableOfContents.map((section, index) => (
            <div key={index} className={styles.sidebarSection}>
              <h4 className={styles.sectionTitle} onClick={() => !isSidebarOpen && toggleSidebar()}>
                <FaBook className={styles.sectionIcon} />
                <span className={styles.sectionText}>{section.title}</span>
              </h4>
              <ul className={styles.linksList}>
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className={`${styles.linkItem} ${activeLink === link.title ? styles.activeLink : ""}`}
                    onClick={() => handleLinkClick(link.slug)}
                  >
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.sidebarFooter}>
          <div className={styles.userProfile} onClick={toggleSidebar}>
            <img
              src="https://www.gravatar.com/avatar/"
              alt="User Avatar"
              className={styles.userAvatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Shad CN</span>
              <span className={styles.userEmail}>shadcn@example.com</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.mainContent} ${isSidebarOpen ? styles.mainContentShifted : styles.mainContentCollapsed}`}
      >
        <div className={styles.topNavigation}>
          <button
            onClick={handleBack}
            disabled={currentIndex === 0}
            className={styles.navButton}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === allLinks.length - 1}
            className={styles.navButton}
          >
            <FaArrowRight />
          </button>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.container}>
          <div className={styles.icon}>{iconMap[course.icon]}</div>
          <h1 className={styles.title}>{course.title}</h1>
          <p className={styles.description}>{course.description}</p>
          <div className={styles.details}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <CodeShowcase className={className} {...props}>
                      {String(children).replace(/\n$/, "")}
                    </CodeShowcase>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                p: ({ node, ...props }) => {
                  if (
                    node.children.length === 1 &&
                    node.children[0].tagName === "code"
                  ) {
                    return <>{props.children}</>;
                  }
                  return <p {...props} />;
                },
              }}
            >
              {activeContent}
            </ReactMarkdown>
          </div>
          </div>
        <div className={styles.bottomNavigation}>
            <button
              onClick={handleBack}
              disabled={currentIndex === 0}
              className={styles.bottomNavButton}
            >
              <FaArrowLeft />
              <div className={styles.navButtonContent}>
                <span>Back</span>
                <span className={styles.navTitle}>
                  {currentIndex > 0 ? allLinks[currentIndex - 1].title : ""}
                </span>
              </div>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === allLinks.length - 1}
              className={`${styles.bottomNavButton} ${styles.nextButton}`}
            >
              <div className={styles.navButtonContent}>
                <span>Next</span>
                <span className={styles.navTitle}>
                  {currentIndex < allLinks.length - 1
                    ? allLinks[currentIndex + 1].title
                    : ""}
                </span>
              </div>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailClient;