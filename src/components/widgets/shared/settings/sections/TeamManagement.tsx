"use client";

import { SettingsSection } from "../SettingsComponents";
import { UserPlus, MoreHorizontal, Shield, Trash2 } from "lucide-react";

export function TeamManagement() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold text-white font-display">Team Members</h2>
                    <p className="text-xs text-zinc-500 font-mono">Manage access and roles for your organization.</p>
                </div>
                <button className="flex items-center gap-2 bg-[#a3e635] text-black px-4 py-2 text-xs font-bold uppercase rounded-sm hover:bg-[#b0f545] transition-colors">
                    <UserPlus className="w-4 h-4" />
                    <span>Invite Member</span>
                </button>
            </div>

            <SettingsSection title="Active Members">
                <div className="border border-white/5 rounded-sm overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/5 bg-zinc-900/50 text-xs text-zinc-500 font-mono uppercase">
                                <th className="p-4 font-medium">User</th>
                                <th className="p-4 font-medium">Role</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {/* Mock Rows */}
                            <TeamMemberRow name="Kai Zen" email="kai.zen@creonity.com" role="Admin" status="Active" isCurrentUser />
                            <TeamMemberRow name="Sarah Miller" email="sarah.m@creonity.com" role="Editor" status="Active" />
                            <TeamMemberRow name="David Chen" email="david.c@creonity.com" role="Viewer" status="Pending" />
                        </tbody>
                    </table>
                </div>
            </SettingsSection>
        </div>
    );
}

function TeamMemberRow({ name, email, role, status, isCurrentUser }: { name: string, email: string, role: string, status: string, isCurrentUser?: boolean }) {
    return (
        <tr className="group hover:bg-white/[0.02] transition-colors">
            <td className="p-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">
                        {name.charAt(0)}
                    </div>
                    <div>
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                            {name}
                            {isCurrentUser && <span className="text-[9px] text-zinc-500 bg-zinc-900 border border-zinc-800 px-1.5 rounded-sm uppercase">You</span>}
                        </div>
                        <div className="text-xs text-zinc-600 font-mono">{email}</div>
                    </div>
                </div>
            </td>
            <td className="p-4">
                <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-mono bg-zinc-900/50 border border-zinc-800 px-2 py-1 rounded-sm w-fit">
                    <Shield className="w-3 h-3 text-zinc-500" />
                    {role}
                </div>
            </td>
            <td className="p-4">
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm border ${status === 'Active' ? 'text-[#a3e635] bg-[#a3e635]/10 border-[#a3e635]/20' : 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20'}`}>
                    {status.toUpperCase()}
                </span>
            </td>
            <td className="p-4 text-right">
                <button className="p-1.5 hover:bg-zinc-800 rounded-sm text-zinc-500 hover:text-white transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                </button>
            </td>
        </tr>
    );
}
