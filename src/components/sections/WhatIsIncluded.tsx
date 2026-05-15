import { motion } from "framer-motion";
import { Check, Layers, FileCode2, Palette, Sparkles, LayoutDashboard, RefreshCw, Headphones, Package } from "lucide-react";

const includedItems = [
  { icon: LayoutDashboard, title: "3 Full Landing Page Demos", desc: "Production-ready templates for your next launch." },
  { icon: Layers,          title: "1 SaaS Dashboard Demo",      desc: "Fully built dashboard with charts, tables, and sidebars." },
  { icon: FileCode2,       title: "40+ UI Components",          desc: "Beautifully styled components built on shadcn/ui." },
  { icon: Sparkles,        title: "6 Hero Section Variants",    desc: "Different styles to match your brand's needs." },
  { icon: Palette,         title: "Light & Dark Mode",          desc: "Meticulously crafted for both themes out of the box." },
  { icon: Package,         title: "Figma Design File",          desc: "Original source files for seamless designer handoff." },
  { icon: RefreshCw,       title: "Lifetime Updates",           desc: "All future components and templates included free." },
  { icon: Headphones,      title: "Priority Support",           desc: "Direct access to the creator for help and guidance." },
];

const tiers = [
  {
    name: "Starter",
    price: "$29",
    badge: null,
    color: "border-border/50",
    headerColor: "bg-muted/40",
    counts: [
      { label: "Landing Page Demo", value: "1" },
      { label: "UI Components", value: "20+" },
      { label: "Dark Mode", value: "✓" },
      { label: "Lifetime Updates", value: "✓" },
      { label: "Dashboard Demo", value: "—" },
      { label: "Figma File", value: "—" },
      { label: "Priority Support", value: "—" },
    ],
  },
  {
    name: "Pro",
    price: "$49",
    badge: "Most Popular",
    color: "border-primary/50 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.4)]",
    headerColor: "bg-primary/10",
    counts: [
      { label: "Landing Page Demos", value: "3" },
      { label: "UI Components", value: "40+" },
      { label: "Dark Mode", value: "✓" },
      { label: "Lifetime Updates", value: "✓" },
      { label: "Dashboard Demo", value: "✓" },
      { label: "Figma File", value: "✓" },
      { label: "Priority Support", value: "✓" },
    ],
  },
  {
    name: "Extended",
    price: "$149",
    badge: null,
    color: "border-border/50",
    headerColor: "bg-muted/40",
    counts: [
      { label: "Landing Page Demos", value: "3" },
      { label: "UI Components", value: "40+" },
      { label: "Dark Mode", value: "✓" },
      { label: "Lifetime Updates", value: "✓" },
      { label: "Dashboard Demo", value: "✓" },
      { label: "Figma File", value: "✓" },
      { label: "Priority Support", value: "✓" },
      // Extended extras
    ],
    extras: "SaaS Boilerplate + Auth + Billing",
  },
];

export function WhatIsIncluded() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Everything you need to launch.
          </h2>
          <p className="text-muted-foreground text-lg">
            One purchase gives you the complete SaaSFlow system — no hidden extras.
          </p>
        </div>

        {/* What's Included List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 max-w-6xl mx-auto">
          {includedItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex gap-3 p-4 rounded-xl border border-border/40 bg-card/30 hover:bg-card/60 hover:border-primary/20 transition-all duration-200"
            >
              <div className="mt-0.5 shrink-0 size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="size-4 text-primary" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground leading-tight mb-1">{item.title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tier Comparison Cards */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-center mb-10">
            Choose your tier
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`rounded-2xl border ${tier.color} overflow-hidden relative`}
              >
                {tier.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg">
                    {tier.badge}
                  </div>
                )}
                <div className={`px-6 pt-7 pb-4 ${tier.headerColor}`}>
                  <div className="text-sm font-medium text-muted-foreground mb-1">{tier.name}</div>
                  <div className="font-display text-3xl font-bold">{tier.price}</div>
                  <div className="text-xs text-muted-foreground mt-1">one-time payment</div>
                </div>
                <div className="px-6 py-4 space-y-2.5">
                  {tier.counts.map((row) => (
                    <div key={row.label} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{row.label}</span>
                      <span className={`font-semibold ${row.value === "—" ? "text-muted-foreground/40" : row.value === "✓" ? "text-emerald-500" : "text-foreground"}`}>
                        {row.value === "✓" ? <Check className="size-4 inline" /> : row.value}
                      </span>
                    </div>
                  ))}
                  {tier.extras && (
                    <div className="pt-2 border-t border-border/30">
                      <div className="text-xs font-medium text-primary flex items-center gap-1.5">
                        <Sparkles className="size-3" /> {tier.extras}
                      </div>
                    </div>
                  )}
                </div>
                <div className="px-6 pb-6">
                  <button className={`w-full h-10 rounded-xl text-sm font-semibold transition-all ${tier.badge ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border/50 text-foreground hover:bg-muted/50"}`}>
                    Get {tier.name}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
