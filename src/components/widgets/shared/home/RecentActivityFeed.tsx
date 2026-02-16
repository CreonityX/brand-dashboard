"use client";

import { Activity, UserPlus, FileText, CreditCard, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardWidgetShell } from "../DashboardWidgetShell";
import { DASHBOARD_ACTIVITY } from "@/lib/mock-data";
import Link from "next/link";

const iconMap: Record<string, { icon: typeof Activity; color: string }> = {
    application: { icon: UserPlus, color: "text-blue-500" },
    content: { icon: FileText, color: "text-[#a3e635]" },
    payment: { icon: CreditCard, color: "text-[#a3e635]" },
    campaign: { icon: Rocket, color: "text-amber-500" },
};

export function RecentActivityFeed() {
    return (
        <DashboardWidgetShell title="Recent_Activity" icon={Activity} headerAction={<Link href="/campaigns" className="text-[10px] font-mono text-[#a3e635] hover:underline">View all</Link>}>
            <div className="p-6 relative">
                <div className="space-y-6 relative">
                    <div className="absolute left-[19px] top-2 bottom-2 w-[1px] bg-zinc-800" />
                    {DASHBOARD_ACTIVITY.map((act) => {
                        const { icon: Icon, color } = iconMap[act.type] || { icon: Activity, color: "text-zinc-500" };
                        return (
                            <div key={act.id} className="flex gap-4 relative group">
                                <div className={cn("w-10 h-10 border border-zinc-800 bg-zinc-950 flex items-center justify-center z-10 shrink-0 relative", color)}>
                                    <div className="absolute inset-0 bg-current opacity-5" />
                                    <Icon className="w-4 h-4 relative z-10" />
                                </div>
                                <div className="pt-1 min-w-0">
                                    <div className="text-xs text-zinc-300 leading-tight mb-1 group-hover:text-white transition-colors">{act.text}</div>
                                    <div className="text-[10px] text-zinc-600 font-mono uppercase tracking-wide">{act.time}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </DashboardWidgetShell>
    );
}
