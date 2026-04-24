import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
  src={profile}
  alt="Reponse Dev"
  className="w-80 h-80 object-cover rounded-2xl border-4 border-blue-500 shadow-2xl hover:scale-105 transition duration-300"
/>
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I'm <span className="text-white font-semibold">Reponse KUKINKUNDA</span>, 
            a passionate Full Stack Developer focused on building modern web 
            applications and AI-powered solutions. I enjoy turning ideas into 
            real-world products that are scalable, clean, and user-friendly.
          </p>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Currently working on <span className="text-blue-400">AI Tour Rwanda</span>, 
            a smart platform that enhances tourism using artificial intelligence.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-center">
            <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold text-blue-400">1+</h3>
              <p className="text-sm text-gray-400">Years Learning</p>
            </div>

            <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold text-blue-400">5+</h3>
              <p className="text-sm text-gray-400">Projects</p>
            </div>

            <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold text-blue-400">100%</h3>
              <p className="text-sm text-gray-400">Dedication</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold transition"
            >
              Contact Me
            </a>

            <a
              href="#"
              className="px-6 py-3 border border-gray-700 hover:border-blue-400 rounded-xl transition"
            >
              Download CV
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;