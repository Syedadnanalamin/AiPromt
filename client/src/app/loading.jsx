"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Bot, Wand2, Zap, Cpu, Compass } from "lucide-react";

const loadingPhrases = [
  "Initializing neural matrix...",
  "Loading high-tier AI prompts...",
  "Synthesizing prompt embeddings...",
  "Connecting to PromptMatrix marketplace...",
  "Calibrating GPT-4o & Midjourney presets...",
  "Optimizing creator workflows...",
];

const supportedModels = [
  { name: "ChatGPT", color: "from-emerald-500/20 to-emerald-500/5 text-emerald-500 border-emerald-500/30" },
  { name: "Midjourney", color: "from-cyan-500/20 to-cyan-500/5 text-cyan-500 border-cyan-500/30" },
  { name: "Claude 3.5", color: "from-amber-500/20 to-amber-500/5 text-amber-500 border-amber-500/30" },
  { name: "Gemini", color: "from-blue-500/20 to-blue-500/5 text-blue-500 border-blue-500/30" },
  { name: "Flux.1", color: "from-purple-500/20 to-purple-500/5 text-purple-500 border-purple-500/30" },
];

export default function RootLoading() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % loadingPhrases.length);
        setFadeState(true);
      }, 250);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading content"
      className="relative flex min-h-[75vh] w-full flex-col items-center justify-center overflow-hidden px-4 py-12"
    >
      {/* Background Ambient Glowing Orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
        <div className="absolute h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-primary/20 via-indigo-500/15 to-violet-600/10 blur-[100px] animate-pulse" />
        <div
          className="absolute h-[260px] w-[260px] -translate-y-16 translate-x-24 rounded-full bg-gradient-to-bl from-cyan-500/15 via-blue-600/10 to-transparent blur-[80px]"
          style={{ animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 1.5s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_85%)]" />
      </div>

      {/* Decorative Grid Lines Overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Central Glassmorphic Portal Card */}
      <div className="glass relative flex w-full max-w-md flex-col items-center rounded-3xl border border-border/80 bg-card/60 p-8 text-center shadow-2xl shadow-primary/10 backdrop-blur-2xl transition-all duration-300">
        {/* Subtle Top Border Gradient Highlight */}
        <div className="absolute inset-x-8 -top-px h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

        {/* Floating Top AI Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary shadow-xs backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "6s" }} />
          <span className="tracking-wide uppercase text-[11px]">PromptMatrix Engine</span>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
        </div>

        {/* High-Tech Multilayered AI Core Animation */}
        <div className="relative mb-6 flex h-28 w-28 items-center justify-center">
          {/* Outer Pulsing Glow */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />

          {/* Outer Dashed Orbit */}
          <div
            className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
            style={{ animation: "spin 12s linear infinite" }}
          />

          {/* Middle Glowing Gradient Ring */}
          <div
            className="absolute inset-2 rounded-full border-2 border-transparent border-t-primary border-r-indigo-500 border-b-cyan-400"
            style={{ animation: "spin 2.2s cubic-bezier(0.55, 0.15, 0.45, 0.85) infinite" }}
          />

          {/* Inner Reverse Spinning Accent Ring */}
          <div
            className="absolute inset-4 rounded-full border-2 border-transparent border-t-violet-400 border-l-primary/60"
            style={{ animation: "spinReverse 3s linear infinite" }}
          />

          {/* Core Illuminated AI Orb */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary via-indigo-600 to-violet-500 p-0.5 shadow-lg shadow-primary/30">
            <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-background/90 backdrop-blur-xs transition-transform duration-300 hover:scale-105">
              <Wand2 className="h-6 w-6 text-primary animate-pulse" />
            </div>

            {/* Orbiting Satellite Dot */}
            <div
              className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-background shadow-xs"
            >
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            </div>
          </div>
        </div>

        {/* Dynamic Heading & Phrases */}
        <div className="flex flex-col items-center space-y-1.5">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Loading <span className="ai-gradient-text">PromptMatrix</span>
          </h2>
          <div className="h-6 flex items-center justify-center">
            <p
              className={`text-xs sm:text-sm font-medium text-muted-foreground transition-all duration-200 ${
                fadeState ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
              }`}
            >
              {loadingPhrases[phraseIndex]}
            </p>
          </div>
        </div>

        {/* Futuristic Indeterminate Progress Bar */}
        <div className="mt-6 w-full max-w-[280px]">
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="absolute inset-y-0 rounded-full bg-gradient-to-r from-primary via-indigo-500 to-cyan-400 shadow-sm shadow-primary/50"
              style={{
                animation: "shimmerProgress 2s ease-in-out infinite",
                width: "45%",
              }}
            />
          </div>
        </div>

        {/* Supported AI Ecosystem Mini Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 pt-4 border-t border-border/50 w-full">
          {supportedModels.map((model) => (
            <span
              key={model.name}
              className={`inline-flex items-center rounded-md border bg-gradient-to-b px-2 py-0.5 text-[10px] font-semibold tracking-wide transition-colors ${model.color}`}
            >
              {model.name}
            </span>
          ))}
        </div>

        {/* Bottom Status Footer */}
        <div className="mt-4 flex items-center gap-2 text-[11px] text-muted-foreground/80 font-mono">
          <Zap className="h-3 w-3 text-amber-500" />
          <span>Synchronizing prompt registry</span>
        </div>
      </div>

      {/* Embedded Custom Keyframe Animations */}
      <style jsx>{`
        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes shimmerProgress {
          0% {
            left: -45%;
          }
          50% {
            left: 50%;
          }
          100% {
            left: 105%;
          }
        }
      `}</style>
    </div>
  );
}
