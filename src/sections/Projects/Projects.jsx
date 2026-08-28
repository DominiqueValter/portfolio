import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { projectsData } from "../../Data/projects";
import "./Projects.css";

function ProjectMockup({ project }) {
  const isFleet = project.id === "01";

  return (
    <div className="mockup-scene">
      {/* Elementos decorativos de fundo */}
      <div className="mockup-glow mockup-glow-one" />
      <div className="mockup-glow mockup-glow-two" />

      {/* Janela Mockup Fixa */}
      <div className="window-mockup">
        <div className="window-topbar">
          <div className="window-controls">
            <span className="window-dot dot-red" />
            <span className="window-dot dot-yellow" />
            <span className="window-dot dot-green" />
          </div>

          <span className="window-filename">{project.mockupFile}</span>
        </div>

        {/* Conteúdo interno estático */}
        <div
          className={`window-content ${
            isFleet ? "fleet-mockup" : "atakama-mockup"
          }`}
        >
          {isFleet ? (
            <>
              <div className="dashboard-header">
                <div>
                  <span className="dashboard-eyebrow">GESTÃO DE FROTAS</span>
                  <strong>Painel Geral</strong>
                </div>

                <div className="dashboard-avatar">DV</div>
              </div>

              <div className="dashboard-stats">
                <div className="dashboard-stat">
                  <span>VEÍCULOS</span>
                  <strong>24</strong>
                  <small>cadastrados</small>
                </div>

                <div className="dashboard-stat">
                  <span>ATIVOS</span>
                  <strong>18</strong>
                  <small>em operação</small>
                </div>

                <div className="dashboard-stat">
                  <span>MANUTENÇÃO</span>
                  <strong>03</strong>
                  <small>agendadas</small>
                </div>
              </div>

              <div className="dashboard-panel">
                <div className="panel-header">
                  <span>Status da frota</span>
                  <span className="panel-status">● Online</span>
                </div>

                <div className="fake-chart">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="dashboard-vehicle">
                <div className="vehicle-icon">🚗</div>

                <div>
                  <strong>Veículo disponível</strong>
                  <small>ABC-1234 · Operacional</small>
                </div>

                <span className="vehicle-status" />
              </div>
            </>
          ) : (
            <>
              <div className="atakama-content">
                <span className="atakama-label">SOLUÇÕES AMBIENTAIS</span>

                <h3>
                  Regularização
                  <br />
                  <span>ambiental.</span>
                </h3>

                <p>
                  Soluções para empresas que precisam transformar
                  responsabilidade ambiental em segurança para o negócio.
                </p>

                <div className="atakama-button">
                  CONHEÇA NOSSAS SOLUÇÕES
                  <span>↗</span>
                </div>
              </div>

              <div className="atakama-orb" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Animação 3D ativa apenas no card principal
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    damping: 20,
    stiffness: 120,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    damping: 20,
    stiffness: 120,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const isEven = index % 2 !== 0;

  return (
    <motion.div
      className={`project-showcase ${isEven ? "reversed" : ""}`}
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="project-content-col">
        <div className="project-meta-header">
          <span className="meta-number">{project.id}</span>
          <span className="meta-role">{project.role}</span>
          <span className="meta-divider">•</span>
          <span className="meta-period">{project.period}</span>
        </div>

        <h2 className="project-big-title">
          <span className="title-solid">{project.titleSolid}</span>
          <span className="title-outline">{project.titleOutline}</span>
        </h2>

        <p className="project-lead-desc">{project.description}</p>

        <div className="architecture-box">
          <span className="arch-title">{project.highlightsTitle}</span>

          <ul className="arch-list">
            {project.highlights.map((item, i) => (
              <li key={i}>
                <span className="arch-arrow">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-pills">
          {project.tags.map((tag) => (
            <span key={tag} className="project-pill">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-actions">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Ver Aplicação ↗
            </a>
          )}

          {project.docsUrl && (
            <a
              href={project.docsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Código e Documentos
            </a>
          )}
        </div>
      </div>

      <div
        className="project-visual-col"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="canvas-container"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            background: project.gradient,
          }}
        >
          <ProjectMockup project={project} />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          className="section-label"
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span>02</span>
          <span>/</span>
          <span>Projetos em Destaque</span>
        </motion.div>

        <div className="projects-list-wrapper">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
