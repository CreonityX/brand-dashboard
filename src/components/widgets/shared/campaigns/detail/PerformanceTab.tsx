"use client";

import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { CAMPAIGNS_LIST } from "@/lib/mock-data";

export function PerformanceTab({ campaignId }: { campaignId: string }) {
    const campaign = CAMPAIGNS_LIST.find(c => c.id === campaignId);
    if (!campaign) return null;

    const metrics = [
        { label: "Impressions", value: campaign.impressions, change: "+12%" },
        { label: "Reach", value: campaign.reach, change: "+8%" },
        { label: "Engagements", value: campaign.engagement, change: "+15%" },
        { label: "Engagement rate", value: "6.5%", change: "-0.2%" },
        { label: "CTR", value: "2.1%", change: "+0.3%" },
        { label: "Conversions", value: "890", change: "+5%" },
        { label: "Cost per engagement", value: "$0.04", change: "-3%" },
        { label: "ROI", value: "450%", change: "+15%" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xs font-bold text-zinc-500 font-display tracking-widest uppercase">Key Metrics</h2>
                <button className="flex items-center gap-2 px-3 py-2 bg-zinc-800 border border-zinc-700 text-[10px] font-mono text-zinc-400 rounded-sm hover:border-[#a3e635]/50">
                    <Download className="w-4 h-4" /> Export report
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {metrics.map(m => (
                    <div key={m.label} className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-4">
                        <div className="text-[10px] font-mono text-zinc-500 mb-1">{m.label}</div>
                        <div className="text-lg font-bold text-white font-mono">{m.value}</div>
                        <div className="text-[9px] font-mono text-[#a3e635]">{m.change}</div>
                    </div>
                ))}
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-6">
                <h3 className="text-[10px] font-bold text-zinc-500 font-display tracking-widest uppercase mb-4">Performance over time</h3>
                <div className="h-48 flex items-center justify-center border border-dashed border-zinc-700 rounded-sm text-[10px] font-mono text-zinc-600">
                    Chart placeholder
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-4">
                    <h3 className="text-[10px] font-bold text-zinc-500 font-display tracking-widest uppercase mb-3">Platform breakdown</h3>
                    <div className="space-y-2">
                        {[{ platform: 'YouTube', pct: 60 }, { platform: 'Instagram', pct: 40 }].map(p => (
                            <div key={p.platform} className="flex justify-between text-[10px] font-mono">
                                <span className="text-zinc-400">{p.platform}</span>
                                <span className="text-white">{p.pct}%</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-4">
                    <h3 className="text-[10px] font-bold text-zinc-500 font-display tracking-widest uppercase mb-3">Top creators</h3>
                    <div className="space-y-2 text-[10px] font-mono">
                        <div className="flex justify-between"><span>Tech_Nomad</span><span className="text-[#a3e635]">45K views</span></div>
                        <div className="flex justify-between"><span>Sarah_Vfx</span><span className="text-[#a3e635]">12K views</span></div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-4">
                    <h3 className="text-[10px] font-bold text-zinc-500 font-display tracking-widest uppercase mb-3">Content performance ranking</h3>
                    <div className="space-y-2 text-[10px] font-mono">
                        <div className="flex justify-between items-center py-2 border-b border-zinc-800"><span>1. Tech_Nomad — Video</span><span className="text-[#a3e635]">45K views</span></div>
                        <div className="flex justify-between items-center py-2 border-b border-zinc-800"><span>2. Sarah_Vfx — Image</span><span className="text-[#a3e635]">12K views</span></div>
                        <div className="flex justify-between items-center py-2"><span>3. Pixel_Artisan — Carousel</span><span className="text-zinc-400">8K views</span></div>
                    </div>
                </div>
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-4">
                    <h3 className="text-[10px] font-bold text-zinc-500 font-display tracking-widest uppercase mb-3">Audience demographics reached</h3>
                    <div className="space-y-2 text-[10px] font-mono">
                        <div className="flex justify-between"><span className="text-zinc-400">Age 25-34</span><span className="text-white">42%</span></div>
                        <div className="flex justify-between"><span className="text-zinc-400">Age 35-44</span><span className="text-white">28%</span></div>
                        <div className="flex justify-between"><span className="text-zinc-400">US</span><span className="text-white">58%</span></div>
                        <div className="flex justify-between"><span className="text-zinc-400">UK</span><span className="text-white">22%</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
