"use client";

import { Bookmark, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { CAMPAIGN_TEMPLATES, CAMPAIGNS_LIST } from "@/lib/mock-data";

export function TemplatesTab() {
    const pastCampaigns = CAMPAIGNS_LIST.filter(c => c.status === "completed" || c.status === "archived");

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-xs font-bold text-zinc-500 font-display tracking-widest uppercase mb-4">Pre-built Templates</h2>
                <p className="text-[11px] text-zinc-500 font-mono mb-4">Templates by objective. Duplicate to start a new campaign.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {CAMPAIGN_TEMPLATES.map(t => (
                        <div key={t.id} className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-4 hover:border-zinc-700 transition-colors">
                            <div className="flex items-start justify-between mb-2">
                                <Bookmark className="w-4 h-4 text-[#a3e635]" />
                                <button className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-[10px] font-mono text-zinc-400 rounded-sm hover:border-[#a3e635]/50 hover:text-[#a3e635] flex items-center gap-1">
                                    <Copy className="w-3 h-3" /> Use
                                </button>
                            </div>
                            <h3 className="text-sm font-bold text-white mb-1">{t.name}</h3>
                            <p className="text-[10px] text-zinc-500 font-mono">{t.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-xs font-bold text-zinc-500 font-display tracking-widest uppercase mb-4">Past Campaigns to Duplicate</h2>
                <p className="text-[11px] text-zinc-500 font-mono mb-4">Save campaign as template or duplicate from library.</p>
                <div className="space-y-2">
                    {pastCampaigns.map(c => (
                        <div key={c.id} className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-4 flex items-center justify-between hover:border-zinc-700 transition-colors">
                            <div>
                                <div className="text-sm font-bold text-white">{c.name}</div>
                                <div className="text-[10px] font-mono text-zinc-500">{c.startDate} — {c.endDate} • ${c.budget.toLocaleString()} • {c.creatorsCount} creators</div>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-3 py-2 bg-zinc-800 border border-zinc-700 text-[10px] font-mono text-zinc-400 rounded-sm hover:border-zinc-600">Save as template</button>
                                <button className="px-3 py-2 bg-[#a3e635]/10 border border-[#a3e635]/30 text-[10px] font-mono text-[#a3e635] rounded-sm hover:bg-[#a3e635]/20 flex items-center gap-1">
                                    <Copy className="w-3 h-3" /> Duplicate
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
