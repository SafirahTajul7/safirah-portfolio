import { FiAward, FiExternalLink } from "react-icons/fi";
import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import { certifications } from "../data/content.js";

export default function Certifications() {
  return (
    <PageTransition>
      <SEO title="Certifications" description="Professional certifications held by Safirah Tajul Ariffin in project management, AI, UX design, and business intelligence." />
      <section className="section-pad">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h1 className="text-4xl md:text-5xl mb-16 text-center">Certifications</h1>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="bg-tan/30 dark:bg-darkcard rounded-2xl p-7 border border-cafe/10 dark:border-bone/10 h-full flex flex-col hover:-translate-y-1 hover:border-moss transition-all duration-300">
                  <div className="h-32 mb-5 rounded-xl bg-gradient-to-br from-moss/30 to-tan/50 dark:from-kombu/30 dark:to-darkcard flex items-center justify-center text-2xl text-moss">
                    <FiAward />
                  </div>
                  <h3 className="text-lg mb-2">{c.title}</h3>
                  <p className="text-sm text-cafe/60 dark:text-bone/60 mb-4">
                    {c.issuer} · {c.date}
                  </p>
                  <a href={c.url} target="_blank" rel="noreferrer" className="mt-auto text-sm text-moss inline-flex items-center gap-1 hover:underline">
                    View Credential <FiExternalLink size={14} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
