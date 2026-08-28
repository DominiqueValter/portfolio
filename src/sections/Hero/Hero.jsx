import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

import "./Hero.css";

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const orbX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const orbY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section className="hero" id="home">
      <div className="hero-grid" />

      <motion.div
        className="hero-orb"
        style={{
          x: orbX,
          y: orbY,
        }}
      />

      <div className="hero-content">
        <motion.div
          className="hero-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="hero-line" />
          <span>DESENVOLVEDORA FULL STACK JÚNIOR</span>
        </motion.div>

        <div className="hero-name">
          <motion.h1
            className="hero-name-solid"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            DOMINIQUE
          </motion.h1>

          <motion.h1
            className="hero-name-outline"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            VALTER
          </motion.h1>
        </div>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="hero-description">
            Desenvolvimento de aplicações completas com{" "}
            <span>experiências interativas.</span>
          </p>

          <div className="hero-actions-group">
            <a href="#projects" className="hero-cta-primary">
              <span>Explore meu trabalho</span>
              <span className="hero-cta-arrow">↗</span>
            </a>

            <a
              href="/Curriculo-Dominique-Valter.pdf"
              download="Curriculo-Dominique-Valter.pdf"
              className="hero-cta-cv"
            >
              <span>Baixar CV (PDF)</span>
              <span className="cv-icon">↓</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span>Role para explorar</span>

        <motion.span
          className="hero-scroll-line"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="hero-index">
        <span>01</span>
        <span>/</span>
        <span>05</span>
      </div>
    </section>
  );
}

export default Hero;
