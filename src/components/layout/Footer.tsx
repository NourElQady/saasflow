import { Link } from "wouter";
import { Logo } from "@/components/ui/Logo";
import { Twitter, Github, Linkedin, Heart } from "lucide-react";

type FooterLink = { label: string; href: string; isRoute?: boolean };

const links: Record<string, FooterLink[]> = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Dashboard Demo", href: "/demo", isRoute: true },
    { label: "Components", href: "/components", isRoute: true },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Figma File", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Security & Privacy", href: "/security", isRoute: true },
    { label: "License Info", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-card/20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand col — spans 2 */}
          <div className="md:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <Logo className="text-xl" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              The definitive landing page system for serious tech founders. Ship a product your users trust from day one.
            </p>

            {/* ThemeForest rating badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-border/50 bg-card/50">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="size-3 fill-amber-400" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              <div>
                <div className="text-xs font-bold leading-none">4.9 / 5.0</div>
                <div className="text-xs text-muted-foreground leading-none mt-0.5">500+ sales on ThemeForest</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="size-9 rounded-full border border-border/50 bg-card/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="font-semibold text-sm mb-5">{group}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.isRoute ? (
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/30 gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SaaSFlow. All rights reserved. Built with{" "}
            <Heart className="size-3 inline text-rose-500 fill-current" /> using React + Tailwind.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <span className="text-border">·</span>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <span className="text-border">·</span>
            <a href="#" className="hover:text-foreground transition-colors">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
