import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Zap } from "lucide-react";

const roadmapItems = [
  {
    quarter: "Q2 2025",
    status: "In Progress",
    icon: Clock,
    items: [
      { name: "API Documentation", desc: "Full REST & GraphQL API docs" },
      { name: "Figma Design System", desc: "Complete design tokens & components" },
      { name: "CLI Tool", desc: "Generate boilerplate code instantly" },
    ],
  },
  {
    quarter: "Q3 2025",
    status: "Planned",
    icon: Zap,
    items: [
      { name: "Analytics Dashboard", desc: "Track template usage & metrics" },
      { name: "Community Hub", desc: "Share components & templates" },
      { name: "WhiteLabel Support", desc: "Full customization & rebranding" },
    ],
  },
  {
    quarter: "Q4 2025",
    status: "Planned",
    icon: CheckCircle2,
    items: [
      { name: "Mobile App", desc: "iOS & Android companion apps" },
      { name: "AI Assistant", desc: "Smart component generation" },
      { name: "Premium Themes", desc: "10+ additional theme packs" },
    ],
  },
];

export function Roadmap() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Product Roadmap</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's what we're building next. Feedback from our community shapes our priorities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {roadmapItems.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-border/40 hover:border-primary/50 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <phase.icon className="size-5 text-primary" />
                    <Badge variant={phase.status === "In Progress" ? "default" : "secondary"}>
                      {phase.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{phase.quarter}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {phase.items.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 4 }}
                      className="space-y-1"
                    >
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
