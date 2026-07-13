import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Gesture Controlled RC Car",
    category: "Hardware / Embedded",
    description: "Wireless gesture-controlled robotic vehicle built using Arduino UNO, MPU6050 and NRF24L01.",
    media: "/RC_car_product_photography_2K_202607131249.jpeg"
  },
  {
    id: 2,
    title: "FREYA AI",
    category: "AI / Python",
    description: "Desktop AI assistant built using Python, FastAPI, LLM integration and voice interaction.",
    media: "/freya.png"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    category: "Web / API Integration",
    description: "A real-time meteorological forecasting application providing accurate location-based data and interactive tracking.",
    media: "/weather_app_cropped.png"
  }
];

// Handles individual media elements inside the sticky frame
const BackgroundMedia = ({ project, isActive }: any) => {
  const mediaRef = useRef<HTMLVideoElement | HTMLImageElement>(null);

  useEffect(() => {
    const el = mediaRef.current;
    if (el && el.tagName === 'VIDEO') {
      const video = el as HTMLVideoElement;
      if (isActive) {
        video.currentTime = 0;
        video.play().catch(e => console.log("Playback interrupted", e));
      } else {
        const timeout = setTimeout(() => {
          video.pause();
        }, 1000);
        return () => clearTimeout(timeout);
      }
    }
  }, [isActive]);

  const baseOpacity = isActive ? 'opacity-100 z-10' : 'opacity-0 z-0';

  return (
    <div className={`absolute inset-0 bg-[#0a0a0a] transition-opacity duration-1000 ease-in-out ${baseOpacity} flex items-center justify-center`}>
      {project.media.endsWith('.mp4') ? (
        <video 
          ref={mediaRef as any}
          src={project.media}
          muted
          playsInline
          loop
          className="w-full h-full object-cover"
        />
      ) : (
        <img 
          ref={mediaRef as any}
          src={project.media}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

// Represents a scrolling text block
const ProjectTextItem = ({ project, index, setActiveProject, isActive }: any) => {
  const ref = useRef(null);
  // Trigger when the item crosses the middle of the viewport
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveProject(project.id);
    }
  }, [isInView, project.id, setActiveProject]);

  return (
    <div ref={ref} className="min-h-[60vh] lg:min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-32 py-24 relative">
      <div className={`transition-all duration-700 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-20 -translate-x-4'}`}>
        <span className="text-sm font-mono text-gray-500 mb-6 block">0{index + 1}</span>
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase text-white mb-6 tracking-tight leading-[1.1]">
          {project.title}
        </h3>
        <p className="text-white/60 font-medium tracking-widest uppercase text-sm mb-6">
          {project.category}
        </p>
        <p className="text-gray-400 max-w-md text-lg leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default function Works() {
  const [activeProject, setActiveProject] = useState(projects[0].id);

  return (
    <section id="projects" className="relative bg-black text-white">
      {/* Title block before the sticky section starts */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-20 pt-32 pb-12">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-sm md:text-base font-semibold tracking-[0.2em] text-gray-500 uppercase"
        >
          Selected Works
        </motion.h3>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-[1800px] mx-auto relative">
        
        {/* Left/Top: Sticky Media Container */}
        {/* On mobile, it sticks to top. On desktop, it takes right half. */}
        <div className="w-full lg:w-1/2 sticky top-[10vh] lg:top-0 lg:h-screen flex items-center justify-center p-6 lg:p-12 xl:p-20 z-0">
           <div className="relative w-full aspect-video max-w-[550px] lg:max-w-[750px] transition-all duration-700 ease-in-out overflow-hidden bg-black border border-white/10 shadow-2xl">
             {projects.map(project => (
                <BackgroundMedia 
                  key={project.id} 
                  project={project} 
                  isActive={activeProject === project.id} 
                />
             ))}
           </div>
        </div>

        {/* Right/Bottom: Scrolling Text */}
        <div className="w-full lg:w-1/2 flex flex-col z-10 lg:-mt-0">
           {projects.map((project, i) => (
              <ProjectTextItem 
                key={project.id} 
                project={project} 
                index={i} 
                setActiveProject={setActiveProject} 
                isActive={activeProject === project.id} 
              />
           ))}
           {/* Extra padding at bottom to allow last item to hit center and stick */}
           <div className="h-[20vh] lg:h-[40vh] w-full"></div>
        </div>

      </div>
    </section>
  );
}
