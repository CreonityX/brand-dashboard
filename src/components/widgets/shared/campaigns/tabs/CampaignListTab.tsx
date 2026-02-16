"use client";

import { useState, useMemo } from "react";
import { Search, Plus, Grid3X3, List, Pencil, Pause, Play, Eye, Copy, ChevronDown, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { CAMPAIGNS_LIST } from "@/lib/mock-data";
import Link from "next/link";
import { CampaignBuilderWizard } from "../CampaignBuilderWizard";

const STATUS_OPTIONS = ['draft', 'active', 'paused', 'completed', 'archived'];
const OBJECTIVE_OPTIONS = ['awareness', 'conversions', 'engagement', 'product_launch'];
const PLATFORMS = ['YouTube', 'Instagram', 'TikTok'];

export function CampaignListTab() {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState<"newest" | "oldest" | "budget" | "performance">("newest");
    const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
    const [showFilters, setShowFilters] = useState(true);
    const [showWizard, setShowWizard] = useState(false);

    const [statusFilter, setStatusFilter] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [budgetMin, setBudgetMin] = useState("");
    const [budgetMax, setBudgetMax] = useState("");
    const [platformFilter, setPlatformFilter] = useState("");
    const [objectiveFilter, setObjectiveFilter] = useState("");

    const filtered = useMemo(() => {
        let list = [...CAMPAIGNS_LIST];
        if (search) list = list.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
        if (statusFilter) list = list.filter(c => c.status === statusFilter);
        if (platformFilter) list = list.filter(c => c.platform === platformFilter);
        if (objectiveFilter) list = list.filter(c => c.objective === objectiveFilter);
        if (dateFrom) list = list.filter(c => new Date(c.startDate) >= new Date(dateFrom));
        if (dateTo) list = list.filter(c => new Date(c.endDate) <= new Date(dateTo));
        if (budgetMin && !isNaN(parseInt(budgetMin))) list = list.filter(c => c.budget >= parseInt(budgetMin));
        if (budgetMax && !isNaN(parseInt(budgetMax))) list = list.filter(c => c.budget <= parseInt(budgetMax));

        if (sortBy === "newest") list.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
        else if (sortBy === "oldest") list.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
        else if (sortBy === "budget") list.sort((a, b) => b.budget - a.budget);
        else if (sortBy === "performance") list.sort((a, b) => parseInt((b.impressions || "0").replace(/\D/g, "")) - parseInt((a.impressions || "0").replace(/\D/g, "")));
        return list;
    }, [search, statusFilter, platformFilter, objectiveFilter, dateFrom, dateTo, budgetMin, budgetMax, sortBy]);

    return (
        <div className="flex flex-col lg:flex-row gap-6 h-full">
            {/* Filters Sidebar */}
            {!showFilters && (
                <button onClick={() => setShowFilters(true)} className="flex items-center gap-2 px-3 py-2 bg-zinc-900/40 border border-zinc-800 rounded-sm text-[10px] font-mono text-zinc-500 hover:text-[#a3e635] shrink-0">
                    <SlidersHorizontal className="w-4 h-4" /> Filters
                </button>
            )}
            <aside className={cn(
                "flex-shrink-0 transition-all overflow-hidden",
                showFilters ? "w-full lg:w-64 max-h-[500px] lg:max-h-none" : "w-0 max-h-0 lg:w-0"
            )}>
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-4 space-y-4 max-h-[450px] lg:max-h-[calc(100vh-220px)] overflow-y-auto custom-scrollbar">
                    <div className="flex items-center justify-between">
                        <h3 className="text-[10px] font-bold text-zinc-500 font-display tracking-widest uppercase">Filters</h3>
                        <button onClick={() => setShowFilters(!showFilters)} className="text-zinc-500 hover:text-white">
                            <ChevronDown className={cn("w-4 h-4 transition-transform", !showFilters && "rotate-180")} />
                        </button>
                    </div>
                    <div className="space-y-3 text-[10px] font-mono">
                        <div>
                            <label className="text-zinc-500 block mb-1">Status</label>
                            <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="w-full px-2 py-1.5 bg-zinc-950/50 border border-zinc-800 rounded-sm text-zinc-400">
                                <option value="">All</option>
                                {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="text-zinc-500 block mb-1">Date range</label>
                            <div className="flex gap-2">
                                <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} className="flex-1 px-2 py-1.5 bg-zinc-950/50 border border-zinc-800 rounded-sm text-zinc-400" />
                                <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} className="flex-1 px-2 py-1.5 bg-zinc-950/50 border border-zinc-800 rounded-sm text-zinc-400" />
                            </div>
                        </div>
                        <div>
                            <label className="text-zinc-500 block mb-1">Budget range</label>
                            <div className="flex gap-2">
                                <input type="number" placeholder="Min" value={budgetMin} onChange={e => setBudgetMin(e.target.value)} className="w-20 px-2 py-1.5 bg-zinc-950/50 border border-zinc-800 rounded-sm text-zinc-400" />
                                <input type="number" placeholder="Max" value={budgetMax} onChange={e => setBudgetMax(e.target.value)} className="w-20 px-2 py-1.5 bg-zinc-950/50 border border-zinc-800 rounded-sm text-zinc-400" />
                            </div>
                        </div>
                        <div>
                            <label className="text-zinc-500 block mb-1">Platform</label>
                            <select value={platformFilter} onChange={e => setPlatformFilter(e.target.value)} className="w-full px-2 py-1.5 bg-zinc-950/50 border border-zinc-800 rounded-sm text-zinc-400">
                                <option value="">All</option>
                                {PLATFORMS.map(p => <option key={p} value={p}>{p}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="text-zinc-500 block mb-1">Objective</label>
                            <select value={objectiveFilter} onChange={e => setObjectiveFilter(e.target.value)} className="w-full px-2 py-1.5 bg-zinc-950/50 border border-zinc-800 rounded-sm text-zinc-400">
                                <option value="">All</option>
                                {OBJECTIVE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
            </aside>

            <div className="flex-1 min-w-0 space-y-6">
                <div className="flex flex-wrap justify-between items-center gap-4">
                    <div className="flex flex-wrap gap-3">
                        <div className="relative flex-1 min-w-[180px]">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-600" />
                            <input type="text" placeholder="Search campaigns..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-9 pr-3 py-2 bg-zinc-950/50 border border-zinc-800 rounded-sm text-xs text-white font-mono focus:outline-none focus:border-[#a3e635]" />
                        </div>
                        <select value={sortBy} onChange={e => setSortBy(e.target.value as any)} className="px-3 py-2 bg-zinc-950/50 border border-zinc-800 rounded-sm text-xs text-zinc-400 font-mono">
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="budget">Highest budget</option>
                            <option value="performance">Performance</option>
                        </select>
                        <div className="flex border border-zinc-800 rounded-sm overflow-hidden">
                            <button onClick={() => setViewMode("grid")} className={cn("p-2", viewMode === "grid" ? "bg-[#a3e635]/10 text-[#a3e635]" : "text-zinc-500 hover:text-zinc-300")}><Grid3X3 className="w-4 h-4" /></button>
                            <button onClick={() => setViewMode("table")} className={cn("p-2", viewMode === "table" ? "bg-[#a3e635]/10 text-[#a3e635]" : "text-zinc-500 hover:text-zinc-300")}><List className="w-4 h-4" /></button>
                        </div>
                    </div>
                    <button onClick={() => setShowWizard(true)} className="flex items-center gap-2 px-4 py-2 bg-[#a3e635] text-black text-xs font-mono font-bold rounded-sm hover:bg-[#b5f045]">
                        <Plus className="w-4 h-4" /> Create New Campaign
                    </button>
                </div>

                <div className="text-[10px] text-zinc-500 font-mono">{filtered.length} campaigns</div>

                {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                        {filtered.map(campaign => (
                            <CampaignCard key={campaign.id} campaign={campaign} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-zinc-900/40 border border-zinc-800 rounded-sm overflow-hidden">
                        <div className="grid grid-cols-12 px-4 py-3 bg-zinc-950/30 text-[9px] font-mono text-zinc-500 uppercase">
                            <div className="col-span-4">Campaign</div>
                            <div className="col-span-2">Status</div>
                            <div className="col-span-2">Dates</div>
                            <div className="col-span-2">Budget</div>
                            <div className="col-span-2 text-right">Creators</div>
                        </div>
                        <div className="divide-y divide-zinc-800">
                            {filtered.map(campaign => (
                                <CampaignRow key={campaign.id} campaign={campaign} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {showWizard && <CampaignBuilderWizard onClose={() => setShowWizard(false)} onComplete={() => setShowWizard(false)} />}
        </div>
    );
}

function CampaignCard({ campaign }: { campaign: (typeof CAMPAIGNS_LIST)[0] }) {
    const pctSpent = campaign.budget > 0 ? Math.round((campaign.spent / campaign.budget) * 100) : 0;
    return (
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-sm overflow-hidden hover:border-zinc-700 transition-colors group">
            <div className="h-20 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <span className="text-3xl font-bold text-zinc-700">{campaign.name.charAt(0)}</span>
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-white truncate">{campaign.name}</h3>
                    <span className={cn(
                        "text-[9px] font-mono px-2 py-0.5 rounded-sm uppercase",
                        campaign.status === 'active' && "bg-[#a3e635]/10 text-[#a3e635]",
                        campaign.status === 'draft' && "bg-zinc-700 text-zinc-400",
                        campaign.status === 'paused' && "bg-amber-500/10 text-amber-400",
                        campaign.status === 'completed' && "bg-blue-500/10 text-blue-400",
                        campaign.status === 'archived' && "bg-zinc-700 text-zinc-500"
                    )}>{campaign.status}</span>
                </div>
                <div className="text-[10px] font-mono text-zinc-500 mb-2">{campaign.startDate} — {campaign.endDate}</div>
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-2">
                    <span>${campaign.spent.toLocaleString()} / ${campaign.budget.toLocaleString()}</span>
                    <span>{campaign.creatorsCount} creators</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-[1px] overflow-hidden mb-3">
                    <div className="h-full bg-[#a3e635] rounded-[1px]" style={{ width: `${Math.min(pctSpent, 100)}%` }} />
                </div>
                <div className="flex gap-2 text-[10px] font-mono text-zinc-500 mb-3">
                    <span>{campaign.impressions} impr</span>
                    <span>{campaign.reach} reach</span>
                    <span>{campaign.engagement} eng</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Link href={`/campaigns/${campaign.id}`} className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-[10px] font-mono text-zinc-400 rounded-sm hover:border-[#a3e635]/50 hover:text-[#a3e635] flex items-center gap-1">
                        <Eye className="w-3 h-3" /> View
                    </Link>
                    <button className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-[10px] font-mono text-zinc-400 rounded-sm hover:border-zinc-600 flex items-center gap-1">
                        <Pencil className="w-3 h-3" /> Edit
                    </button>
                    {campaign.status === 'active' && <button className="px-2 py-1 bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-400 rounded-sm flex items-center gap-1"><Pause className="w-3 h-3" /> Pause</button>}
                    <button className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-[10px] font-mono text-zinc-400 rounded-sm hover:border-zinc-600 flex items-center gap-1">
                        <Copy className="w-3 h-3" /> Duplicate
                    </button>
                </div>
            </div>
        </div>
    );
}

function CampaignRow({ campaign }: { campaign: (typeof CAMPAIGNS_LIST)[0] }) {
    return (
        <div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-zinc-800/20 group">
            <div className="col-span-4">
                <Link href={`/campaigns/${campaign.id}`} className="text-sm font-bold text-white hover:text-[#a3e635]">{campaign.name}</Link>
                <div className="text-[10px] font-mono text-zinc-500">{campaign.platform}</div>
            </div>
            <div className="col-span-2">
                <span className={cn(
                    "text-[9px] font-mono px-2 py-0.5 rounded-sm uppercase",
                    campaign.status === 'active' && "bg-[#a3e635]/10 text-[#a3e635]",
                    campaign.status === 'draft' && "bg-zinc-700 text-zinc-400",
                    campaign.status === 'completed' && "bg-blue-500/10 text-blue-400"
                )}>{campaign.status}</span>
            </div>
            <div className="col-span-2 text-[10px] font-mono text-zinc-500">{campaign.startDate} — {campaign.endDate}</div>
            <div className="col-span-2 text-[10px] font-mono text-zinc-400">${campaign.spent} / ${campaign.budget}</div>
            <div className="col-span-2 text-right flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link href={`/campaigns/${campaign.id}`} className="p-1.5 border border-zinc-700 rounded-sm text-zinc-500 hover:text-[#a3e635]"><Eye className="w-3.5 h-3.5" /></Link>
                <button className="p-1.5 border border-zinc-700 rounded-sm text-zinc-500 hover:text-zinc-300"><Pencil className="w-3.5 h-3.5" /></button>
                <button className="p-1.5 border border-zinc-700 rounded-sm text-zinc-500 hover:text-zinc-300"><Copy className="w-3.5 h-3.5" /></button>
            </div>
        </div>
    );
}
