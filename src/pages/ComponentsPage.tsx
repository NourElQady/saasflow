import { Navbar } from "@/components/layout/Navbar";
import { Link } from "wouter";
import { ArrowLeft, Search, Settings, Bell, Check, CreditCard, Activity, ArrowUpRight, TrendingUp } from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid,
  Tooltip as RechartsTooltip, ResponsiveContainer, Legend,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="mr-2 size-4" /> Back to landing page
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Component Library</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Every component ships with dark mode, accessibility, and TypeScript built in.
          </p>
        </div>

        <Tabs defaultValue="buttons" className="w-full">
          <TabsList className="mb-8 flex-wrap h-auto p-1 bg-muted/50 rounded-xl">
            <TabsTrigger value="buttons" className="rounded-lg">Buttons</TabsTrigger>
            <TabsTrigger value="forms" className="rounded-lg">Forms</TabsTrigger>
            <TabsTrigger value="cards" className="rounded-lg">Cards</TabsTrigger>
            <TabsTrigger value="data" className="rounded-lg">Data Display</TabsTrigger>
            <TabsTrigger value="charts" className="rounded-lg">Charts</TabsTrigger>
            <TabsTrigger value="nav" className="rounded-lg">Navigation</TabsTrigger>
            <TabsTrigger value="overlays" className="rounded-lg">Overlays</TabsTrigger>
          </TabsList>

          <TabsContent value="buttons" className="space-y-8">
            <div className="rounded-xl border border-border/50 p-8 bg-card/30">
              <h3 className="text-lg font-semibold mb-6">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            <div className="rounded-xl border border-border/50 p-8 bg-card/30">
              <h3 className="text-lg font-semibold mb-6">Sizes & States</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button>Default Size</Button>
                <Button size="lg">Large Size</Button>
                <Button disabled>Disabled</Button>
                <Button className="rounded-full">Rounded</Button>
              </div>
            </div>

            <div className="rounded-xl border border-border/50 p-8 bg-card/30">
              <h3 className="text-lg font-semibold mb-6">With Icons</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button><Check className="mr-2 size-4" /> Accept</Button>
                <Button variant="outline"><Search className="mr-2 size-4" /> Search</Button>
                <Button size="icon" variant="secondary"><Settings className="size-4" /></Button>
                <Button size="icon" variant="ghost" className="rounded-full"><Bell className="size-4" /></Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="forms">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Input Elements</CardTitle>
                  <CardDescription>Basic form controls.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Tell us about yourself." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="framework">Framework</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select a framework" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="react">React</SelectItem>
                        <SelectItem value="vue">Vue</SelectItem>
                        <SelectItem value="svelte">Svelte</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Controls</CardTitle>
                  <CardDescription>Switches, checkboxes, and sliders.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <Label className="text-base">Marketing emails</Label>
                      <p className="text-sm text-muted-foreground">Receive emails about new products.</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="font-normal">Accept terms and conditions</Label>
                  </div>

                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1" className="font-normal">Default</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <Label htmlFor="r2" className="font-normal">Comfortable</Label>
                    </div>
                  </RadioGroup>

                  <div className="space-y-4">
                    <Label>Volume</Label>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="cards">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Alpha</CardTitle>
                  <CardDescription>Created just now</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">A simple info card pattern for displaying basic entities.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Details</Button>
                </CardFooter>
              </Card>

              {/* Metric Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <CreditCard className="size-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-emerald-500 mt-1 flex items-center"><ArrowUpRight className="size-3 mr-1"/> +20.1% from last month</p>
                </CardContent>
              </Card>

              {/* Profile Card */}
              <Card className="flex flex-col items-center p-6 text-center">
                <Avatar className="size-20 mb-4">
                  <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">Jane Doe</h3>
                <p className="text-sm text-muted-foreground mb-4">Product Designer</p>
                <Button variant="secondary" className="w-full rounded-full">Follow</Button>
              </Card>

              {/* Pricing Card Preview */}
              <Card className="border-primary bg-primary/5">
                <CardHeader>
                  <Badge className="w-fit mb-2">Pro</Badge>
                  <CardTitle className="text-2xl">$29<span className="text-sm text-muted-foreground font-normal">/mo</span></CardTitle>
                  <CardDescription>For growing teams</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex items-center"><Check className="size-4 mr-2 text-primary" /> Everything in Free</div>
                  <div className="flex items-center"><Check className="size-4 mr-2 text-primary" /> Priority support</div>
                  <div className="flex items-center"><Check className="size-4 mr-2 text-primary" /> Unlimited projects</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Subscribe</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="data" className="space-y-8">
            <div className="rounded-xl border border-border/50 p-8 bg-card/30">
              <h3 className="text-lg font-semibold mb-6">Badges</h3>
              <div className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge className="bg-emerald-500 hover:bg-emerald-600">Success</Badge>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-border/50 p-8 bg-card/30">
                <h3 className="text-lg font-semibold mb-6">Progress</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Uploading...</span>
                      <span className="text-muted-foreground">75%</span>
                    </div>
                    <Progress value={75} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Storage</span>
                      <span className="text-muted-foreground">40%</span>
                    </div>
                    <Progress value={40} />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border/50 p-8 bg-card/30">
                <h3 className="text-lg font-semibold mb-6">Avatars</h3>
                <div className="flex items-center gap-4">
                  <Avatar className="size-12 border-2 border-background">
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <Avatar className="size-12 border-2 border-background">
                    <AvatarFallback className="bg-primary text-primary-foreground">B</AvatarFallback>
                  </Avatar>
                  <Avatar className="size-12 border-2 border-background">
                    <AvatarFallback className="bg-destructive text-destructive-foreground">C</AvatarFallback>
                  </Avatar>
                  <div className="flex -space-x-4">
                     <Avatar className="size-10 border-2 border-background"><AvatarFallback>1</AvatarFallback></Avatar>
                     <Avatar className="size-10 border-2 border-background"><AvatarFallback>2</AvatarFallback></Avatar>
                     <Avatar className="size-10 border-2 border-background"><AvatarFallback>3</AvatarFallback></Avatar>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border/50 overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell><Badge variant="outline">Paid</Badge></TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV002</TableCell>
                    <TableCell><Badge variant="secondary">Pending</Badge></TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV003</TableCell>
                    <TableCell><Badge variant="outline">Paid</Badge></TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV004</TableCell>
                    <TableCell><Badge variant="destructive">Failed</Badge></TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$450.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV005</TableCell>
                    <TableCell><Badge variant="outline">Paid</Badge></TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$550.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="nav" className="space-y-8">
            <div className="rounded-xl border border-border/50 p-8 bg-card/30">
              <h3 className="text-lg font-semibold mb-6">Breadcrumbs</h3>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Navigation</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="rounded-xl border border-border/50 p-8 bg-card/30">
              <h3 className="text-lg font-semibold mb-6">Pagination</h3>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </TabsContent>

          <TabsContent value="overlays" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-xl border border-border/50 p-8 bg-card/30 flex flex-col items-center justify-center text-center">
                <h3 className="text-lg font-semibold mb-6">Dialog</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end gap-3 mt-4">
                      <Button variant="outline">Cancel</Button>
                      <Button variant="destructive">Continue</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="rounded-xl border border-border/50 p-8 bg-card/30 flex flex-col items-center justify-center text-center">
                <h3 className="text-lg font-semibold mb-6">Tooltip</h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon"><Settings className="size-4" /></Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Settings</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="rounded-xl border border-border/50 p-8 bg-card/30 flex flex-col items-center justify-center text-center">
                <h3 className="text-lg font-semibold mb-6">Popover</h3>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Open Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dimensions</h4>
                        <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="width">Width</Label>
                          <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </TabsContent>

          {/* ── Charts ──────────────────────────────────── */}
          <TabsContent value="charts" className="space-y-8">

            {(() => {
              const areaData = [
                { month: "Jan", revenue: 3200, users: 840 },
                { month: "Feb", revenue: 4800, users: 1020 },
                { month: "Mar", revenue: 4200, users: 960 },
                { month: "Apr", revenue: 6800, users: 1380 },
                { month: "May", revenue: 9100, users: 1760 },
                { month: "Jun", revenue: 11400, users: 2050 },
                { month: "Jul", revenue: 13800, users: 2810 },
              ];

              const barData = [
                { day: "Mon", sessions: 1200, conversions: 54 },
                { day: "Tue", sessions: 1900, conversions: 88 },
                { day: "Wed", sessions: 1600, conversions: 72 },
                { day: "Thu", sessions: 2100, conversions: 100 },
                { day: "Fri", sessions: 2400, conversions: 115 },
                { day: "Sat", sessions: 1100, conversions: 48 },
                { day: "Sun", sessions: 900,  conversions: 38 },
              ];

              const pieData = [
                { name: "Organic",  value: 42, color: "hsl(var(--primary))" },
                { name: "Paid",     value: 28, color: "#a78bfa" },
                { name: "Referral", value: 18, color: "#34d399" },
                { name: "Direct",   value: 12, color: "#fb923c" },
              ];

              const multiLine = [
                { month: "Jan", pro: 2100, starter: 800, extended: 300 },
                { month: "Feb", pro: 2400, starter: 950, extended: 450 },
                { month: "Mar", pro: 2200, starter: 900, extended: 400 },
                { month: "Apr", pro: 3100, starter: 1100, extended: 600 },
                { month: "May", pro: 3800, starter: 1300, extended: 1000 },
                { month: "Jun", pro: 4600, starter: 1500, extended: 1300 },
                { month: "Jul", pro: 5400, starter: 1700, extended: 1700 },
              ];

              const tooltipStyle = {
                contentStyle: { backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "10px", fontSize: "12px" },
                itemStyle: { color: "hsl(var(--foreground))" },
              };

              return (
                <>
                  {/* Row 1 */}
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Area Chart */}
                    <div className="rounded-2xl border border-border/50 p-6 bg-card/30">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="size-4 text-primary" />
                        <h3 className="text-sm font-semibold">Area Chart — MRR & Users</h3>
                      </div>
                      <p className="text-xs text-muted-foreground mb-5">Dual-series area with gradient fill and custom tooltip.</p>
                      <div className="h-[220px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={areaData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                              <linearGradient id="gRev" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.35} />
                                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                              </linearGradient>
                              <linearGradient id="gUsr" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.25} />
                                <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} dy={8} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} dx={-4} />
                            <RechartsTooltip {...tooltipStyle} />
                            <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2.5} fill="url(#gRev)" dot={false} />
                            <Area type="monotone" dataKey="users" stroke="#a78bfa" strokeWidth={2.5} fill="url(#gUsr)" dot={false} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="rounded-2xl border border-border/50 p-6 bg-card/30">
                      <div className="flex items-center gap-2 mb-1">
                        <Activity className="size-4 text-primary" />
                        <h3 className="text-sm font-semibold">Bar Chart — Sessions & Conversions</h3>
                      </div>
                      <p className="text-xs text-muted-foreground mb-5">Grouped bars with rounded corners and hover states.</p>
                      <div className="h-[220px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={barData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
                            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} dx={-4} />
                            <RechartsTooltip {...tooltipStyle} />
                            <Bar dataKey="sessions" fill="hsl(var(--primary)/0.25)" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="conversions" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Multi-line chart */}
                    <div className="rounded-2xl border border-border/50 p-6 bg-card/30">
                      <div className="flex items-center gap-2 mb-1">
                        <CreditCard className="size-4 text-primary" />
                        <h3 className="text-sm font-semibold">Line Chart — Revenue by Plan</h3>
                      </div>
                      <p className="text-xs text-muted-foreground mb-5">Multi-line with legend and custom dot styles.</p>
                      <div className="h-[220px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={multiLine} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} dy={8} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} dx={-4} />
                            <RechartsTooltip {...tooltipStyle} />
                            <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: "11px", paddingTop: "8px" }} />
                            <Line type="monotone" dataKey="pro"      stroke="hsl(var(--primary))" strokeWidth={2.5} dot={{ r: 3, fill: "hsl(var(--background))", strokeWidth: 2 }} />
                            <Line type="monotone" dataKey="starter"  stroke="#34d399" strokeWidth={2.5} dot={{ r: 3, fill: "hsl(var(--background))", strokeWidth: 2 }} />
                            <Line type="monotone" dataKey="extended" stroke="#fb923c" strokeWidth={2.5} dot={{ r: 3, fill: "hsl(var(--background))", strokeWidth: 2 }} />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Donut / Pie */}
                    <div className="rounded-2xl border border-border/50 p-6 bg-card/30">
                      <div className="flex items-center gap-2 mb-1">
                        <ArrowUpRight className="size-4 text-primary" />
                        <h3 className="text-sm font-semibold">Donut Chart — Traffic Sources</h3>
                      </div>
                      <p className="text-xs text-muted-foreground mb-5">Donut with custom legend and colour system.</p>
                      <div className="flex items-center gap-8">
                        <div className="h-[180px] w-[180px] shrink-0">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" strokeWidth={0} paddingAngle={3}>
                                {pieData.map((entry, index) => (
                                  <Cell key={index} fill={entry.color} />
                                ))}
                              </Pie>
                              <RechartsTooltip {...tooltipStyle} />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="flex-1 space-y-3">
                          {pieData.map(d => (
                            <div key={d.name} className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="size-2.5 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                                <span className="text-sm text-muted-foreground">{d.name}</span>
                              </div>
                              <span className="text-sm font-semibold">{d.value}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}

          </TabsContent>

        </Tabs>
      </main>
    </div>
  );
}
