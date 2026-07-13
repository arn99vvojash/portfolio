import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backgroundVideos = [
  "/can_you_create_a_d_model_vide.mp4",
  "/can_you_generate_a_d_model_vi.mp4",
  "/Create_a_premium_cinematic_eng.mp4",
  "/Create_a_premium_cinematic_mac_gwr_video_mvp.mp4",
  "/IMPORTANT___Create_a_realistic_gwr_video_mvp.mp4"
];

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % backgroundVideos.length);
    }, 9000); // Swap every 9 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 overflow-hidden">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        {backgroundVideos.map((video, idx) => (
          <motion.video
            key={video}
            src={video}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentVideo === idx ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d0d0d]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="overflow-hidden"
          >
            <p className="text-xs md:text-sm font-medium tracking-widest text-gray-400 uppercase mb-6 ml-1 md:ml-2">
              Electronics & Communication Engineering Student
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="overflow-hidden"
          >
            <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-display font-bold leading-[0.9] tracking-tighter uppercase">
              Arnav Ojash
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="overflow-hidden mt-2"
          >
            <h2 className="text-[6vw] sm:text-[5vw] md:text-[4vw] font-display font-medium leading-tight text-gray-300">
              Designing intelligent systems
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="overflow-hidden"
          >
            <h2 className="text-[6vw] sm:text-[5vw] md:text-[4vw] font-display font-medium leading-tight text-gray-500">
              where hardware meets software.
            </h2>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-sm font-medium tracking-widest uppercase text-gray-400"
      >
        <div className="w-12 h-[1px] bg-gray-400"></div>
        Scroll Down
      </motion.div>
    </section>
  );
}
