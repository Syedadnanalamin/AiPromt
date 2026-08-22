// Predefined AI Tools for prompt targeting
export const AI_TOOLS = [
  { id: "chatgpt", name: "ChatGPT (GPT-4o)", badge: "ChatGPT", icon: "🤖" },
  { id: "claude", name: "Claude 3.5 Sonnet", badge: "Claude", icon: "🧠" },
  { id: "gemini", name: "Google Gemini", badge: "Gemini", icon: "✨" },
  { id: "midjourney", name: "Midjourney v6", badge: "Midjourney", icon: "🎨" },
  { id: "dalle", name: "DALL-E 3", badge: "DALL-E 3", icon: "🖼️" },
  { id: "stablediffusion", name: "Stable Diffusion", badge: "SDXL", icon: "🔮" },
  { id: "deepseek", name: "DeepSeek", badge: "DeepSeek", icon: "⚡" },
  { id: "copilot", name: "GitHub Copilot", badge: "Copilot", icon: "💻" },
  { id: "perplexity", name: "Perplexity AI", badge: "Perplexity", icon: "🔍" },
];

// Predefined Prompt Categories
export const CATEGORIES = [
  "Marketing & Copywriting",
  "Development & Coding",
  "Design & Midjourney / Art",
  "Creative Writing & Stories",
  "SEO & Optimization",
  "Business & Startup Strategy",
  "Productivity & Workflow",
  "Data Analysis & Science",
  "Education & Academic",
  "Other",
];

// Curated high quality AI-themed preset banners
export const PRESET_THUMBNAILS = [
  {
    label: "Neural Violet",
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
  },
  {
    label: "Cyber Grid",
    url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
  },
  {
    label: "Quantum Core",
    url: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80",
  },
  {
    label: "Neon Synapse",
    url: "https://images.unsplash.com/photo-1633493106185-520e54bfba98?w=800&auto=format&fit=crop&q=80",
  },
  {
    label: "Deep Code",
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
  },
  {
    label: "Creative Flow",
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
  },
];

// Variable chips for quick prompt template builder
export const PROMPT_VARIABLES = [
  "[Topic]",
  "[Target Audience]",
  "[Tone of Voice]",
  "[Goal / Objective]",
  "[Output Format]",
  "[Constraints / Rules]",
  "[Word Count]",
];

// Suggested trending tags
export const SUGGESTED_TAGS = [
  "copywriting",
  "seo",
  "coding",
  "midjourney",
  "marketing",
  "react",
  "automation",
  "branding",
  "productivity",
  "gpt4",
];

// Difficulty badge styling lookup
export const difficultyStyles = {
  Beginner: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  Intermediate: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
  Pro: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30",
};
