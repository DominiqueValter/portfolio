import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Navbar.css";

const navItems = [
  { label: "Sobre", href: "#about", id: "about" },
  { label: "Projetos", href: "#projects", id: "projects" },
  { label: "Carreira", href: "#experience", id: "experience" },
  { label: "Formação", href: "#education", id: "education" },
  { label: "Contato", href: "#contact", id: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px", // Detecta quando a seção atinge a parte central superior da tela
      },
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo" onClick={closeMenu}>
        DV<span>.</span>
      </a>

      {/* Links Desktop */}
      <nav className="navbar-links">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={activeSection === item.id ? "active" : ""}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="navbar-right">
        <div className="navbar-status">
          <span className="status-dot" />
          <span>Disponível</span>
        </div>

        <button
          className={`menu-toggle-btn ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Alternar navegação"
        >
          <span className="bar line-top" />
          <span className="bar line-bottom" />
        </button>
      </div>

      {/* Drawer Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="mobile-nav-links">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={activeSection === item.id ? "mobile-active" : ""}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                >
                  <span className="mobile-link-number">0{idx + 1}</span>
                  <span className="mobile-link-label">{item.label}</span>
                  <span className="mobile-link-arrow">↗</span>
                </motion.a>
              ))}
            </nav>

            <div className="mobile-menu-footer">
              <a
                href="/Curriculo-Dominique-Valter.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-cv-btn"
                onClick={closeMenu}
              >
                Visualizar CV (PDF) ↗
              </a>
              <span>Curitiba, PR — Brasil</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
