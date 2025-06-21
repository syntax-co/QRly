import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedGrid() {
  const size = 15; // number of squares per row/column
  const totalCells = size * size;
  const [activeCells, setActiveCells] = useState(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCells((prev) => {
        const next = new Set(prev);
        const index = Math.floor(Math.random() * totalCells);
        next.add(index);
        setTimeout(() => {
          setActiveCells((p) => {
            const n = new Set(p);
            n.delete(index);
            return n;
          });
        }, 800);
        return next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [totalCells]);

  const cells = Array.from({ length: totalCells });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="rotate-45 scale-150 grid"
        style={{
          gridTemplateColumns: `repeat(${size}, 1fr)`,
          gridTemplateRows: `repeat(${size}, 1fr)`,
          width: "150vmax",
          height: "150vmax",
        }}
      >
        {cells.map((_, i) => (
          <motion.div
            key={i}
            initial={{backgroundColor:'#FFD166'}}
            animate={{
              backgroundColor: activeCells.has(i)? "#222222": "#FFD166",
            }}
            transition={{ duration:.25 }}
            className="border-[.5px] border-[#222222] w-full aspect-square"
          />
        ))}
      </div>
    </div>
  );
}
