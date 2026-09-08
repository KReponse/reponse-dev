import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
  Server,
  Settings2,
  Sparkles,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    description:
      "Building modern, responsive and interactive user interfaces.",
    icon: Code2,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    description:
      "Developing APIs, business logic and scalable server systems.",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "API Integration",
    ],
  },
  {
    title: "Database",
    description:
      "Designing and working with structured and scalable data systems.",
    icon: Database,
    skills: [
      "MongoDB",
      "Mongoose",
      "Database Design",
      "CRUD Operations",
    ],
  },
  {
    title: "AI & Automation",
    description:
      "Integrating intelligent features into practical digital products.",
    icon: BrainCircuit,
    skills: [
      "AI Integration",
      "AI Prompting",
      "AI-powered Features",
      "Automation",
    ],
  },
  {
    title: "DevOps & Tools",
    description:
      "Using modern tools to build, manage and deploy applications.",
    icon: Settings2,
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "Environment Variables",
    ],
  },
  {
    title: "Software Development",
    description:
      "Applying engineering practices to turn ideas into real products.",
    icon: Layers,
    skills: [
      "Problem Solving",
      "System Architecture",
      "Clean Code",
      "Project Structure",
    ],
  },
];

const additionalSkills = [
  {
    name: "Web Development",
    icon: Globe,
  },
  {
    name: "Version Control",
    icon: GitBranch,
  },
  {
    name: "AI Solutions",
    icon: Sparkles,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080808] py-24 text-white sm:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-180px] top-1/4 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-150px] h-[420px] w-[420px] rounded-full bg-blue-500/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section heading */}
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
              Technical Expertise
            </span>

            <span className="h-px w-10 bg-blue-500" />
          </div>

          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-gray-400">
            Technologies and development skills I use to design, build and
            deliver modern digital products.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-blue-950/20"
              >
                {/* Icon */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/15">
                    <Icon size={23} />
                  </div>

                  <span className="text-xs font-medium text-gray-600">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                  {group.title}
                </h3>

                {/* Description */}
                <p className="mt-2 min-h-[48px] text-sm leading-relaxed text-gray-500">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-black/30 px-2.5 py-1.5 text-xs font-medium text-gray-400 transition-colors group-hover:border-white/15 group-hover:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
            {additionalSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-gray-400 transition-all hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-white"
                >
                  <Icon size={16} className="text-blue-400" />

                  {skill.name}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-4xl rounded-2xl border border-blue-500/10 bg-gradient-to-r from-blue-500/[0.06] via-white/[0.02] to-cyan-500/[0.04] p-6 text-center sm:p-8"
        >
          <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
            My goal is not just to write code — it's to{" "}
            <span className="font-semibold text-white">
              build useful systems
            </span>{" "}
            that solve real problems, create value, and can grow with the
            people and businesses that use them.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;