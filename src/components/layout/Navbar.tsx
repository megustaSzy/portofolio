"use client";
import { useState } from "react";

const menus = [
  "Home",
  "Education",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-slate-900/80 backdrop-blur border-b border-blue-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          &lt;Backend Dev /&gt;
        </div>

        <div className="flex gap-6">
          {menus.map((m) => {
            const id = m.toLowerCase();
            return (
              <a
                key={m}
                href={`#${id}`}
                onClick={() => setActive(id)}
                className="relative group hover:text-blue-400 transition"
              >
                {m}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-400 group-hover:w-full transition-all" />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
