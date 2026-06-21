import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiX } from "react-icons/fi";
import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import { projects } from "../data/content.js";

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.97 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-bone dark:bg-darkcard max-w-2xl w-full rounded-2xl p-8 relative max-h-[85vh] overflow-y-auto"
        >
          <button onClick={onClose} className="absolute top-5 right-5 text-xl hover:text-moss">
            <FiX />
          </button>
          <span className="tag-badge mb-4 inline-block">{project.tag}</span>
          <h3 className="text-2xl md:text-3xl mb-4">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="tag-badge">{t}</span>
            ))}
          </div>
          <p className="mb-4 text-cafe/80 dark:text-bone/80"><strong className="text-moss">Overview: </strong>{project.overview}</p>
          <p className="mb-4 text-cafe/80 dark:text-bone/80"><strong className="text-moss">Challenges: </strong>{project.challenges}</p>
          <p className="mb-6 text-cafe/80 dark:text-bone/80"><strong className="text-moss">Solutions: </strong>{project.solutions}</p>
          <a href={project.github} target="_blank" rel="noreferrer" className="btn-primary">
            <FiGithub /> View on GitHub
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <PageTransition>
      <SEO title="Projects" description="Selected projects by Safirah Tajul Ariffin spanning AI engineering, full-stack development, and enterprise systems." />
      <section className="section-pad">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h1 className="text-4xl md:text-5xl mb-4 text-center">Projects</h1>
            <p className="text-center text-cafe/60 dark:text-bone/60 max-w-2xl mx-auto mb-16">
              A selection of work spanning AI engineering, full-stack development, and data-driven systems.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-tan/30 dark:bg-darkcard rounded-2xl overflow-hidden border border-cafe/10 dark:border-bone/10 flex flex-col h-full"
                >
                  <div className="h-44 bg-gradient-to-br from-moss/40 to-tan/60 dark:from-kombu/40 dark:to-darkcard flex items-center justify-center text-cafe/50 dark:text-bone/40 text-sm">
                    Project Image
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <span className="tag-badge self-start mb-3">{p.tag}</span>
                    <h3 className="text-xl mb-3">{p.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tech.slice(0, 4).map((t) => (
                        <span key={t} className="text-xs text-cafe/60 dark:text-bone/60">{t}{p.tech.indexOf(t) < 3 ? " ·" : ""}</span>
                      ))}
                    </div>
                    <ul className="text-sm text-cafe/70 dark:text-bone/70 space-y-1 mb-6 flex-1">
                      {p.highlights.map((h) => (
                        <li key={h}>— {h}</li>
                      ))}
                    </ul>
                    <div className="flex gap-3 mt-auto">
                      <button onClick={() => setActive(p)} className="btn-outline text-xs px-4 py-2">
                        View Details
                      </button>
                      <a href={p.github} target="_blank" rel="noreferrer" className="btn-outline text-xs px-4 py-2">
                        <FiGithub /> GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </PageTransition>
  );
}
