"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ShieldCheck, CheckCircle2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PromptHeader({ submittedSuccess, submittedTitle, onReset }) {
  return (
    <div className="space-y-4">
      {/* Studio Header Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-r from-primary/10 via-card to-background p-6 md:p-8 backdrop-blur-xl shadow-xs">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/25">
              <Sparkles className="h-3.5 w-3.5" />
              Prompt Engineering Studio
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Create & Publish AI Prompt
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Design high-yield prompt templates for the community. Submissions are reviewed and
              published to the public or premium marketplace.
            </p>
          </div>

          {/* Prompt Moderation / Plan Quota Indicator */}
          <div className="shrink-0 flex items-center gap-3 p-3.5 rounded-xl bg-background/80 border border-border/70 shadow-xs backdrop-blur-md">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="text-xs">
              <p className="font-semibold text-foreground">Pending Moderation</p>
              <p className="text-muted-foreground">Admin verified within 24h</p>
            </div>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
      </div>

      {/* Success Notification Alert */}
      {submittedSuccess && (
        <div className="relative rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-foreground">
                  Prompt Submitted for Review!
                </h3>
                <p className="text-xs text-muted-foreground max-w-xl">
                  Your prompt <strong className="text-foreground font-semibold">"{submittedTitle}"</strong> has been submitted. It has been set to <span className="font-semibold text-amber-500">pending</span> status and will be visible on the marketplace once approved by moderators.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={onReset}
                className="text-xs h-9 cursor-pointer"
              >
                <Plus className="h-3.5 w-3.5 mr-1" />
                Create Another
              </Button>
              <Link href="/dashboard">
                <Button size="sm" className="text-xs h-9 bg-primary text-white cursor-pointer">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
