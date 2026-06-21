import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'sending'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="bg-transparent border border-bone/30 rounded-lg px-4 py-3 text-sm placeholder:text-bone/50 focus:border-moss outline-none"
        />
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="bg-transparent border border-bone/30 rounded-lg px-4 py-3 text-sm placeholder:text-bone/50 focus:border-moss outline-none"
        />
      </div>
      <input
        required
        name="subject"
        value={form.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="bg-transparent border border-bone/30 rounded-lg px-4 py-3 text-sm placeholder:text-bone/50 focus:border-moss outline-none"
      />
      <textarea
        required
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        rows={4}
        className="bg-transparent border border-bone/30 rounded-lg px-4 py-3 text-sm placeholder:text-bone/50 focus:border-moss outline-none resize-none"
      />
      <button type="submit" disabled={status === "sending"} className="btn-primary self-start">
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "success" && <p className="text-moss text-sm">Message sent — thank you! I'll be in touch soon.</p>}
      {status === "error" && <p className="text-red-300 text-sm">Something went wrong. Please try again or email me directly.</p>}
    </form>
  );
}