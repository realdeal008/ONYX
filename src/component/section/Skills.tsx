"use client";

import { motion } from "framer-motion";
import SectionDivider from "../SectionDivider";

const skills = [
  {
    icon: "⚛️",
    title: "React & TypeScript",
    desc: "Building robust, type-safe user interfaces with React and TypeScript for enterprise-grade applications.",
  },
  {
    icon: "📱",
    title: "React Native",
    desc: "Creating performant cross-platform mobile applications with native-like user experiences.",
  },
  {
    icon: "🦋",
    title: "Flutter",
    desc: "Developing beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
  },
  {
    icon: "🟢",
    title: "Node.js & Express",
    desc: "Building scalable backend APIs and server applications with Node.js and Express framework.",
  },
  {
    icon: "🍃",
    title: "MongoDB",
    desc: "Designing flexible, scalable NoSQL database solutions for modern applications.",
  },
  {
    icon: "🦀",
    title: "Rust",
    desc: "Implementing high-performance, memory-safe backend modules and WebAssembly components.",
  },
];

export default function Skills() {
  return (
    <>
   
    <section id="skills" className="skills">
      <div className="skill-container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2>Skills & Technologies</h2>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="skill-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
       <SectionDivider/>
    </section>
    </>
  );
}
