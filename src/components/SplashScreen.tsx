// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useRef } from "react";

// interface SplashScreenProps {
//   show: boolean;
//   onComplete: () => void;
// }

// const SplashScreen = ({ show, onComplete }: SplashScreenProps) => {
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   useEffect(() => {
//     if (show) {
//       audioRef.current = new Audio("\audio1.mp3");
//       audioRef.current.volume = 1.0;
//       audioRef.current.play().catch(() => {});
//     }
//     return () => {
//       audioRef.current?.pause();
//       audioRef.current = null;
//     };
//   }, [show]);

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-background"
//           style={{ zIndex: 100 }}
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8, delay: 2.5 }}
//           onAnimationComplete={(def: any) => {
//             if (def?.opacity === 0) onComplete();
//           }}
//         >
//           <motion.div
//             className="flex flex-col items-center gap-6"
//             initial={{ scale: 0.5, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <motion.svg
//               width="120" height="144" viewBox="0 0 40 48" fill="none"
//               initial={{ y: 30 }}
//               animate={{ y: 0 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//             >
//               <rect x="8" y="10" width="24" height="28" rx="12" fill="hsl(var(--crew-red))" />
//               <rect x="20" y="6" width="14" height="14" rx="4" fill="hsl(var(--crew-cyan) / 0.7)" />
//               <rect x="6" y="32" width="10" height="14" rx="4" fill="hsl(var(--crew-red))" />
//               <rect x="24" y="32" width="10" height="14" rx="4" fill="hsl(var(--crew-red))" />
//               <rect x="12" y="38" width="6" height="8" rx="3" fill="hsl(var(--crew-red))" />
//               <rect x="22" y="38" width="6" height="8" rx="3" fill="hsl(var(--crew-red))" />
//             </motion.svg>

//             <motion.p
//               className="font-pixel text-2xl md:text-4xl text-crew-red tracking-widest"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: [0.8, 1.1, 1] }}
//               transition={{ delay: 0.8, duration: 0.6 }}
//             >
//               Shhh!
//             </motion.p>

//             <motion.p
//               className="text-muted-foreground text-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: [0, 1, 1, 0] }}
//               transition={{ delay: 1.2, duration: 2, times: [0, 0.2, 0.7, 1] }}
//             >
//               There is an impostor among us...
//             </motion.p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 0 }}
//             transition={{ delay: 3, duration: 0.01 }}
//             onAnimationComplete={() => onComplete()}
//           />
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default SplashScreen;


// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// interface SplashScreenProps {
//   show: boolean;
//   onComplete: () => void;
// }

// const SplashScreen = ({ show, onComplete }: SplashScreenProps) => {
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [isUnlocked, setIsUnlocked] = useState(false);

//   // Initialize audio object once
//   useEffect(() => {
//     const audio = new Audio("/audio1.mp3");
//     audio.volume = 1.0;
//     audioRef.current = audio;

//     return () => {
//       audio.pause();
//       audioRef.current = null;
//     };
//   }, []);

//   // Handle the "Start" click to satisfy browser autoplay policies
//   const handleStart = () => {
//     setIsUnlocked(true);
//     if (audioRef.current) {
//       audioRef.current.play().catch((err) => console.warn("Audio blocked:", err));
//     }
//   };

//   return (
//     <AnimatePresence>
//       {/* 1. INITIAL START BUTTON (REQUIRED FOR AUDIO) */}
//       {!isUnlocked && show && (
//         <motion.div 
//           className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black gap-8"
//           exit={{ opacity: 0 }}
//         >
//           <motion.h1 
//             className="text-[#84FFFF] text-5xl font-bold tracking-tighter"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             INSIGNIA 2K26
//           </motion.h1>
//           <button
//             onClick={handleStart}
//             className="px-12 py-4 border-4 border-red-600 text-red-600 text-2xl font-bold hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.5)] active:scale-95"
//           >
//             START MISSION
//           </button>
//         </motion.div>
//       )}

