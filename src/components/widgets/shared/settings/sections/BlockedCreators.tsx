"use client";

import { SettingsSection } from "../SettingsComponents";
import { UserX, Search, Ban } from "lucide-react";

export function BlockedCreators() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-4 border border-red-500/20 bg-red-950/10 rounded-sm flex gap-4 items-center">
                <Ban className="w-5 h-5 text-red-500 shrink-0" />
                <div>
                    <h3 className="text-sm font-bold text-white">Blocked List</h3>
                    <p className="text-xs text-zinc-400">Blocked creators cannot see your campaigns or contact you.</p>
                </div>
            </div>

            <SettingsSection title="Manage Blocked Users">
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                        type="text"
                        placeholder="Search blocked users..."
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-sm py-2 px-10 text-xs text-white placeholder:text-zinc-600 focus:border-red-500/50 focus:outline-none transition-all font-mono"
                    />
                </div>

                <div className="space-y-2">
                    <BlockedUserRow name="Alex Rivera" handle="@arivera_creative" date="Blocked on Feb 10, 2026" />
                    <BlockedUserRow name="Studio Pulse" handle="@studiopulse" date="Blocked on Jan 22, 2026" />
                </div>
            </SettingsSection>
        </div>
    );
}

function BlockedUserRow({ name, handle, date }: { name: string, handle: string, date: string }) {
    return (
        <div className="flex items-center justify-between p-4 border border-white/5 bg-white/[0.02] rounded-sm hover:border-white/10 transition-colors">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                    <UserX className="w-5 h-5 text-zinc-500" />
                </div>
                <div>
                    <div className="text-sm font-bold text-white">{name}</div>
                    <div className="text-xs text-zinc-500 font-mono">{handle}</div>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-[10px] text-zinc-600 font-mono hidden sm:block">{date}</span>
                <button className="px-3 py-1.5 border border-zinc-700 text-xs font-bold text-zinc-400 hover:text-white hover:border-white transition-colors uppercase rounded-sm">
                    Unblock
                </button>
            </div>
        </div>
    );
}
