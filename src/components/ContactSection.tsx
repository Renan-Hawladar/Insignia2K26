import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const contacts = [
  { name: "Argha Kamal Saha", role: "CSE-1", image: "/member1.png", whatsapp: "https://wa.me/7890735867" },
  { name: "Debayan Ghosh", role: "CSE-AIML", image: "/member9.png", whatsapp: "https://wa.me/916291873010" },
  { name: "Indrajit Biswas", role: "CSE-2", image: "/member3.png", whatsapp: "https://wa.me/918617204007" },
  { name: "Megha Bhattacharjee", role: "CSE-1", image: "/member7.png", whatsapp: "https://wa.me/917439134600" },
  { name: "Meghna Bakuli ", role: "CSE-2", image: "/member11.png", whatsapp: "https://wa.me/917003286411" },
  { name: "Sayantika Nayak", role: "CSE-DS", image: "/member12.png", whatsapp: "https://wa.me/919123672492" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-title mb-3">// Emergency Contacts</p>
          <h2 className="font-pixel text-lg md:text-xl text-foreground">
            Contact <span className="text-crew-cyan">Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <motion.div
              key={c.name}
              className="among-card flex flex-col items-center gap-3 py-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border bg-muted">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <a
                  href={c.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center border-2 border-background hover:scale-110 transition-transform"
                  aria-label={`WhatsApp ${c.name}`}
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                </a>
              </div>
              <p className="font-pixel text-xs text-foreground">{c.name}</p>
              <p className="text-xs text-muted-foreground">{c.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
