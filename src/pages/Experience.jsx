import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import { experience } from "../data/content.js";

export default function Experience() {
  return (
    <PageTransition>
      <SEO title="Experience" description="Professional experience of Safirah Tajul Ariffin across SAP applications, IT PMO, full-stack development, and programming roles." />
      <section className="section-pad">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-4xl md:text-5xl mb-16 text-center">Experience</h1>
          </Reveal>
          <div className="relative pl-8 border-l border-cafe/20 dark:border-bone/20 space-y-14">
            {experience.map((e, i) => (
              <Reveal key={e.role + e.org} delay={i * 0.1}>
                <div className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-moss border-4 border-bone dark:border-darkbg" />
                  <p className="text-sm text-moss uppercase tracking-wide mb-1">{e.period}</p>
                  <h3 className="text-2xl mb-1">{e.role}</h3>
                  <p className="text-cafe/60 dark:text-bone/60 mb-4">{e.org}</p>
                  <ul className="space-y-2 text-cafe/80 dark:text-bone/80">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <span className="text-moss">—</span> <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
