import React from "react";
import { motion } from "motion/react";
import { educationData } from "../../Data/experience";
import "./Education.css";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <span>04</span>
          <span>/</span>
          <span>Educação & Formação</span>
        </motion.div>

        <div className="education-grid">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
            >
              <div className="edu-top">
                <span className="edu-period">{edu.period}</span>
                <span className="edu-status">{edu.status}</span>
              </div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>
              <p className="edu-details">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
