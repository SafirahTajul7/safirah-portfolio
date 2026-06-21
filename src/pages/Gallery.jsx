import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import { galleryCategories, galleryItems } from "../data/content.js";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <PageTransition>
      <SEO title="Gallery" description="A visual gallery of Safirah Tajul Ariffin's professional moments, projects, and achievements." />
      <section className="section-pad">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h1 className="text-4xl md:text-5xl mb-10 text-center">Gallery</h1>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs uppercase tracking-wide px-4 py-2 rounded-full border transition-colors ${
                  filter === cat
                    ? "bg-kombu text-bone border-kombu"
                    : "border-cafe/20 dark:border-bone/20 hover:border-moss"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 [column-fill:_balance]">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  onClick={() => setLightbox(item)}
                  className="relative h-56 rounded-xl bg-gradient-to-br from-tan/60 to-moss/30 dark:from-darkcard dark:to-kombu/30 overflow-hidden group"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-cafe/50 dark:text-bone/40 text-sm group-hover:scale-105 transition-transform duration-500">
                    {item.title}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-bone text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.category}
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-bone dark:bg-darkcard rounded-2xl p-6 max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-xl">
                <FiX />
              </button>
              <div className="h-80 rounded-xl bg-gradient-to-br from-tan/60 to-moss/30 flex items-center justify-center text-cafe/50 mb-4">
                {lightbox.title}
              </div>
              <p className="text-sm text-cafe/60 dark:text-bone/60">{lightbox.category}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
