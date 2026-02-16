"use client";

import { Calendar } from "lucide-react";
import { DashboardWidgetShell } from "../DashboardWidgetShell";
import { DASHBOARD_UPCOMING_DEADLINES } from "@/lib/mock-data";
import Link from "next/link";

export function UpcomingDeadlines() {
    return (
        <DashboardWidgetShell title="Upcoming Deadlines" icon={Calendar} headerAction={<Link href="/content-review" className="text-[10px] font-mono text-[#a3e635] hover:underline">View</Link>}>
            <div className="p-4 space-y-2">
                {DASHBOARD_UPCOMING_DEADLINES.length === 0 ? (
                    <p className="text-[10px] font-mono text-zinc-500">No upcoming deadlines</p>
                ) : (
                    DASHBOARD_UPCOMING_DEADLINES.map(d => (
                        <Link key={d.id} href="/content-review" className="flex justify-between items-center p-3 bg-zinc-950/50 border border-zinc-800 rounded-sm hover:border-zinc-700 transition-colors">
                            <div>
                                <div className="text-xs font-bold text-white">{d.creator}</div>
                                <div className="text-[10px] font-mono text-zinc-500">{d.campaign} • {d.type}</div>
                            </div>
                            <span className="text-[10px] font-mono text-[#a3e635]">{d.dueDate}</span>
                        </Link>
                    ))
                )}
            </div>
        </DashboardWidgetShell>
    );
}
