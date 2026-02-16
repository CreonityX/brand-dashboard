"use client";

import { CheckCircle, Download, Calendar, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { APPROVED_CONTENT } from "@/lib/mock-data";

export function ApprovedTab() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xs font-bold text-zinc-500 font-display tracking-widest uppercase">Approved_Content_Library</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#a3e635] text-black text-xs font-bold font-mono uppercase rounded-sm hover:bg-[#bef264] transition-colors">
                    <Download className="w-4 h-4" /> Download All
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {APPROVED_CONTENT.map(item => (
                    <div key={item.id} className="bg-zinc-900/40 border border-zinc-800 rounded-sm overflow-hidden hover:border-zinc-700 transition-colors group">
                        <div className="h-32 bg-zinc-800 flex items-center justify-center relative">
                            <div className="w-12 h-12 rounded-sm bg-[#a3e635]/20 flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-[#a3e635]" />
                            </div>
                        </div>
                        <div className="p-4 space-y-2">
                            <div className="text-xs font-bold text-white">{item.creator}</div>
                            <div className="text-[10px] text-zinc-500 font-mono">{item.campaign}</div>
                            <div className="flex flex-wrap gap-2 text-[9px] font-mono">
                                <span className="text-zinc-600">Rights: <span className="text-zinc-400">{item.usageRights}</span></span>
                                {item.scheduled && (
                                    <span className="flex items-center gap-1 text-[#a3e635]">
                                        <Calendar className="w-3 h-3" /> {item.scheduled}
                                    </span>
                                )}
                            </div>
                            {item.views && (
                                <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-500">
                                    <BarChart3 className="w-3 h-3" /> {item.views} views
                                </div>
                            )}
                            <div className="flex gap-2 mt-2">
                                <button className="flex-1 py-1.5 border border-zinc-700 text-[10px] font-mono text-zinc-400 rounded-sm hover:bg-zinc-800">Download</button>
                                {item.scheduled && (
                                    <button className="flex-1 py-1.5 border border-[#a3e635]/30 text-[10px] font-mono text-[#a3e635] rounded-sm hover:bg-[#a3e635]/10">Schedule</button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
