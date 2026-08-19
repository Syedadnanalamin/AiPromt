"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, ...props }) {
    const pathname = usePathname();

    console.log(pathname)
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <Link
            href={href}
            {...props}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition ${isActive
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
        >
            {children}
        </Link>
    );
}