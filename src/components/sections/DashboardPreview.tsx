import { motion } from "framer-motion";
import { Link } from "wouter";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Users, CreditCard, Activity, Box, TrendingUp, ArrowRight } from "lucide-react";

const data = [
  { name: 'Jan', mrr: 3200, users: 840 },
  { name: 'Feb', mrr: 4600, users: 1020 },
  { name: 'Mar', mrr: 4100, users: 960 },
  { name: 'Apr', mrr: 6800, users: 1380 },
  { name: 'May', mrr: 8900, users: 1760 },
  { name: 'Jun', mrr: 10200, users: 2050 },
  { name: 'Jul', mrr: 13500, users: 2810 },
];

const transactions = [
  { name: "Acme Corp", plan: "Pro Annual", amount: "$588", status: "Completed", statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
  { name: "Alice Johnson", plan: "Pro Monthly", amount: "$49", status: "Completed", statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
  { name: "TechFlow Ltd", plan: "Starter", amount: "$29", status: "Completed", statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
  { name: "Bob Martinez", plan: "Pro Monthly", amount: "$49", status: "Pending", statusColor: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
  { name: "Sarah Wei", plan: "Extended", amount: "$149", status: "Completed", statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
];

export function DashboardPreview() {
  return (
    <section id="screenshots" className="py-24 relative overflow-hidden bg-muted/15">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
              See it in action
            </h2>
            <p className="text-muted-foreground text-lg">
              SaaSFlow isn't just marketing pages. It includes production-ready dashboard layouts, metric cards, charts, and data tables — ready to wire up to any backend.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/demo">
              <Button variant="outline" className="rounded-full group gap-2">
                Open full demo <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-border/50 bg-card shadow-2xl overflow-hidden"
        >
          {/* Browser Chrome */}
          <div className="h-11 border-b border-border/40 bg-muted/40 flex items-center px-4 gap-2 shrink-0">
            <div className="flex gap-1.5">
              <div className="size-3 rounded-full bg-destructive/70" />
              <div className="size-3 rounded-full bg-yellow-500/70" />
              <div className="size-3 rounded-full bg-green-500/70" />
            </div>
            <div className="mx-auto h-6 w-60 rounded-md bg-background/70 border border-border/40 flex items-center justify-center text-xs text-muted-foreground/50 font-mono">
              app.saasflow.dev/dashboard
            </div>
            <Badge variant="outline" className="text-xs bg-primary/5 text-primary border-primary/20">Pro Plan</Badge>
          </div>

          {/* App Layout */}
          <div className="flex" style={{ minHeight: "620px" }}>
            {/* Sidebar */}
            <div className="w-60 border-r border-border/30 bg-card/80 p-4 hidden md:flex flex-col gap-1 shrink-0">
              <div className="flex items-center gap-2 px-2 py-3 mb-3">
                <div className="size-7 rounded-lg bg-primary flex items-center justify-center">
                  <div className="size-3 border-[1.5px] border-white rounded-[3px]" />
                </div>
                <span className="font-bold text-sm">SaaSFlow App</span>
              </div>
              <p className="text-xs text-muted-foreground/60 px-3 mb-2 uppercase tracking-widest">Main</p>
              {[
                { icon: Activity, label: "Overview", active: true },
                { icon: TrendingUp, label: "Analytics", active: false },
                { icon: Users, label: "Customers", active: false },
                { icon: CreditCard, label: "Billing", active: false },
                { icon: Box, label: "Integrations", active: false },
              ].map(({ icon: Icon, label, active }) => (
                <div
                  key={label}
                  className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2.5 transition-colors ${
                    active
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  <Icon className="size-4" /> {label}
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-background/60 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold">Overview</h3>
                  <p className="text-sm text-muted-foreground">July 2025 · All metrics</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="text-xs rounded-lg h-8">Last 7 days</Button>
                  <Button size="sm" className="text-xs rounded-lg h-8">Download CSV</Button>
                </div>
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  { title: "Total Revenue", value: "$45,231", change: "+20.1%", icon: CreditCard },
                  { title: "Active Users", value: "2,810", change: "+15.2%", icon: Users },
                  { title: "API Calls", value: "1.2M", change: "+8.4%", icon: Activity },
                  { title: "Conversion", value: "5.3%", change: "+2.1%", icon: ArrowUpRight },
                ].map((stat, i) => (
                  <Card key={i} className="shadow-none border-border/40 bg-card/60">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-4">
                      <CardTitle className="text-xs font-medium text-muted-foreground">{stat.title}</CardTitle>
                      <stat.icon className="size-4 text-muted-foreground/40" />
                    </CardHeader>
                    <CardContent className="px-4 pb-4">
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-emerald-500 mt-1 font-medium flex items-center gap-0.5">
                        <ArrowUpRight className="size-3" />{stat.change}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Chart */}
              <Card className="shadow-none border-border/40 bg-card/60 mb-5">
                <CardHeader className="pb-0 pt-4 px-5">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-semibold">MRR Growth</CardTitle>
                    <div className="flex gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-primary inline-block"/>MRR</span>
                      <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-violet-400 inline-block"/>Users</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-2 px-2 pb-2">
                  <div className="h-[160px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="mrrGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="usersGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.25}/>
                            <stop offset="95%" stopColor="#a78bfa" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} dy={8} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} dx={-4} />
                        <Tooltip
                          contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '10px', fontSize: '12px' }}
                          itemStyle={{ color: 'hsl(var(--foreground))' }}
                        />
                        <Area type="monotone" dataKey="mrr" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#mrrGrad)" dot={false} />
                        <Area type="monotone" dataKey="users" stroke="#a78bfa" strokeWidth={2} fill="url(#usersGrad)" dot={false} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Transactions Table */}
              <div className="rounded-xl border border-border/40 overflow-hidden bg-card/40">
                <div className="flex items-center justify-between px-5 py-3 border-b border-border/30">
                  <span className="text-sm font-semibold">Recent Transactions</span>
                  <button className="text-xs text-primary flex items-center gap-1 hover:underline">
                    View all <ArrowRight className="size-3" />
                  </button>
                </div>
                <div className="divide-y divide-border/30">
                  {transactions.map((tx, i) => (
                    <div key={i} className="flex items-center justify-between px-5 py-3 text-sm hover:bg-muted/20 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="size-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                          {tx.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-xs">{tx.name}</div>
                          <div className="text-xs text-muted-foreground">{tx.plan}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-xs">{tx.amount}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${tx.statusColor}`}>{tx.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
