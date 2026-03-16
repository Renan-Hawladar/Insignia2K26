import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Mail, MapPin } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:insignia@example.com" },
];

const FooterSection = () => {
  return (
    <footer id="footer" className="py-20 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-title mb-4">// Connect With Us</p>
            <p className="text-muted-foreground text-sm mb-6">
              Don't be sus — follow us on social media for updates, announcements, and behind-the-scenes content.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center hover:bg-crew-cyan/20 transition-colors border border-border hover:border-crew-cyan/50"
                  aria-label={s.label}
                >
                  <s.icon className="w-5 h-5 text-muted-foreground" />
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-crew-cyan shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                MCKV Institute of Engineering<br />
                243, G T Road North, Liluah, Howrah, West Bengal 711204
              </p>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-title mb-4">// Navigation Map</p>
            {/* <div className="among-card p-2 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.919127524847!2d88.34565531088077!3d22.61949497937271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d65da7b3775%3A0x30915f7e98f1b0d5!2sMCKV%20Institute%20of%20Engineering!5e0!3m2!1sen!2sin!4v1772306849563!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "0.75rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Navigation Map"
              />
            </div> */}

            <div className="among-card p-0 overflow-hidden relative border-[4px] border-black rounded-xl shadow-[0_0_15px_rgba(132,255,255,0.3)] bg-[#1a1a1a]">
              {/* Themed Header for the Map */}
              <div className="bg-black/80 px-4 py-1 border-b-2 border-black flex justify-between items-center">
                <span className="text-[10px] font-pixel text-[#84FFFF] tracking-widest">NAV_MAP: MCKVIE_STATION</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#C51111] animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-gray-600" />
                </div>
              </div>

              <div className="p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.919127524847!2d88.34565531088077!3d22.61949497937271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d65da7b3775%3A0x30915f7e98f1b0d5!2sMCKV%20Institute%20of%20Engineering!5e0!3m2!1sen!2sin!4v1772306849563!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  className="rounded-lg transition-all duration-500 grayscale-[0.3] contrast-[1.2] invert-[0.85] hue-rotate-[180deg] brightness-[0.8]"
                  style={{ 
                    border: "2px solid black",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Navigation Map"
                />
              </div>

              {/* Scanline Overlay for the "Screen" Look */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-30 z-10" />
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="font-pixel text-xs text-crew-cyan glow-text mb-2">
            INSIGNIA 2K26
          </p>
          <p className="text-xs text-muted-foreground">
            © 2026 Insignia. No crewmates were harmed in the making of this event.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
