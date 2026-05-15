import { useState } from "react";
import { Link } from "wouter";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity, BarChart3, CreditCard, Folder,
  LayoutDashboard, Moon, Search,
  Settings, Sun, Users, Bell, ArrowLeft,
  TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight,
  Mail, Filter, Download, Plus, Check, Globe,
} from "lucide-react";
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

/* ─── data ─────────────────────────────────────── */
const mrrData = [
  { name: "Jan", mrr: 3200, users: 840 },
  { name: "Feb", mrr: 4600, users: 1020 },
  { name: "Mar", mrr: 4100, users: 960 },
  { name: "Apr", mrr: 6800, users: 1380 },
  { name: "May", mrr: 8900, users: 1760 },
  { name: "Jun", mrr: 10200, users: 2050 },
  { name: "Jul", mrr: 13500, users: 2810 },
];

const weeklyData = [
  { day: "Mon", sessions: 1200, conversions: 54 },
  { day: "Tue", sessions: 1900, conversions: 88 },
  { day: "Wed", sessions: 1600, conversions: 72 },
  { day: "Thu", sessions: 2100, conversions: 100 },
  { day: "Fri", sessions: 2400, conversions: 115 },
  { day: "Sat", sessions: 1100, conversions: 48 },
  { day: "Sun", sessions: 900, conversions: 38 },
];

const trafficData = [
  { name: "Organic", value: 42, color: "hsl(var(--primary))" },
  { name: "Paid", value: 28, color: "#a78bfa" },
  { name: "Referral", value: 18, color: "#34d399" },
  { name: "Direct", value: 12, color: "#fb923c" },
];

const customers = [
  { id: 1, name: "Acme Corp",       email: "billing@acme.io",      plan: "Extended", mrr: "$149", status: "Active",   joined: "Jan 12, 2025" },
  { id: 2, name: "Alice Johnson",   email: "alice@datasync.ai",     plan: "Pro",      mrr: "$49",  status: "Active",   joined: "Feb 3, 2025" },
  { id: 3, name: "TechFlow Ltd",    email: "team@techflow.com",     plan: "Pro",      mrr: "$49",  status: "Active",   joined: "Feb 18, 2025" },
  { id: 4, name: "Bob Martinez",    email: "bob@launchkit.io",      plan: "Starter",  mrr: "$29",  status: "Trialing", joined: "Mar 5, 2025" },
  { id: 5, name: "Sarah Wei",       email: "sarah@orbitstudio.co",  plan: "Extended", mrr: "$149", status: "Active",   joined: "Mar 22, 2025" },
  { id: 6, name: "DevTools Inc",    email: "info@devtools.co",      plan: "Pro",      mrr: "$49",  status: "Active",   joined: "Apr 10, 2025" },
  { id: 7, name: "Marcus Torres",   email: "mt@buildfastco.com",    plan: "Starter",  mrr: "$29",  status: "Paused",   joined: "Apr 29, 2025" },
  { id: 8, name: "Cortex AI",       email: "team@cortex.ai",        plan: "Extended", mrr: "$149", status: "Active",   joined: "May 14, 2025" },
];

const transactions = [
  { id: "INV-001", name: "Acme Corp",     plan: "Extended Annual",  amount: "$1,788", date: "Jul 1, 2025",  status: "Paid" },
  { id: "INV-002", name: "Alice Johnson", plan: "Pro Monthly",      amount: "$49",    date: "Jul 3, 2025",  status: "Paid" },
  { id: "INV-003", name: "TechFlow Ltd",  plan: "Pro Monthly",      amount: "$49",    date: "Jul 7, 2025",  status: "Paid" },
  { id: "INV-004", name: "Bob Martinez",  plan: "Starter Monthly",  amount: "$29",    date: "Jul 9, 2025",  status: "Pending" },
  { id: "INV-005", name: "Sarah Wei",     plan: "Extended Monthly", amount: "$149",   date: "Jul 12, 2025", status: "Paid" },
  { id: "INV-006", name: "DevTools Inc",  plan: "Pro Annual",       amount: "$588",   date: "Jul 15, 2025", status: "Paid" },
];

