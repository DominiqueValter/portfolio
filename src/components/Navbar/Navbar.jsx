import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Navbar.css";

const navItems = [
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Carreira", href: "#experience" },
  { label: "Formação", href: "#education" },
  { label: "Contato", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Trava a rolagem da página quando o menu mobile está aberto
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
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="navbar-right">
        <div className="navbar-status">
          <span className="status-dot" />
          <span>Disponível</span>
        </div>

        {/* Botão Hamburguer Mobile */}
        <button
          className={`menu-toggle-btn ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir Menu"
        >
          <span className="bar line-top" />
          <span className="bar line-bottom" />
        </button>
      </div>

      {/* Menu Overlay Mobile */}
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
                download="Curriculo-Dominique-Valter.pdf"
                className="mobile-cv-btn"
                onClick={closeMenu}
              >
                Baixar CV (PDF) ↓
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
