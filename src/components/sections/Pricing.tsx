import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Shield, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const tiers = [
  {
    name: "Starter",
    monthlyPrice: 29,
    yearlyPrice: 29,
    description: "For solo founders exploring the kit.",
    features: [
      "1 landing page demo",
      "20+ UI components",
      "Dark & light mode",
      "React + TypeScript source",
      "Community support",
    ],
    notIncluded: ["Dashboard demo", "Figma design file", "Priority support"],
    cta: "Get Starter",
    popular: false,
    highlight: null,
  },
  {
    name: "Pro",
    monthlyPrice: 49,
    yearlyPrice: 49,
    description: "Everything you need to ship a startup.",
    features: [
      "3 landing page demos",
      "40+ UI components",
      "1 SaaS dashboard demo",
      "Dark & light mode",
      "React + TypeScript source",
      "Figma design file",
      "Lifetime updates",
      "Priority email support",
      "Commercial license",
    ],
    notIncluded: [],
    cta: "Get Pro — $49",
    popular: true,
    highlight: "Most Popular",
  },
  {
    name: "Extended",
    monthlyPrice: 149,
    yearlyPrice: 149,
    description: "For agencies and multi-project teams.",
    features: [
      "Everything in Pro",
      "Unlimited client projects",
      "Team license (up to 10)",
      "SaaS boilerplate starter",
      "Auth & billing scaffold",
      "Dedicated Slack support",
    ],
    notIncluded: [],
    cta: "Get Extended",
    popular: false,
    highlight: "Best for Agencies",
  },
];

const trustSignals = [
  { icon: Shield, label: "14-day refund", sublabel: "No questions asked" },
  { icon: RefreshCw, label: "Lifetime updates", sublabel: "Free forever" },
  { icon: Zap, label: "Instant download", sublabel: "Access within seconds" },
];

export function Pricing() {
  const [, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-24 bg-muted/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-5"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Pay once, use forever. No subscriptions, no surprises.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-3 bg-muted/50 border border-border/40 rounded-full px-1 py-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-background border border-border/50 shadow-sm text-foreground"
            >
              One-time
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Extended License
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`relative flex flex-col rounded-2xl border overflow-hidden ${
                tier.popular
                  ? "border-primary shadow-[0_0_40px_-12px_hsl(var(--primary)/0.5)]"
                  : "border-border/50"
              }`}
            >
              {tier.highlight && (
                <div className={`absolute top-0 inset-x-0 h-1 ${tier.popular ? "bg-gradient-to-r from-primary via-violet-500 to-purple-500" : "bg-gradient-to-r from-amber-400 to-orange-400"}`} />
              )}

              <div className={`px-6 pt-7 pb-5 ${tier.popular ? "bg-primary/5" : "bg-card/50"}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-muted-foreground">{tier.name}</span>
                  {tier.highlight && (
                    <Badge className={`text-xs ${tier.popular ? "bg-primary/10 text-primary border-primary/20" : "bg-amber-500/10 text-amber-600 border-amber-500/20"}`} variant="outline">
                      {tier.highlight}
                    </Badge>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display text-4xl font-bold">${tier.monthlyPrice}</span>
                  <span className="text-sm text-muted-foreground">one-time</span>
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <div className="px-6 py-5 flex flex-col flex-1 bg-card/20">
                <ul className="space-y-3 flex-1 mb-6">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm">
                      <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                  {tier.notIncluded.map((f, fi) => (
                    <li key={`no-${fi}`} className="flex items-start gap-3 text-sm opacity-35">
                      <div className="size-4 border border-border rounded-sm shrink-0 mt-0.5" />
                      <span className="text-muted-foreground line-through">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-xl h-11 font-semibold ${tier.popular ? "" : "border-border/60"}`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          {trustSignals.map((s, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <div className="size-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <s.icon className="size-4 text-primary" />
              </div>
              <div>
                <div className="font-semibold">{s.label}</div>
                <div className="text-xs text-muted-foreground">{s.sublabel}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
