"use client";

import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { DASHBOARD_ALERTS } from "@/lib/mock-data";
import Link from "next/link";

const severityStyles: Record<string, string> = {
    high: "border-amber-500/30 bg-amber-500/5",
    medium: "border-zinc-700 bg-zinc-900/50",
    low: "border-zinc-800 bg-zinc-950/30",
};

export function AlertsSection({ showTitle = true }: { showTitle?: boolean }) {
    return (
        <div className="space-y-3">
            {showTitle && <h3 className="text-[10px] font-bold text-zinc-500 font-display tracking-widest uppercase">Alerts</h3>}
            <div className="space-y-2">
                {DASHBOARD_ALERTS.map(a => (
                    <Link
                        key={a.id}
                        href={a.href}
                        className={cn(
                            "flex items-center gap-3 p-3 border rounded-sm hover:border-zinc-600 transition-colors",
                            severityStyles[a.severity]
                        )}
                    >
                        <AlertTriangle className={cn("w-4 h-4 shrink-0", a.severity === 'high' && "text-amber-400")} />
                        <span className="text-[10px] font-mono text-zinc-300">{a.text}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
