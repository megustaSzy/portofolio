"use client";
import { useEffect, useState } from "react";

type Props = {
  icon: React.ElementType;
  delay: number;
  size?: number;
};

export default function FloatingIcon({ icon: Icon, delay, size = 40 }: Props) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const move = () =>
      setPos({ x: Math.random() * 100, y: Math.random() * 100 });

    move();
    const i = setInterval(move, 3000 + delay * 1000);
    return () => clearInterval(i);
  }, [delay]);

  if (!pos) return null;

  return (
    <div
      className="absolute opacity-10 transition-all duration-[3000ms]"
      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
    >
      <Icon size={size} className="text-blue-400" />
    </div>
  );
}
