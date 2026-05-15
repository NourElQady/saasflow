import { Link } from "wouter";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/Logo";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Logo className="text-xl" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <a href="#features" className="px-3 py-2 rounded-md hover:bg-muted/50 hover:text-foreground transition-all">Features</a>
          <a href="#screenshots" className="px-3 py-2 rounded-md hover:bg-muted/50 hover:text-foreground transition-all">Screenshots</a>
          <a href="#pricing" className="px-3 py-2 rounded-md hover:bg-muted/50 hover:text-foreground transition-all">Pricing</a>
          <a href="#testimonials" className="px-3 py-2 rounded-md hover:bg-muted/50 hover:text-foreground transition-all">Testimonials</a>
          <Link href="/components" className="px-3 py-2 rounded-md hover:bg-muted/50 hover:text-foreground transition-all">Components</Link>
          <Link href="/demo" className="px-3 py-2 rounded-md hover:bg-muted/50 hover:text-foreground transition-all">Demo</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="ghost">Sign In</Button>
            <Button className="rounded-full font-semibold">Start Free</Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border/40 bg-background overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <a href="#features" onClick={toggleMenu} className="text-sm font-medium text-foreground py-2 border-b border-border/40">Features</a>
              <a href="#screenshots" onClick={toggleMenu} className="text-sm font-medium text-foreground py-2 border-b border-border/40">Screenshots</a>
              <a href="#pricing" onClick={toggleMenu} className="text-sm font-medium text-foreground py-2 border-b border-border/40">Pricing</a>
              <a href="#testimonials" onClick={toggleMenu} className="text-sm font-medium text-foreground py-2 border-b border-border/40">Testimonials</a>
              <Link href="/components" onClick={toggleMenu} className="text-sm font-medium text-foreground py-2 border-b border-border/40">Components</Link>
              <Link href="/demo" onClick={toggleMenu} className="text-sm font-medium text-foreground py-2 border-b border-border/40">Demo</Link>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button className="w-full rounded-full">Start Free</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
