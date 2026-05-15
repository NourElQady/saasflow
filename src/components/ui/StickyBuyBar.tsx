import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, Star, Zap } from "lucide-react";

export function StickyBuyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed) setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl"
        >
          <div className="relative flex items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-background/90 backdrop-blur-xl px-5 py-3.5 shadow-[0_8px_40px_-8px_hsl(var(--primary)/0.4)]">
            {/* Left info */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="size-9 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                <Zap className="size-4 text-primary" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold leading-tight truncate">SaaSFlow Pro</div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} className="size-2.5 fill-amber-400 text-amber-400" />)}
                  </div>
                  <span>4.9 · 500+ sales</span>
                </div>
              </div>
            </div>

            {/* Price + CTA */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden sm:block text-right">
                <div className="text-xs text-muted-foreground line-through">$99</div>
                <div className="text-sm font-bold text-primary">$49</div>
              </div>
              <Button size="sm" className="rounded-full h-9 px-5 font-semibold shadow-[0_0_20px_-5px_hsl(var(--primary))]">
                Buy Now
              </Button>
            </div>

            {/* Dismiss */}
            <button
              onClick={() => setDismissed(true)}
              className="absolute -top-2 -right-2 size-5 rounded-full bg-muted border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="size-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
