import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                <img
                  src={logo}
                  alt="Reponse Dev"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div>
                <h2 className="text-lg font-bold tracking-tight">
                  Reponse <span className="text-blue-400">Dev</span>
                </h2>
                <p className="text-[9px] uppercase tracking-[0.22em] text-gray-600">
                  Code • Build • Innovate
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-400">
              Full Stack Developer building AI-powered systems, modern web
              applications, and scalable digital platforms.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/KReponse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/reponsedev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:reponsedev@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-red-400"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Navigation
            </h3>

            <div className="flex flex-col items-start gap-3">
              <a
                href="#home"
                className="text-sm text-gray-500 transition-colors hover:text-blue-400"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-sm text-gray-500 transition-colors hover:text-blue-400"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-sm text-gray-500 transition-colors hover:text-blue-400"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="text-sm text-gray-500 transition-colors hover:text-blue-400"
              >
                Projects
              </a>

              <a
                href="#resume"
                className="text-sm text-gray-500 transition-colors hover:text-blue-400"
              >
                Resume
              </a>

              <a
                href="#contact"
                className="text-sm text-gray-500 transition-colors hover:text-blue-400"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Let's Work */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Let's Work
            </h3>

            <p className="text-sm leading-relaxed text-gray-500">
              Have a project, business idea, or digital solution in mind?
              Let's build something meaningful together.
            </p>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-cyan-400"
            >
              Start a Conversation
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-600">
            © {currentYear} Reponse Dev. All rights reserved.
          </p>

          <p className="text-xs text-gray-600">
            Built with <span className="text-gray-400">React</span> &amp;{" "}
            <span className="text-gray-400">Passion</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;