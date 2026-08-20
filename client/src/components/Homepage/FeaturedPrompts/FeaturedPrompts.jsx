import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromptCard from "./PromptCard";
import { getAllpromts } from "@/lib/actions/promts/getallpromts";

export default async function FeaturedPrompts() {
  const allpromts = await getAllpromts();

  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/20 border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
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

          <Link href="/allpromts">
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
          {allpromts?.slice(0, 6).map((prompt) => (
            <PromptCard key={prompt._id} prompt={prompt} />
          ))}
        </div>
      </div>
    </section>
  );
}
