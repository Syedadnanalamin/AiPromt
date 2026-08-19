import React from "react";
import Image from "next/image";
import { Star, MessageSquareQuote, CheckCircle, Sparkles } from "lucide-react";

export const initialReviews = [
  {
    id: "review-1",
    author: "Samantha Wright",
    role: "Lead Frontend Engineer",
    company: "ScaleTech AI",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    date: "2 days ago",
    promptUsed: "Fullstack Next.js 16 Generator",
    quote:
      "PromptMatrix literally halved our prototyping time. The architecture prompts generate clean, typed code that we actually deploy without endless debugging.",
  },
  {
    id: "review-2",
    author: "Daniel Morgan",
    role: "Founder & Creative Director",
    company: "Vivid Studio",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    date: "1 week ago",
    promptUsed: "Cinematic 8K Portrait Studio",
    quote:
      "The Midjourney prompts on this platform are in a league of their own. Consistent lighting parameters and texture quality saved us thousands in stock imagery.",
  },
  {
    id: "review-3",
    author: "Rachel Kim",
    role: "Head of Growth",
    company: "OmniFlow SaaS",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    date: "3 days ago",
    promptUsed: "High-Converting Landing Page Copy",
    quote:
      "Our landing page conversion rate jumped from 3.2% to 6.8% after rewriting our value props with the Claude 3.5 conversion prompt. Worth every penny!",
  },
];

export default function CustomerReviews() {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[130px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Loved by 50,000+ AI Builders
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Real Feedback from <span className="ai-gradient-text">Real Engineers</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Discover why developers, designers, and marketers rely on PromptMatrix daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {initialReviews.map((review) => (
            <div
              key={review.id}
              className="glass-card group relative flex flex-col justify-between rounded-2xl border border-border/70 bg-card/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <MessageSquareQuote className="h-6 w-6 text-primary/30 group-hover:text-primary transition-colors" />
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-[11px] font-semibold text-foreground/80 mb-3">
                  <span className="text-primary font-bold">Prompt:</span> {review.promptUsed}
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-border/50 pt-4">
                <Image
                  src={review.avatar}
                  alt={review.author}
                  width={40}
                  height={40}
                  unoptimized
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/30"
                />
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-foreground truncate">
                      {review.author}
                    </span>
                    <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                  </div>
                  <span className="text-xs text-muted-foreground truncate">
                    {review.role} • {review.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
