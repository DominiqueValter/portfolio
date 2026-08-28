import { motion } from "motion/react";
import "./Navbar.css";

const navItems = [
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiência", href: "#experience" },
  { label: "Contato", href: "#contact" },
];

function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#" className="navbar-logo" aria-label="Página inicial">
        DV<span>.</span>
      </a>

      <nav className="navbar-links" aria-label="Navegação principal">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="navbar-status">
        <span className="status-dot" />
        <span>Disponível</span>
      </div>
    </motion.header>
  );
}

export default Navbar;
