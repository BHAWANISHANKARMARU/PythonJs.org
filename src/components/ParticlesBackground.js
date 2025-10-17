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
    background:"#090e16",
    particle: "",
    link: "",
  };

  const lightThemeColors = {
    background: "#111111",
    particle: "#FFA500",
    link: "#FFA500",
  };

  const currentColors = theme === 'dark' ? darkThemeColors : lightThemeColors;

  const desktopOptions = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: currentColors.background,
      },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: currentColors.particle,
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: false,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: currentColors.link,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  };

  const mobileOptions = {
    ...desktopOptions,
    particles: {
      ...desktopOptions.particles,
      number: {
        value: 50,
      },
    },
    interactivity: {
      ...desktopOptions.interactivity,
      events: {
        onhover: {
          enable: false,
        },
        onclick: {
          enable: false,
        },
      },
    },
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