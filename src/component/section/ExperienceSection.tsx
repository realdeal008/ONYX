"use client";
import { motion } from "framer-motion";
import SectionDivider from "../SectionDivider";

const experiences = [
  {
    year: "2024",
    title: "Senior Developer @ LuxeTech",
    description: "Led development of luxury SaaS platforms using Next.js and Node.js.",
  },
  {
    year: "2022",
    title: "Full-stack Developer @ NoirSoft",
    description: "Built and maintained high-end e-commerce platforms for fashion clients.",
  },
];

export default function ExperienceSection() {
  return (
    <div>
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-gold text-center mb-12">Experience</h2>
      <div className="relative border-l-4 border-gold pl-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-12 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute w-4 h-4 bg-gold rounded-full left-[-14px] top-1" />
            <p className="text-sm text-silver">{exp.year}</p>
            <h3 className="text-xl font-semibold text-light">{exp.title}</h3>
            <p className="text-light">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
    <SectionDivider />
    </div>
  );
}
 