import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

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
      <div className="flex justify-center gap-6 mt-6">

  <a
   href="https://github.com/KReponse"
   target="_blank" 
   rel="noreferrer"
  className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition ">
    <Github />
  </a>

  <a
  href="https://www.linkedin.com/in/reponsedev"
  target="_blank"
  rel="noreferrer"
  className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition"
>
  <Linkedin />
</a>


   <a href="https://mail.google.com/mail/u/2/#inbox"target="_blank"><Mail className="hover:text-red-400 transition" /></a>


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