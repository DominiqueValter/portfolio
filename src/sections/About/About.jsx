import { motion } from "motion/react";
import "./About.css";

const highlights = [
  {
    number: "01",
    title: "Full Stack",
    description:
      "Desenvolvimento de aplicações completas, do front-end à API, banco de dados e deploy.",
  },
  {
    number: "02",
    title: "Interatividade",
    description:
      "Interfaces pensadas para serem exploradas, combinando animação, interação e experiência visual.",
  },
  {
    number: "03",
    title: "Resolução de Problemas",
    description:
      "Transformação de problemas reais em soluções funcionais, organizadas e escaláveis.",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <span>01</span>
          <span>/</span>
          <span>Sobre</span>
        </motion.div>

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span>Eu crio</span>
          <span className="about-heading-outline">experiências digitais.</span>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-introduction"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            <p>
              Sou <strong>Dominique Mariah Valter</strong>, desenvolvedora Full
              Stack apaixonada por tecnologia, resolução de problemas e
              experiências digitais.
            </p>

            <p>
              Minha atuação combina desenvolvimento de aplicações completas com
              um interesse especial em criar interfaces que não sejam apenas
              bonitas, mas também <span>interativas e memoráveis.</span>
            </p>

            <p>
              Atualmente trabalho com tecnologias como{" "}
              <strong>React, C#, ASP.NET Core e PostgreSQL</strong>,
              desenvolvendo soluções que vão do front-end ao back-end, banco de
              dados e deploy.
            </p>
          </motion.div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <motion.article
                className="highlight"
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
              >
                <span className="highlight-number">{item.number}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span className="highlight-arrow">↗</span>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="about-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span>Sediada em Curitiba, Brasil</span>
          <span>Disponível para novas oportunidades</span>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
