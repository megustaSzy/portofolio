type Props = { tech: string };

export default function TechBadge({ tech }: Props) {
  return (
    <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm text-blue-300 hover:scale-110 transition">
      {tech}
    </span>
  );
}
