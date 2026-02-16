"use client";

import { Sun, Cloud } from "lucide-react";
import Link from "next/link";

export function WelcomeBanner() {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-end border-b border-zinc-800 pb-6 gap-4">
            <div className="space-y-1">
                <div className="flex items-center gap-2 mb-2">
                    <Sun className="w-3.5 h-3.5 text-yellow-500/80" />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">System_Online // Good Morning</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight uppercase">
                    Welcome <span className="text-zinc-700 px-1">/</span> <span className="text-[#a3e635]">Creonity Inc.</span>
                </h1>
                <p className="text-sm text-zinc-400 border-l-2 border-[#a3e635] pl-3 mt-2 max-w-md leading-relaxed">
                    Overview of your campaign ecosystem. <span className="text-zinc-600 font-mono text-xs">Sync: Optimal.</span>
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    <Link href="/campaigns?tab=list" className="px-5 py-2 bg-[#a3e635] text-black text-xs font-mono font-bold rounded-sm hover:bg-[#b5f045] transition-colors">
                        + Create campaign
                    </Link>
                    <Link href="/creators?tab=discover" className="px-5 py-2 border border-zinc-800 text-xs font-mono text-zinc-400 rounded-sm hover:border-zinc-600 hover:text-white transition-colors">
                        Find creators
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-end gap-2">
                <div className="flex items-center bg-zinc-950/50 border border-zinc-800 px-4 py-2 rounded-sm">
                    <span className="text-lg font-bold text-white font-mono tracking-tight">Feb 16, 2026</span>
                </div>
                <div className="text-[10px] text-zinc-500 font-mono uppercase flex items-center justify-end gap-2">
                    <Cloud className="w-3 h-3 text-zinc-600" />
                    <span>San Francisco, CA</span>
                    <span className="text-zinc-700">|</span>
                    <span>14°C</span>
                </div>
            </div>
        </div>
    );
}
