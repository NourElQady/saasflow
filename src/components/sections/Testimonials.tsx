import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const featured = {
  quote: "We evaluated every React template on ThemeForest. SaaSFlow was the only one that looked like it was built for 2025 — not 2018. We shipped our product in 3 days instead of 3 weeks.",
  name: "James Whitfield",
  role: "Co-Founder & CTO",
  company: "Cortex AI",
  initials: "JW",
  color: "from-violet-500 to-indigo-500",
};

const testimonials = [
  {
    quote: "SaaSFlow saved us weeks of UI work. The components look premium out of the box and the dark mode palette is stunning.",
    name: "Alex Chen",
    role: "Founder",
    company: "DataSync AI",
    initials: "AC",
    color: "from-blue-500 to-cyan-500",
  },
  {
    quote: "First template that actually feels like a modern SaaS product. Every other one felt like a glorified Bootstrap theme.",
    name: "Sarah Jenkins",
    role: "Frontend Lead",
    company: "DevTools Inc",
    initials: "SJ",
    color: "from-pink-500 to-rose-500",
  },
  {
    quote: "The dashboard alone is worth the price. We replaced our entire admin UI in two days. Clients were blown away.",
    name: "Marcus Torres",
    role: "Indie Hacker",
    company: "BuildFast",
    initials: "MT",
    color: "from-orange-500 to-amber-500",
  },
  {
    quote: "Figma file is incredibly well organised. The design tokens sync straight into our workflow. 10/10.",
    name: "Priya Nair",
    role: "Product Designer",
    company: "Orbit Studio",
    initials: "PN",
    color: "from-teal-500 to-green-500",
  },
  {
    quote: "We tried three templates before landing here. The difference in quality is night and day. Priority support sealed the deal.",
    name: "David Lim",
    role: "Tech Lead",
    company: "LaunchKit",
    initials: "DL",
    color: "from-emerald-500 to-teal-500",
  },
  {
    quote: "Light mode looks just as good as dark mode — rare for a 'dark-first' kit. Used it for a client project, they loved it.",
    name: "Anya Kovacs",
    role: "Freelance Dev",
    company: "AK Studio",
    initials: "AK",
    color: "from-purple-500 to-violet-500",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[1,2,3,4,5].map(s => (
        <svg key={s} className="size-4 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Loved by 500+ founders
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't take our word for it. Here's what builders are saying.
          </p>
        </motion.div>

        {/* Featured Quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-10 p-8 md:p-10 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 via-card/50 to-violet-500/5 relative overflow-hidden shadow-[0_0_60px_-20px_hsl(var(--primary)/0.3)]"
        >
          <div className="absolute top-6 right-8 text-primary/10">
            <Quote className="size-24 fill-current" />
          </div>
          <Stars />
          <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-6 relative z-10">
            "{featured.quote}"
          </p>
          <div className="flex items-center gap-3">
            <div className={`size-11 rounded-full bg-gradient-to-br ${featured.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
              {featured.initials}
            </div>
            <div>
              <p className="font-semibold text-sm">{featured.name}</p>
              <p className="text-xs text-muted-foreground">{featured.role}, {featured.company}</p>
            </div>
          </div>
        </motion.div>

        {/* Grid of 6 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="p-6 rounded-2xl bg-card border border-border/40 flex flex-col hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <Stars />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className={`size-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
        >
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(s => (
              <svg key={s} className="size-5 fill-amber-400" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            ))}
          </div>
          <span className="font-bold text-lg">4.9 / 5.0</span>
          <span className="text-muted-foreground text-sm">based on 500+ purchases on ThemeForest</span>
        </motion.div>
      </div>
    </section>
  );
}
