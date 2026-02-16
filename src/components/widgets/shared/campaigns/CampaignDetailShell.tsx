"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CAMPAIGN_DETAIL_TABS } from "@/lib/mock-data";
import { CAMPAIGNS_LIST } from "@/lib/mock-data";
import { ArrowLeft } from "lucide-react";

interface CampaignDetailShellProps {
    campaignId: string;
    activeTab: string;
    onTabChange: (id: string) => void;
    children?: ReactNode;
}

export function CampaignDetailShell({ campaignId, activeTab, onTabChange, children }: CampaignDetailShellProps) {
    const campaign = CAMPAIGNS_LIST.find(c => c.id === campaignId);

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
                <Link href="/campaigns" className="p-2 text-zinc-500 hover:text-white">
                    <ArrowLeft className="w-4 h-4" />
                </Link>
                <h1 className="text-lg font-bold text-white font-display">{campaign?.name || "Campaign"}</h1>
            </div>
            <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto">
                {CAMPAIGN_DETAIL_TABS.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={cn(
                                "flex items-center gap-2 px-3 py-2 rounded-sm text-xs font-mono shrink-0 border transition-all",
                                isActive
                                    ? "bg-[#a3e635]/10 text-[#a3e635] border-[#a3e635]/20"
                                    : "bg-zinc-900/40 border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700"
                            )}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    );
                })}
            </div>
            <div className="flex-1 min-h-0">
                {children}
            </div>
        </div>
    );
}
