"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Wand2,
  Zap,
  Layers,
  Code2,
  Sparkles,
  HelpCircle,
  Image as ImageIcon,
  Tag,
  Plus,
  X,
  RotateCcw,
  Send,
  AlertCircle,
  Globe,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  AI_TOOLS,
  CATEGORIES,
  PRESET_THUMBNAILS,
  PROMPT_VARIABLES,
  SUGGESTED_TAGS,
} from "./promptConstants";

export default function PromptForm({
  formData,
  setFormData,
  tags,
  setTags,
  formErrors,
  isSubmitting,
  onSubmit,
  onReset,
}) {
  const [tagInput, setTagInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTag = (tagToAdd) => {
    const cleanTag = (tagToAdd || tagInput).trim().toLowerCase().replace(/[^a-z0-9-_]/g, "");
    if (cleanTag && !tags.includes(cleanTag) && tags.length < 8) {
      setTags([...tags, cleanTag]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const insertVariable = (token) => {
    setFormData((prev) => ({
      ...prev,
      content: prev.content ? `${prev.content} ${token} ` : `${token} `,
    }));
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* 1. Core General Information */}
      <Card className="border-border/80 bg-card/80 backdrop-blur-xl shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-base font-bold flex items-center gap-2">
            <Wand2 className="h-4 w-4 text-primary" />
            General Information
          </CardTitle>
          <CardDescription className="text-xs">
            Give your prompt a clear title, select the targeted AI tool, and assign categories.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Title */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="title" className="text-xs font-semibold">
                Prompt Title <span className="text-destructive">*</span>
              </Label>
              <span className="text-[11px] text-muted-foreground">
                {formData.title.length}/100
              </span>
            </div>
            <Input
              id="title"
              name="title"
              maxLength={100}
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., SaaS Landing Page High-Converting Copywriter"
              className={`h-10 text-sm ${formErrors.title ? "border-destructive focus-visible:ring-destructive/30" : ""}`}
            />
            {formErrors.title && (
              <p className="text-[11px] font-medium text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" /> {formErrors.title}
              </p>
            )}
          </div>

          {/* AI Tool & Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* AI Tool */}
            <div className="space-y-1.5">
              <Label htmlFor="aiTool" className="text-xs font-semibold flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-primary" />
                Target AI Tool <span className="text-destructive">*</span>
              </Label>
              <select
                id="aiTool"
                name="aiTool"
                value={formData.aiTool}
                onChange={handleChange}
                className="w-full h-10 rounded-lg border border-input bg-background px-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
              >
                {AI_TOOLS.map((tool) => (
                  <option key={tool.id} value={tool.name}>
                    {tool.icon} {tool.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div className="space-y-1.5">
              <Label htmlFor="category" className="text-xs font-semibold flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-primary" />
                Category <span className="text-destructive">*</span>
              </Label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full h-10 rounded-lg border border-input bg-background px-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Difficulty & Visibility */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Difficulty Level */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold">
                Difficulty Level <span className="text-destructive">*</span>
              </Label>
              <div className="grid grid-cols-3 gap-2">
                {["Beginner", "Intermediate", "Pro"].map((level) => {
                  const isSelected = formData.difficulty === level;
                  return (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setFormData({ ...formData, difficulty: level })}
                      className={`py-2 px-2.5 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                        isSelected
                          ? "bg-primary text-white border-primary shadow-sm shadow-primary/20 font-semibold"
                          : "bg-muted/40 border-border/80 text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {level}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Visibility Tier */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold">
                Visibility & Tier <span className="text-destructive">*</span>
              </Label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, visibility: "Public" })}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    formData.visibility === "Public"
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-sm shadow-emerald-600/20 font-semibold"
                      : "bg-muted/40 border-border/80 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Globe className="h-3.5 w-3.5" />
                  Public (Free)
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, visibility: "Private" })}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    formData.visibility === "Private"
                      ? "bg-amber-600 text-white border-amber-600 shadow-sm shadow-amber-600/20 font-semibold"
                      : "bg-muted/40 border-border/80 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Lock className="h-3.5 w-3.5" />
                  Private (Pro)
                </button>
              </div>
            </div>
          </div>

          {/* Short Description */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between">
              <Label htmlFor="description" className="text-xs font-semibold">
                Short Overview / Description <span className="text-destructive">*</span>
              </Label>
              <span className="text-[11px] text-muted-foreground">
                {formData.description.length}/250
              </span>
            </div>
            <textarea
              id="description"
              name="description"
              rows={3}
              maxLength={250}
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide a 1-2 sentence overview of what problem this prompt solves and the expected output..."
              className={`w-full rounded-lg border border-input bg-background p-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none ${
                formErrors.description ? "border-destructive focus-visible:ring-destructive/30" : ""
              }`}
            />
            {formErrors.description && (
              <p className="text-[11px] font-medium text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" /> {formErrors.description}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 2. Prompt Content & Template Editor */}
      <Card className="border-border/80 bg-card/80 backdrop-blur-xl shadow-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Code2 className="h-4 w-4 text-primary" />
              Prompt Content & Template
            </CardTitle>
            <span className="text-[11px] font-mono text-muted-foreground">
              {formData.content.trim() ? formData.content.trim().split(/\s+/).length : 0} words
            </span>
          </div>
          <CardDescription className="text-xs">
            Write the complete AI prompt. Click variable chips to insert customization placeholders.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Variable Token Chips */}
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-primary" />
              Click to insert template variables:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {PROMPT_VARIABLES.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => insertVariable(v)}
                  className="px-2 py-1 rounded-md text-[11px] font-mono font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-all border border-primary/20 cursor-pointer"
                >
                  + {v}
                </button>
              ))}
            </div>
          </div>

          {/* Textarea */}
          <div className="space-y-1.5">
            <textarea
              id="content"
              name="content"
              rows={8}
              value={formData.content}
              onChange={handleChange}
              placeholder={`You are an expert copywriter with 10+ years of experience.\n\nYour task is to write a high-converting landing page headline and subheadline for [Topic].\n\nTarget Audience: [Target Audience]\nTone of Voice: [Tone of Voice]\n\nFollow these guidelines:\n1. Focus on clear benefits over features.\n2. Keep headline under 10 words.\n3. Include a compelling call-to-action.`}
              className={`w-full rounded-lg border border-input bg-background/90 font-mono p-3 text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                formErrors.content ? "border-destructive focus-visible:ring-destructive/30" : ""
              }`}
            />
            {formErrors.content && (
              <p className="text-[11px] font-medium text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" /> {formErrors.content}
              </p>
            )}
          </div>

          {/* Usage Instructions */}
          <div className="space-y-1.5">
            <Label htmlFor="usageInstructions" className="text-xs font-semibold flex items-center gap-1.5">
              <HelpCircle className="h-3.5 w-3.5 text-primary" />
              Usage Instructions & Optimal Parameters <span className="text-muted-foreground font-normal">(Optional)</span>
            </Label>
            <textarea
              id="usageInstructions"
              name="usageInstructions"
              rows={2}
              value={formData.usageInstructions}
              onChange={handleChange}
              placeholder="e.g., Set Temperature to 0.7. Works best when you provide 2 competitor examples before executing."
              className="w-full rounded-lg border border-input bg-background p-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
            />
          </div>
        </CardContent>
      </Card>

      {/* 3. Cover Image & Tags */}
      <Card className="border-border/80 bg-card/80 backdrop-blur-xl shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-base font-bold flex items-center gap-2">
            <ImageIcon className="h-4 w-4 text-primary" />
            Cover Image & Discovery Tags
          </CardTitle>
          <CardDescription className="text-xs">
            Select a stylish banner preview and add tags so users can discover your prompt.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Preset Picker */}
          <div className="space-y-2">
            <Label className="text-xs font-semibold">Choose Cover Preset or Custom Image URL</Label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {PRESET_THUMBNAILS.map((preset, idx) => {
                const isSelected = formData.thumbnail === preset.url;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setFormData({ ...formData, thumbnail: preset.url })}
                    className={`group relative h-16 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                      isSelected
                        ? "ring-2 ring-primary border-primary scale-[1.03] shadow-md"
                        : "border-border/70 hover:opacity-90"
                    }`}
                  >
                    <Image
                      src={preset.url}
                      alt={preset.label}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-end p-1 transition-all">
                      <span className="text-[9px] font-bold text-white truncate drop-shadow-md">
                        {preset.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Custom URL */}
            <div className="pt-2">
              <Input
                id="thumbnail"
                name="thumbnail"
                type="url"
                value={formData.thumbnail}
                onChange={handleChange}
                placeholder="https://images.unsplash.com/... (Custom Image URL)"
                className="h-9 text-xs"
              />
              {formErrors.thumbnail && (
                <p className="text-[11px] font-medium text-destructive mt-1">
                  {formErrors.thumbnail}
                </p>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2 pt-2">
            <Label htmlFor="tagInput" className="text-xs font-semibold flex items-center gap-1.5">
              <Tag className="h-3.5 w-3.5 text-primary" />
              Discovery Tags <span className="text-muted-foreground font-normal">(Max 8 tags)</span>
            </Label>

            <div className="flex gap-2">
              <Input
                id="tagInput"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                placeholder="Type a tag and press Enter or comma..."
                className="h-9 text-xs"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleAddTag()}
                className="h-9 px-3 text-xs shrink-0 cursor-pointer"
              >
                <Plus className="h-3.5 w-3.5 mr-1" />
                Add
              </Button>
            </div>

            {/* Active Pills */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-muted text-foreground border border-border/80"
                  >
                    #{t}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(t)}
                      className="text-muted-foreground hover:text-destructive transition-colors ml-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Quick Add Suggestions */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[10px] text-muted-foreground">Suggested:</span>
              {SUGGESTED_TAGS.filter((st) => !tags.includes(st)).slice(0, 6).map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => handleAddTag(st)}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-accent/60 text-muted-foreground hover:text-foreground hover:bg-accent transition-all cursor-pointer"
                >
                  +{st}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={onReset}
          disabled={isSubmitting}
          className="h-11 px-5 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
        >
          <RotateCcw className="h-3.5 w-3.5 mr-1.5" />
          Reset Fields
        </Button>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-11 px-8 ai-glow-button text-white font-medium gap-2 shadow-lg cursor-pointer flex-1 sm:flex-initial"
        >
          {isSubmitting ? (
            <>
              <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              Submitting Prompt...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Publish Prompt for Review
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
