"use client";

import { Users } from "lucide-react";
import { DashboardWidgetShell } from "../DashboardWidgetShell";
import { PENDING_APPLICATIONS, WORKING_WITH_COLLABORATIONS } from "@/lib/mock-data";
import Link from "next/link";

export function CreatorPipelineWidget() {
    const pending = PENDING_APPLICATIONS.length;
    const working = WORKING_WITH_COLLABORATIONS.length;
    const completedThisMonth = 2;

    return (
        <DashboardWidgetShell title="Creator Pipeline" icon={Users} headerAction={<Link href="/applications" className="text-[10px] font-mono text-[#a3e635] hover:underline">View</Link>}>
            <div className="p-4 space-y-4">
                <Link href="/applications?tab=pending" className="flex justify-between items-center p-3 bg-zinc-950/50 border border-zinc-800 rounded-sm hover:border-amber-500/30 transition-colors">
                    <span className="text-[10px] font-mono text-zinc-400">Applications pending review</span>
                    <span className="text-lg font-bold text-amber-400 font-mono">{pending}</span>
                </Link>
                <Link href="/creators?tab=working" className="flex justify-between items-center p-3 bg-zinc-950/50 border border-zinc-800 rounded-sm hover:border-[#a3e635]/30 transition-colors">
                    <span className="text-[10px] font-mono text-zinc-400">Creators currently working</span>
                    <span className="text-lg font-bold text-[#a3e635] font-mono">{working}</span>
                </Link>
                <div className="flex justify-between items-center p-3 bg-zinc-950/50 border border-zinc-800 rounded-sm">
                    <span className="text-[10px] font-mono text-zinc-400">Completed this month</span>
                    <span className="text-lg font-bold text-white font-mono">{completedThisMonth}</span>
                </div>
            </div>
        </DashboardWidgetShell>
    );
}
