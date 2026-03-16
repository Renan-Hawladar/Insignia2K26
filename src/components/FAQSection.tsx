import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who can participate in Insignia 2k26?",
    a: "Any undergraduate or postgraduate student can register. Teams of 2-4 members are required. No prior data analytics experience needed — just curiosity and determination.",
  },
  {
    q: "What tools and software are allowed?",
    a: "You can use any programming language or tool including Python, R, Excel, Tableau, or Power BI. The impostor is inefficiency — use whatever weapon you prefer.",
  },
  {
    q: "How are winners determined?",
    a: "Each round is evaluated by a panel of industry experts. Points are cumulative across all three rounds. The crew with the highest total score wins the grand prize.",
  },
  {
    q: "Is there a registration fee?",
    a: "Early bird registration is free! Regular registration has a nominal fee. Check the registration page for current pricing and deadlines.",
  },
  {
    q: "What are the prizes?",
    a: "Cash prizes, internship opportunities, certificates, and exclusive merch await the top crews. Every participant receives a certificate of participation.",
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
