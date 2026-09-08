import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Contact <span className="text-blue-400">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <p className="text-gray-400">
              I'm open to freelance work, collaborations, or full-time opportunities.
              Feel free to reach out!
            </p>

            <div className="flex items-center gap-4">
              <Mail className="text-blue-400" />
              <span>reponsedev@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-blue-400" />
              <span>+250 791 468 299</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400" />
              <span>Kigali, Rwanda</span>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;