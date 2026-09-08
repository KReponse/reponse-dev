import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="min-h-screen bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-10"
        >
          My <span className="text-blue-400">Resume</span>
        </motion.h1>

        {/* Download Button */}
        <div className="text-center mb-10">
          <a
            href="/Reponse-Dev-CV.pdf"
            download
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold transition"
          >
            Download CV
          </a>
        </div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gray-900 p-8 rounded-xl border border-gray-800 space-y-6"
        >

          {/* Name */}
          <div>
            <h2 className="text-2xl font-bold">Reponse Dev</h2>
            <p className="text-gray-400">Full Stack Developer | AI Developer</p>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400">Summary</h3>
            <p className="text-gray-400">
              Passionate Full Stack Developer building modern web applications and AI-powered solutions like AI Tour Rwanda.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400">Skills</h3>
            <ul className="text-gray-400 list-disc ml-5">
              <li>HTML, CSS, JavaScript</li>
              <li>React & Tailwind CSS</li>
              <li>Git & GitHub</li>
              <li>AI Prompting</li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400">Projects</h3>
            <ul className="text-gray-400 list-disc ml-5">
              <li>Portfolio Website</li>
              <li>Admin Dashboard</li>
              <li>AI Tour Rwanda (In Progress)</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400">Education</h3>
            <p className="text-gray-400">
              Action College, Kigali – Software Development (2026)
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Resume;