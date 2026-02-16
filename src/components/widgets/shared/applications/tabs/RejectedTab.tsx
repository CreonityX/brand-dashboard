"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { REJECTED_APPLICATIONS } from "@/lib/mock-data";

export function RejectedTab() {
    return (
        <div className="space-y-6">
            <h2 className="text-xs font-bold text-zinc-500 font-display tracking-widest uppercase">Rejected_Archive</h2>
            <p className="text-[11px] text-zinc-500 font-mono">Declined applications with rejection reason notes. Option to reconsider.</p>

            <div className="bg-zinc-900/40 border border-zinc-800 rounded-sm overflow-hidden">
                <div className="divide-y divide-zinc-800">
                    {REJECTED_APPLICATIONS.map(app => (
                        <div key={app.id} className="p-4 flex items-center justify-between hover:bg-zinc-800/20">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-sm bg-red-500/10 flex items-center justify-center">
                                    <AlertTriangle className="w-4 h-4 text-red-500" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">{app.creator}</div>
                                    <div className="text-[10px] text-zinc-500 font-mono">{app.campaign}</div>
                                    <div className="text-[11px] text-zinc-600 mt-1">{app.reason}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-mono text-zinc-600">{app.rejectedDate}</span>
                                <button className="flex items-center gap-1 px-2 py-1 border border-zinc-700 rounded-sm text-[10px] font-mono text-zinc-400 hover:text-[#a3e635] hover:border-[#a3e635]/30">
                                    <RotateCcw className="w-3 h-3" /> Reconsider
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
