"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Compass,
  Home,
  LayoutDashboard,
  LogIn,
  UserPlus,
  Menu,
  X,
  Search,
  Zap,
  Bookmark
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getClientSession } from "@/lib/authentication/client-session";

// Navigation items array
const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "All Prompts", href: "/prompts", icon: Compass },
  { label: "AI Tools", href: "/categories", icon: Zap },
];

export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const session = getClientSession();
  const isLoggedIn = session?.user;



  // Hardcoded preview state (change to true to preview logged-in state)
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "Creator",
    isPremium: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"

  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand Logo & Name */}
        <Link href="/" className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-primary via-indigo-500 to-violet-400 p-0.5 shadow-lg shadow-primary/25">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-background">
              <Sparkles className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight">
              Prompt<span className="ai-gradient-text">Matrix</span>
            </span>
            <span className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase -mt-1">
              AI Marketplace
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Mapped) */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-4 w-4 text-muted-foreground" />
                {item.label}
              </Link>
            );
          })}
        </nav>


        {/* Quick Search Bar Trigger (Hardcoded UI) */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:bg-muted/70 cursor-pointer">
            <Search className="h-3.5 w-3.5" />
            <span>Search ChatGPT, Midjourney prompts...</span>
            <kbd className="pointer-events-none ml-2 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground shadow-xs">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Right Section / Auth Actions */}
        <div className="hidden items-center gap-3 sm:flex">
          {!isLoggedIn ? (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm" className="font-medium hover:bg-accent">
                  <LogIn className="h-4 w-4 mr-1.5" />
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="ai-glow-button font-medium text-white border-0">
                  <UserPlus className="h-4 w-4 mr-1.5" />
                  Get Started
                </Button>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/dashboard/saved">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="gap-1.5 border-border">
                  <LayoutDashboard className="h-4 w-4 text-primary" />
                  Dashboard
                </Button>
              </Link>
              {/* User Avatar */}
              <div className="flex items-center gap-2 pl-2 border-l border-border">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={32}
                  height={32}
                  unoptimized
                  className="h-8 w-8 rounded-full object-cover ring-2 ring-primary/30"
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background/95 backdrop-blur-xl px-4 pt-2 pb-6 sm:hidden animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2 py-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {item.label}
                </Link>
              );
            })}

            {
              isLoggedIn ?
                <Link href="/dashboard">
                  <Button variant="outline" size="sm" className="gap-1.5 border-border">
                    <LayoutDashboard className="h-4 w-4 text-primary" />
                    Dashboard
                  </Button>
                </Link>

                :
                <div className="my-2 border-t border-border pt-4">
                  <div className="flex flex-col gap-2">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full justify-center">
                        <LogIn className="h-4 w-4 mr-2" />
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full justify-center ai-glow-button text-white border-0">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
            }
          </div>
        </div>
      )}
    </header>
  );
}
