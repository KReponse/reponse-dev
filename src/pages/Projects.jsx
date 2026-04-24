import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import project1 from "../assets/projects/project1.png";
import project2 from"../assets/projects/project2.png";
import project3 from"../assets/projects/project3.png";


const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind CSS.",
    image: project1,
    github: "#",
    live: "#",
  },
  {
    title: "Admin Dashboard",
    description: "Modern dashboard with charts and analytics UI.",
    image: project2,
    github: "#",
    live: "#",
  },
  {
    title: "AI Tour Rwanda",
    description: "AI-powered tourism platform (Coming Soon).",
    image: project3,
    github: "#",
    live: "#",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800"
            >
              {/* Image */}
              <img
  src={project.image}
  alt={project.title}
  className="w-full h-48 object-cover rounded-t-xl hover:scale-105 transition duration-300"
/>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-4">
                  <a href={project.github} className="hover:text-blue-400">
                    <Github />
                  </a>

                  <a href={project.live} className="hover:text-green-400">
                    <ExternalLink />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;