import { motion } from "framer-motion";
import { FileText, Target, Users, Shield, Rocket } from "lucide-react";

const briefings = [
  { icon: Target, title: "Objective", desc: "The main objective is to encourage logical and analytical thinking with programming excellence among participants. The event challenges participants through quizzes, aptitude tests, and coding rounds. It aims to enhance problem-solving abilities while promoting collaborative and competitive spirit. Through these rounds, participants showcase their speed and accuracy." },
  { icon: Users, title: "Crew Size", desc: "Participants must compete with teamsize of two members. Team formation can be the same department or cross department, same college or cross college teams, same academic year or cross academic year. Combined strength is the key to the survival of the competition and reaching the zenith of victory." },
  { icon: Shield, title: "Clearance", desc: "The competition is open to undergraduate and postgraduate students from any department or college. Both internal and external participants are welcome to register. A small registration fee (₹70 for internal teams & ₹100 for external teams) applies, and participants must retain their receipt for verification on the event day. All eligible students with a passion for coding and problem-solving are encouraged to participate." },
  { icon: FileText, title: "Intel", desc: "The competition consists of three exciting rounds designed to test different skill sets. The first round, Imposter Interrogation , focuses on quiz and aptitude. The second round, Among Coders , challenges participants with coding problems on HackerRank. The final round, The Emergency Meeting , is a surprise challenge where only the sharpest teams compete for victory." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-title mb-3">// Mission Briefing</p>
          <h2 className="font-pixel text-lg md:text-xl text-foreground">
            About <span className="text-crew-red">Insignia</span>
          </h2>
        </motion.div>

        {/* Full-width intro card */}
        <motion.div
          className="among-card flex gap-4 mb-6 transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
            <Rocket className="w-6 h-6 text-crew-yellow" />
          </div>
          <div>
            <h3 className="font-pixel text-xs text-crew-yellow mb-2">Welcome, Crewmate</h3>
            <p className="text-muted-foreground text-sm leading-relaxed justified-text">
              Welcome to Insignia, an electrifying inter-college coding competition organized by the CSE Department of MCKVIE. It brings together passionate coders and problem solvers to test their analytical and programming skills. Participants will face exciting challenges across multiple rounds designed to push creativity and logic. Assemble your team, sharpen your coding skills, and get ready to compete for glory and exciting prizes.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {briefings.map((item, i) => (
            <motion.div
              key={item.title}
              className="among-card flex gap-4 transition-all"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-crew-cyan" />
              </div>
              <div>
                <h3 className="font-pixel text-xs text-crew-yellow mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
