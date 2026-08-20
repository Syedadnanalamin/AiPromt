import React from 'react';

const DashboardHomePage = () => {
    return (
        <div className="rounded-2xl border border-border/80 bg-card/80 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
                Dashboard Overview
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
                Welcome to your dashboard. Select a section from the sidebar to manage your prompts, view analytics, and settings.
            </p>
        </div>
    );
};

export default DashboardHomePage;