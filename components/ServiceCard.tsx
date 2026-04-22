import Link from "next/link";
import { Home } from "lucide-react";
import { SERVICE_ICON_MAP } from "@/lib/icons";

interface ServiceCardProps {
  slug: string;
  name: string;
  shortDesc: string;
  icon: string;
  dark?: boolean;
}

export default function ServiceCard({ slug, name, shortDesc, icon, dark = false }: ServiceCardProps) {
  const Icon = SERVICE_ICON_MAP[icon] || Home;
  return (
    <div className={`${dark ? "bg-white/5 border border-white/10" : "bg-white border border-gray-100"} rounded-xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform shadow-md`}>
      <div className="w-12 h-12 rounded-lg bg-[#4FC3F7]/15 flex items-center justify-center flex-shrink-0">
        <Icon size={24} className="text-[#4FC3F7]" />
      </div>
      <div>
        <h3 className={`font-bold text-lg mb-2 font-display ${dark ? "text-[#F5F9FC]" : "text-[#0A1628]"}`}>{name}</h3>
        <p className={`text-sm leading-relaxed ${dark ? "text-[#F5F9FC]/70" : "text-[#1A2332]/70"}`}>{shortDesc}</p>
      </div>
      <Link
        href={`/services/${slug}`}
        className="mt-auto text-[#4FC3F7] text-sm font-semibold hover:text-[#E6B800] transition-colors"
      >
        Learn More →
      </Link>
    </div>
  );
}
