import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "PromptMatrix | AI Prompt Marketplace & Community",
  description: "Discover, share, and monetize high-quality AI prompts for ChatGPT, Midjourney, Claude, and Gemini.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}


