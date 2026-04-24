import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Git & GitHub", level: 70 },
  { name: "AI Prompting", level: 80 },
{ name: "API Integration", level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My <span className="text-blue-400">Skills</span>
        </motion.h2>

        {/* Skills List */}
        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 p-5 rounded-xl border border-gray-800"
            >
              {/* Skill Name */}
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-2 bg-blue-500 rounded-full"
                />
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;