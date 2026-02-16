"use client";

import { SettingsSection, ToggleGroup, InputGroup } from "../SettingsComponents";
import { Copy, RefreshCw } from "lucide-react";

export function PrivacySettings() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SettingsSection title="Data Governance">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ToggleGroup
                        label="Allow Data for Benchmarking"
                        description="Anonymously contribute to industry benchmarks."
                        checked={true}
                        onChange={() => { }}
                    />
                    <ToggleGroup
                        label="GDPR / CCPA Compliance Mode"
                        description="Strictly enforce data retention limits."
                        checked={false}
                        onChange={() => { }}
                    />
                </div>
            </SettingsSection>

            <SettingsSection title="API Access">
                <div className="space-y-4">
                    <p className="text-xs text-zinc-400">Manage API keys for custom integrations.</p>
                    <div className="flex gap-2">
                        <InputGroup
                            label="Production API Key"
                            defaultValue="sk_live_51M..."
                            readOnly
                            className="flex-1"
                        />
                        <button className="self-end mb-2 p-2.5 rounded-sm bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 hover:text-white text-zinc-400 transition-colors">
                            <Copy className="w-4 h-4" />
                        </button>
                        <button className="self-end mb-2 p-2.5 rounded-sm bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 hover:text-white text-zinc-400 transition-colors">
                            <RefreshCw className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </SettingsSection>

            <SettingsSection title="Cookie Preferences">
                <div className="p-4 border border-zinc-800 bg-zinc-900/50 rounded-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-white">Essential Cookies</span>
                        <span className="text-[10px] text-zinc-500 font-mono">REQUIRED</span>
                    </div>
                    <p className="text-[11px] text-zinc-500 mb-4">Necessary for the platform to function securely.</p>

                    <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">Analytics Cookies</span>
                        <ToggleGroup label="" checked={true} onChange={() => { }} />
                    </div>
                </div>
            </SettingsSection>
        </div>
    );
}
