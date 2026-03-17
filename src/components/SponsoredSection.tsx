import { motion } from "framer-motion";

const sponsors = [
  { name: "Ardent Group", logo: "/ardent.png" },
];

const SponsoredSection = () => {
  return (
    <section id="sponsors" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-title mb-3">// Partners</p>
          <h2 className="font-pixel text-lg md:text-xl text-foreground">
            Sponsored <span className="text-crew-cyan">By</span>
          </h2>
        </motion.div>

        {/* Centered Sponsor */}
        <div className="flex justify-center items-center">
          {sponsors.map((s, i) => (
            <motion.div
              key={s.name}
              className="among-card flex items-center justify-center px-10 py-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <img
                src={s.logo}
                alt={s.name}
                className="max-h-20 w-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SponsoredSection;