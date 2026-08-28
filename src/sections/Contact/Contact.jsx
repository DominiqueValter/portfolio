import React from "react";
import { motion } from "motion/react";
import { contactData } from "../../data/experience";
import "./Contact.css";

function Contact() {
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <span>05</span>
          <span>/</span>
          <span>Contato</span>
        </motion.div>

        <div className="contact-hero">
          <motion.h2
            className="contact-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>Vamos projetar</span>
            <span className="contact-heading-outline">Algo real.</span>
          </motion.h2>

          <motion.div
            className="contact-actions"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <a
              href={`mailto:${contactData.email}`}
              className="contact-big-email"
            >
              {contactData.email} ↗
            </a>
          </motion.div>
        </div>

        <div className="contact-footer-bar">
          <div className="contact-meta-info">
            <span>{contactData.location}</span>
            <span className="dot">•</span>
            <span>{contactData.phone}</span>
          </div>

          <div className="contact-social-links">
            <a href={contactData.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={contactData.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="copyright">
          <span>
            © {new Date().getFullYear()} Dominique Mariah Valter. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
