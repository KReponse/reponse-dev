import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  Download,
  User,
} from "lucide-react";
import profile from "../assets/profile.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080808] py-24 text-white sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-100px] right-[-180px] h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              About Me
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Building{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              purpose.
            </span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-5 rounded-3xl bg-blue-600/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-2 shadow-2xl">
                <img
                  src={profile}
                  alt="Reponse Dev"
                  className="h-[340px] w-[280px] rounded-2xl object-cover sm:h-[390px] sm:w-[320px]"
                />

                <div className="absolute inset-x-2 bottom-2 rounded-b-2xl bg-gradient-to-t from-black/90 via-black/50 to-transparent px-5 pb-5 pt-16">
                  <p className="text-sm font-semibold">Reponse Dev</p>

                  <p className="mt-1 text-xs text-gray-400">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              {/* Floating Focus Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-5 top-10 hidden rounded-xl border border-white/10 bg-black/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <User size={16} />
                  </span>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">
                      Focus
                    </p>

                    <p className="text-xs font-semibold text-white">
                      AI &amp; Full Stack
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-gray-300">
              I'm{" "}
              <span className="font-semibold text-white">
                Reponse KUKINKUNDA
              </span>
              , a Full Stack Developer focused on building modern web
              applications, scalable backend systems, and AI-powered digital
              solutions.
            </p>

            <p className="mt-5 leading-relaxed text-gray-400">
              I enjoy turning ideas into real-world products — from designing
              intuitive interfaces to developing APIs, databases, and
              intelligent features that solve practical problems.
            </p>

            <p className="mt-5 leading-relaxed text-gray-400">
              One of my main projects is{" "}
              <a
                href="https://www.aitourrwanda.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-400 transition-colors hover:text-cyan-400 hover:underline"
              >
                AI Tour Rwanda
              </a>
              , a tourism technology platform designed to make discovering
              Rwanda smarter and more accessible.
            </p>

            {/* Stats */}
            <div className="mt-9 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <h3 className="text-2xl font-bold text-blue-400">5+</h3>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Projects
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <h3 className="text-2xl font-bold text-blue-400">AI</h3>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Solutions
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <h3 className="text-2xl font-bold text-blue-400">24/7</h3>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Learning
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#media"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold transition-all hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/20"
              >
                <Camera size={18} />

                View My Media

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="/Reponse-Dev-CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-gray-200 transition-all hover:border-white/20 hover:bg-white/[0.07]"
              >
                <Download size={18} />

                Download CV
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-gray-300 transition-all hover:border-blue-500/40 hover:text-white"
              >
                Let's Work Together

                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;