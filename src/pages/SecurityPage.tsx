import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Lock, Shield, Eye, Server, Key, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="mr-2 size-4" /> Back to home
          </Link>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Security & Privacy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Your data is protected with enterprise-grade security. We take privacy seriously.
          </p>
        </motion.div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Lock, label: "AES-256 Encryption", desc: "Bank-level data encryption" },
            { icon: Server, label: "SOC 2 Compliant", desc: "Certified security standards" },
            { icon: Key, label: "OAuth 2.0", desc: "Secure authentication" },
            { icon: Eye, label: "Privacy First", desc: "Zero tracking, no ads" },
          ].map((item, i) => (
            <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
              <Card className="border-border/40 h-full">
                <CardHeader className="pb-3">
                  <item.icon className="size-8 text-primary mb-2" />
                  <CardTitle className="text-base">{item.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Security Details */}
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">Security Features</h2>
          <div className="space-y-4">
            {[
              { title: "Data Encryption", desc: "All data in transit and at rest is encrypted using AES-256 encryption standard." },
              { title: "Regular Audits", desc: "Third-party security audits performed quarterly to ensure compliance." },
              { title: "Backup & Recovery", desc: "Automatic daily backups with 99.99% uptime guarantee." },
              { title: "DDoS Protection", desc: "Enterprise-grade DDoS protection via Cloudflare." },
              { title: "GDPR Compliant", desc: "Full compliance with GDPR, CCPA, and other privacy regulations." },
              { title: "2FA Support", desc: "Two-factor authentication available for all user accounts." },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 p-4 rounded-lg border border-border/40 hover:bg-muted/30 transition-colors"
              >
                <CheckCircle2 className="size-6 text-emerald-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div {...fadeInUp} className="bg-card/30 border border-border/40 rounded-2xl p-8 text-center">
          <Shield className="size-12 text-primary mx-auto mb-4" />
          <h3 className="font-display text-2xl font-bold mb-2">Security Questions?</h3>
          <p className="text-muted-foreground mb-6">Contact our security team for audit reports or compliance certifications.</p>
          <Button>Contact Security Team</Button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
