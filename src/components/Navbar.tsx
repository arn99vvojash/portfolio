import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/20 border-b border-white/10"
    >
      <div className="flex items-center gap-4">
        <a href="#" className="text-xl font-display font-semibold tracking-wide">
          ARNAV®
        </a>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider font-medium text-gray-400">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="#contact" 
          className="hidden md:flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all text-sm font-medium uppercase tracking-wide"
        >
          Let's Build Together
        </a>
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </motion.nav>
  );
}
