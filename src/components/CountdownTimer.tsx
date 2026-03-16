import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Set target date: 27th March 2026, 10:00 AM IST
const TARGET_DATE = new Date("2026-03-27T10:00:00+05:30");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = TARGET_DATE.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HRS", value: timeLeft.hours },
    { label: "MIN", value: timeLeft.minutes },
    { label: "SEC", value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          className="section-title mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          // Mission Countdown
        </motion.p>
        <motion.div
          className="flex justify-center gap-3 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {blocks.map((b) => (
            <div
              key={b.label}
              className="among-card flex flex-col items-center px-4 py-5 md:px-8 md:py-6 min-w-[70px] md:min-w-[100px]"
            >
              <span className="font-pixel text-xl md:text-3xl text-crew-cyan glow-text">
                {String(b.value).padStart(2, "0")}
              </span>
              <span className="font-pixel text-[8px] md:text-[10px] text-muted-foreground mt-2">
                {b.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;
