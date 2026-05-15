import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/LandingPage";
import DemoPage from "@/pages/DemoPage";
import ComponentsPage from "@/pages/ComponentsPage";
import SecurityPage from "@/pages/SecurityPage";

const queryClient = new QueryClient();

function AnimatedRoute({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function Router() {
  const [location] = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Switch key={location}>
        <Route path="/">
          <AnimatedRoute><LandingPage /></AnimatedRoute>
        </Route>
        <Route path="/demo">
          <AnimatedRoute><DemoPage /></AnimatedRoute>
        </Route>
        <Route path="/components">
          <AnimatedRoute><ComponentsPage /></AnimatedRoute>
        </Route>
        <Route path="/security">
          <AnimatedRoute><SecurityPage /></AnimatedRoute>
        </Route>
        <Route>
          <AnimatedRoute><NotFound /></AnimatedRoute>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
