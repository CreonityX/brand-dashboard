"use client";

import { Pencil, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { CAMPAIGNS_LIST } from "@/lib/mock-data";

export function OverviewTab({ campaignId }: { campaignId: string }) {
    const campaign = CAMPAIGNS_LIST.find(c => c.id === campaignId);
    if (!campaign) return <div className="text-zinc-500 font-mono">Campaign not found</div>;

    const pctSpent = campaign.budget > 0 ? Math.round((campaign.spent / campaign.budget) * 100) : 0;
    const applied = 5;
    const selected = 3;
    const active = campaign.creatorsCount;
    const completed = campaign.status === 'completed' ? active : 0;

    return (
        <div className="space-y-6">
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-6">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-sm font-bold text-white">{campaign.name}</h2>
                            <span className={cn(
                                "text-[9px] font-mono px-2 py-0.5 rounded-sm uppercase",
                                campaign.status === 'active' && "bg-[#a3e635]/10 text-[#a3e635]",
                                campaign.status === 'draft' && "bg-zinc-700 text-zinc-400"
                            )}>{campaign.status}</span>
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500">{campaign.startDate} — {campaign.endDate}</div>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-3 py-2 bg-zinc-800 border border-zinc-700 text-[10px] font-mono text-zinc-400 rounded-sm hover:border-[#a3e635]/50 flex items-center gap-2">
                            <Pencil className="w-3 h-3" /> Edit
                        </button>
                        {campaign.status === 'active' && (
                            <button className="px-3 py-2 bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-400 rounded-sm flex items-center gap-2">
                                <Pause className="w-3 h-3" /> Pause
                            </button>
                        )}
                    </div>
                </div>
                <div className="text-xs text-zinc-400 font-mono mb-6 max-w-2xl">
                    Brief for creators: Launch campaign for S26 smartphone. Focus on low-light camera, battery life. 3 posts + 1 story minimum. #S26 #TechReview.
                </div>
                <div className="mb-6">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-500 mb-1">
                        <span>Budget</span>
                        <span>${campaign.spent.toLocaleString()} / ${campaign.budget.toLocaleString()}</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-[1px] overflow-hidden">
                        <div className="h-full bg-[#a3e635] rounded-[1px] transition-all" style={{ width: `${Math.min(pctSpent, 100)}%` }} />
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                        { label: "Applied", value: applied, color: "text-zinc-400" },
                        { label: "Selected", value: selected, color: "text-blue-400" },
                        { label: "Active", value: active, color: "text-[#a3e635]" },
                        { label: "Completed", value: completed, color: "text-zinc-400" },
                    ].map(s => (
                        <div key={s.label} className="bg-zinc-950/50 border border-zinc-800 rounded-sm p-3">
                            <div className={cn("text-lg font-bold font-mono", s.color)}>{s.value}</div>
                            <div className="text-[10px] font-mono text-zinc-500">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
