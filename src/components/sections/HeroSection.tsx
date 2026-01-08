import { Code } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
          <Code size={64} />
        </div>

        <h1 className="text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Backend Engineer
          </span>
        </h1>

        <p className="text-xl text-blue-200 mb-8">
          Building robust, scalable systems that power exceptional user
          experiences
        </p>
      </div>
    </section>
  );
}
