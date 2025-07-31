import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const accentColor = "#ff5f6d";
const accentColor2 = "#ffc371";
const accentColor3 = "#36d1c4";

// TODO: Replace with your EmailJS values
const EMAILJS_SERVICE_ID = "service_8y06slk";
const EMAILJS_TEMPLATE_ID = "template_ersidtm";
const EMAILJS_USER_ID = "hKKqT2Fx475LeesxJ";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        EMAILJS_USER_ID
      )
      .then(
        () => {
          setStatus("Your message was sent! I'll get back to you soon.");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          setStatus("Something went wrong. Please try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="max-w-xl mx-auto px-6 py-20 md:py-28"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2 }}
    >
      <motion.h2
        className="text-5xl font-black mb-10 text-transparent bg-clip-text drop-shadow-lg"
        style={{ backgroundImage: `linear-gradient(90deg, ${accentColor}, ${accentColor2}, ${accentColor3})` }}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.2 }}
      >
        Contact Me
      </motion.h2>
      <motion.form
        className="flex flex-col gap-7 bg-[#23243e]/80 rounded-3xl p-10 shadow-2xl border border-white/10 backdrop-blur-md relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4 }}
        onSubmit={handleSubmit}
      >
        <div className="absolute -top-12 -right-10 w-40 h-40 rounded-full" style={{ background: `radial-gradient(circle, ${accentColor3}33, transparent 70%)`, filter: "blur(32px)" }} />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="bg-[#23243e] border border-white/20 rounded-xl px-6 py-5 text-gray-100 focus:border-[#36d1c4] focus:ring-2 focus:ring-[#36d1c4] outline-none transition text-lg shadow"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="bg-[#23243e] border border-white/20 rounded-xl px-6 py-5 text-gray-100 focus:border-[#ff5f6d] focus:ring-2 focus:ring-[#ff5f6d] outline-none transition text-lg shadow"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="bg-[#23243e] border border-white/20 rounded-xl px-6 py-5 text-gray-100 focus:border-[#ffc371] focus:ring-2 focus:ring-[#ffc371] outline-none transition text-lg shadow"
          required
          rows={5}
        ></textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.08, boxShadow: `0 0 24px 0 ${accentColor}` }}
          whileTap={{ scale: 0.97 }}
          className="mt-2 px-10 py-4 font-extrabold rounded-full shadow-2xl text-[#23243e] bg-gradient-to-r from-[#36d1c4] via-[#ffc371] to-[#ff5f6d] hover:from-[#ff5f6d] hover:to-[#36d1c4] transition-all duration-300 border-2 border-white focus:outline-none focus:ring-4 focus:ring-[#36d1c4]/50 text-lg tracking-wide disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
        {status && (
          <div className="mt-2 text-center text-base font-semibold" style={{ color: status.includes("sent") ? accentColor3 : accentColor }}>
            {status}
          </div>
        )}
      </motion.form>
    </motion.section>
  );
}
