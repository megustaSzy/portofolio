import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <Mail className="w-16 h-16 mx-auto mb-4 text-blue-400" />
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-blue-200">
            Let’s build something amazing together
          </p>
        </div>

        <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-12">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <Link href="mailto:backend@example.com" className="group">
              <Mail className="w-12 h-12 mx-auto text-blue-400 mb-2 group-hover:scale-110 transition" />
              <p>Email</p>
            </Link>

            <Link href="https://www.linkedin.com/in/raditya-ahmad/" className="group">
              <Linkedin className="w-12 h-12 mx-auto text-blue-400 mb-2 group-hover:scale-110 transition" />
              <p>LinkedIn</p>
            </Link>

            <Link href="https://github.com/megustaSzy" className="group">
              <Github className="w-12 h-12 mx-auto text-blue-400 mb-2 group-hover:scale-110 transition" />
              <p>GitHub</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
