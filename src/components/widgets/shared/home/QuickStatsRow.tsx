"use client";

import { Briefcase, Users, Wallet, CreditCard, MessageSquare, ClipboardList } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CAMPAIGNS_LIST, WORKING_WITH_COLLABORATIONS, PENDING_PAYMENTS, PENDING_APPLICATIONS } from "@/lib/mock-data";
import { MOCK_BRAND_CONVERSATIONS } from "@/lib/mock-data";

const activeCampaigns = CAMPAIGNS_LIST.filter(c => c.status === 'active').length;
const totalCreators = WORKING_WITH_COLLABORATIONS.length;
const thisMonthSpend = 12500;
const pendingPayments = PENDING_PAYMENTS.reduce((s, p) => s + p.amount, 0);
const unreadMessages = MOCK_BRAND_CONVERSATIONS.reduce((s, c) => s + (c.unreadCount || 0), 0);
const applicationsQueue = PENDING_APPLICATIONS.length;

const STATS = [
    { label: "Active Campaigns", value: String(activeCampaigns), sub: "Running", icon: Briefcase, color: "text-[#a3e635]", href: "/campaigns" },
    { label: "Creators Working", value: String(totalCreators), sub: "With you", icon: Users, color: "text-blue-500", href: "/creators?tab=working" },
    { label: "This Month", value: `$${thisMonthSpend.toLocaleString()}`, sub: "Spend", icon: Wallet, color: "text-amber-500", href: "/finance" },
    { label: "Pending Payments", value: `$${pendingPayments.toLocaleString()}`, sub: "To creators", icon: CreditCard, color: "text-purple-500", href: "/finance" },
    { label: "Unread", value: String(unreadMessages), sub: "Messages", icon: MessageSquare, color: "text-zinc-400", href: "/messages" },
    { label: "Applications", value: String(applicationsQueue), sub: "Review queue", icon: ClipboardList, color: "text-[#a3e635]", href: "/applications" },
];

export function QuickStatsRow() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {STATS.map((stat) => (
                <Link key={stat.label} href={stat.href} className="tech-border p-4 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/80 group relative overflow-hidden">
                    <div className="flex items-start justify-between mb-3">
                        <div className={cn("p-1.5 bg-zinc-950 border border-zinc-800 group-hover:border-zinc-600 transition-colors", stat.color)}>
                            <stat.icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex gap-0.5 opacity-0 group-hover:opacity-60 transition-opacity">
                            <div className="w-1 h-1 bg-zinc-500 rounded-sm" />
                            <div className="w-1 h-1 bg-zinc-500 rounded-sm" />
                        </div>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-white font-mono mb-1 tracking-tight">{stat.value}</div>
                        <div className="flex items-center justify-between border-t border-zinc-800/50 pt-2 mt-2">
                            <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wide">{stat.label}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
