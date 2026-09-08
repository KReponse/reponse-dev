import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
} from "lucide-react";

import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio built to showcase projects, technical skills, experience, and professional services.",
    image: project1,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "Admin Dashboard",
    description:
      "A modern dashboard interface designed for managing data, analytics, users, and business operations.",
    image: project2,
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Tour Rwanda",
    description:
      "An AI-powered tourism platform designed to make discovering Rwanda smarter, easier, and more accessible.",
    image: project3,
    technologies: ["React", "Node.js", "MongoDB", "Express", "AI"],
    github: "#",
    live: "https://www.aitourrwanda.com/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black py-24 text-white sm:py-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-150px] h-[420px] w-[420px] rounded-full bg-blue-500/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              Selected Work
            </span>

            <span className="h-px w-10 bg-blue-500" />
          </div>

          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-gray-400">
            A selection of digital products and systems I've built using
            modern technologies, clean architecture, and practical
            problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl transition-shadow duration-300 hover:border-blue-500/30 hover:shadow-blue-950/30"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-70" />

                {/* Project Number */}
                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/60 text-xs font-bold text-gray-300 backdrop-blur-md">
                  0{index + 1}
                </div>

                {/* Live Badge */}
                {project.live !== "#" && (
                  <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-green-400/20 bg-black/70 px-3 py-1.5 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

                    <span className="text-[10px] font-medium uppercase tracking-wider text-green-400">
                      Live
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-400">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                  />
                </div>

                <p className="min-h-[72px] text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-gray-400 transition-colors group-hover:border-blue-500/20 group-hover:text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  {project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-gray-300 transition-all hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  ) : (
                    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-white/5 px-4 py-2 text-sm font-medium text-gray-600">
                      <Github size={16} />
                      Code
                    </span>
                  )}

                  {project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-white/5 px-4 py-2 text-sm font-medium text-gray-600">
                      <ExternalLink size={16} />
                      Demo
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <a
            href="https://github.com/KReponse"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-gray-300 transition-all hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-white"
          >
            Explore More on GitHub

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;