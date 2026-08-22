import React from 'react';

export default function DashboardLoading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading dashboard content"
      className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-4"
    >
      {/* Sleek Simple Circle Spinner */}
      <div className="relative flex items-center justify-center">
        {/* Subtle Background Ring */}
        <div className="h-10 w-10 rounded-full border-3 border-muted" />
        
        {/* Animated Spinning Arc */}
        <div className="absolute h-10 w-10 animate-spin rounded-full border-3 border-transparent border-t-primary" />
        
        {/* Soft Glowing Core Pulse */}
        <div className="absolute h-3 w-3 rounded-full bg-primary/20 animate-ping" />
      </div>

      {/* Subtle Loading Text */}
      <span className="text-xs font-medium tracking-wide text-muted-foreground animate-pulse">
        Loading...
      </span>
    </div>
  );
}