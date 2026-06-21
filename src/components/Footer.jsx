import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { profile } from "../data/content.js";
import ContactForm from "./ContactForm.jsx";

export default function Footer() {
  return (
    <footer id="contact" className="bg-kombu text-bone">
      <div className="section-pad grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl mb-4">Let's work together</h2>
          <p className="text-bone/80 mb-6 max-w-md">
            Open to opportunities in SAP consulting, enterprise systems, full-stack
            development, and AI-focused roles.
          </p>
          <div className="flex flex-col gap-3 text-sm">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-moss transition-colors">
              <FiMail /> {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-moss transition-colors">
              <FiLinkedin /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-moss transition-colors">
              <FiGithub /> GitHub
            </a>
          </div>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-primary mt-8">
            Download Resume
          </a>
        </div>
        <ContactForm />
      </div>

      <div className="border-t border-bone/20 px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3 max-w-6xl mx-auto">
        <p className="text-xs text-bone/60 text-center md:text-left">
          {profile.name} — {profile.titles[0]} · © {new Date().getFullYear()} All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="p-2 rounded-full border border-bone/30 hover:border-moss hover:text-moss transition-colors"
        >
          <FiArrowUp />
        </button>
      </div>
    </footer>
  );
}
