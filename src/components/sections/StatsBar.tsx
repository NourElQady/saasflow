import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Users, Layers, Star, LayoutDashboard } from "lucide-react";

function useAnimatedCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;
    if (target <= 5) { setCount(target); return; } // skip animation for tiny values
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [triggered, target, duration]);

  return { count, ref };
}

const stats = [
  {
    target: 500,
    suffix: "+",
    label: "Happy Customers",
    sublabel: "Founders & teams",
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    target: 40,
    suffix: "+",
    label: "UI Components",
    sublabel: "Production-ready",
    icon: Layers,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    target: 49,
    suffix: "",
    label: "Average Rating",
    sublabel: "On ThemeForest",
    icon: Star,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    isRating: true,
  },
  {
    target: 3,
    suffix: "",
    label: "Demo Pages",
    sublabel: "Included free",
    icon: LayoutDashboard,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

function StatCard({ stat, delay }: { stat: typeof stats[0]; delay: number }) {
  const { count, ref } = useAnimatedCounter(stat.target);
  const display = stat.isRating ? (count / 10).toFixed(1) + "★" : `${count}${stat.suffix}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center justify-center p-8 text-center group"
    >
      <div className={`inline-flex items-center justify-center size-12 rounded-2xl ${stat.bg} mb-4`}>
        <stat.icon className={`size-5 ${stat.color}`} />
      </div>
      <div className="font-display text-4xl md:text-5xl font-bold text-foreground mb-1 tracking-tight">
        {display}
      </div>
      <div className="text-sm font-semibold text-foreground/80 mb-0.5">{stat.label}</div>
      <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
    </motion.div>
  );
}

export function StatsBar() {
  return (
    <section className="py-8 md:py-12 bg-muted/20 border-y border-border/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/30">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
