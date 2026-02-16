"use client";

import { useState } from "react";
import { Star, Check, X, MessageSquare, GitCompare } from "lucide-react";
import { cn } from "@/lib/utils";
import { SHORTLISTED_APPLICATIONS } from "@/lib/mock-data";

export function ShortlistedTab() {
    const [compareSelected, setCompareSelected] = useState<Set<string>>(new Set());

    const toggleCompare = (id: string) => {
        setCompareSelected(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else if (next.size < 5) next.add(id);
            return next;
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xs font-bold text-zinc-500 font-display tracking-widest uppercase">Shortlisted_Creators</h2>
                {compareSelected.size >= 2 && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-400 rounded-sm hover:border-[#a3e635]/50">
                        <GitCompare className="w-4 h-4" /> Compare Side-by-Side ({compareSelected.size})
                    </button>
                )}
            </div>

            <p className="text-[11px] text-zinc-500 font-mono">Creators you're considering. Select up to 5 to compare side-by-side.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SHORTLISTED_APPLICATIONS.map(app => (
                    <div
                        key={app.id}
                        className={cn(
                            "bg-zinc-900/40 border rounded-sm p-4 transition-colors",
                            compareSelected.has(app.id) ? "border-[#a3e635]/50" : "border-zinc-800 hover:border-zinc-700"
                        )}
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-sm bg-zinc-800 flex items-center justify-center text-xs font-bold text-[#a3e635]">
                                    {app.creator.substring(0, 2)}
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">{app.creator}</div>
                                    <div className="text-[10px] text-zinc-500 font-mono">{app.niche} • {app.matchScore}% match</div>
                                </div>
                            </div>
                            <label className="flex items-center gap-1 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={compareSelected.has(app.id)}
                                    onChange={() => toggleCompare(app.id)}
                                    className="rounded border-zinc-600 text-[#a3e635]"
                                />
                                <span className="text-[9px] font-mono text-zinc-500">Compare</span>
                            </label>
                        </div>
                        <div className="text-[10px] text-zinc-600 font-mono mb-3">{app.campaign} • ${app.rate?.toLocaleString()}</div>
                        <div className="flex gap-2">
                            <button className="flex-1 py-1.5 bg-[#a3e635] text-black text-[10px] font-bold font-mono rounded-sm">Accept</button>
                            <button className="flex-1 py-1.5 border border-red-500/30 text-red-400 text-[10px] font-mono rounded-sm">Reject</button>
                            <button className="py-1.5 px-2 border border-zinc-700 text-zinc-400 rounded-sm"><MessageSquare className="w-3.5 h-3.5" /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
