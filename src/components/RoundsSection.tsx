import { motion } from "framer-motion";
import { Database, BarChart3, Brain } from "lucide-react";

const rounds = [
  {
    icon: Database,
    title: "Imposter Interrogation",
    name: "Quiz & Aptitude",
    desc: "Sharpen your logic and analytical thinking in this fast-paced quiz round. Solve aptitude puzzles, technical questions, and tricky scenarios to prove you’re a true crewmate and not the impostor.",
    color: "text-crew-red",
    borderColor: "border-crew-red/40",
  },
  {
    icon: BarChart3,
    title: "Among Coders",
    name: "HackerRank Challenge",
    desc: "Enter the coding arena and complete programming challenges on HackerRank. Write efficient algorithms, debug quickly, and race against time to show your coding skills.",
    color: "text-crew-blue",
    borderColor: "border-crew-blue/40",
  },
  {
    icon: Brain,
    title: "Emergency Meeting",
    name: "Surprise Round",
    desc: "Expect the unexpected! This round tests creativity, problem-solving, and teamwork with mystery challenges that will reveal who the real problem solver is.",
    color: "text-crew-yellow",
    borderColor: "border-crew-yellow/40",
  }
];

const RoundsSection = () => {
  return (
    <section id="rounds" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-title mb-3">// Task List</p>
          <h2 className="font-pixel text-lg md:text-xl text-foreground">
            The <span className="text-crew-cyan">Rounds</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {rounds.map((round, i) => (
            <motion.div
              key={round.title}
              className="flip-card h-72"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className={`flip-card-front absolute inset-0 among-card flex flex-col items-center justify-center gap-4 ${round.borderColor}`}>
                  <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
                    <round.icon className={`w-8 h-8 ${round.color}`} />
                  </div>
                  {/* Added text-center and px-2 here to fix the alignment */}
                  <p className={`font-pixel text-xs text-center px-2 ${round.color}`}>{round.title}</p>
                  <p className="font-pixel text-sm text-foreground text-center px-2">{round.name}</p>
                  <p className="text-xs text-muted-foreground mt-2">Hover to reveal →</p>
                </div>

                {/* Back */}
                <div className={`flip-card-back absolute inset-0 among-card flex flex-col items-center justify-center p-6 text-center ${round.borderColor}`}>
                  {/* Added text-center here just in case as well */}
                  <p className={`font-pixel text-xs mb-4 text-center ${round.color}`}>{round.name}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{round.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoundsSection;