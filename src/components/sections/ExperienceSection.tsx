import { Briefcase } from "lucide-react";
import { ExperienceItem } from "@/types/portofolio";

const experience: ExperienceItem[] = [
  {
    title: "Senior Backend Engineer",
    company: "Tech Corp",
    period: "2023 - Present",
    description:
      "Leading backend development for microservices architecture serving 1M+ users.",
  },
  {
    title: "Backend Developer",
    company: "StartUp Inc",
    period: "2022 - 2023",
    description:
      "Built RESTful APIs, real-time features, and optimized database performance.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Briefcase className="w-16 h-16 mx-auto mb-4 text-blue-400" />
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500" />
        </div>

        <div className="space-y-8">
          {experience.map((e, i) => (
            <div
              key={i}
              className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-8 hover:scale-[1.02] transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-blue-300">
                    {e.title}
                  </h3>
                  <p className="text-blue-200">{e.company}</p>
                </div>
                <span className="px-4 py-1 rounded-full bg-blue-500/20 text-cyan-400 text-sm">
                  {e.period}
                </span>
              </div>

              <p className="text-gray-300 mt-4">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
