"use client";

import { FileText, Download, Mail, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const INVOICES = [
    { id: 'INV-2026-001', creator: 'Tech_Nomad', campaign: 'S26 Launch', amount: 8500, date: 'Feb 12', status: 'Paid' },
    { id: 'INV-2026-002', creator: 'Sarah_Vfx', campaign: 'S26 Launch', amount: 6500, date: 'Feb 10', status: 'Paid' },
    { id: 'INV-2026-003', creator: 'Pixel_Artisan', campaign: 'Spring Ad Set', amount: 4200, date: 'Feb 08', status: 'Pending' },
];

export function InvoicesTab() {
    return (
        <div className="space-y-6">
            <h2 className="text-xs font-bold text-zinc-500 font-display tracking-widest uppercase">Auto_Generated_Invoices_Per_Payment</h2>

            {/* Invoices Table */}
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-sm overflow-hidden">
                <div className="divide-y divide-zinc-800">
                    <div className="grid grid-cols-12 px-4 py-3 bg-zinc-950/30 text-[9px] font-mono text-zinc-500 uppercase">
                        <div className="col-span-2">Invoice #</div>
                        <div className="col-span-2">Creator</div>
                        <div className="col-span-2">Campaign</div>
                        <div className="col-span-2">Date</div>
                        <div className="col-span-1 text-right">Amount</div>
                        <div className="col-span-1 text-center">Status</div>
                        <div className="col-span-2 text-right">Actions</div>
                    </div>
                    {INVOICES.map(inv => (
                        <div key={inv.id} className="grid grid-cols-12 px-4 py-4 items-center hover:bg-zinc-800/20 group">
                            <div className="col-span-2 text-xs font-mono text-zinc-400">{inv.id}</div>
                            <div className="col-span-2 text-xs font-bold text-white">{inv.creator}</div>
                            <div className="col-span-2 text-xs text-zinc-500 font-mono">{inv.campaign}</div>
                            <div className="col-span-2 text-xs text-zinc-500 font-mono">{inv.date}</div>
                            <div className="col-span-1 text-right text-xs font-bold text-[#a3e635] font-mono">${inv.amount.toLocaleString()}</div>
                            <div className="col-span-1 text-center">
                                <span className={cn(
                                    "text-[9px] font-mono px-2 py-0.5 rounded-sm",
                                    inv.status === 'Paid' ? "bg-[#a3e635]/10 text-[#a3e635]" : "bg-yellow-500/10 text-yellow-500"
                                )}>{inv.status}</span>
                            </div>
                            <div className="col-span-2 flex justify-end gap-1">
                                <button className="p-2 hover:bg-zinc-800 rounded-sm text-zinc-500 hover:text-white" title="Email">
                                    <Mail className="w-3.5 h-3.5" />
                                </button>
                                <button className="p-2 hover:bg-zinc-800 rounded-sm text-zinc-500 hover:text-[#a3e635]" title="Download">
                                    <Download className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Accounting Integration */}
            <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-sm">
                <h3 className="text-xs font-bold text-zinc-400 font-display tracking-widest uppercase mb-4 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-[#a3e635]" /> Accounting_Software_Integration
                </h3>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-3 p-4 bg-zinc-950/50 border border-zinc-800 rounded-sm hover:border-[#a3e635]/30 transition-colors cursor-pointer w-48">
                        <div className="w-10 h-10 bg-zinc-800 rounded-sm flex items-center justify-center text-zinc-500 font-bold text-xs">QB</div>
                        <div>
                            <div className="text-xs font-bold text-white">QuickBooks</div>
                            <div className="text-[10px] text-zinc-500 font-mono">Connect</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-zinc-950/50 border border-zinc-800 rounded-sm hover:border-[#a3e635]/30 transition-colors cursor-pointer w-48">
                        <div className="w-10 h-10 bg-zinc-800 rounded-sm flex items-center justify-center text-zinc-500 font-bold text-xs">X</div>
                        <div>
                            <div className="text-xs font-bold text-white">Xero</div>
                            <div className="text-[10px] text-zinc-500 font-mono">Connect</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
