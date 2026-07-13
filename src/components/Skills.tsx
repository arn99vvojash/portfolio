import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript"]
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "GSAP"]
  },
  {
    title: "Hardware",
    skills: ["Arduino UNO", "Arduino Nano", "ESP32", "MPU6050", "NRF24L01"]
  },
  {
    title: "AI & Backend",
    skills: ["FastAPI", "LangChain", "Edge TTS", "LLM APIs"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="text-sm md:text-base font-semibold tracking-[0.2em] text-gray-400 uppercase mb-16"
        >
          Capabilities & Toolkit
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.33, 1, 0.68, 1] }}
              className="flex flex-col"
            >
              <h4 className="text-xl font-display font-medium text-white mb-6 pb-4 border-b border-white/10">
                {category.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {category.skills.map(skill => (
                  <li key={skill} className="text-gray-400 font-sans tracking-wide">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
