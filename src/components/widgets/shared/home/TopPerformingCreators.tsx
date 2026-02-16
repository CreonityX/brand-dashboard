"use client";

import { Star } from "lucide-react";
import { DashboardWidgetShell } from "../DashboardWidgetShell";
import { CAMPAIGN_CREATORS } from "@/lib/mock-data";
import Link from "next/link";

const topCreators = [...CAMPAIGN_CREATORS].sort((a, b) => parseInt((b.views || "0").replace(/\D/g, "")) - parseInt((a.views || "0").replace(/\D/g, ""))).slice(0, 4);

export function TopPerformingCreators() {
    return (
        <DashboardWidgetShell title="Top Performing Creators" icon={Star} headerAction={<Link href="/creators" className="text-[10px] font-mono text-[#a3e635] hover:underline">View all</Link>}>
            <div className="p-4 space-y-2">
                {topCreators.map((c, i) => (
                    <Link key={c.id} href={`/creators?tab=discover&creator=${c.creatorId}`} className="flex items-center gap-3 p-3 bg-zinc-950/50 border border-zinc-800 rounded-sm hover:border-zinc-700 transition-colors">
                        <span className="text-[10px] font-mono text-zinc-600 w-5">{i + 1}</span>
                        <div className="w-8 h-8 rounded-sm bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-[#a3e635]">{c.creator.substring(0, 2)}</div>
                        <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-white truncate">{c.creator}</div>
                            <div className="text-[10px] font-mono text-zinc-500">{c.views} views • {c.engagement}% eng</div>
                        </div>
                    </Link>
                ))}
            </div>
        </DashboardWidgetShell>
    );
}
