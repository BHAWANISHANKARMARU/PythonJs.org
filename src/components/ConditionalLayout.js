'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();

  const courseOrBlogPageRegex = /^\/(courses|blog)\/[^\/]+$/;
  const isFooterHidden = courseOrBlogPageRegex.test(pathname);

  return (
    <>
      <Navbar />
      {children}
      {!isFooterHidden && <Footer />} 
    </>
  );
}