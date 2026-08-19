"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I use and copy prompts from PromptMatrix?",
    answer:
      "Simply click the 'Copy Prompt' button on any card or details page. The entire tested prompt—including system instructions, variable placeholders, and parameters—is copied directly to your clipboard. Paste it into ChatGPT, Midjourney, Claude, or Flux to generate results instantly.",
  },
  {
    question: "Can I use the outputs from these prompts for commercial projects?",
    answer:
      "Yes! All prompts purchased or copied on PromptMatrix can be used for commercial client work, SaaS apps, marketing campaigns, digital products, and production codebases without attribution.",
  },
  {
    question: "How can I become a creator and monetize my prompts?",
    answer:
      "Sign up for a free account, navigate to your Creator Dashboard, and click 'Create Prompt'. You can set a price (Free or $5 Premium) or upload premium prompt engineering workflows. Once approved, you earn revenue on every sale.",
  },
  {
    question: "Which AI models and tools are supported?",
    answer:
      "PromptMatrix supports all leading AI models including ChatGPT-4o, OpenAI o1, Claude 3.5 Sonnet, Midjourney v6, Flux.1, Google Gemini 1.5 Pro, and Stable Diffusion.",
  },
  {
    question: "What is the difference between Free and Premium prompts?",
    answer:
      "Free prompts are open to all community members. $5 Premium prompts are specialized, high-tier workflows crafted by verified prompt engineers that include full parameter tuning, negative prompts, and extended variable libraries.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/20 border-t border-border/40">
      <div className="container mx-auto max-w-4xl px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything You Need to <span className="ai-gradient-text">Know</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Have questions about buying, selling, or utilizing AI prompts? We&apos;ve got you covered.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-primary/50 bg-card/90 shadow-md shadow-primary/5"
                    : "border-border/70 bg-card/60 hover:border-primary/30 hover:bg-card/80"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-primary transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-muted-foreground leading-relaxed animate-in fade-in-0 duration-200 border-t border-border/40 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
