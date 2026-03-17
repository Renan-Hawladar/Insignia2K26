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
    <section className="py-6 px-4">
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

        {/* Swipe Card Device */}
        <motion.div
           className="mt-10 mb-2 mx-auto w-full max-w-[350px] md:max-w-[450px] relative h-40 md:h-52 flex flex-col z-0"
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Base Container simulating the device */}
          <div className="relative w-full h-full flex flex-col z-10 shadow-[8px_8px_0px_rgba(0,0,0,0.8)]">
             
             {/* Top Section */}
             <div className="flex-1 bg-[#b8b8b8] border-4 border-black relative z-10 p-3 md:p-5 flex flex-col items-center shadow-[inset_0_-4px_10px_rgba(0,0,0,0.1)]">
                {/* Screen */}
                <div className="w-[90%] max-w-[280px] h-10 md:h-12 bg-[#0e3b2e] border-4 border-black flex items-center justify-center shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
                   <motion.span 
                     className="font-pixel text-[#ff0000] font-bold text-[10px] md:text-[14px] tracking-widest mt-1"
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: 1.5, duration: 0.3 }}
                   >
                     DATE: 27TH MARCH 2026
                   </motion.span>
                </div>
                
                {/* Arrow and Lights */}
                <div className="w-[90%] max-w-[300px] mt-4 md:mt-6 flex items-center justify-between relative">
                  <div className="flex items-center flex-1 mr-4">
                    <div className="h-2 md:h-3 bg-black flex-1"></div>
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-black border-b-[8px] border-b-transparent md:border-t-[10px] md:border-l-[20px] md:border-b-[10px]"></div>
                  </div>
                  <div className="flex gap-2">
                     <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#8c1717] border-2 border-black shadow-[inset_0_0_4px_black]"></div>
                     <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#205527] border-2 border-black shadow-[inset_0_0_4px_black]"></div>
                  </div>
                </div>
             </div>

             {/* Dark Grey Slot Middle */}
             <div className="h-4 md:h-6 bg-[#656565] border-x-4 border-b-4 border-black relative z-0"></div>

             {/* Dark Bottom Cover (Front Lip) */}
             <div className="h-6 md:h-8 bg-[#2a2a2a] border-x-4 border-b-4 border-black relative z-30"></div>
          </div>

          {/* The Animated Card */}
          <motion.div
            className="absolute bottom-[20px] md:bottom-[28px] left-0 w-32 h-20 md:w-48 md:h-28 bg-[#e8e8e8] rounded-xl border-[3px] border-black flex p-2 md:p-3 items-center z-20 shadow-none md:shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
            initial={{ x: -160, opacity: 0 }}
            whileInView={{ x: [-160, 20, 20, 400], opacity: [0, 1, 1, 0] }}
            viewport={{ once: true }}
            transition={{ times: [0, 0.3, 0.5, 1], duration: 1.8, ease: "easeInOut", delay: 0.3 }}
          >
            {/* Crewmate Profile Image on Card */}
            <div className="w-10 h-14 md:w-14 md:h-20 bg-[#909090] border-2 border-black relative overflow-hidden flex items-end justify-center rounded-sm shrink-0">
                {/* Crewmate Body */}
                <div className="w-8 h-10 md:w-12 md:h-14 bg-[#4a4a4a] rounded-t-[1rem] border-2 border-black absolute -bottom-1">
                   {/* Visor */}
                   <div className="absolute top-2 md:top-3 -left-1 md:-left-2 w-5 h-3 md:w-7 md:h-4 bg-[#c0c0c0] rounded-full border-2 border-black"></div>
                </div>
            </div>
            
            <div className="ml-3 h-full flex flex-col justify-center gap-2 w-full">
               <div className="h-2 bg-black opacity-20 w-full rounded-full"></div>
               <div className="h-2 bg-black opacity-20 w-3/4 rounded-full"></div>
               <div className="h-2 bg-black opacity-20 w-1/2 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;
