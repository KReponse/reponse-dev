import { ArrowUpRight, Code2, ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-blue-950/20">
      {/* Project Image */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-blue-600/10 via-[#0a0a0a] to-cyan-500/5">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
              <Code2 className="h-10 w-10 text-blue-400/70" />
            </div>
          </div>
        )}

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

        {/* Project Number */}
        <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/60 text-xs font-semibold text-gray-300 backdrop-blur-md">
          {project.number || "01"}
        </div>

        {/* Live Badge */}
        {project.live && (
          <div className="absolute right-4 top-4 rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-green-400 backdrop-blur-md">
            Live
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-400">
            {project.title}
          </h3>

          <ArrowUpRight
            size={19}
            className="mt-1 shrink-0 text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
          />
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-1.5 text-[11px] font-medium text-gray-400 transition-colors hover:border-blue-500/30 hover:text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-gray-300 transition-all hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              <Github size={15} />
              Code
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/live inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20"
            >
              <ExternalLink size={15} />
              Live Demo
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;