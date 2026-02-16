"use client";

import { Download, FolderOpen, Plus } from "lucide-react";
import { CAMPAIGNS_LIST } from "@/lib/mock-data";

export function FilesTab({ campaignId }: { campaignId: string }) {
    const campaign = CAMPAIGNS_LIST.find(c => c.id === campaignId);

    const files = [
        { name: "Brand_Guidelines_2026.pdf", folder: "Guidelines", size: "2.4 MB" },
        { name: "Logo_Primary.svg", folder: "Logos", size: "45 KB" },
        { name: "Product_Shots.zip", folder: "Assets", size: "18 MB" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xs font-bold text-zinc-500 font-display tracking-widest uppercase">Campaign Files</h2>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 bg-zinc-800 border border-zinc-700 text-[10px] font-mono text-zinc-400 rounded-sm hover:border-zinc-600">
                        <Plus className="w-3 h-3" /> Add files
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-[#a3e635]/10 border border-[#a3e635]/30 text-[10px] font-mono text-[#a3e635] rounded-sm hover:bg-[#a3e635]/20">
                        <Download className="w-3 h-3" /> Download all
                    </button>
                </div>
            </div>
            <div className="space-y-4">
                {["Guidelines", "Logos", "Assets"].map(folder => (
                    <div key={folder} className="bg-zinc-900/40 border border-zinc-800 rounded-sm overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950/30 border-b border-zinc-800">
                            <FolderOpen className="w-4 h-4 text-zinc-500" />
                            <span className="text-xs font-mono text-zinc-400">{folder}</span>
                        </div>
                        <div className="divide-y divide-zinc-800">
                            {files.filter(f => f.folder === folder).map(f => (
                                <div key={f.name} className="flex items-center justify-between px-4 py-3 hover:bg-zinc-800/20">
                                    <span className="text-[10px] font-mono text-white">{f.name}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-mono text-zinc-500">{f.size}</span>
                                        <button className="p-1 text-zinc-500 hover:text-[#a3e635]"><Download className="w-3 h-3" /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
