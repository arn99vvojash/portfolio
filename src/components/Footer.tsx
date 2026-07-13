import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        
        <div className="flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8"
          >
            Let's Build Together
          </motion.h2>
          
          <motion.a 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            href="mailto:sodiumguy89@gmail.com" 
            className="text-lg md:text-xl text-gray-400 hover:text-white transition-colors font-sans block"
          >
            sodiumguy89@gmail.com
          </motion.a>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col gap-6 w-full md:w-auto"
        >
          <a href="https://github.com/arn99vvojash" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-8 text-lg md:text-xl font-medium uppercase tracking-widest border-b border-white/20 pb-4 hover:text-white text-gray-400 hover:border-white transition-all group">
            <span>GitHub</span>
            <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/arnav-ojash-2345a63a1/" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-8 text-lg md:text-xl font-medium uppercase tracking-widest border-b border-white/20 pb-4 hover:text-white text-gray-400 hover:border-white transition-all group">
            <span>LinkedIn</span>
            <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-500 uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Arnav Ojash</p>
        <p>Designed with Intent</p>
      </div>
    </footer>
  );
}
