import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Sparkles, ArrowRight, AlertCircle } from "lucide-react";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email) {
      setError("Please enter a valid email");
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    setSubscribed(true);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,hsl(var(--primary)/0.06),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-sm p-8 md:p-12 shadow-xl text-center"
          >
            <div className="inline-flex items-center justify-center size-14 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="size-6 text-primary" />
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Stay ahead of the curve
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              New components, design patterns, and exclusive early-access deals — delivered straight to your inbox.
            </p>

            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    <CheckCircle2 className="size-5" />
                    <span className="font-semibold">You're on the list!</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We'll reach out soon. Keep building. 🚀
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="you@startup.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      className={`w-full h-12 px-5 rounded-full border-border/50 bg-background focus-visible:ring-primary transition-colors ${
                        error ? "border-destructive focus-visible:ring-destructive" : ""
                      }`}
                    />
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-destructive mt-1.5 flex items-center gap-1"
                      >
                        <AlertCircle className="size-3" /> {error}
                      </motion.p>
                    )}
                  </div>
                  <Button type="submit" size="lg" className="h-12 px-7 rounded-full font-semibold gap-2 shrink-0 hover:scale-105 transition-transform">
                    Subscribe <ArrowRight className="size-4" />
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>

            <p className="text-xs text-muted-foreground/50 mt-5">
              No spam, ever. Unsubscribe with one click.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
