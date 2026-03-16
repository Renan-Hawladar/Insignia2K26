import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const members = Array.from({ length: 14 }, (_, i) => ({
  name: ["Captain", "Navigator", "Engineer", "Commander", "Sentinel", "Security", "Pilot", "Analyst", "Strategist", "Operator", "Recon", "Architect", "Medic", "Scientist"][i],
  role: ["Argha Kamal Saha", "Ishan Chatterjee", "Indrajit Biswas", "Renan Hawladar", "Joyita Chakraborty", "Hritam Das", "Megha Bhattacharjee", "Soumyajit Chatterjee", "Debayan Ghosh", "Ahona Bose", "Meghna Bakuli", "Sayantika Nayak", "Ankan Samanta", "Sanjib Ghara"][i],
  image: `/member${i + 1}.png`,
}));

const CARD_WIDTH = 220;
const GAP = 24;
const VISIBLE = 1;
const SLIDE_INTERVAL = 2000;

const TeamSection = () => {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const maxOffset = members.length - VISIBLE;
        return prev >= maxOffset ? 0 : prev + 1;
      });
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const translateX = -(offset * (CARD_WIDTH + GAP));

  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-title mb-3">// Crew Manifest</p>
          <h2 className="font-pixel text-lg md:text-xl text-foreground">
            The <span className="text-crew-green">Team</span>
          </h2>
        </motion.div>

        <div className="overflow-hidden" ref={containerRef}>
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(${translateX}px)`,
              width: `${members.length * (CARD_WIDTH + GAP)}px`,
            }}
          >
            {members.map((m, i) => (
              <div
                key={i}
                className="among-card flex flex-col items-center gap-3 py-6 shrink-0"
                style={{ width: `${CARD_WIDTH}px` }}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border bg-muted">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-pixel text-xs text-foreground">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
