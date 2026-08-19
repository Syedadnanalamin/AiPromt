"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Copy,
  Check,
  Star,
  Crown,
  Eye,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { getClientSession } from "@/lib/authentication/client-session";

export default function PromptCard({ prompt }) {
  const router = useRouter();
  const session = getClientSession();
  const isLoggedIn = !!session?.user;
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.description || prompt.title);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleViewDetails = () => {
    if (!isLoggedIn) {
      router.push(`/login?callbackUrl=/prompts/${prompt._id}`);
    } else {
      router.push(`/prompts/${prompt._id}`);
    }
  };

  return (
    <Card className="glass-card group flex flex-col justify-between border-border/70 bg-card/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/40">
      <CardHeader className="p-5 pb-3">
        {/* Badges Bar */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-md bg-primary/15 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
              <Zap className="h-3 w-3" />
              {prompt.aiTool}
            </span>
            <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
              {prompt.category}
            </span>
          </div>

          {prompt.price > 0 ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-bold text-amber-500 border border-amber-500/20">
              <Crown className="h-3 w-3" />
              ${prompt.price}
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-500 border border-emerald-500/20">
              Free
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {prompt.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-xs text-muted-foreground line-clamp-3 leading-relaxed">
          {prompt.description}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {prompt.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted/60 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      </CardHeader>

      <CardContent className="px-5 py-2">
        <div className="flex items-center justify-between border-t border-border/50 pt-3 text-xs">
          <div className="flex items-center gap-2">
            {prompt.creator?.avatar ? (
              <Image
                src={prompt.creator.avatar}
                alt={prompt.creator.name || "Creator"}
                width={24}
                height={24}
                unoptimized
                className="h-6 w-6 rounded-full object-cover ring-1 ring-primary/30"
              />
            ) : (
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary text-[10px] font-bold">
                {prompt.creator?.name ? prompt.creator.name.charAt(0).toUpperCase() : "C"}
              </div>
            )}
            <span className="text-xs font-medium text-foreground/90 truncate max-w-[110px]">
              {prompt.creator?.name || "Anonymous"}
            </span>
          </div>

          <div className="flex items-center gap-3 text-muted-foreground text-[11px]">
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <strong className="text-foreground">{prompt.rating}</strong>
              <span>({prompt.reviewsCount})</span>
            </span>
            <span className="font-medium text-primary">
              {prompt.copyCount?.toLocaleString()} copies
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-3 gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={handleCopy}
          className="flex-1 gap-1.5 text-xs font-medium border-border/80 hover:bg-accent cursor-pointer"
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

        <Button
          size="sm"
          onClick={handleViewDetails}
          className="flex-1 gap-1.5 text-xs font-medium ai-glow-button text-white border-0 shadow-sm cursor-pointer"
        >
          <Eye className="h-3.5 w-3.5" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
