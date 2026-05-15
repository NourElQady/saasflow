import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Zap, RefreshCw, ArrowRight, Star } from "lucide-react";

const badges = [
  { icon: Shield, label: "14-day refund" },
  { icon: Zap, label: "Instant access" },
  { icon: RefreshCw, label: "Lifetime updates" },
];

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Social proof pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-500 mb-8">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => (
                <Star key={s} className="size-3 fill-current" />
              ))}
            </div>
            Rated 4.9/5 by 500+ founders
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.08]">
            Ready to build your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-purple-400">
              next big thing?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Stop pushing pixels. Get the definitive SaaS UI kit and ship a product your users will trust on day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10">
            <Button
              size="lg"
              className="h-14 px-10 text-lg font-semibold rounded-full shadow-[0_0_50px_-15px_hsl(var(--primary))] hover:shadow-[0_0_70px_-15px_hsl(var(--primary))] transition-all w-full sm:w-auto"
            >
              Buy SaaSFlow Pro — $49
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base font-semibold rounded-full bg-background/50 backdrop-blur-sm border-border/50 w-full sm:w-auto"
            >
              View live demo
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {badges.map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="size-7 rounded-full bg-primary/10 flex items-center justify-center">
                  <b.icon className="size-3.5 text-primary" />
                </div>
                {b.label}
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted-foreground/60">
            One-time payment · No subscription · Sold exclusively on ThemeForest
          </p>
        </motion.div>
      </div>
    </section>
  );
}
