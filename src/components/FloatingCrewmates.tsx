import { useEffect, useState } from "react";

const COLORS = [
  "var(--crew-red)", "var(--crew-blue)", "var(--crew-green)",
  "var(--crew-pink)", "var(--crew-orange)", "var(--crew-purple)",
  "var(--crew-yellow)", "var(--crew-cyan)",
];

interface Crewmate {
  id: number;
  color: string;
  y: number;
  duration: number;
  size: number;
  delay: number;
}

const CrewmateSVG = ({ color, size }: { color: string; size: number }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 40 48" fill="none">
    <rect x="8" y="10" width="24" height="28" rx="12" fill={`hsl(${color})`} />
    <rect x="20" y="6" width="14" height="14" rx="4" fill="hsl(185 100% 50% / 0.7)" />
    <rect x="6" y="32" width="10" height="14" rx="4" fill={`hsl(${color})`} />
    <rect x="24" y="32" width="10" height="14" rx="4" fill={`hsl(${color})`} />
    <rect x="12" y="38" width="6" height="8" rx="3" fill={`hsl(${color})`} />
    <rect x="22" y="38" width="6" height="8" rx="3" fill={`hsl(${color})`} />
  </svg>
);

const FloatingCrewmates = () => {
  const [crewmates, setCrewmates] = useState<Crewmate[]>([]);

  useEffect(() => {
    const spawn = () => {
      const id = Date.now() + Math.random();
      const crewmate: Crewmate = {
        id,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        y: Math.random() * 70 + 10,
        duration: Math.random() * 15 + 20,
        size: Math.random() * 20 + 25,
        delay: 0,
      };
      setCrewmates(prev => [...prev.slice(-4), crewmate]);
    };

    spawn();
    const interval = setInterval(spawn, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {crewmates.map((c) => (
        <div
          key={c.id}
          className="absolute opacity-0"
          style={{
            top: `${c.y}%`,
            animation: `float-drift ${c.duration}s linear forwards`,
            transform: `rotate(${Math.random() * 30 - 15}deg)`,
          }}
        >
          <CrewmateSVG color={c.color} size={c.size} />
        </div>
      ))}
    </div>
  );
};

export default FloatingCrewmates;
