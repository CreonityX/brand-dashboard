"use client";

import { Wallet } from "lucide-react";
import { DashboardWidgetShell } from "../DashboardWidgetShell";
import { BUDGET_OVERVIEW } from "@/lib/mock-data";
import Link from "next/link";

export function BudgetOverviewWidget() {
    const pct = BUDGET_OVERVIEW.allocatedToInfluencer > 0 ? Math.round((BUDGET_OVERVIEW.spentYTD / BUDGET_OVERVIEW.allocatedToInfluencer) * 100) : 0;
    return (
        <DashboardWidgetShell title="Budget Overview" icon={Wallet} headerAction={<Link href="/finance" className="text-[10px] font-mono text-[#a3e635] hover:underline">Details</Link>}>
            <div className="p-4 space-y-4">
                <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                        <div className="text-lg font-bold text-white font-mono">${(BUDGET_OVERVIEW.allocatedToInfluencer / 1000).toFixed(0)}K</div>
                        <div className="text-[9px] font-mono text-zinc-500 uppercase">Allocated</div>
                    </div>
                    <div>
                        <div className="text-lg font-bold text-[#a3e635] font-mono">${(BUDGET_OVERVIEW.spentYTD / 1000).toFixed(1)}K</div>
                        <div className="text-[9px] font-mono text-zinc-500 uppercase">Spent</div>
                    </div>
                    <div>
                        <div className="text-lg font-bold text-zinc-400 font-mono">${(BUDGET_OVERVIEW.remaining / 1000).toFixed(1)}K</div>
                        <div className="text-[9px] font-mono text-zinc-500 uppercase">Remaining</div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-[10px] font-mono text-zinc-500 mb-1">
                        <span>Spent to date</span>
                        <span>{pct}%</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-[1px] overflow-hidden">
                        <div className="h-full bg-[#a3e635] rounded-[1px] transition-all" style={{ width: `${Math.min(pct, 100)}%` }} />
                    </div>
                </div>
                <div className="flex items-end gap-1.5">
                    {[50, 58, 62, 65, 70, 72].map((val, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div className="w-full h-10 flex flex-col justify-end rounded-t-[2px] overflow-hidden">
                                <div className="w-full bg-[#a3e635]/40 rounded-t-[2px] transition-all" style={{ height: `${val}%` }} />
                            </div>
                            <span className="text-[8px] font-mono text-zinc-600">{['N', 'D', 'J', 'F', 'M', 'A'][i]}</span>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardWidgetShell>
    );
}
