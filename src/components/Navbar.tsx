import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About Us", href: "#about" },
  { label: "Rounds", href: "#rounds" },
  { label: "Team", href: "#team" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#footer" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="sticky top-4 z-40 mx-auto max-w-4xl px-4"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="tablet-nav px-6 py-3 flex items-center justify-between">
        <a href="#" className="font-pixel text-xs text-crew-cyan glow-text">
          INSIGNIA 2K26
        </a>
        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-crew-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          className="tablet-nav mt-2 p-4 flex flex-col gap-3 md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-crew-cyan transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
