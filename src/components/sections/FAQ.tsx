import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What exactly is included in the download?",
    answer: "You get the complete React + Vite + Tailwind v4 + shadcn/ui source code, all 40+ components, 3 landing page demo variants, 1 full SaaS dashboard demo, the Figma design file (Pro & Extended), and documentation to get started in minutes.",
  },
  {
    question: "Do I need to know React to use this?",
    answer: "Yes — SaaSFlow is a React/Vite template. You'll need basic React and Tailwind CSS knowledge. If you can read JSX and edit Tailwind classes, you're all set. No deep framework expertise is required.",
  },
  {
    question: "Is a backend included?",
    answer: "No. SaaSFlow is a pure frontend UI kit that provides the visual layer, components, and layouts. You connect it to any backend you choose — Supabase, Firebase, a custom REST API, or anything else. The Extended license includes a boilerplate scaffold to wire things up faster.",
  },
  {
    question: "How does the dark / light mode work?",
    answer: "We use next-themes with Tailwind's class-based dark strategy. Every component is meticulously designed for both modes using CSS custom properties. Toggle with one click — no extra configuration needed.",
  },
  {
    question: "Can I use it for client projects?",
    answer: "The Pro license covers your own products (single end product). For client work or multiple projects, the Extended (Agency) license gives you unlimited use across projects for up to 10 team members.",
  },
  {
    question: "Does it work with Next.js or Remix?",
    answer: "The source code is standard React and is compatible with Next.js, Remix, and Astro with minor adjustments to routing. The default scaffold uses Vite + wouter (lightweight React router) for simplicity, but the components are fully portable.",
  },
  {
    question: "What does 'Lifetime Updates' include?",
    answer: "Once you purchase, you receive all future component additions, bug fixes, and major version upgrades at no extra cost — forever. We release new components and page sections every quarter.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes. We offer a 14-day no-questions-asked refund via ThemeForest's standard refund process. If you're not satisfied for any reason, simply open a support ticket within 14 days of purchase.",
  },
  {
    question: "What TypeScript version and tooling is used?",
    answer: "TypeScript 5.x in strict mode, Vite 6, React 19, Tailwind CSS v4 (the new @tailwindcss/vite plugin — no config file needed), shadcn/ui for component primitives, framer-motion for animations, and Recharts for data visualization.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 max-w-6xl mx-auto items-start">
          {/* Left: sticky label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-5">
              <MessageCircle className="size-3.5" /> Common questions
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Frequently asked
              <br />questions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Everything you need to know about the product, licensing, and what's included.
            </p>
            <p className="text-sm text-muted-foreground">
              Still have questions?{" "}
              <a href="#" className="text-primary hover:underline font-medium">
                Contact support →
              </a>
            </p>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-border/40 rounded-xl px-5 bg-card/30 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/3 transition-colors"
                >
                  <AccordionTrigger className="text-left font-medium text-sm hover:no-underline hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
