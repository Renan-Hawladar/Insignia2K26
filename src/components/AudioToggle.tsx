// import { useState, useRef, useEffect } from "react";
// import { Volume2, VolumeX } from "lucide-react";

// const AudioToggle = () => {
//   const [playing, setPlaying] = useState(true);
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   useEffect(() => {
//     audioRef.current = new Audio("/audio2.mp3");
//     audioRef.current.loop = true;
//     audioRef.current.volume = 1.0;
//     return () => {
//       audioRef.current?.pause();
//     };
//   }, []);

//   const toggle = () => {
//     if (!audioRef.current) return;
//     if (playing) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play().catch(() => {});
//     }
//     setPlaying(!playing);
//   };

//   return (
//     <button
//       onClick={toggle}
//       className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center transition-all hover:border-crew-cyan pulse-ring"
//       aria-label="Toggle audio"
//     >
//       {playing ? (
//         <Volume2 className="w-5 h-5 text-crew-cyan" />
//       ) : (
//         <VolumeX className="w-5 h-5 text-muted-foreground" />
//       )}
//     </button>
//   );
// };

// export default AudioToggle;


// import { useState, useRef, useEffect } from "react";
// import { Volume2, VolumeX } from "lucide-react";

// const AudioToggle = () => {
//   // Start as false because browsers block autoplay until a click occurs
//   const [playing, setPlaying] = useState(true);
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   useEffect(() => {
//     // Standardizing the path to your public folder
//     audioRef.current = new Audio("/audio2.mp3");
//     audioRef.current.loop = true;
//     audioRef.current.volume = 0.3; // Adjusted to 0.5 so it's not too loud for a background theme

//     return () => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current = null;
//       }
//     };
//   }, []);

//   const toggle = () => {
//     if (!audioRef.current) return;

//     if (playing) {
//       audioRef.current.pause();
//       setPlaying(false);
//     } else {
//       // Browsers will now allow this because it's triggered by a user click
//       audioRef.current.play()
//         .then(() => setPlaying(true))
//         .catch((error) => console.error("Playback failed:", error));
//     }
//   };

//   return (
//     <button
//       onClick={toggle}
//       className={`fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border-2 transition-all duration-300 flex items-center justify-center hover:scale-110 ${
//         playing ? "border-[#84FFFF] shadow-[0_0_15px_#84FFFF]" : "border-gray-500"
//       }`}
//       aria-label="Toggle audio"
//     >
//       {playing ? (
//         <Volume2 className="w-5 h-5 text-[#84FFFF]" />
//       ) : (
//         <VolumeX className="w-5 h-5 text-gray-400" />
//       )}
//     </button>
//   );
// };

// export default AudioToggle;

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const AudioToggle = () => {
  // Start as false to match the browser's initial blocked state
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    const audio = new Audio("/audio2.mp3");
    audio.loop = true;
    audio.volume = 0.1;
    audioRef.current = audio;

    // This attempt works automatically IF the user clicked "Start Mission" on the splash screen
    const attemptPlay = () => {
      audio.play()
        .then(() => setPlaying(true))
        .catch(() => {
          // Keep playing as false if browser blocks it; user will toggle manually
          setPlaying(false);
        });
    };

    attemptPlay();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play()
        .then(() => setPlaying(true))
        .catch((error) => console.error("Playback failed:", error));
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  // return (
  //   <button
  //     onClick={toggle}
  //     className={`fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border-2 transition-all duration-300 flex items-center justify-center hover:scale-110 ${
  //       playing ? "border-[#84FFFF] shadow-[0_0_15px_#84FFFF]" : "border-gray-500"
  //     }`}
  //     aria-label="Toggle audio"
  //   >
  //     {playing ? (
  //       <Volume2 className="w-5 h-5 text-[#84FFFF]" />
  //     ) : (
  //       <VolumeX className="w-5 h-5 text-gray-400" />
  //     )}
  //   </button>
  // );
  return (
    <button
      onClick={toggle}
      // Changed 'top-4' to 'bottom-6' and increased 'right-4' to 'right-6' for better mobile spacing
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border-2 transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 ${
        playing ? "border-[#84FFFF] shadow-[0_0_15px_#84FFFF]" : "border-gray-500"
      }`}
      aria-label="Toggle audio"
    >
      {playing ? (
        <Volume2 className="w-5 h-5 text-[#84FFFF]" />
      ) : (
        <VolumeX className="w-5 h-5 text-gray-400" />
      )}
    </button>
  );
};

export default AudioToggle;