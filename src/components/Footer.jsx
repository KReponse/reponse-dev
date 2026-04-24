import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Logo / Name */}
        <h2 className="text-2xl font-bold mb-2">
          Reponse <span className="text-blue-400">Dev</span>
        </h2>

        {/* Short Text */}
        <p className="text-gray-400 mb-6">
          Building modern web applications and AI-powered solutions.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">

          <a href="https://github.com/" target="_blank" rel="noreferrer"
            className="hover:text-blue-400 transition">
            <Github />
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"
            className="hover:text-blue-400 transition">
            <Linkedin />
          </a>

          <a href="mailto:reponsedev@gmail.com"
            className="hover:text-blue-400 transition">
            <Mail />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Reponse Dev. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;