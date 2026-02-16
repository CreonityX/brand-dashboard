"use client";

import { TrendingUp } from "lucide-react";
import { DashboardWidgetShell } from "../DashboardWidgetShell";
import { CAMPAIGNS_LIST } from "@/lib/mock-data";
import Link from "next/link";

const topCampaigns = CAMPAIGNS_LIST.filter(c => c.status === 'active').slice(0, 3);

export function CampaignPerformanceSummary() {
    return (
        <DashboardWidgetShell title="Campaign Performance" icon={TrendingUp} headerAction={<Link href="/campaigns" className="text-[10px] font-mono text-[#a3e635] hover:underline">View all</Link>}>
            <div className="p-4 space-y-3">
                {topCampaigns.length === 0 ? (
                    <p className="text-[10px] font-mono text-zinc-500">No active campaigns</p>
                ) : (
                    topCampaigns.map(c => (
                        <Link key={c.id} href={`/campaigns/${c.id}`} className="block p-3 bg-zinc-950/50 border border-zinc-800 rounded-sm hover:border-zinc-700 transition-colors group">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-bold text-white group-hover:text-[#a3e635] transition-colors">{c.name}</span>
                                <span className="text-[10px] font-mono text-[#a3e635]">ROI {c.impressions !== '0' ? '~450%' : '—'}</span>
                            </div>
                            <div className="flex gap-4 text-[10px] font-mono text-zinc-500">
                                <span>{c.reach} reach</span>
                                <span>{c.engagement} eng</span>
                                <span>${c.spent.toLocaleString()} spent</span>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </DashboardWidgetShell>
    );
}
