'use client';
import { useCallback, useState, useEffect, useContext } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ThemeContext } from '@/context/ThemeContext';

export default function ParticleBackground({ className }) {
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const darkThemeColors = {
    background: "#090e16",
    particle: "#60AB9A",
    link: "#60AB9A",
  };

  const lightThemeColors = {
    background: "#FFFFFF",
    particle: "#4d194d", // Changed to match light theme accent
    link: "#4d194d",     // Changed to match light theme accent
  };

  const currentColors = theme === 'dark' ? darkThemeColors : lightThemeColors;

  const desktopOptions = {
    fullScreen: { enable: false },
    background: { color: currentColors.background },
    fpsLimit: 80,
    particles: {
      color: { value: currentColors.particle },
      links: {
        color: currentColors.link,
        distance: 160,
        enable: true,
        opacity: 0.4,
        width: 0.6,
      },
      move: { enable: true, speed: 0.7 },
      number: { value: 250 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 150,
          links: { opacity: 0.5 },
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  };

  const mobileOptions = {
    fullScreen: { enable: false },
    background: { color: currentColors.background },
    fpsLimit: 80, // Lower FPS limit for mobile
    particles: {
      color: { value: currentColors.particle },
      links: {
        color: currentColors.link,
        distance: 200, // Further reduced distance for a 'zoomed-in' feel
        enable: true,
        opacity: 0.1, // Reduced opacity for mobile
        width: 0.77, // Reduced width for mobile
      },
      move: { enable: true, speed: 0.5 }, // Slower speed for a 'zoomed-in' feel
      number: { value: 120 }, // Significantly reduced number for mobile
      opacity: { value: 0.3 }, // Adjusted opacity for mobile
      shape: { type: "circle" },
      size: { value: { min: 2, max: 4 } }, // Increased size for 'zoomed-in' effect
    },
    interactivity: {
      events: {
        onHover: {
          enable: false, // Disable hover interactivity for mobile
        },
        onClick: {
          enable: false, // Disable click interactivity for mobile
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      className={className}
      id="tsparticles"
      init={particlesInit}
      options={isMobile ? mobileOptions : desktopOptions}
    />
  );
}