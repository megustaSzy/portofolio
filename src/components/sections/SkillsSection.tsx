import TechBadge from "@/components/ui/TechBadge";
import { SkillsType } from "@/types/portofolio";

const skills: SkillsType = {
  languages: ["Python", "Java", "Go", "Node.js"],
  frameworks: ["Django", "Spring Boot", "FastAPI"],
  databases: ["PostgreSQL", "MongoDB", "Redis"],
  tools: ["Docker", "AWS", "Git"],
};

export default function SkillsSection() {
  const categoryIcons = {
    languages: "💻",
    frameworks: "⚡",
    databases: "🗄️",
    tools: "🛠️",
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-slate-900/50 to-slate-800/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-lg">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([key, items]) => (
            <div
              key={key}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">
                  {categoryIcons[key as keyof typeof categoryIcons]}
                </span>
                <h3 className="text-2xl font-semibold text-blue-300 capitalize">
                  {key}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {items.map((i) => (
                  <TechBadge key={i} tech={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
