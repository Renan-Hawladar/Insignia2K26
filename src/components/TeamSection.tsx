import { motion } from "framer-motion";

const members = Array.from({ length: 19 }, (_, i) => ({
  name: ["Captain", "Navigator", "Engineer", "Commander", "Sentinel", "Security", "Pilot", "Analyst", "Strategist", "Operator", "Recon", "Architect", "Medic", "Scientist","Creator","Director","Broadcaster","Communicator","Propagator"][i],
  role: ["Argha Kamal Saha", "Ishan Chatterjee", "Indrajit Biswas", "Renan Hawladar", "Joyita Chakraborty", "Hritam Das", "Megha Bhattacharjee", "Soumyajit Chatterjee", "Debayan Ghosh", "Ahona Bose", "Meghna Bakuli", "Sayantika Nayak", "Ankan Samanta", "Sanjib Ghara","Suchetana Mukherjee","Indrajit Pahari","Arkadeep Si","Ashis Kumar Rai","Shrestho Sen"][i],
  image: `/member${i + 1}.png`,
}));

// Duplicate the array to create the seamless loop illusion
const duplicatedMembers = [...members, ...members];

const CARD_WIDTH = 220;
const GAP = 24; // Tailwind gap-6 is exactly 24px

const TeamSection = () => {
  // Calculate exactly how far to slide before looping
  const slideDistance = (CARD_WIDTH + GAP) * members.length;

  return (
    <section id="team" className="py-20 px-4 overflow-hidden">
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

        {/* Outer container to hide the overflow */}
        <div className="overflow-hidden w-full flex">
          <motion.div
            className="flex gap-6"
            // Animate from 0 to the exact width of the original list
            animate={{ x: [0, -slideDistance] }}
            transition={{
              repeat: Infinity, // Loop forever
              ease: "linear",   // Maintain a constant speed
              duration: 50,    // INCREASED FROM 150 TO 250 (Higher number = slower speed)
            }}
          >
            {duplicatedMembers.map((m, i) => (
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
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="font-pixel text-xs text-foreground">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
