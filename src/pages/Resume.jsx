import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Download,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const Resume = () => {
  const coreSkills = [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "REST APIs",
    "Git & GitHub",
    "AI Integration",
  ];

  const projects = [
    {
      title: "AI Tour Rwanda",
      description:
        "AI-powered tourism platform designed to make discovering Rwanda smarter, easier and more accessible.",
      status: "Featured Project",
    },
    {
      title: "Developer Portfolio",
      description:
        "Modern full-stack portfolio system focused on presenting technical work, services and professional experience.",
      status: "Web Platform",
    },
    {
      title: "Admin Dashboard",
      description:
        "Management dashboard concept for handling users, data, analytics and business operations.",
      status: "Dashboard",
    },
  ];

  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-black py-24 text-white sm:py-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-[-180px] top-1/4 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-150px] h-[420px] w-[420px] rounded-full bg-blue-500/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              Professional Profile
            </span>

            <span className="h-px w-10 bg-blue-500" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-400">
            A quick overview of my technical skills, education, projects and
            the kind of digital products I build.
          </p>

          {/* Download CV */}
          <div className="mt-8 flex justify-center">
            <a
              href="/Reponse-Dev-CV.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/20"
            >
              <Download size={18} />
              Download CV
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>

        {/* Profile Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 shadow-2xl sm:p-8"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Reponse Dev
              </p>

              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                Full Stack Developer
              </h3>

              <p className="mt-2 text-gray-500">
                AI Builder • Software Engineer • Problem Solver
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1.5 text-xs font-medium text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Available for opportunities
            </div>
          </div>

          <p className="mt-7 max-w-4xl leading-relaxed text-gray-400">
            I build modern web applications, scalable backend systems and
            AI-powered digital solutions. My focus is transforming ideas into
            practical products that solve real problems and create measurable
            value.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Experience / Focus */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <Briefcase size={21} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Professional Focus</h3>
                  <p className="text-sm text-gray-500">
                    What I build and work on
                  </p>
                </div>
              </div>

              <div className="mt-7 border-l border-white/10 pl-6">
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/10" />

                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Current Focus
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-white">
                    Full Stack & AI-Powered Systems
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    Developing complete digital products across frontend,
                    backend, databases, APIs and AI integrations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
            >
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <Sparkles size={21} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Selected Projects</h3>
                  <p className="text-sm text-gray-500">
                    Products and systems I've built
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className="group rounded-xl border border-white/10 bg-black/30 p-5 transition-all hover:border-blue-500/30 hover:bg-white/[0.03]"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-xs font-bold text-blue-400">
                        0{index + 1}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-semibold text-white transition-colors group-hover:text-blue-400">
                            {project.title}
                          </h4>

                          <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-gray-500">
                            {project.status}
                          </span>
                        </div>

                        <p className="mt-2 text-sm leading-relaxed text-gray-500">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold">Core Skills</h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Technologies I use to design and build digital products.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs font-medium text-gray-400 transition-all hover:border-blue-500/30 hover:text-blue-400"
                  >
                    <CheckCircle2 size={13} className="text-blue-500" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <GraduationCap size={21} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="text-sm text-gray-500">
                    Software Development
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm font-semibold text-white">
                  Action College
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Kigali, Rwanda
                </p>

                <div className="mt-4 inline-flex rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs font-medium text-blue-400">
                  2026
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl border border-blue-500/10 bg-gradient-to-r from-blue-500/[0.06] via-white/[0.02] to-cyan-500/[0.04] p-6 text-center sm:p-8"
        >
          <p className="text-lg font-semibold text-white">
            Let's build something meaningful.
          </p>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-gray-500">
            I'm open to freelance projects, collaborations, internships and
            opportunities where technology can solve real-world problems.
          </p>

          <a
            href="#contact"
            className="group mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-gray-200 transition-all hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
          >
            Start a Conversation
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;