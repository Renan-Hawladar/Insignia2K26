// import { motion } from "framer-motion";
// import { Siren } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-[20vh] flex flex-col items-center justify-center px-4 text-center">
      
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.7 }}
//         className="max-w-3xl"
//       >
//         {/* Logo */}
//         <motion.img
//           src="/logo.png"
//           alt="Insignia 2k26 Logo"
//           className="mx-auto mt-[15px] mb-6 w-32 md:w-48"
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.2, type: "spring" }}
//         />

//         <motion.div
//           className="inline-block mb-6 px-4 py-2 rounded-full border-2 border-crew-cyan/30 bg-muted/50"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.5, type: "spring" }}
//         >
//           <span className="text-xs font-pixel text-crew-cyan">
//             TRANSMISSION INCOMING
//           </span>
//         </motion.div>

//         <h1 className="font-pixel text-xl md:text-3xl lg:text-4xl leading-relaxed mb-6">
//           <span className="text-foreground">Mission: </span>
//           <span className="text-crew-yellow glow-text">Turn Data</span>
//           <br />
//           <span className="text-foreground">into </span>
//           <span className="text-crew-cyan glow-text">Insights</span>
//         </h1>

//         <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto font-body">
//           <b>The Department of Computer Science & Engineering is back with INSIGNIA 2K26,
//           an inter-college event in association with IIC, MCKVIE!
//           </b>
//         </p>

//         <motion.a
//           href="https://forms.gle/g2sD5zqgcEWUsQrB9"
//           className="emergency-btn inline-flex items-center gap-3"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Siren className="w-5 h-5" />
//           EMERGENCY MEETING
//           <Siren className="w-5 h-5" />
//         </motion.a>

//         <p className="mt-4 text-xs text-crew-red font-pixel animate-pulse">
//           ▲ REGISTER NOW ▲
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

import { motion } from "framer-motion";
import { Siren } from "lucide-react";

const HeroSection = () => {
  // Array to map through the 5 logos
  const topLogos = [
    { src: "/logo2.png", name: "Logo 2" },
    { src: "/logo3.png", name: "Logo 3" },
    { src: "/logo4.png", name: "Logo 4" },
    { src: "/logo5.png", name: "Logo 5" },
    { src: "/logo6.png", name: "Logo 6" },
    { src: "/logo7.png", name: "Logo 7" },
    { src: "/logo8.png", name: "Logo 8" },
    { src: "/logo9.png", name: "Logo 8" },
    { src: "/logo10.png", name: "Logo 8" },
  ];

  return (
    <section className="relative min-h-[20vh] flex flex-col items-center justify-center px-4 text-center">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="max-w-3xl"
      >
        {/* --- 5 LOGOS IN A ROW --- */}
        {/* --- LIGHT HIGH-CONTRAST LOGO PANEL --- */}
        <motion.div 
          className="flex w-fit mx-auto flex-row justify-center items-center gap-4 md:gap-8 p-1 mt-5 rounded-2xl bg-white/50 backdrop-blur-xl border-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          {topLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="w-10 h-10 md:w-16 md:h-16 object-contain brightness-100 contrast-150" 
              />
            </div>
          ))}
        </motion.div>

        {/* Main Insignia Logo */}
        <motion.img
          src="/logo.png"
          alt="Insignia 2k26 Logo"
          className="mx-auto mt-[15px] mb-6 w-32 md:w-48"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        />

        <motion.div
          className="inline-block mb-6 px-4 py-2 rounded-full border-2 border-crew-cyan/30 bg-muted/50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <span className="text-xs font-pixel text-crew-cyan">
            TRANSMISSION INCOMING
          </span>
        </motion.div>

        <h1 className="font-pixel text-xl md:text-3xl lg:text-4xl leading-relaxed mb-6">
          <span className="text-white">Mission: </span>
          <span className="text-crew-yellow glow-text">Turn Data</span>
          <br />
          <span className="text-white">into </span>
          <span className="text-crew-cyan glow-text">Insights</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto font-body">
          <b>The Department of Computer Science & Engineering is back with INSIGNIA 2K26,
          an inter-college event in association with IIC, MCKVIE!
          </b>
        </p>

        <motion.a
          href="https://forms.gle/g2sD5zqgcEWUsQrB9"
          target="_blank"
          className="emergency-btn inline-flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Siren className="w-5 h-5" />
          EMERGENCY MEETING
          <Siren className="w-5 h-5" />
        </motion.a>

        <p className="mt-4 text-xs text-crew-red font-pixel animate-pulse">
          ▲ REGISTER NOW ▲
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;