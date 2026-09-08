<<<<<<< HEAD
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "../assets/logo.png";

const Home = () => {
  const technologies = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "AI",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-180px] left-[-180px] w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      {/* Hero Image Watermark */}
      <motion.img
        src={heroImage}
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.055 }}
        transition={{ duration: 1.5 }}
        className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[600px] max-w-[80vw] pointer-events-none object-contain grayscale"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 min-h-screen flex items-center pt-24 pb-16">
        <div className="w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm mb-7"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>

              <span className="text-sm text-gray-300">
                Available for freelance work
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Building{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              Systems &amp;
              <br />
              Scalable Platforms.
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6 text-xl sm:text-2xl font-medium text-gray-300"
            >
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "AI Builder",
                  "Software Engineer",
                  "Problem Solver",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={65}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-400"
            >
              I help startups, businesses and tourism platforms build modern
              web applications, scalable backend systems and AI-powered
              digital solutions that turn ideas into real products.
            </motion.p>

            {/* Technology Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.6 }}
              className="flex flex-wrap gap-2.5 mt-7"
            >
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.035] text-xs sm:text-sm text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-colors"
                >
                  {technology}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 mt-9"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold transition-all hover:shadow-xl hover:shadow-blue-600/20"
              >
                Hire Me
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 font-semibold transition-all"
              >
                View Projects
                <ArrowDown size={17} />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.55, duration: 0.7 }}
              className="flex items-center gap-5 mt-9"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
                Connect
              </span>

              <div className="h-px w-10 bg-white/10" />

              <a
                href="https://github.com/KReponse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Github size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/reponsedev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={19} />
              </a>

              <a
                href="mailto:reponsedev@gmail.com"
                aria-label="Email"
                className="text-gray-500 hover:text-red-400 transition-colors"
              >
                <Mail size={19} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-[390px] h-[390px] xl:w-[450px] xl:h-[450px]">

              {/* Outer Glow */}
              <div className="absolute inset-8 rounded-full bg-blue-500/10 blur-[70px]" />

              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-2 rounded-full border border-dashed border-blue-500/20"
              />

              {/* Inner Ring */}
              <div className="absolute inset-8 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm" />

              {/* Hero Image */}
              <div className="absolute inset-14 rounded-full overflow-hidden border border-blue-500/30 bg-gradient-to-br from-blue-600/10 to-transparent shadow-2xl shadow-blue-900/20">
                <img
                  src={heroImage}
                  alt="Reponse Dev"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Label */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 top-16 px-4 py-3 rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-xl"
              >
                <p className="text-[10px] uppercase tracking-wider text-gray-500">
                  Building
                </p>
                <p className="text-sm font-semibold text-blue-400">
                  AI Systems
                </p>
              </motion.div>

              {/* Floating Label */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-5 bottom-20 px-4 py-3 rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-xl"
              >
                <p className="text-[10px] uppercase tracking-wider text-gray-500">
                  Based in
                </p>
                <p className="text-sm font-semibold text-white">
                  Kigali, Rwanda
                </p>
              </motion.div>

              {/* Code Symbol */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 flex items-center justify-center w-12 h-12 rounded-xl border border-blue-500/30 bg-blue-600/10 backdrop-blur-md">
                <span className="text-blue-400 font-mono font-bold">
                  {"</>"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-gray-600 hover:text-gray-300 transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.a>
=======
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="text-center px-6">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="text-blue-400">Reponse Dev</span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-6"
        >
          <Typewriter
            words={[
              "Full Stack Developer",
              "AI Developer",
              "Frontend Specialist",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-xl mx-auto text-gray-400 mb-8"
        >
          I build modern, responsive web applications and AI solutions.
          Passionate about creating smart and scalable systems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center gap-4 mb-8"
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold transition"
          >
            Hire Me
          </a>

          <a
            href="#projects"
            className="px-6 py-3 border border-gray-600 hover:border-blue-400 rounded-xl transition"
          >
            View Projects
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-6 text-gray-400"
        >
          <a href="https://github.com/KReponse"target="_blank"><Github className="hover:text-white transition" /></a>
          <a  href="https://www.linkedin.com/in/reponsedev"target="_blank"><Linkedin className="hover:text-blue-400 transition" /></a>
          <a href="https://mail.google.com/mail/u/2/#inbox"target="_blank"><Mail className="hover:text-red-400 transition" /></a>

        </motion.div>

      </div>
>>>>>>> 98fe866e3bf5a9903dd29d9d11277ef879c443c6
    </section>
  );
};

export default Home;