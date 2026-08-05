import { MapPin } from "lucide-react";
import { useState } from "react";

interface PinData {
  id: string;
  name: string;
  top: string;
  left: string;
  color: string;
  universities: number;
}

const pins: PinData[] = [
  { id: "canada", name: "Canada", top: "25%", left: "25%", color: "text-red-500", universities: 32 },
  { id: "uk", name: "United Kingdom", top: "28%", left: "47%", color: "text-indigo-600", universities: 65 },
  { id: "malaysia", name: "Malaysia", top: "55%", left: "75%", color: "text-amber-500", universities: 15 },
  { id: "australia", name: "Australia", top: "75%", left: "82%", color: "text-orange-500", universities: 38 },
  { id: "new-zealand", name: "New Zealand", top: "85%", left: "90%", color: "text-green-500", universities: 8 },
];

export default function WorldMap() {
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);

  return (
    <div className="w-full mx-auto py-12 relative font-sans hidden md:block">
      
      {/* Container for the map (blended in, no border/shadow) */}
      <div className="relative w-full aspect-[2/1] max-w-5xl mx-auto flex items-center justify-center group/map">
        
        {/* Abstract World Map Background */}
        <div 
          className="absolute inset-0 opacity-[0.15] bg-center bg-no-repeat bg-contain transition-opacity duration-700"
          style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')" }}
        />

        {/* Decorative dotted connection lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 group-hover/map:opacity-50 transition-opacity duration-700">
          <path d="M 25% 25% Q 36% 26% 47% 28%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400" />
          <path d="M 47% 28% Q 61% 41% 75% 55%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400" />
          <path d="M 75% 55% Q 78% 65% 82% 75%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400" />
          <path d="M 82% 75% Q 86% 80% 90% 85%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400" />
        </svg>

        {/* Map Pins */}
        {pins.map((pin) => (
          <div 
            key={pin.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center"
            style={{ top: pin.top, left: pin.left }}
            onMouseEnter={() => setHoveredPin(pin.id)}
            onMouseLeave={() => setHoveredPin(null)}
          >
            {/* The Pin Icon */}
            <div className={`relative flex items-center justify-center cursor-pointer transition-transform duration-300 ${hoveredPin === pin.id ? 'scale-125' : 'scale-100'}`}>
              <div className={`w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center z-10 ${pin.color.replace('text-', 'border-')}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${pin.color.replace('text-', 'bg-')}`}></div>
              </div>
              
              {/* Glowing/Pulsing effect behind pin (activates when map is hovered) */}
              <div className={`absolute w-8 h-8 rounded-full opacity-0 group-hover/map:opacity-40 group-hover/map:animate-ping ${pin.color.replace('text-', 'bg-')} transition-opacity duration-500`}></div>
            </div>

            {/* Permanent Label below pin */}
            <div className={`mt-2 flex flex-col items-center text-center transition-all duration-300 ${hoveredPin === pin.id ? 'translate-y-1' : ''}`}>
              <p className="text-xs font-bold text-slate-700 leading-tight mb-1 whitespace-nowrap">{pin.name}</p>
              <div className={`text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full whitespace-nowrap shadow-sm ${pin.color.replace('text-', 'bg-')}`}>
                {pin.universities} UNIVERSITIES
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
