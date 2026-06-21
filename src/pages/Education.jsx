import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import { education } from "../data/content.js";

export default function Education() {
  return (
    <PageTransition>
      <SEO title="Education" description="Academic background of Safirah Tajul Ariffin including Gamuda AI Academy, Universiti Kuala Lumpur, and KUPTM." />
      <section className="section-pad">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-4xl md:text-5xl mb-16 text-center">Education</h1>
          </Reveal>
          <div className="relative pl-8 border-l border-cafe/20 dark:border-bone/20 space-y-14">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 0.1}>
                <div className={`relative ${e.highlight ? "bg-tan/30 dark:bg-darkcard rounded-2xl p-6 -ml-6" : ""}`}>
                  <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-moss border-4 border-bone dark:border-darkbg" />
                  {e.highlight && <span className="tag-badge mb-3 inline-block">Featured Program</span>}
                  <p className="text-sm text-moss uppercase tracking-wide mb-1">{e.period}</p>
                  <h3 className="text-2xl mb-1">{e.school}</h3>
                  <p className="text-cafe/60 dark:text-bone/60 mb-4">{e.program}</p>
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
