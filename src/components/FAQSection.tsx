import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who can participate in Insignia 2K26?",
    a: "Insignia 2K26 is open to all undergraduate and postgraduate students. Participants from any department or college can join the competition. Teams may include members from different years or departments.",
  },
  {
    q: "Is there a registration fee?",
    a: "Yes, the registration fee is ₹70 for internal teams and ₹100 for external or mixed teams. The fee can be paid via UPI at the CSE Department, and participants must keep the receipt for verification.",
  },
  {
    q: "What prizes will the winners receive?",
    a: "The winning teams will receive prizes worth ₹6000 along with certificates for winners and runner-ups. All participants will also receive participation e-certificates, eligible for MAR points.",
  },
  {
    q: "When and where will Insignia 2K26 take place?",
    a: "The event will be held at MCKVIE, Block A, 3rd Floor, CSE Department on 9th April 2026 from 9:30 AM onwards.",
  },
  {
    q: "What is the last date to register?",
    a: "The last date for registration is 8th April 2026. Participants are encouraged to register early to secure their spot.",
  },
  {
    q: "What should participants bring on the event day?",
    a: "Participants should bring their valid student ID and payment receipt. Everything else required for the competition will be arranged at the venue.",
  },
  {
  q: "Will food be provided to participants?",
  a: "Food will be provided only to the teams who qualify for Round 2 of the competition."
 },
];
const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-title mb-3">// Comms Channel</p>
          <h2 className="font-pixel text-lg md:text-xl text-foreground">
            Frequently <span className="text-crew-pink">Asked</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="among-card border-none px-6"
              >
                <AccordionTrigger className="font-pixel text-xs text-left hover:text-crew-cyan hover:no-underline py-4">
                  <span className="text-crew-yellow mr-3">[{String(i + 1).padStart(2, "0")}]</span>
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
