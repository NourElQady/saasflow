import { motion } from "framer-motion";
import { Check, X, Minus, Zap } from "lucide-react";

type CellValue = "✓" | "✗" | "partial" | "depends" | string;

const rows: { name: string; saasflow: CellValue; generic: CellValue; custom: CellValue }[] = [
  { name: "Dark Mode Built-in",          saasflow: "✓",      generic: "✗",       custom: "depends" },
  { name: "AI / SaaS Focused",           saasflow: "✓",      generic: "✗",       custom: "✗"       },
  { name: "React + TypeScript",          saasflow: "✓",      generic: "✗",       custom: "depends" },
  { name: "Design System Included",      saasflow: "✓",      generic: "✗",       custom: "✓"       },
  { name: "Dashboard UI Demo",           saasflow: "✓",      generic: "✗",       custom: "✓"       },
  { name: "Framer Motion Animations",    saasflow: "✓",      generic: "✗",       custom: "depends" },
  { name: "Lifetime Updates",            saasflow: "✓",      generic: "✗",       custom: "N/A"     },
  { name: "40+ UI Components",           saasflow: "✓",      generic: "partial", custom: "✓"       },
  { name: "Ready to Ship in Minutes",    saasflow: "✓",      generic: "partial", custom: "✗"       },
  { name: "Price",                       saasflow: "$49",    generic: "$19",     custom: "$5,000+" },
  { name: "Time to Launch",             saasflow: "1 hour", generic: "1 week",  custom: "2 months"},
];

function CellContent({ value }: { value: CellValue }) {
  if (value === "✓") return <Check className="size-4 text-emerald-500" />;
  if (value === "✗") return <X className="size-4 text-destructive/60" />;
  if (value === "partial") return <div className="flex items-center gap-1.5 text-yellow-500"><Minus className="size-4" /><span className="text-xs">Partial</span></div>;
  if (value === "depends") return <div className="flex items-center gap-1.5 text-muted-foreground/70"><Minus className="size-4" /><span className="text-xs">Depends</span></div>;
  return <span className="text-sm font-semibold text-foreground">{value}</span>;
}

export function ComparisonTable() {
  return (
    <section className="py-24 bg-muted/10 border-y border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-6">
            <Zap className="size-3.5" /> The smart choice
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Why SaaSFlow wins
          </h2>
          <p className="text-muted-foreground text-lg">
            Stop reinventing the wheel. Compare your options honestly.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto overflow-x-auto rounded-2xl border border-border/40 shadow-xl"
        >
          <table className="w-full text-left border-collapse bg-card/40">
            <thead>
              <tr className="border-b border-border/40">
                <th className="p-5 text-muted-foreground font-medium text-sm w-[38%]">Feature</th>
                <th className="p-5 text-sm w-[20%] bg-primary/8 relative">
                  <div className="absolute inset-0 bg-primary/5 border-x border-primary/20 pointer-events-none" />
                  <div className="relative z-10 flex flex-col gap-1">
                    <span className="font-bold text-primary text-base">SaaSFlow</span>
                    <span className="text-xs text-primary/70 font-normal">UI Kit</span>
                  </div>
                </th>
                <th className="p-5 text-sm w-[21%]">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-foreground/80">Generic Template</span>
                    <span className="text-xs text-muted-foreground font-normal">Bootstrap / etc.</span>
                  </div>
                </th>
                <th className="p-5 text-sm w-[21%]">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-foreground/80">Custom Build</span>
                    <span className="text-xs text-muted-foreground font-normal">Hire a designer</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="group border-b border-border/30 last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="p-4 text-sm text-muted-foreground font-medium">{row.name}</td>
                  <td className="p-4 text-sm bg-primary/5 relative">
                    <div className="absolute inset-0 bg-primary/3 border-x border-primary/15 pointer-events-none group-last:rounded-b-none" />
                    <span className="relative z-10 flex items-center">
                      <CellContent value={row.saasflow} />
                    </span>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground"><CellContent value={row.generic} /></td>
                  <td className="p-4 text-sm text-muted-foreground"><CellContent value={row.custom} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
