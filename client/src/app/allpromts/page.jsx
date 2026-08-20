import React from "react";
import { getAllpromts } from "@/lib/actions/promts/getallpromts";
import PromtsExplorer from "@/components/Allpromts/PromtsExplorer";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "All AI Prompts | PromptMatrix Marketplace",
  description: "Browse and search high-quality AI prompts for ChatGPT, Midjourney, Claude, Gemini, and more.",
};

const AllPromtsPage = async () => {
  let prompts = [];

  try {
    const res = await getAllpromts();
    console.log(res);
    prompts = Array.isArray(res) ? res : res?.data || [];
  } catch (error) {
    console.error("Failed to fetch prompts in AllPromtsPage:", error);
    prompts = [];
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header / Hero Section */}
        <div className="mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Discover & Explore
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            All AI <span className="ai-gradient-text">Prompts</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
            Explore carefully crafted, battle-tested AI prompts for ChatGPT, Claude, Midjourney, and Gemini. Search by keyword or filter by tool and category.
          </p>
        </div>

        {/* Interactive Search, Filter & Prompts Grid */}
        <PromtsExplorer initialPrompts={prompts} />
      </div>
    </div>
  );
};

export default AllPromtsPage;
