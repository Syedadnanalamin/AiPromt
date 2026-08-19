"use client"
import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Mail,
  ArrowRight,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  explore: [
    { label: "All AI Prompts", href: "/prompts" },
    { label: "ChatGPT-4o Prompts", href: "/prompts?tool=ChatGPT" },
    { label: "Midjourney v6 Prompts", href: "/prompts?tool=Midjourney" },
    { label: "Claude 3.5 Prompts", href: "/prompts?tool=Claude" },
    { label: "Flux.1 Prompts", href: "/prompts?tool=Flux" },
    { label: "Categories", href: "/categories" },
  ],
  creators: [
    { label: "Sell Prompts", href: "/dashboard/add-prompt" },
    { label: "Creator Dashboard", href: "/dashboard" },
    { label: "Earnings & Royalties", href: "/dashboard" },
    { label: "Creator Guidelines", href: "#" },
    { label: "Top Creators", href: "/#creators" },
  ],
  company: [
    { label: "Why PromptMatrix", href: "/#why-us" },
    { label: "Community Reviews", href: "/#reviews" },
    { label: "FAQ", href: "/#faq" },
    { label: "About Us", href: "#" },
    { label: "Contact Support", href: "#" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Commercial License", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 text-foreground">
      {/* Top Newsletter & Branding Container */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-border/50">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Brand Logo */}
              <Link href="/" className="inline-flex items-center gap-2.5 transition-transform hover:scale-[1.02]">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-primary via-indigo-500 to-violet-400 p-0.5 shadow-lg shadow-primary/25">
                  <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-background">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-extrabold tracking-tight">
                    Prompt<span className="ai-gradient-text">Matrix</span>
                  </span>
                  <span className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase -mt-1">
                    AI Prompt Marketplace
                  </span>
                </div>
              </Link>

              <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
                The premier marketplace for production-grade prompts. Engineered for ChatGPT, Midjourney, Claude, and Flux builders.
              </p>

              {/* Social Links */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-muted/40 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                  aria-label="GitHub"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-muted/40 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                  aria-label="Twitter / X"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-muted/40 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Newsletter Input Box */}
            <div className="mt-8">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                Get Weekly Top Prompts
              </span>
              <form onSubmit={(e) => e.preventDefault()} className="mt-2.5 flex items-center gap-2 max-w-md">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-10 pl-9 pr-3 rounded-lg border border-border/80 bg-muted/30 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <Button size="sm" type="submit" className="h-10 ai-glow-button text-white border-0 px-4 text-xs font-medium cursor-pointer">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {/* Explore */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                Explore
              </h4>
              <ul className="space-y-2 text-xs">
                {footerLinks.explore.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Creators */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                Creators
              </h4>
              <ul className="space-y-2 text-xs">
                {footerLinks.creators.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-xs">
                {footerLinks.company.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                Legal
              </h4>
              <ul className="space-y-2 text-xs">
                {footerLinks.legal.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Trust Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} PromptMatrix Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              Verified Prompts & Secure Payments
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
