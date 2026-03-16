import { useMemo } from "react";

const StarBackground = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            "--twinkle-duration": `${star.duration}s`,
            "--twinkle-delay": `${star.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default StarBackground;
