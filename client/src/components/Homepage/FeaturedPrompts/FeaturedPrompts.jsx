import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromptCard from "./PromptCard";

// 6 Featured / Trending Prompts Sample Array (ready for database replacement)
export const initialFeaturedPrompts = [
  {
    _id: "prompt-1",
    title: "Fullstack Next.js 16 & Clean Architecture Generator",
    description:
      "Generate complete production-grade Next.js App Router architectures with TypeScript/JS, Tailwind CSS, API route patterns, and robust error boundaries.",
    category: "Development",
    aiTool: "ChatGPT-4o",
    price: 0, // Free
    rating: 4.95,
    reviewsCount: 342,
    copyCount: 4890,
    isFeatured: true,
    creator: {
      name: "David Chen",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
      role: "Creator",
    },
    tags: ["Next.js", "React", "Architecture", "Fullstack"],
  },
  {
    _id: "prompt-2",
    title: "Hyper-Realistic Cinematic 8K Portrait Studio",
    description:
      "Master prompt for photorealistic portrait photography with volumetric rim lighting, Hasselblad lens parameters, and skin texture precision.",
    category: "Design & Art",
    aiTool: "Midjourney v6",
    price: 5, // Premium
    rating: 4.98,
    reviewsCount: 512,
    copyCount: 6210,
    isFeatured: true,
    creator: {
      name: "Elena Rostova",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80",
      role: "Creator",
    },
    tags: ["Midjourney", "Photography", "8K", "Portraits"],
  },
  {
    _id: "prompt-3",
    title: "High-Converting SaaS Landing Page Copywriter",
    description:
      "Craft persuasive, benefit-driven value propositions, feature callouts, objection handlers, and CTA button copy based on proven conversion frameworks.",
    category: "Copywriting",
    aiTool: "Claude 3.5 Sonnet",
    price: 0, // Free
    rating: 4.89,
    reviewsCount: 219,
    copyCount: 3120,
    isFeatured: true,
    creator: {
      name: "Marcus Vance",
      avatar:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80",
      role: "Creator",
    },
    tags: ["SaaS", "Copywriting", "Marketing", "Conversion"],
  },
  {
    _id: "prompt-4",
    title: "Automated SEO Article & Keyword Cluster Engine",
    description:
      "Generate comprehensive 2,500+ word rank-ready articles with H2/H3 semantic keyword placement, FAQs, schema markup, and meta titles.",
    category: "SEO & Content",
    aiTool: "ChatGPT-4o",
    price: 5, // Premium
    rating: 4.92,
    reviewsCount: 428,
    copyCount: 5430,
    isFeatured: true,
    creator: {
      name: "Sarah Jenkins",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      role: "Creator",
    },
    tags: ["SEO", "Content Marketing", "Blogging", "Google Rank"],
  },
  {
    _id: "prompt-5",
    title: "Modern Minimalist UI/UX Design System Builder",
    description:
      "Create scalable design tokens, accessible color hierarchies, component state guidelines, and responsive layout grids for Figma & web apps.",
    category: "UI/UX",
    aiTool: "Claude 3.5 Sonnet",
    price: 0, // Free
    rating: 4.94,
    reviewsCount: 187,
    copyCount: 2980,
    isFeatured: true,
    creator: {
      name: "Kenji Sato",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      role: "Creator",
    },
    tags: ["UI/UX", "Design System", "Figma", "Tailwind"],
  },
  {
    _id: "prompt-6",
    title: "SQL & MongoDB Aggregation Query Master",
    description:
      "Transform natural language business questions into complex, indexed MongoDB aggregate pipelines (`$lookup`, `$facet`, `$group`) and SQL queries.",
    category: "Database",
    aiTool: "ChatGPT-4o",
    price: 0, // Free
    rating: 4.96,
    reviewsCount: 295,
    copyCount: 3890,
    isFeatured: true,
    creator: {
      name: "Priya Sharma",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      role: "Creator",
    },
    tags: ["MongoDB", "Aggregation", "SQL", "Database"],
  },
];

export default function FeaturedPrompts() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/20 border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              Handpicked Quality
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Featured & <span className="ai-gradient-text">Trending Prompts</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl">
              Tested for high consistency, accuracy, and performance across industry-leading AI models.
            </p>
          </div>

          <Link href="/prompts">
            <Button
              variant="outline"
              className="gap-2 border-border/80 bg-background/80 hover:bg-accent text-sm font-medium self-start md:self-auto cursor-pointer"
            >
              View All Prompts
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* 6 Featured Prompt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
          {initialFeaturedPrompts.map((prompt) => (
            <PromptCard key={prompt._id} prompt={prompt} />
          ))}
        </div>
      </div>
    </section>
  );
}
