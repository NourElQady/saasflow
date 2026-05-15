import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiVercel, SiLinear, SiNotion, SiFigma, SiRaycast, SiLoom, SiReact, SiTypescript, SiTailwindcss, SiVite, SiRadixui, SiFramer } from "react-icons/si";
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { Activity, CreditCard, Users, TrendingUp, ArrowUpRight, ArrowRight, Code2, BarChart2 } from 'lucide-react';
import { Link } from "wouter";

type TechBadge = { label: string; Icon: React.ElementType };
const techBadges: TechBadge[] = [
  { label: "React 19",      Icon: SiReact },
  { label: "TypeScript 5",  Icon: SiTypescript },
  { label: "Tailwind v4",   Icon: SiTailwindcss },
  { label: "shadcn/ui",     Icon: Code2 },
  { label: "Framer Motion", Icon: SiFramer },
  { label: "Recharts",      Icon: BarChart2 },
  { label: "Vite 6",        Icon: SiVite },
  { label: "Radix UI",      Icon: SiRadixui },
];
const techBadgesDouble = [...techBadges, ...techBadges];

const chartData = [
  { name: 'Jan', mrr: 3200 },
  { name: 'Feb', mrr: 4100 },
  { name: 'Mar', mrr: 3800 },
  { name: 'Apr', mrr: 5200 },
  { name: 'May', mrr: 6800 },
  { name: 'Jun', mrr: 7400 },
  { name: 'Jul', mrr: 9100 },
];

const recentActivity = [
  { user: "Alex Chen", action: "Upgraded to Pro", amount: "+$49", color: "text-emerald-500" },
  { user: "Sarah M.", action: "New subscription", amount: "+$29", color: "text-emerald-500" },
  { user: "TechCorp", action: "Annual plan", amount: "+$490", color: "text-emerald-500" },
];

