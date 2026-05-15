import {
  SiReact, SiTypescript, SiTailwindcss, SiVite, SiNextdotjs,
  SiRadixui, SiGithub, SiFigma, SiVercel, SiNetlify,
  SiStripe, SiSupabase, SiCloudflare, SiFramer,
} from "react-icons/si";
import { Code2, BarChart2, Database } from "lucide-react";

type TechItem = { label: string; icon: React.ElementType };

const row1: TechItem[] = [
  { label: "React 19",       icon: SiReact },
  { label: "TypeScript 5",   icon: SiTypescript },
  { label: "Tailwind v4",    icon: SiTailwindcss },
  { label: "Vite 6",         icon: SiVite },
  { label: "Next.js",        icon: SiNextdotjs },
  { label: "Framer Motion",  icon: SiFramer },
  { label: "Radix UI",       icon: SiRadixui },
  { label: "shadcn/ui",      icon: Code2 },
  { label: "Recharts",       icon: BarChart2 },
  { label: "React Query",    icon: Database },
];

const row2: TechItem[] = [
  { label: "Vercel",         icon: SiVercel },
  { label: "Netlify",        icon: SiNetlify },
  { label: "Figma",          icon: SiFigma },
  { label: "GitHub",         icon: SiGithub },
  { label: "Stripe",         icon: SiStripe },
  { label: "Supabase",       icon: SiSupabase },
  { label: "Cloudflare",     icon: SiCloudflare },
  { label: "Vercel",         icon: SiVercel },
  { label: "Figma",          icon: SiFigma },
  { label: "GitHub",         icon: SiGithub },
];

function MarqueeItem({ item }: { item: TechItem }) {
  return (
    <div className="flex items-center gap-2.5 mx-5 shrink-0 px-4 py-2 rounded-full border border-border/30 bg-card/40 hover:bg-card/70 hover:border-border/60 transition-colors">
      <item.icon className="size-4 text-muted-foreground/70" />
      <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{item.label}</span>
    </div>
  );
}

export function TechMarquee() {
  const items1 = [...row1, ...row1];
  const items2 = [...row2, ...row2];

  return (
    <section className="py-14 overflow-hidden border-b border-border/30 bg-muted/5">
      <div className="container mx-auto px-4 text-center mb-8">
        <p className="text-xs font-semibold text-muted-foreground/50 uppercase tracking-[0.2em]">
          Works seamlessly with your entire stack
        </p>
      </div>

      <div className="relative flex flex-col gap-4 select-none">
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1 — left */}
        <div className="flex overflow-hidden">
          <div className="flex w-max animate-marquee">
            {items1.map((item, i) => <MarqueeItem key={i} item={item} />)}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className="flex overflow-hidden">
          <div className="flex w-max animate-marquee" style={{ animationDirection: "reverse" }}>
            {items2.map((item, i) => <MarqueeItem key={i} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
