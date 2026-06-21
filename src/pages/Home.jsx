import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import { profile, journey, currentFocus, skills } from "../data/content.js";

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="Home"
        description="Safirah Tajul Ariffin — SAP Application Specialist, IT PMO, Full-Stack Developer, and AI Engineer bridging enterprise systems and intelligent applications."
      />

      {/* HERO */}
      <section className="relative overflow-hidden section-pad min-h-[90vh] flex items-center bg-gradient-to-br from-bone via-tan/40 to-moss/20 dark:from-darkbg dark:via-darkbg dark:to-kombu/20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.3em] text-xs md:text-sm text-moss mb-6"
          >
            {profile.titles.join(" · ")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl leading-tight font-medium mb-6"
          >
            {profile.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-base md:text-lg text-cafe/80 dark:text-bone/80 max-w-2xl mx-auto mb-10"
          >
            {profile.subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/projects" className="btn-primary">
              View Projects <FiArrowRight />
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-outline">
              Download Resume <FiDownload />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me <FiMail />
            </a>
          </motion.div>
        </div>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-moss/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-cafe/10 blur-3xl" />
      </section>

      {/* ABOUT */}
      <section className="section-pad bg-tan/30 dark:bg-darkcard/40">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-12 items-start">
          <Reveal>
            <div className="w-56 h-56 md:w-full md:h-72 rounded-2xl bg-gradient-to-br from-tan to-moss/50 flex items-center justify-center text-cafe/50 text-sm">
              Profile Photo
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl mb-6">About Me</h2>
            <p className="text-cafe/80 dark:text-bone/80 leading-relaxed mb-10">{profile.summary}</p>

            <h3 className="text-xl mb-6 uppercase tracking-wide text-moss">Career Journey</h3>
            <div className="relative pl-6 border-l border-cafe/20 dark:border-bone/20 space-y-8">
              {journey.map((j, i) => (
                <Reveal key={j.role} delay={i * 0.1}>
                  <div className="relative">
                    <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-moss" />
                    <p className="font-medium">{j.role}</p>
                    <p className="text-sm text-cafe/60 dark:text-bone/60">
                      {j.org} · {j.period}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CURRENT FOCUS */}
      <section className="section-pad">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl mb-3 text-center">Current Focus</h2>
            <p className="text-center text-cafe/60 dark:text-bone/60 mb-12">{currentFocus.role}</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {currentFocus.interests.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <div className="bg-bone dark:bg-darkcard border border-cafe/10 dark:border-bone/10 rounded-xl p-6 text-center hover:border-moss hover:-translate-y-1 transition-all duration-300 shadow-sm">
                  <p className="font-medium">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section-pad bg-tan/30 dark:bg-darkcard/40">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl mb-12 text-center">Skills &amp; Expertise</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((cat, i) => (
              <Reveal key={cat.category} delay={i * 0.08}>
                <div className="bg-bone dark:bg-darkcard rounded-2xl p-7 h-full border border-cafe/10 dark:border-bone/10">
                  <h3 className="text-lg mb-4 text-moss uppercase tracking-wide">{cat.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((s) => (
                      <span key={s} className="tag-badge">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
