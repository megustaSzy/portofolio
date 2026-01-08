import { Terminal, ExternalLink } from "lucide-react";
import { ProjectItem } from "@/types/portofolio";

const projects: ProjectItem[] = [
  {
    title: "Scalable E-Commerce API",
    tech: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    description: "High-performance backend handling 10k+ req/sec.",
    link: "#",
  },
  {
    title: "Real-Time Chat System",
    tech: ["Go", "WebSocket", "MongoDB"],
    description: "50k+ concurrent connections with persistence.",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Terminal className="w-16 h-16 mx-auto mb-4 text-blue-400" />
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 hover:scale-105 transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-blue-300">{p.title}</h3>
                <a href={p.link} className="text-blue-400">
                  <ExternalLink size={20} />
                </a>
              </div>

              <p className="text-gray-300 text-sm mb-3">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
