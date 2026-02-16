"use client";

import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardWidgetShell } from "../DashboardWidgetShell";
import { DISCOVER_CREATORS } from "@/lib/mock-data";
import Link from "next/link";

const recommended = DISCOVER_CREATORS.slice(0, 4);

export function RecommendedCreatorsCarousel() {
    return (
        <DashboardWidgetShell title="Recommended Creators" subtitle="AI-matched talent" icon={Zap} headerAction={<Link href="/creators?tab=discover" className="text-[10px] font-mono text-[#a3e635] hover:underline">Discover</Link>}>
            <div className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {recommended.map((c) => (
                        <Link
                            key={c.id}
                            href={`/creators?tab=discover&creator=${c.id}`}
                            className="flex items-center gap-3 p-3 bg-zinc-950/50 border border-zinc-800 rounded-sm hover:border-zinc-700 transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-sm bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-[#a3e635] shrink-0 group-hover:border-[#a3e635]/30 transition-colors">
                                {c.name.substring(0, 2)}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-xs font-bold text-white truncate">{c.name}</div>
                                <div className="text-[10px] font-mono text-zinc-500 truncate">{c.niche}</div>
                                <div className="text-[9px] font-mono text-[#a3e635] mt-0.5">{c.rating}★ match</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </DashboardWidgetShell>
    );
}
