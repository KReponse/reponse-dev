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
    </section>
  );
};

export default Home;