/* ─── page fade ─────────────────────────────────── */
const fade = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -6 }, transition: { duration: 0.22 } };

/* ─── sub-pages ──────────────────────────────────── */
function DashboardView() {
  return (
    <motion.div {...fade}>
      <div className="flex items-center justify-between mb-7">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground text-sm">Welcome back — here's what's happening.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-xs h-8 gap-1.5">
            <Download className="size-3.5" /> Report
          </Button>
          <Button size="sm" className="text-xs h-8 gap-1.5">
            <Plus className="size-3.5" /> New Project
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {[
          { title: "Total Revenue", value: "$45,231", change: "+20.1%", up: true, icon: CreditCard },
          { title: "Active Users",  value: "2,810",   change: "+15.2%", up: true, icon: Users },
          { title: "API Calls",     value: "1.24M",   change: "+8.4%",  up: true, icon: Activity },
          { title: "Churn Rate",    value: "1.2%",    change: "-0.3%",  up: false, icon: TrendingDown },
        ].map(s => (
          <Card key={s.title} className="border-border/40">
            <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-4 space-y-0">
              <CardTitle className="text-xs font-medium text-muted-foreground">{s.title}</CardTitle>
              <s.icon className="size-3.5 text-muted-foreground/40" />
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="text-2xl font-bold">{s.value}</div>
              <p className={`text-xs mt-1 flex items-center gap-0.5 font-medium ${s.up ? "text-emerald-500" : "text-destructive"}`}>
                {s.up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />} {s.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-7 mb-6">
        <Card className="lg:col-span-4 border-border/40">
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-sm font-semibold">MRR Growth</CardTitle>
                <CardDescription className="text-xs">Revenue & user growth over 7 months</CardDescription>
              </div>
              <div className="flex gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-primary inline-block" />MRR</span>
                <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-violet-400 inline-block" />Users</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-2 px-2 pb-2">
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mrrData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="gMrr" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} dy={8} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} dx={-4} />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "10px", fontSize: "12px" }} />
                  <Area type="monotone" dataKey="mrr" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#gMrr)" dot={false} />
                  <Area type="monotone" dataKey="users" stroke="#a78bfa" strokeWidth={2} fill="url(#gUsers)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 overflow-hidden border-border/40">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {transactions.slice(0, 5).map((tx, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-2.5 border-b border-border/20 last:border-0 hover:bg-muted/20 transition-colors text-sm">
                <div className="flex items-center gap-2.5">
                  <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">{tx.name[0]}</div>
                  <div>
                    <div className="font-medium text-xs leading-none mb-0.5">{tx.name}</div>
                    <div className="text-xs text-muted-foreground">{tx.plan}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-xs">{tx.amount}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full border font-medium ${tx.status === "Paid" ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" : "text-amber-500 bg-amber-500/10 border-amber-500/20"}`}>{tx.status}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

function AnalyticsView() {
  return (
    <motion.div {...fade}>
      <div className="flex items-center justify-between mb-7">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground text-sm">Traffic, sessions, and conversion data.</p>
        </div>
        <Button variant="outline" size="sm" className="text-xs h-8 gap-1.5">
          <Download className="size-3.5" /> Export CSV
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-6">
        {[
          { label: "Page Views",   value: "128,430", change: "+12.4%", up: true },
          { label: "Sessions",     value: "41,220",  change: "+8.1%",  up: true },
          { label: "Bounce Rate",  value: "34.2%",   change: "-2.3%",  up: false },
        ].map(s => (
          <Card key={s.label} className="border-border/40">
            <CardContent className="pt-5 px-4 pb-4">
              <div className="text-xs text-muted-foreground mb-1">{s.label}</div>
              <div className="text-2xl font-bold mb-1">{s.value}</div>
              <div className={`text-xs flex items-center gap-0.5 font-medium ${s.up ? "text-emerald-500" : "text-destructive"}`}>
                {s.up ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />} {s.change} vs last period
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3 mb-6">
        <Card className="lg:col-span-2 border-border/40">
          <CardHeader className="pb-0">
            <CardTitle className="text-sm font-semibold">Weekly Sessions & Conversions</CardTitle>
          </CardHeader>
          <CardContent className="pt-2 px-2 pb-2">
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} dx={-4} />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "10px", fontSize: "12px" }} />
                  <Bar dataKey="sessions" fill="hsl(var(--primary)/0.3)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="conversions" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/40">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold">Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center mb-4">
              <div className="h-[120px] w-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={trafficData} cx="50%" cy="50%" innerRadius={35} outerRadius={55} dataKey="value" strokeWidth={0}>
                      {trafficData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="space-y-2">
              {trafficData.map(d => (
                <div key={d.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full" style={{ backgroundColor: d.color }} />
                    <span className="text-muted-foreground">{d.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={d.value} className="w-16 h-1.5" />
                    <span className="font-semibold w-6 text-right">{d.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/40">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold">Top Pages</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead className="text-xs">Page</TableHead>
                <TableHead className="text-xs">Views</TableHead>
                <TableHead className="text-xs">Avg. Time</TableHead>
                <TableHead className="text-xs">Bounce</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { page: "/",            views: "48,210", time: "2m 12s", bounce: "28%" },
                { page: "/pricing",     views: "21,440", time: "3m 44s", bounce: "18%" },
                { page: "/demo",        views: "14,320", time: "4m 58s", bounce: "12%" },
                { page: "/components",  views: "9,880",  time: "5m 22s", bounce: "9%" },
                { page: "/blog",        views: "7,100",  time: "3m 01s", bounce: "42%" },
              ].map(r => (
                <TableRow key={r.page}>
                  <TableCell className="font-mono text-xs">{r.page}</TableCell>
                  <TableCell className="text-xs">{r.views}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{r.time}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{r.bounce}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function CustomersView() {
  const [search, setSearch] = useState("");
  const filtered = customers.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  const statusColor: Record<string, string> = {
    Active:   "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    Trialing: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    Paused:   "text-amber-500 bg-amber-500/10 border-amber-500/20",
  };

  return (
    <motion.div {...fade}>
      <div className="flex items-center justify-between mb-7">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Customers</h1>
          <p className="text-muted-foreground text-sm">{customers.length} total customers</p>
        </div>
        <Button size="sm" className="text-xs h-8 gap-1.5">
          <Plus className="size-3.5" /> Invite Customer
        </Button>
      </div>

      <Card className="border-border/40">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-2.5 top-2 size-3.5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search customers..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="h-8 pl-8 text-xs bg-muted/40 border-border/40"
              />
            </div>
            <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5">
              <Filter className="size-3.5" /> Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead className="text-xs">Customer</TableHead>
                <TableHead className="text-xs">Plan</TableHead>
                <TableHead className="text-xs">MRR</TableHead>
                <TableHead className="text-xs">Status</TableHead>
                <TableHead className="text-xs">Joined</TableHead>
                <TableHead className="text-xs w-8" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map(c => (
                <TableRow key={c.id}>
                  <TableCell>
                    <div className="flex items-center gap-2.5">
                      <Avatar className="size-7">
                        <AvatarFallback className="text-xs bg-primary/10 text-primary font-bold">{c.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-xs font-semibold">{c.name}</div>
                        <div className="text-[10px] text-muted-foreground">{c.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-[10px] font-medium">{c.plan}</Badge>
                  </TableCell>
                  <TableCell className="text-xs font-semibold">{c.mrr}</TableCell>
                  <TableCell>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${statusColor[c.status]}`}>{c.status}</span>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">{c.joined}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="size-6 rounded-md">
                      <Mail className="size-3" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function BillingView() {
  return (
    <motion.div {...fade}>
      <div className="flex items-center justify-between mb-7">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Billing</h1>
          <p className="text-muted-foreground text-sm">Manage your subscription and invoices.</p>
        </div>
        <Button variant="outline" size="sm" className="text-xs h-8 gap-1.5">
          <Download className="size-3.5" /> Download All
        </Button>
      </div>

      {/* Current Plan */}
      <Card className="border-primary/30 bg-primary/3 mb-6">
        <CardContent className="p-5">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Current Plan</span>
                <Badge className="text-[10px] bg-primary/15 text-primary border-primary/20" variant="outline">Pro</Badge>
              </div>
              <div className="text-2xl font-bold">$49<span className="text-sm text-muted-foreground font-normal"> / month</span></div>
              <p className="text-xs text-muted-foreground mt-1">Renews on Aug 3, 2025 · 3 projects, 40+ components</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="text-xs h-8">Change Plan</Button>
              <Button size="sm" className="text-xs h-8">Upgrade to Extended</Button>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: "Storage Used", value: 62 },
              { label: "API Usage",    value: 38 },
              { label: "Seats Used",   value: 50 },
            ].map(item => (
              <div key={item.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <Progress value={item.value} className="h-1.5" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Invoices */}
      <Card className="border-border/40">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold">Invoice History</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead className="text-xs">Invoice</TableHead>
                <TableHead className="text-xs">Description</TableHead>
                <TableHead className="text-xs">Date</TableHead>
                <TableHead className="text-xs">Amount</TableHead>
                <TableHead className="text-xs">Status</TableHead>
                <TableHead className="text-xs w-8" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map(tx => (
                <TableRow key={tx.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">{tx.id}</TableCell>
                  <TableCell className="text-xs">{tx.plan}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{tx.date}</TableCell>
                  <TableCell className="text-xs font-semibold">{tx.amount}</TableCell>
                  <TableCell>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${tx.status === "Paid" ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" : "text-amber-500 bg-amber-500/10 border-amber-500/20"}`}>{tx.status}</span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="size-6 rounded-md">
                      <Download className="size-3" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SettingsView() {
  return (
    <motion.div {...fade}>
      <div className="mb-7">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground text-sm">Manage your account and workspace preferences.</p>
      </div>

      <div className="grid gap-4 max-w-2xl">
        <Card className="border-border/40">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Profile</CardTitle>
            <CardDescription className="text-xs">Your personal information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar className="size-14">
                <AvatarFallback className="bg-primary text-primary-foreground font-bold text-base">JD</AvatarFallback>
              </Avatar>
              <div>
                <Button variant="outline" size="sm" className="text-xs h-7 mb-1">Change avatar</Button>
                <p className="text-xs text-muted-foreground">PNG, JPG up to 2MB</p>
              </div>
            </div>
            <div className="grid gap-3">
              {[
                { label: "Full Name",    placeholder: "John Doe",          type: "text" },
                { label: "Email",        placeholder: "john@example.com",  type: "email" },
                { label: "Company",      placeholder: "Acme Corp",         type: "text" },
              ].map(f => (
                <div key={f.label} className="space-y-1">
                  <label className="text-xs font-medium">{f.label}</label>
                  <Input type={f.type} placeholder={f.placeholder} className="h-8 text-xs" defaultValue={f.placeholder} />
                </div>
              ))}
            </div>
            <Button size="sm" className="text-xs h-8 gap-1.5"><Check className="size-3.5" /> Save changes</Button>
          </CardContent>
        </Card>

        <Card className="border-border/40">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Notifications</CardTitle>
            <CardDescription className="text-xs">Choose what you'd like to be notified about.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: "New subscriptions",   desc: "When a new customer subscribes",    on: true },
              { label: "Failed payments",     desc: "When a payment fails or is disputed", on: true },
              { label: "Weekly digest",       desc: "A summary of your metrics each week", on: false },
              { label: "Product updates",     desc: "New features and component releases", on: true },
            ].map(n => (
              <div key={n.label} className="flex items-center justify-between py-2 border-b border-border/20 last:border-0">
                <div>
                  <div className="text-xs font-medium">{n.label}</div>
                  <div className="text-xs text-muted-foreground">{n.desc}</div>
                </div>
                <div className={`size-10 rounded-full flex items-center justify-center text-xs font-semibold ${n.on ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                  {n.on ? "On" : "Off"}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

/* ─── sidebar nav ─────────────────────────────── */
type Page = "dashboard" | "analytics" | "customers" | "billing" | "settings";

const navItems: { id: Page; label: string; icon: React.ElementType; badge?: string }[] = [
  { id: "dashboard",  label: "Dashboard",  icon: LayoutDashboard },
  { id: "analytics",  label: "Analytics",  icon: BarChart3 },
  { id: "customers",  label: "Customers",  icon: Users, badge: "New" },
  { id: "billing",    label: "Billing",    icon: CreditCard },
];
const systemItems: { id: Page; label: string; icon: React.ElementType }[] = [
  { id: "settings", label: "Settings", icon: Settings },
];

/* ─── main component ─────────────────────────── */
export default function DemoPage() {
  const { theme, setTheme } = useTheme();
  const [page, setPage] = useState<Page>("dashboard");

  const pages: Record<Page, React.ReactNode> = {
    dashboard: <DashboardView />,
    analytics: <AnalyticsView />,
    customers: <CustomersView />,
    billing: <BillingView />,
    settings: <SettingsView />,
  };

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden font-sans">

      {/* Sidebar */}
      <aside className="w-60 border-r border-border/40 bg-card/30 hidden md:flex flex-col shrink-0">
        <div className="h-14 flex items-center px-5 border-b border-border/40">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded bg-primary flex items-center justify-center">
              <div className="size-2 border-[1.5px] border-white rounded-[2px]" />
            </div>
            <span className="font-display font-bold tracking-tight text-sm">SaaSFlow App</span>
          </div>
        </div>

        <div className="flex-1 py-5 px-3 overflow-y-auto">
          <p className="text-[10px] font-semibold text-muted-foreground/50 uppercase tracking-widest px-2 mb-2">Main</p>
          <nav className="space-y-0.5 mb-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`w-full flex items-center justify-between px-2 py-2 rounded-lg text-sm font-medium transition-colors ${
                  page === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <item.icon className="size-4" />
                  {item.label}
                </div>
                {item.badge && (
                  <Badge variant="secondary" className="text-[9px] h-4 px-1.5 bg-primary/15 text-primary hover:bg-primary/15 border-0">
                    {item.badge}
                  </Badge>
                )}
              </button>
            ))}
          </nav>

          <p className="text-[10px] font-semibold text-muted-foreground/50 uppercase tracking-widest px-2 mb-2">System</p>
          <nav className="space-y-0.5">
            {systemItems.map(item => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm font-medium transition-colors ${
                  page === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <item.icon className="size-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-3 border-t border-border/40">
          <div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-muted/30 mb-2">
            <Avatar className="size-7 shrink-0">
              <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold truncate">John Doe</div>
              <div className="text-[10px] text-muted-foreground truncate">Pro Plan</div>
            </div>
          </div>
          <Link href="/">
            <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground text-xs h-7">
              <ArrowLeft className="mr-2 size-3.5" /> Back to Website
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-14 flex items-center justify-between px-5 border-b border-border/40 bg-background shrink-0">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-2.5 top-2 size-3.5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="h-8 bg-muted/40 border-border/30 pl-8 text-xs focus-visible:ring-primary"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="size-8" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
            <Button variant="ghost" size="icon" className="size-8 relative">
              <Bell className="size-4" />
              <span className="absolute top-1.5 right-1.5 size-1.5 bg-destructive rounded-full" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="size-8 rounded-full p-0">
                  <Avatar className="size-8">
                    <AvatarFallback className="bg-primary text-primary-foreground font-bold text-xs">JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel className="text-xs">John Doe</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-xs">Profile</DropdownMenuItem>
                <DropdownMenuItem className="text-xs" onClick={() => setPage("billing")}>Billing</DropdownMenuItem>
                <DropdownMenuItem className="text-xs" onClick={() => setPage("settings")}>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-xs text-destructive">Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page */}
        <div className="flex-1 overflow-y-auto p-5 md:p-7">
          <AnimatePresence mode="wait">
            <div key={page}>
              {pages[page]}
            </div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
