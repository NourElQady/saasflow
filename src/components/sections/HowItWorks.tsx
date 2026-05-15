import { motion } from "framer-motion";
import { Download, Paintbrush2, Rocket, ArrowDown } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Download & install",
    description: "Clone the repo or extract the zip. Run `pnpm install` and you're ready. Zero config, zero wrestling with tooling.",
    icon: Download,
    color: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    visual: (
      <div className="rounded-xl border border-border/40 bg-card/60 p-4 font-mono text-xs space-y-1.5">
        <div className="flex items-center gap-2 text-muted-foreground/60 mb-2">
          <div className="size-2 rounded-full bg-destructive/60" />
          <div className="size-2 rounded-full bg-yellow-500/60" />
          <div className="size-2 rounded-full bg-green-500/60" />
          <span className="ml-1">Terminal</span>
        </div>
        <div><span className="text-primary">$</span><span className="text-muted-foreground"> git clone saasflow</span></div>
        <div><span className="text-primary">$</span><span className="text-muted-foreground"> pnpm install</span></div>
        <div><span className="text-primary">$</span><span className="text-muted-foreground"> pnpm dev</span></div>
        <div className="text-emerald-500 mt-1">✓ Ready on localhost:5173</div>
      </div>
    ),
  },
  {
    id: "02",
    title: "Customise your brand",
    description: "Swap one CSS variable for your brand color — every component updates automatically. Edit copy, drop in your logo, done.",
    icon: Paintbrush2,
    color: "bg-violet-500/15 text-violet-400 border-violet-500/20",
    visual: (
      <div className="rounded-xl border border-border/40 bg-card/60 p-4 space-y-3">
        <div className="text-xs font-medium text-muted-foreground mb-3">Theme tokens</div>
        {[
          { label: "--primary", value: "239 84% 67%", color: "#6366f1" },
          { label: "--background", value: "224 71% 4%", color: "#080d1e" },
          { label: "--foreground", value: "213 31% 91%", color: "#dce3ed" },
        ].map(({ label, value, color }) => (
          <div key={label} className="flex items-center gap-3 text-xs">
            <div className="size-5 rounded border border-border/40 shrink-0" style={{ backgroundColor: color }} />
            <span className="font-mono text-primary">{label}</span>
            <span className="text-muted-foreground ml-auto">{value}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "03",
    title: "Deploy & convert",
    description: "Push to Vercel or Netlify in one command. Your product launches with a premium design that builds trust from the first visit.",
    icon: Rocket,
    color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    visual: (
      <div className="rounded-xl border border-border/40 bg-card/60 p-4 space-y-3">
        <div className="text-xs font-medium text-muted-foreground mb-2">Deploy status</div>
        {[
          { step: "Build", status: "✓ 4.2s", done: true },
          { step: "Typecheck", status: "✓ 0 errors", done: true },
          { step: "Deploy", status: "✓ Live", done: true },
        ].map(({ step, status, done }) => (
          <div key={step} className="flex items-center gap-3 text-xs">
            <div className={`size-4 rounded-full flex items-center justify-center ${done ? "bg-emerald-500/20 text-emerald-500" : "bg-muted"}`}>
              {done && <span>✓</span>}
            </div>
            <span className="font-medium">{step}</span>
            <span className="ml-auto text-emerald-500">{status}</span>
          </div>
        ))}
        <div className="mt-2 pt-2 border-t border-border/30">
          <div className="text-xs text-muted-foreground">🌍 saasflow.vercel.app</div>
        </div>
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-muted/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            From download to live in an hour
          </h2>
          <p className="text-muted-foreground text-lg">
            Three steps. No config hell. No design decisions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="grid md:grid-cols-[1fr_280px] gap-6 rounded-2xl border border-border/40 bg-card/30 p-7 hover:border-primary/20 hover:bg-card/50 transition-all duration-300">
                {/* Left */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`size-11 rounded-xl border flex items-center justify-center shrink-0 ${step.color}`}>
                      <step.icon className="size-5" />
                    </div>
                    <span className="font-display text-4xl font-bold text-muted-foreground/20">{step.id}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Right: visual */}
                <div className="flex items-center">{step.visual}</div>
              </div>

              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="flex justify-center my-1">
                  <ArrowDown className="size-4 text-muted-foreground/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
