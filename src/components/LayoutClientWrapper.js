'use client';

import React, { useState, useEffect } from 'react';
import BottomNavigationBar from "./BottomNavigationBar";

export default function LayoutClientWrapper({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={isMobile ? 'mobile-padding-bottom' : ''}>
      {children}
      {isMobile && <BottomNavigationBar />}
    </div>
  );
}