export function Hero() {
  return (
    <section className="relative pt-28 pb-0 md:pt-36 overflow-hidden hero-section">
      {/* Background Glow — dark: deep indigo blobs, light: soft indigo wash */}
      <div className="absolute inset-0 pointer-events-none hero-bg-gradient" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/20 rounded-full blur-[140px] opacity-70 dark:opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/15 dark:bg-violet-500/10 rounded-full blur-[120px] opacity-60 dark:opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] opacity-50 dark:opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Main Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="flex size-2 rounded-full bg-primary mr-2 animate-pulse" />
            SaaSFlow UI Kit 2.0 is live
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
            Ship your startup <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-purple-400">
              looking like a Series A
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The definitive landing page system for serious tech founders. A modular UI kit that breathes ambition and precision into your product launch.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base font-semibold rounded-full shadow-[0_0_40px_-10px_hsl(var(--primary))] hover:shadow-[0_0_60px_-15px_hsl(var(--primary))] transition-all">
              Launch your product
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Link href="/components">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base font-semibold rounded-full bg-background/50 backdrop-blur-sm border-border/50">
                View components
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Animated "Built with" Tech Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <p className="text-xs font-medium text-muted-foreground/50 uppercase tracking-widest mb-3">Built with</p>
          <div className="flex overflow-hidden">
            <div className="flex w-max animate-marquee gap-0">
              {techBadgesDouble.map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 mx-2.5 px-3 py-1.5 rounded-full border border-border/40 bg-muted/30 text-xs font-medium text-muted-foreground whitespace-nowrap"
                >
                  <tech.Icon className="size-3 opacity-70" />
                  {tech.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 pt-8 border-t border-border/30"
        >
          <p className="text-xs font-medium text-muted-foreground/60 mb-5 uppercase tracking-widest">Trusted by teams from</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-40 hover:opacity-70 transition-opacity duration-500">
            <SiVercel className="size-5 md:size-7" />
            <SiLinear className="size-5 md:size-7" />
            <SiRaycast className="size-5 md:size-7" />
            <SiNotion className="size-5 md:size-7" />
            <SiFigma className="size-5 md:size-7" />
            <SiLoom className="size-5 md:size-7" />
          </div>
        </motion.div>
        
        {/* Inline Dashboard Visual — Full Width, Cropped Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 mx-auto max-w-5xl relative"
        >
          {/* Glow under mockup */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/20 blur-3xl rounded-full pointer-events-none" />

          <div className="rounded-t-xl overflow-hidden border border-border/50 border-b-0 shadow-[0_-8px_60px_-15px_hsl(var(--primary)/0.3)] relative bg-card">
            {/* Browser Chrome */}
            <div className="h-11 border-b border-border/40 bg-muted/40 flex items-center px-4 gap-2 shrink-0">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-destructive/70" />
                <div className="size-3 rounded-full bg-yellow-500/70" />
                <div className="size-3 rounded-full bg-green-500/70" />
              </div>
              <div className="mx-auto h-6 w-56 rounded-md bg-background/60 border border-border/40 flex items-center justify-center text-xs text-muted-foreground/50 font-mono">
                app.saasflow.dev/dashboard
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-medium border border-emerald-500/20">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                Live
              </div>
            </div>
            
            <div className="flex overflow-hidden" style={{ height: "420px" }}>
              {/* Sidebar */}
              <div className="w-52 border-r border-border/30 bg-card/80 p-4 hidden sm:flex flex-col gap-1 text-left shrink-0">
                <div className="px-3 py-2 rounded-lg bg-primary/15 text-primary text-sm font-medium flex items-center gap-2.5 mb-1">
                  <Activity className="size-4" /> Dashboard
                </div>
                <div className="px-3 py-2 rounded-lg text-muted-foreground text-sm flex items-center gap-2.5 hover:bg-muted/40 transition-colors">
                  <TrendingUp className="size-4" /> Analytics
                </div>
                <div className="px-3 py-2 rounded-lg text-muted-foreground text-sm flex items-center gap-2.5 hover:bg-muted/40 transition-colors">
                  <Users className="size-4" /> Customers
                </div>
                <div className="px-3 py-2 rounded-lg text-muted-foreground text-sm flex items-center gap-2.5 hover:bg-muted/40 transition-colors">
                  <CreditCard className="size-4" /> Billing
                </div>
                <div className="mt-auto pt-4 border-t border-border/30">
                  <div className="flex items-center gap-2 px-2">
                    <div className="size-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">JD</div>
                    <div>
                      <div className="text-xs font-medium">Jane Doe</div>
                      <div className="text-xs text-muted-foreground">Pro Plan</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-5 bg-background/60 overflow-hidden flex flex-col gap-4 text-left">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-sm">Overview</h3>
                    <p className="text-xs text-muted-foreground">July 2025</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-xs px-2 py-1 rounded-md bg-muted/50 border border-border/40 text-muted-foreground">Last 30 days</div>
                    <div className="text-xs px-2 py-1 rounded-md bg-primary text-primary-foreground font-medium">Export</div>
                  </div>
                </div>

                {/* 4 Metric Cards */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: "MRR", value: "$9,140", change: "+18.2%", icon: TrendingUp },
                    { label: "Active Users", value: "3,842", change: "+12.4%", icon: Users },
                    { label: "Conversion", value: "5.3%", change: "+0.8%", icon: Activity },
                    { label: "Churn Rate", value: "1.2%", change: "-0.3%", icon: CreditCard },
                  ].map((card) => (
                    <div key={card.label} className="rounded-lg border border-border/40 p-3 bg-card/50">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-muted-foreground">{card.label}</span>
                        <card.icon className="size-3 text-muted-foreground/60" />
                      </div>
                      <div className="font-bold text-sm">{card.value}</div>
                      <div className="text-xs text-emerald-500 flex items-center gap-0.5 mt-0.5">
                        <ArrowUpRight className="size-3" />{card.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart + Recent Activity */}
                <div className="flex gap-4 flex-1 min-h-0">
                  <div className="flex-1 rounded-lg border border-border/40 p-3 bg-card/30 flex flex-col min-h-0">
                    <div className="text-xs font-medium mb-2">MRR Growth</div>
                    <div className="flex-1 min-h-0">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.35} />
                              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <Area type="monotone" dataKey="mrr" stroke="hsl(var(--primary))" fill="url(#heroGrad)" strokeWidth={2} dot={false} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div className="w-48 rounded-lg border border-border/40 p-3 bg-card/30 flex flex-col gap-2">
                    <div className="text-xs font-medium">Recent Activity</div>
                    {recentActivity.map((item, i) => (
                      <div key={i} className="flex flex-col gap-0.5 pb-2 border-b border-border/30 last:border-0">
                        <div className="text-xs font-medium truncate">{item.user}</div>
                        <div className="text-xs text-muted-foreground truncate">{item.action}</div>
                        <div className={`text-xs font-semibold ${item.color}`}>{item.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
