"use client"
import { Code, Database, Server, Terminal } from "lucide-react";
import FloatingIcon from "../ui/FloatingIcon";

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <FloatingIcon icon={Code} delay={0} size={60} />
      <FloatingIcon icon={Database} delay={1} size={50} />
      <FloatingIcon icon={Server} delay={2} size={55} />
      <FloatingIcon icon={Terminal} delay={3} size={45} />
    </div>
  );
}
