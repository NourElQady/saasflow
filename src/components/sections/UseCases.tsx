import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Code, MonitorSmartphone, Server } from "lucide-react";

const useCases = {
  ai: {
    icon: Bot,
    heading: "Prompt interfaces & AI tools",
    description: "Specialized components for LLM wrappers, chat UIs, and generative AI products. Streaming text, loading states, and model selector patterns included.",
    bullets: ["Chat message bubbles + streaming", "Prompt input with token counter", "Model selector dropdown", "AI response loading skeletons", "Code syntax highlighting blocks"],
    visual: (
      <div className="rounded-xl bg-muted/30 border border-border/40 p-4 flex flex-col gap-3 h-full min-h-[180px]">
        <div className="self-end bg-primary/15 border border-primary/20 px-4 py-2 rounded-2xl rounded-tr-sm text-sm max-w-[80%]">
          Generate a SaaS pricing page in React
        </div>
        <div className="self-start bg-card border border-border/50 px-4 py-3 rounded-2xl rounded-tl-sm text-sm max-w-[90%] shadow-sm">
          <div className="flex gap-2 mb-2 items-center">
            <div className="size-4 rounded bg-primary flex items-center justify-center">
              <div className="size-2 rounded-sm bg-white" />
            </div>
            <span className="font-semibold text-xs text-primary">SaaSFlow AI</span>
            <span className="text-xs text-muted-foreground ml-auto animate-pulse">●</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 bg-muted rounded-full w-full" />
            <div className="h-2 bg-muted rounded-full w-5/6" />
            <div className="h-2 bg-muted rounded-full w-4/6" />
            <div className="h-2 bg-primary/20 rounded-full w-2/6 mt-2" />
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/60 px-3 py-2 mt-auto">
          <div className="h-2 flex-1 bg-muted rounded-full" />
          <div className="size-6 rounded-md bg-primary/20 shrink-0" />
        </div>
      </div>
    ),
  },
  saas: {
    icon: Server,
    heading: "Dashboards & B2B SaaS",
    description: "Complex data layouts for traditional SaaS products. Metric cards, sortable data tables, settings pages, and multi-step onboarding flows.",
    bullets: ["Metric cards with trend indicators", "Advanced data tables + pagination", "Settings page with sections", "Sidebar navigation patterns", "Multi-step forms & onboarding"],
    visual: (
      <div className="rounded-xl bg-muted/30 border border-border/40 p-4 flex flex-col gap-3 h-full min-h-[180px]">
        <div className="flex gap-2">
          {[["MRR", "$9,140", "+18%"], ["Users", "3,842", "+12%"]].map(([label, val, change]) => (
            <div key={label} className="flex-1 bg-card border border-border/50 rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-1">{label}</div>
              <div className="font-bold text-sm">{val}</div>
              <div className="text-xs text-emerald-500">{change}</div>
            </div>
          ))}
        </div>
        <div className="bg-card border border-border/50 rounded-lg p-3 flex-1">
          <div className="text-xs font-medium mb-2">Revenue</div>
          <div className="flex items-end gap-1 h-12">
            {[30, 50, 40, 70, 60, 80, 90, 75].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: i === 7 ? 'hsl(var(--primary))' : 'hsl(var(--primary)/0.3)' }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  dev: {
    icon: Code,
    heading: "Developer tools & APIs",
    description: "API documentation layouts, code blocks with copy buttons, CLI installation patterns, and architecture diagrams — everything a dev-focused product needs.",
    bullets: ["Code blocks with syntax highlighting", "API endpoint documentation", "CLI install commands UI", "Changelog / release notes", "SDK installation tabs (npm/yarn/pnpm)"],
    visual: (
      <div className="rounded-xl bg-muted/30 border border-border/40 p-4 flex flex-col gap-3 h-full min-h-[180px] font-mono text-xs">
        <div className="flex items-center justify-between mb-1">
          <span className="text-muted-foreground text-xs">POST /api/v1/generate</span>
          <span className="text-emerald-500 text-xs">200 OK</span>
        </div>
        <div className="bg-card border border-border/50 rounded-lg p-3 flex-1 space-y-1">
          <div className="text-muted-foreground">{`{`}</div>
          <div className="pl-4"><span className="text-blue-400">"model"</span><span className="text-muted-foreground">: </span><span className="text-amber-400">"saas-flow-v2"</span><span className="text-muted-foreground">,</span></div>
          <div className="pl-4"><span className="text-blue-400">"tokens"</span><span className="text-muted-foreground">: </span><span className="text-emerald-400">1024</span><span className="text-muted-foreground">,</span></div>
          <div className="pl-4"><span className="text-blue-400">"status"</span><span className="text-muted-foreground">: </span><span className="text-amber-400">"complete"</span></div>
          <div className="text-muted-foreground">{`}`}</div>
        </div>
        <div className="flex gap-2">
          {["npm", "yarn", "pnpm"].map((pkg, i) => (
            <div key={pkg} className={`px-3 py-1 rounded-md text-xs border ${i === 2 ? "bg-primary/10 border-primary/30 text-primary" : "border-border/40 text-muted-foreground"}`}>{pkg}</div>
          ))}
        </div>
      </div>
    ),
  },
  mobile: {
    icon: MonitorSmartphone,
    heading: "Mobile apps & SaaS landing pages",
    description: "App store badges, mobile device mockups, responsive hero sections, and feature carousels. Built to sell both web and native apps.",
    bullets: ["App Store / Google Play badges", "Phone mockup with screenshot", "Mobile-first hero variants", "Feature comparison for app tiers", "Download CTA with platform detect"],
    visual: (
      <div className="rounded-xl bg-muted/30 border border-border/40 p-4 flex gap-3 h-full min-h-[180px]">
        {/* Phone mockup */}
        <div className="w-20 shrink-0">
          <div className="rounded-xl border-2 border-border/60 bg-card overflow-hidden h-full flex flex-col">
            <div className="h-3 bg-muted/50 flex items-center justify-center">
              <div className="w-6 h-1 rounded-full bg-border/60" />
            </div>
            <div className="flex-1 p-1.5 flex flex-col gap-1">
              <div className="h-3 bg-primary/20 rounded w-full" />
              <div className="h-2 bg-muted rounded w-3/4" />
              <div className="flex gap-1 mt-1">
                {[1,2].map(i => <div key={i} className="flex-1 h-8 bg-muted/50 rounded border border-border/30" />)}
              </div>
              <div className="h-2 bg-muted rounded w-full" />
              <div className="h-2 bg-muted rounded w-2/3" />
            </div>
          </div>
        </div>
        {/* Badges + text */}
        <div className="flex-1 flex flex-col gap-2 justify-center">
          <div className="text-sm font-semibold">App Store Ready</div>
          <div className="space-y-2">
            {[
              { bg: "bg-foreground", text: "text-background", label: "App Store" },
              { bg: "bg-muted", text: "text-foreground", label: "Google Play" },
            ].map(({ bg, text, label }) => (
              <div key={label} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${bg} text-xs font-medium ${text}`}>
                <MonitorSmartphone className="size-3" />
                {label}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 mt-1">
            {[1,2,3,4,5].map(s => <div key={s} className="size-2 rounded-full bg-amber-400" />)}
            <span className="text-xs text-muted-foreground ml-1">4.9</span>
          </div>
        </div>
      </div>
    ),
  },
};

type UseCase = typeof useCases[keyof typeof useCases];

function UseCasePanel({ uc }: { uc: UseCase }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-2xl font-bold mb-3">{uc.heading}</h3>
        <p className="text-muted-foreground mb-5 leading-relaxed">{uc.description}</p>
        <ul className="space-y-2">
          {uc.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2.5 text-sm">
              <div className="size-1.5 rounded-full bg-primary shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-[220px]">{uc.visual}</div>
    </div>
  );
}

export function UseCases() {
  return (
    <section className="py-24 bg-muted/10 border-y border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Built for every kind of tech product
          </h2>
          <p className="text-muted-foreground text-lg">
            SaaSFlow ships with purpose-built components for four major product categories.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="ai">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-transparent p-0 gap-2 h-auto">
              {(Object.entries(useCases) as [string, UseCase][]).map(([key, uc]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="data-[state=active]:bg-card data-[state=active]:shadow-sm border border-transparent data-[state=active]:border-border/50 data-[state=active]:text-foreground py-3 rounded-xl gap-2"
                >
                  <uc.icon className="size-4" />
                  <span className="hidden sm:inline">{key === "ai" ? "AI Tools" : key === "saas" ? "SaaS" : key === "dev" ? "Dev Tools" : "Mobile"}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border/50 rounded-2xl p-7 md:p-10 shadow-lg"
            >
              {(Object.entries(useCases) as [string, UseCase][]).map(([key, uc]) => (
                <TabsContent key={key} value={key} className="m-0 focus-visible:outline-none">
                  <UseCasePanel uc={uc} />
                </TabsContent>
              ))}
            </motion.div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
