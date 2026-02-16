"use client";

import { useState } from "react";
import {
    Search, Check, X, MessageSquare, ExternalLink, Instagram, Youtube,
    Users, TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PENDING_APPLICATIONS, MOCK_CAMPAIGNS } from "@/lib/mock-data";

export function PendingTab() {
    const [campaignFilter, setCampaignFilter] = useState("");
    const [sortBy, setSortBy] = useState<"date" | "score" | "quality">("score");
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [showRejectForm, setShowRejectForm] = useState<string | null>(null);

    const campaigns = [...new Set(PENDING_APPLICATIONS.map(a => a.campaign))];

    const filtered = [...PENDING_APPLICATIONS]
        .filter(a => !campaignFilter || a.campaign === campaignFilter)
        .sort((a, b) => {
            if (sortBy === "date") return new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime();
            if (sortBy === "score") return b.matchScore - a.matchScore;
            return b.engagement - a.engagement;
        });

    const selected = selectedId ? PENDING_APPLICATIONS.find(a => a.id === selectedId) : null;

    return (
        <div className="space-y-6">
            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
                <select
                    value={campaignFilter}
                    onChange={(e) => setCampaignFilter(e.target.value)}
                    className="px-3 py-2 bg-zinc-950/50 border border-zinc-800 rounded-sm text-xs text-zinc-400 font-mono"
                >
                    <option value="">All Campaigns</option>
                    {campaigns.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as "date" | "score" | "quality")}
                    className="px-3 py-2 bg-zinc-950/50 border border-zinc-800 rounded-sm text-xs text-zinc-400 font-mono"
                >
                    <option value="score">Sort: Match Score</option>
                    <option value="date">Sort: Application Date</option>
                    <option value="quality">Sort: Application Quality</option>
                </select>
            </div>

            {!selected ? (
                /* Application Cards */
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {filtered.map(app => (
                        <div
                            key={app.id}
                            className="bg-zinc-900/40 border border-zinc-800 rounded-sm overflow-hidden hover:border-zinc-700 transition-colors group"
                        >
                            {/* Creator profile summary */}
                            <div className="p-4">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-sm bg-zinc-800 flex items-center justify-center text-sm font-bold text-[#a3e635] shrink-0">
                                        {app.creator.substring(0, 2)}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="text-sm font-bold text-white">{app.creator}</div>
                                        <div className="text-[10px] text-zinc-500 font-mono">{app.niche}</div>
                                        <div className="flex gap-2 mt-1">
                                            {app.platforms.map(p => (
                                                p === 'YouTube' ? <Youtube key={p} className="w-3 h-3 text-zinc-600" /> : <Instagram key={p} className="w-3 h-3 text-zinc-600" />
                                            ))}
                                        </div>
                                    </div>
                                    <div className={cn(
                                        "text-xs font-bold font-mono px-2 py-0.5 rounded-sm",
                                        app.matchScore >= 90 ? "bg-[#a3e635]/10 text-[#a3e635]" : app.matchScore >= 75 ? "bg-blue-500/10 text-blue-400" : "bg-zinc-800 text-zinc-400"
                                    )}>
                                        {app.matchScore}%
                                    </div>
                                </div>
                                <div className="flex gap-4 text-[10px] font-mono text-zinc-500 mb-2">
                                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {app.followers}</span>
                                    <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3" /> {app.engagement}% eng</span>
                                </div>
                                <div className="text-[10px] text-zinc-600 font-mono mb-2">Applied {app.appliedDate} • {app.campaign}</div>
                                <p className="text-[11px] text-zinc-400 line-clamp-2 mb-3">{app.proposal}</p>
                                {/* Quick Actions */}
                                <div className="flex flex-wrap gap-2">
                                    <button onClick={() => setSelectedId(app.id)} className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-[10px] font-mono text-zinc-400 rounded-sm hover:border-[#a3e635]/50 hover:text-[#a3e635] flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> View Full
                                    </button>
                                    <button className="px-2 py-1 bg-[#a3e635]/10 border border-[#a3e635]/30 text-[10px] font-mono text-[#a3e635] rounded-sm hover:bg-[#a3e635]/20 flex items-center gap-1">
                                        <Check className="w-3 h-3" /> Accept
                                    </button>
                                    <button onClick={() => setShowRejectForm(showRejectForm === app.id ? null : app.id)} className="px-2 py-1 bg-red-500/10 border border-red-500/20 text-[10px] font-mono text-red-400 rounded-sm hover:bg-red-500/20 flex items-center gap-1">
                                        <X className="w-3 h-3" /> Reject
                                    </button>
                                    <button className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-[10px] font-mono text-zinc-400 rounded-sm hover:border-zinc-600 flex items-center gap-1">
                                        <MessageSquare className="w-3 h-3" /> Message
                                    </button>
                                </div>
                                {showRejectForm === app.id && (
                                    <div className="mt-3 pt-3 border-t border-zinc-800">
                                        <textarea placeholder="Optional feedback..." className="w-full h-16 bg-zinc-950 border border-zinc-800 rounded-sm p-2 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500/50 resize-none" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* View Full Application Modal (inline for now) */
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-800 rounded-sm">
                        <div className="p-6 space-y-6">
                            <div className="flex justify-between items-start">
                                <h2 className="text-sm font-bold text-white font-display uppercase">Full_Application</h2>
                                <button onClick={() => setSelectedId(null)} className="text-zinc-500 hover:text-white">×</button>
                            </div>
                            {selected && (
                                <>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-sm bg-zinc-800 flex items-center justify-center text-lg font-bold text-[#a3e635]">
                                            {selected.creator.substring(0, 2)}
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-white">{selected.creator}</div>
                                            <div className="text-xs text-zinc-500 font-mono">{selected.niche}</div>
                                            <div className="text-[10px] text-zinc-600 mt-1">{selected.followers} • {selected.engagement}% eng</div>
                                        </div>
                                        <div className="ml-auto text-2xl font-bold text-[#a3e635]">{selected.matchScore}%</div>
                                    </div>
                                    <div>
                                        <h3 className="text-[10px] font-mono text-zinc-500 uppercase mb-2">Proposal / Pitch</h3>
                                        <p className="text-sm text-zinc-300">{selected.proposal}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-[10px] font-mono text-zinc-500 uppercase mb-2">Why They're a Good Fit</h3>
                                        <p className="text-sm text-zinc-400">High match score, relevant niche, proven engagement. Past work aligns with campaign goals.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-[10px] font-mono text-zinc-500 uppercase mb-2">Past Work Examples</h3>
                                        <ul className="text-sm text-zinc-400 space-y-1">
                                            {selected.pastWork?.map((w, i) => <li key={i}>• {w}</li>)}
                                        </ul>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-[10px] font-mono text-zinc-500 uppercase">Rate Quote</div>
                                            <div className="text-lg font-bold text-[#a3e635]">${selected.rate?.toLocaleString()}</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-mono text-zinc-500 uppercase">Availability</div>
                                            <div className="text-sm text-zinc-400">{selected.availability}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 pt-4 border-t border-zinc-800">
                                        <button className="flex-1 py-2.5 bg-[#a3e635] text-black text-xs font-bold font-mono uppercase rounded-sm">Accept</button>
                                        <button className="px-4 py-2.5 border border-amber-500/40 text-amber-400 text-xs font-mono rounded-sm">Request Interview</button>
                                        <button className="px-4 py-2.5 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono rounded-sm">Reject</button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
