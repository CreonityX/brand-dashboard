"use client";

import { useState, useMemo } from "react";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { PENDING_CONTENT, APPROVED_CONTENT, CAMPAIGNS_LIST } from "@/lib/mock-data";

export function ContentTab({ campaignId }: { campaignId: string }) {
    const [statusFilter, setStatusFilter] = useState("all");
    const [creatorFilter, setCreatorFilter] = useState("all");
    const campaign = CAMPAIGNS_LIST.find(c => c.id === campaignId);

    const allContent = useMemo(() => {
        const base = [...PENDING_CONTENT, ...APPROVED_CONTENT].filter(c => {
            if (!campaign?.name) return true;
            return c.campaign?.includes(campaign.name.split(' ')[0]) || c.campaign === campaign.name;
        });
        return base.map(c => ({
            ...c,
            status: 'approvedDate' in c ? 'approved' : 'pending' as const,
        }));
    }, [campaign?.name]);

    const creators = [...new Set(allContent.map(c => c.creator))];
    const filtered = useMemo(() => {
        let list = allContent;
        if (statusFilter !== "all") list = list.filter(c => c.status === statusFilter);
        if (creatorFilter !== "all") list = list.filter(c => c.creator === creatorFilter);
        return list;
    }, [allContent, statusFilter, creatorFilter]);

    return (
        <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
                <h2 className="text-xs font-bold text-zinc-500 font-display tracking-widest uppercase w-full">Submitted Content</h2>
                <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="px-3 py-2 bg-zinc-950/50 border border-zinc-800 rounded-sm text-xs text-zinc-400 font-mono">
                    <option value="all">Status: All</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="revision">Revision needed</option>
                    <option value="published">Published</option>
                </select>
                <select value={creatorFilter} onChange={e => setCreatorFilter(e.target.value)} className="px-3 py-2 bg-zinc-950/50 border border-zinc-800 rounded-sm text-xs text-zinc-400 font-mono">
                    <option value="all">Creator: All</option>
                    {creators.map(cr => <option key={cr} value={cr}>{cr}</option>)}
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map(c => (
                    <div key={c.id} className="bg-zinc-900/40 border border-zinc-800 rounded-sm overflow-hidden hover:border-zinc-700 transition-colors">
                        <div className="aspect-video bg-zinc-800 flex items-center justify-center text-[10px] font-mono text-zinc-600">
                            {('type' in c ? c.type : 'content')} preview
                        </div>
                        <div className="p-3">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-bold text-white">{c.creator}</span>
                                <span className={cn(
                                    "text-[9px] font-mono px-2 py-0.5 rounded-sm",
                                    'approvedDate' in c ? "bg-[#a3e635]/10 text-[#a3e635]" : "bg-amber-500/10 text-amber-400"
                                )}>
                                    {'approvedDate' in c ? 'Approved' : 'Pending'}
                                </span>
                            </div>
                            <div className="text-[10px] font-mono text-zinc-500 mb-2">{('submitted' in c ? c.submitted : null) || ('approvedDate' in c ? (c as { approvedDate: string }).approvedDate : '')}</div>
                            {'views' in c && <div className="text-[10px] font-mono text-[#a3e635]">{(c as any).views} views</div>}
                            <button className="mt-2 w-full px-3 py-2 bg-zinc-800 border border-zinc-700 text-[10px] font-mono text-zinc-400 rounded-sm hover:border-[#a3e635]/50 flex items-center justify-center gap-1">
                                <Eye className="w-3 h-3" /> Review
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
