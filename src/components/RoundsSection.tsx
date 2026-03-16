import { motion } from "framer-motion";
import { Database, BarChart3, Brain } from "lucide-react";

const rounds = [
  {
    icon: Database,
    title: "Task 01",
    name: "Data Wiring",
    desc: "Clean, transform, and prepare raw datasets. Prove you can handle the messiest of data pipelines.",
    color: "text-crew-red",
    borderColor: "border-crew-red/40",
  },
  {
    icon: BarChart3,
    title: "Task 02",
    name: "Visual Recon",
    desc: "Create compelling visualizations that reveal hidden patterns. Your charts are your weapons.",
    color: "text-crew-blue",
    borderColor: "border-crew-blue/40",
  },
  {
    icon: Brain,
    title: "Task 03",
    name: "Final Sabotage",
    desc: "Build predictive models and present your findings. The impostor's identity lies in the data.",
    color: "text-crew-yellow",
    borderColor: "border-crew-yellow/40",
  },
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
                  <p className={`font-pixel text-xs ${round.color}`}>{round.title}</p>
                  <p className="font-pixel text-sm text-foreground">{round.name}</p>
                  <p className="text-xs text-muted-foreground mt-2">Hover to reveal →</p>
                </div>

                {/* Back */}
                <div className={`flip-card-back absolute inset-0 among-card flex flex-col items-center justify-center p-6 text-center ${round.borderColor}`}>
                  <p className={`font-pixel text-xs mb-4 ${round.color}`}>{round.name}</p>
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