//       {/* 2. THE ACTUAL SPLASH SCREEN (PLAYS AFTER CLICK) */}
//       {isUnlocked && show && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black"
//           style={{ zIndex: 100 }}
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8, delay: 2.5 }}
//           onAnimationComplete={(def: any) => {
//             if (def?.opacity === 0) onComplete();
//           }}
//         >
//           <motion.div
//             className="flex flex-col items-center gap-6"
//             initial={{ scale: 0.5, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             {/* Crewmate SVG */}
//             <motion.svg
//               width="120" height="144" viewBox="0 0 40 48" fill="none"
//               initial={{ y: 30 }}
//               animate={{ y: 0 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//             >
//               <rect x="8" y="10" width="24" height="28" rx="12" fill="#C51111" />
//               <rect x="20" y="6" width="14" height="14" rx="4" fill="#84FFFF" fillOpacity="0.7" />
//               <rect x="6" y="32" width="10" height="14" rx="4" fill="#C51111" />
//               <rect x="24" y="32" width="10" height="14" rx="4" fill="#C51111" />
//             </motion.svg>

//             <motion.p
//               className="font-pixel text-4xl text-[#C51111] tracking-widest uppercase font-bold"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: [0.8, 1.1, 1] }}
//               transition={{ delay: 0.8, duration: 0.6 }}
//             >
//               Shhh!
//             </motion.p>

//             <motion.p
//               className="text-gray-400 text-lg italic"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: [0, 1, 1, 0] }}
//               transition={{ delay: 1.2, duration: 2, times: [0, 0.2, 0.7, 1] }}
//             >
//               There is an impostor among us...
//             </motion.p>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default SplashScreen;

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SplashScreenProps {
  show: boolean;
  onComplete: () => void;
}

const SplashScreen = ({ show, onComplete }: SplashScreenProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [missionStarted, setMissionStarted] = useState(false);

  useEffect(() => {
    if (show && missionStarted) {
      // Initialize and play audio
      audioRef.current = new Audio("/audio1.mp3");
      audioRef.current.volume = 1.0;
      audioRef.current.play().catch((err) => console.error("Playback failed:", err));

      // TIMER: Exactly 3.5 seconds after mission starts, hide the splash screen
      // (2.5s for the Shhh animation + 1s for the exit transition)
      const timer = setTimeout(() => {
        onComplete();
      }, 4500);

      return () => {
        clearTimeout(timer);
        audioRef.current?.pause();
        audioRef.current = null;
      };
    }
  }, [show, missionStarted, onComplete]);

  const handleStartMission = () => {
    setMissionStarted(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-background"
          style={{ zIndex: 100 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }} // Smooth fade out
        >
          {!missionStarted ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.h1 
            className="text-[#84FFFF] text-5xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            INSIGNIA 2K26
          </motion.h1>
              <button
                onClick={handleStartMission}
                className="px-10 py-4 border-4 border-crew-red text-crew-red text-2xl font-bold hover:bg-crew-red hover:text-white transition-all duration-300 active:scale-95 font-pixel"
              >
                START MISSION
              </button>
            </motion.div>
          ) : (
            <motion.div
              className="flex flex-col items-center gap-1"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* <motion.svg
                width="120" height="144" viewBox="0 0 40 48" fill="none"
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {/* <rect x="8" y="10" width="24" height="28" rx="12" fill="hsl(var(--crew-red))" />
                <rect x="20" y="6" width="14" height="14" rx="4" fill="hsl(var(--crew-cyan) / 0.7)" />
                <rect x="6" y="32" width="10" height="14" rx="4" fill="hsl(var(--crew-red))" />
                <rect x="24" y="32" width="10" height="14" rx="4" fill="hsl(var(--crew-red))" />
                <rect x="12" y="38" width="6" height="8" rx="3" fill="hsl(var(--crew-red))" />
                <rect x="22" y="38" width="6" height="8" rx="3" fill="hsl(var(--crew-red))" /> */}
                
              {/* </motion.svg> */} 

                <motion.img
                  src="/sssh.png"
                  alt="Sssh Logo"
                  className="mx-auto mb-6 w-32 md:w-48"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                />

              <motion.p
                className="font-pixel text-2xl md:text-4xl text-crew-red tracking-widest uppercase"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: [0.8, 1.1, 1] }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Shhh!
              </motion.p>

              <motion.p
                className="text-muted-foreground text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ delay: 1.2, duration: 2, times: [0, 0.2, 0.7, 1] }}
              >
                There is an impostor among us...
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;