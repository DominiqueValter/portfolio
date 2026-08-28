import React from "react";
import { motion } from "motion/react";
import { experienceData } from "../../data/experience";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <span>03</span>
          <span>/</span>
          <span>Career & Impact</span>
        </motion.div>

        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span>Scalable systems.</span>
          <span className="experience-heading-outline">
            Public & Private Impact.
          </span>
        </motion.div>

        <div className="experience-list">
          {experienceData.map((exp, index) => (
            <motion.article
              key={exp.id}
              className="experience-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="exp-header">
                <div>
                  <span className="exp-period">{exp.period}</span>
                  <h3 className="exp-role">{exp.role}</h3>
                  <h4 className="exp-company">
                    {exp.company}{" "}
                    <span className="dept">({exp.department})</span>
                  </h4>
                </div>
                <span className="exp-location">{exp.location}</span>
              </div>

              <p className="exp-desc">{exp.description}</p>

              {exp.systems.length > 0 && (
                <div className="exp-systems-box">
                  <span className="systems-title">
                    Sistemas de Alto Impacto:
                  </span>
                  <div className="systems-grid">
                    {exp.systems.map((sys) => (
                      <div key={sys.name} className="system-item">
                        <strong>{sys.name}</strong>
                        <p>{sys.impact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <ul className="exp-achievements">
                {exp.achievements.map((ach, i) => (
                  <li key={i}>
                    <span className="exp-arrow">▸</span> {ach}
                  </li>
                ))}
              </ul>

              <div className="exp-stack">
                {exp.stack.map((item) => (
                  <span key={item} className="exp-pill">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
