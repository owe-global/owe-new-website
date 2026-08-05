import { Landmark, GraduationCap, Library, BookOpen } from "lucide-react";

export default function FeaturedUniversities() {
  const universities = [
    { name: "Monash University", src: "/logos/2016-Monash_2-Black_NEW_TO-SEND_RGB.jpg" },
    { name: "University of Birmingham", src: "/logos/243760_UoB_RGB_24.avif" },
    { name: "RMIT University", src: "/logos/250365_RMIT_University_Logo.svg.avif" },
    { name: "University Logo 4", src: "/logos/3025.png" },
    { name: "University of Leeds", src: "/logos/Leeds.png" },
    { name: "Taylor's University", src: "/logos/Logo_of_Taylor's_University.svg" },
    { name: "INTI University", src: "/logos/inti-university.webp" },
    { name: "Imperial College London", src: "/logos/logo-imperial-college-london.png" },
    { name: "Sunway University", src: "/logos/sunway-university.webp" },
    { name: "University of Technology Sydney", src: "/logos/uts.webp" },
    { name: "Victoria University of Wellington", src: "/logos/vuw-logo-1.png" },
  ];

  // Duplicating for the infinite marquee effect
  const marqueeUniversities = [...universities, ...universities];

  return (
    <div className="py-12 mt-16 bg-transparent border-t border-slate-100/60 font-sans overflow-hidden relative">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h4 className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          Featured Universities
        </h4>
      </div>

      {/* Infinite Marquee Container */}
      <div className="w-full overflow-hidden">
        <div className="animate-marquee gap-10 md:gap-20 opacity-70 hover:opacity-100 transition-opacity items-center">
          {marqueeUniversities.map((uni, idx) => {
            return (
              <div key={idx} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer shrink-0 px-4">
                <img 
                  src={uni.src} 
                  alt={uni.name} 
                  title={uni.name}
                  className="h-10 md:h-12 w-auto object-contain max-w-[200px]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
