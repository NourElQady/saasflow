import { motion } from "framer-motion";
import { Paintbrush, LayoutTemplate, Moon, Zap, Smartphone, Code2, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    title: "AI-Ready Design System",
    description: "Specialized components for LLM interfaces, data dashboards, and prompt UIs. Every typographic decision is tuned for technical credibility.",
    icon: Zap,
    color: "from-violet-500/20 to-indigo-500/10",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/15",
    featured: true,
    badge: "Most Used",
  },
  {
    title: "40+ Modular Sections",
    description: "Mix, match, and swap sections to build a layout that looks custom — not templated.",
    icon: LayoutTemplate,
    color: "from-blue-500/15 to-cyan-500/5",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15",
  },
  {
    title: "Flawless Dark & Light Mode",
    description: "Every component is hand-tuned for both themes. Deep-space dark, clean crisp light — toggle in one click.",
    icon: Moon,
    color: "from-slate-500/15 to-slate-500/5",
    iconColor: "text-slate-400",
    iconBg: "bg-slate-500/15",
  },
  {
    title: "Conversion-Optimized",
    description: "Button placement, spacing rhythm, and CTA sizing are all calibrated to maximize signups.",
    icon: Paintbrush,
    color: "from-pink-500/15 to-rose-500/5",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/15",
  },
  {
    title: "Responsive & Mobile-First",
    description: "Fluid typography, collapsing grids, and touch-optimized interactions across every screen size.",
    icon: Smartphone,
    color: "from-teal-500/15 to-green-500/5",
    iconColor: "text-teal-400",
    iconBg: "bg-teal-500/15",
  },
  {
    title: "Clean, Documented Code",
    description: "TypeScript strict mode, modular component structure, and inline comments. Ready to extend the moment you open it.",
    icon: Code2,
    color: "from-amber-500/15 to-orange-500/5",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/15",
  },
];

export function Features() {
  const [featured, ...rest] = features;

  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Everything you need to launch.
            <br className="hidden sm:block" />
            <span className="text-muted-foreground font-normal"> Nothing you don't.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Focused purely on what fast-moving startups actually ship with.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">

          {/* Featured card — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`md:col-span-2 relative rounded-2xl border border-border/50 bg-gradient-to-br ${featured.color} p-8 overflow-hidden group hover:border-primary/30 transition-all duration-300`}
          >
            <div className="absolute -right-8 -bottom-8 size-40 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />
            <div className="flex items-start justify-between mb-6">
              <div className={`size-12 rounded-xl ${featured.iconBg} flex items-center justify-center`}>
                <featured.icon className={`size-6 ${featured.iconColor}`} />
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {featured.badge}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3">{featured.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">{featured.description}</p>

            {/* Mini preview — simulated prompt UI */}
            <div className="rounded-xl border border-border/40 bg-background/60 backdrop-blur-sm p-4 flex flex-col gap-2 text-sm">
              <div className="flex items-start gap-2">
                <div className="size-5 rounded bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="size-2 rounded-sm bg-primary" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="h-2 bg-muted rounded-full w-full" />
                  <div className="h-2 bg-muted rounded-full w-4/5" />
                  <div className="h-2 bg-muted rounded-full w-3/5" />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-8 rounded-lg border border-border/50 bg-muted/30 flex items-center px-3 gap-2">
                  <div className="h-2 w-32 bg-muted rounded-full" />
                  <div className="ml-auto size-4 rounded bg-primary/20" />
                </div>
              </div>
            </div>

            <Link href="/components">
              <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Browse components <ArrowUpRight className="size-3.5" />
              </div>
            </Link>
          </motion.div>

          {/* Remaining 5 cards */}
          {rest.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.07 }}
              className={`relative rounded-2xl border border-border/50 bg-gradient-to-br ${feature.color} p-6 overflow-hidden group hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300`}
            >
              <div className={`size-11 rounded-xl ${feature.iconBg} flex items-center justify-center mb-5`}>
                <feature.icon className={`size-5 ${feature.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
