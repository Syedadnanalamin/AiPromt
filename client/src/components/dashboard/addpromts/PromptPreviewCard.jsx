"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Zap,
  Lock,
  Globe,
  Layers,
  Copy,
  Check,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { difficultyStyles } from "./promptConstants";

export default function PromptPreviewCard({
  formData,
  tags,
  userName,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!formData.content) return;
    navigator.clipboard.writeText(formData.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isPrivate = formData.visibility === "Private";
  const badgeStyle = difficultyStyles[formData.difficulty] || difficultyStyles.Beginner;

  return (
    <div className="space-y-6 max-h-[calc(100vh-6.5rem)] overflow-y-auto pr-1 pb-4">
      <div className="space-y-3">
        {/* Section Title */}
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
            <Eye className="h-4 w-4 text-primary" />
            Live Marketplace Preview
          </h2>
          <span className="text-[11px] text-muted-foreground">WYSIWYG Card Preview</span>
        </div>

        {/* Live Marketplace Card */}
        <div className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-lg transition-all">
          {/* Thumbnail Image */}
          <div className="relative h-44 w-full overflow-hidden bg-muted/40">
            {formData.thumbnail ? (
              <Image
                src={formData.thumbnail}
                alt={formData.title || "Preview Thumbnail"}
                fill
                unoptimized
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground text-xs">
                No Cover Image
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

            {/* AI Tool Badge */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-md bg-background/90 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur-md shadow-xs border border-border/50">
              <Zap className="h-3.5 w-3.5 text-primary" />
              <span>{formData.aiTool}</span>
            </div>

            {/* Visibility Badge */}
            <div className="absolute top-3 right-3">
              <span
                className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-bold text-white shadow-xs ${
                  isPrivate ? "bg-amber-600" : "bg-emerald-600"
                }`}
              >
                {isPrivate ? <Lock className="h-3 w-3" /> : <Globe className="h-3 w-3" />}
                {formData.visibility}
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-5 space-y-3">
            {/* Category & Difficulty Row */}
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground truncate">
                <Layers className="h-3.5 w-3.5 text-primary shrink-0" />
                {formData.category}
              </span>
              <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold border ${badgeStyle}`}>
                {formData.difficulty}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-base text-foreground line-clamp-1">
              {formData.title || "Untitled Prompt Example"}
            </h3>

            {/* Description */}
            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed min-h-[32px]">
              {formData.description ||
                "Your prompt's short overview will appear here for marketplace discovery."}
            </p>

            {/* Tags Preview */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-1">
                {tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
                    #{t}
                  </span>
                ))}
                {tags.length > 3 && (
                  <span className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                    +{tags.length - 3}
                  </span>
                )}
              </div>
            )}

            {/* Creator & Test Copy Bar */}
            <div className="flex items-center justify-between pt-3 border-t border-border/60">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                  {userName ? userName.charAt(0).toUpperCase() : "U"}
                </div>
                <span className="text-xs font-medium text-foreground truncate max-w-[120px]">
                  {userName || "You (Creator)"}
                </span>
              </div>

              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={handleCopy}
                disabled={!formData.content}
                className="h-7 text-[11px] gap-1 px-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-500" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Test Copy</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Readiness Checklist */}
        <div className="p-4 rounded-xl bg-card border border-border/80 space-y-2.5">
          <p className="text-xs font-bold text-foreground">Submission Readiness Checklist:</p>
          <div className="space-y-1.5 text-xs">
            <div className="flex items-center gap-2">
              {formData.title.trim().length >= 5 ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              ) : (
                <div className="h-4 w-4 rounded-full border border-muted-foreground/40 shrink-0" />
              )}
              <span className={formData.title.trim().length >= 5 ? "text-foreground" : "text-muted-foreground"}>
                Descriptive title (min 5 chars)
              </span>
            </div>

            <div className="flex items-center gap-2">
              {formData.content.trim().length >= 15 ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              ) : (
                <div className="h-4 w-4 rounded-full border border-muted-foreground/40 shrink-0" />
              )}
              <span className={formData.content.trim().length >= 15 ? "text-foreground" : "text-muted-foreground"}>
                Prompt template & instructions written
              </span>
            </div>

            <div className="flex items-center gap-2">
              {formData.description.trim() ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              ) : (
                <div className="h-4 w-4 rounded-full border border-muted-foreground/40 shrink-0" />
              )}
              <span className={formData.description.trim() ? "text-foreground" : "text-muted-foreground"}>
                Short overview description provided
              </span>
            </div>

            <div className="flex items-center gap-2">
              {tags.length > 0 ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              ) : (
                <div className="h-4 w-4 rounded-full border border-muted-foreground/40 shrink-0" />
              )}
              <span className={tags.length > 0 ? "text-foreground" : "text-muted-foreground"}>
                At least one discovery tag added
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
