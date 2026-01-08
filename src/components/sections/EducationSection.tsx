import { GraduationCap, Award } from "lucide-react";
import { EducationItem } from "@/types/portofolio";

const education: EducationItem[] = [
  {
    degree: "Bachelor of Computer Science",
    school: "University of Technology",
    year: "2018 - 2022",
    gpa: "3.8 / 4.0",
  },
  {
    degree: "AWS Certified Solutions Architect",
    school: "Amazon Web Services",
    year: "2023",
    gpa: "Professional Certification",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <GraduationCap className="w-16 h-16 mx-auto mb-4 text-blue-400" />
          <h2 className="text-4xl font-bold mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((e, i) => (
            <div
              key={i}
              className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-8 hover:scale-105 transition"
            >
              <Award className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-blue-300">{e.degree}</h3>
              <p className="text-blue-200">{e.school}</p>
              <p className="text-gray-400">{e.year}</p>
              <p className="text-cyan-400 font-semibold mt-2">{e.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
