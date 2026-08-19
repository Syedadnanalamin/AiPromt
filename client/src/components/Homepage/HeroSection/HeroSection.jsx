"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  Zap,
  TrendingUp,
  Terminal,
  Layers,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const trendingTags = [
  { label: "ChatGPT-4o", query: "ChatGPT" },
  { label: "Midjourney v6", query: "Midjourney" },
  { label: "Coding Assistant", query: "Coding" },
  { label: "SEO Copywriting", query: "Copywriting" },
  { label: "Flux.1 Realism", query: "Flux" },
  { label: "UI/UX Design", query: "UI/UX" },
];

export default function HeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);

  const samplePrompt =
    "Act as a Principal Staff Software Architect. Analyze this system architecture for high concurrency, identify bottlenecks, and generate optimized database indexing strategies with step-by-step implementation code.";

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/prompts?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/prompts");
    }
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(samplePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-12 sm:pt-14 sm:pb-14">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[550px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/20 via-indigo-500/15 to-violet-600/10 blur-[130px]" />
        <div className="absolute top-1/2 right-[-10%] h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary shadow-xs backdrop-blur-md transition-all hover:bg-primary/15">
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-primary" />
            <span>The #1 Marketplace for Tested AI Prompts</span>
            <span className="h-1 w-1 rounded-full bg-primary" />
            <span className="font-semibold text-foreground/90">10,000+ Curated</span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Supercharge Your Workflow with{" "}
            <span className="ai-gradient-text">Battle-Tested</span> AI Prompts
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
            Discover, copy, and monetize production-grade prompts engineered for
            <span className="font-medium text-foreground"> ChatGPT</span>,
            <span className="font-medium text-foreground"> Midjourney</span>,
            <span className="font-medium text-foreground"> Claude</span>, and
            <span className="font-medium text-foreground"> Flux.1</span>.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="mt-8 flex w-full max-w-2xl flex-col gap-2.5 rounded-2xl border border-border/80 bg-card/80 p-2 shadow-2xl backdrop-blur-xl sm:flex-row sm:items-center sm:gap-2 sm:rounded-full"
          >
            <div className="relative flex flex-1 items-center">
              <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search prompts (e.g. SEO strategy, UI design, Code refactor)..."
                className="w-full bg-transparent py-3 pl-12 pr-4 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <Button
              type="submit"
              className="h-11 rounded-xl sm:rounded-full ai-glow-button text-white font-medium px-6 gap-2 border-0 shadow-lg cursor-pointer shrink-0"
            >
              Search Prompts
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          {/* Trending Tags */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
              <TrendingUp className="h-3.5 w-3.5 text-primary" />
              Trending:
            </span>
            {trendingTags.map((tag) => (
              <button
                key={tag.label}
                type="button"
                onClick={() => router.push(`/prompts?search=${encodeURIComponent(tag.query)}`)}
                className="rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary cursor-pointer"
              >
                {tag.label}
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/prompts">
              <Button size="lg" className="ai-glow-button text-white font-medium border-0 gap-2 shadow-xl px-7 cursor-pointer">
                <Layers className="h-4 w-4" />
                Browse All Prompts
              </Button>
            </Link>
            <Link href="/dashboard/add-prompt">
              <Button
                size="lg"
                variant="outline"
                className="border-border/80 bg-background/60 hover:bg-accent font-medium gap-2 px-7 backdrop-blur-sm cursor-pointer"
              >
                <Sparkles className="h-4 w-4 text-primary" />
                Submit a Prompt
              </Button>
            </Link>
          </div>

          {/* Interactive Live Prompt Demo Card */}
          <div className="mt-14 w-full max-w-3xl">
            <div className="relative rounded-2xl border border-border/80 bg-card/90 p-5 shadow-2xl backdrop-blur-2xl text-left transition-all hover:border-primary/40">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Terminal className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        Featured Prompt
                      </span>
                      <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-500">
                        ⭐ 4.9 Verified
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Principal System Architect & Concurrency Optimizer
                    </h3>
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopyPrompt}
                  className="gap-1.5 border-border bg-background/80 hover:bg-accent cursor-pointer text-xs"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>Copy Prompt</span>
                    </>
                  )}
                </Button>
              </div>

              <div className="mt-3.5 rounded-xl bg-muted/40 p-4 font-mono text-xs text-foreground/90 leading-relaxed border border-border/40">
                <p>{samplePrompt}</p>
              </div>

              <div className="mt-3.5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Zap className="h-3.5 w-3.5 text-amber-500" />
                    Works on: <strong className="text-foreground">ChatGPT-4o, Claude 3.5</strong>
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                    <strong>4.9</strong> (1,420 reviews)
                  </span>
                </div>
                <span className="text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  🔥 4,890 copies this week
                </span>
              </div>
            </div>
          </div>

          {/* Social Proof Stats */}
          <div className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 border-t border-border/60 pt-10 sm:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-extrabold text-foreground sm:text-3xl">10K+</div>
              <div className="text-xs text-muted-foreground mt-0.5">Tested Prompts</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-extrabold text-foreground sm:text-3xl">99.4%</div>
              <div className="text-xs text-muted-foreground mt-0.5">Success Rate</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-extrabold text-foreground sm:text-3xl">50K+</div>
              <div className="text-xs text-muted-foreground mt-0.5">Prompt Engineers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-extrabold text-foreground sm:text-3xl">$0</div>
              <div className="text-xs text-muted-foreground mt-0.5">Free to Get Started</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
