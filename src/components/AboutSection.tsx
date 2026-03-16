import { motion } from "framer-motion";
import { FileText, Target, Users, Shield, Rocket } from "lucide-react";

const briefings = [
  { icon: Target, title: "Objective", desc: "A national-level data analytics competition designed to test your skills across multiple rounds of challenges." },
  { icon: Users, title: "Crew Size", desc: "Teams of 2-4 analysts working together to complete tasks and identify patterns in complex datasets." },
  { icon: Shield, title: "Clearance", desc: "Open to all undergraduate and postgraduate students. No impostor checks required — yet." },
  { icon: FileText, title: "Intel", desc: "Three rounds of increasing difficulty. Only the sharpest crews will survive to the final showdown." },
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
              Introducing  Insignia 2k26 – Where Code Meets Imagination !!
              The Computer Science and Engineering Department of MCKVIE in association with Institutions' Innovation Council (IIC) and Institution of Electronics and Telecommunication Engineers (IETE), MCKVIE presents an electrifying inter-college coding extravaganza – Insignia!
              Insignia offers a platform to showcase your analytical prowess, collaborate with like-minded peers, 
              and compete for glory. Gear up, assemble your crew, and prepare for the ultimate data mission,
              because in Insignia, every insight counts and every task matters.
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
