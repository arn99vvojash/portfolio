import { motion } from "framer-motion";
import { CornerDownRight } from "lucide-react";

export default function Intro() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          
          <div className="md:w-1/3 relative">
            {/* Blended Background Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.4, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute -top-20 -left-20 w-[150%] h-[150%] z-[-1] pointer-events-none mix-blend-luminosity"
              style={{
                maskImage: 'radial-gradient(circle at center, black 20%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 70%)'
              }}
            >
              <img 
                src="/download.jpg" 
                alt="Background Texture" 
                className="w-full h-full object-cover opacity-60 grayscale"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              className="relative z-10"
            >
              <h3 className="text-[11px] md:text-[13px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4 drop-shadow-md">
                Who am I?
              </h3>
              <h2 className="text-3xl md:text-5xl font-display font-medium leading-tight drop-shadow-lg">
                Engineering <br/>the Future
              </h2>
            </motion.div>
          </div>
          
          <div className="md:w-2/3">
            <motion.p 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              className="text-xl md:text-3xl lg:text-4xl font-sans font-light leading-relaxed text-gray-300"
            >
              I'm an Electronics & Communication Engineering student passionate about embedded systems, AI, and modern web experiences. I enjoy building projects that combine hardware and software to solve real problems while continuously learning new technologies.
            </motion.p>
            
            <motion.div
               initial={{ opacity: 0, y: 80 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
               className="mt-12"
            >
              <a href="#projects" className="inline-flex items-center gap-3 border-b border-gray-500 pb-1 hover:border-white transition-colors uppercase tracking-widest text-sm font-semibold group">
                <CornerDownRight size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                Explore My Work
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

