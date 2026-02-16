"use client";

import { SettingsSection } from "../SettingsComponents";
import { BarChart3, ShoppingBag, Users, MessageSquare, Briefcase, FileText, CheckCircle2, AlertCircle } from "lucide-react";

export function IntegrationSettings() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-4 border border-zinc-800 bg-zinc-900/40 rounded-sm">
                <h3 className="text-sm font-bold text-white mb-2">Connected Apps</h3>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#a3e635]/10 border border-[#a3e635]/20 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
                        <span className="text-[10px] font-bold text-[#a3e635] uppercase">Shopify</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#a3e635]/10 border border-[#a3e635]/20 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
                        <span className="text-[10px] font-bold text-[#a3e635] uppercase">Slack</span>
                    </div>
                </div>
            </div>

            <SettingsSection title="E-Commerce & Payments">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <IntegrationCard
                        icon={ShoppingBag}
                        name="Shopify"
                        description="Sync products and track sales."
                        status="connected"
                    />
                    <IntegrationCard
                        icon={ShoppingBag}
                        name="WooCommerce"
                        description="Connect your WordPress store."
                        status="disconnected"
                    />
                    <IntegrationCard
                        icon={FileText}
                        name="QuickBooks"
                        description="Automate creator payouts & tax."
                        status="disconnected"
                    />
                </div>
            </SettingsSection>

            <SettingsSection title="Analytics & CRM">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <IntegrationCard
                        icon={BarChart3}
                        name="Google Analytics 4"
                        description="Track campaign traffic & conversions."
                        status="disconnected"
                    />
                    <IntegrationCard
                        icon={Users}
                        name="Salesforce"
                        description="Sync influencer data with leads."
                        status="disconnected"
                    />
                    <IntegrationCard
                        icon={Users}
                        name="HubSpot"
                        description="Manage creator relationships."
                        status="disconnected"
                    />
                </div>
            </SettingsSection>

            <SettingsSection title="Workflow & Communication">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <IntegrationCard
                        icon={MessageSquare}
                        name="Slack"
                        description="Receive notifications in channels."
                        status="connected"
                    />
                    <IntegrationCard
                        icon={Briefcase}
                        name="Asana"
                        description="Create tasks from milestones."
                        status="disconnected"
                    />
                </div>
            </SettingsSection>
        </div>
    );
}

function IntegrationCard({ icon: Icon, name, description, status }: { icon: any, name: string, description: string, status: 'connected' | 'disconnected' }) {
    const isConnected = status === 'connected';
    return (
        <div className="flex items-center justify-between p-4 border border-white/5 bg-white/[0.02] rounded-sm hover:border-white/10 transition-colors group">
            <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-sm flex items-center justify-center border ${isConnected ? "bg-white border-white text-black" : "bg-zinc-900 border-zinc-800 text-zinc-500"}`}>
                    <Icon className="w-5 h-5" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <div className="text-sm font-bold text-white leading-none">{name}</div>
                        {isConnected && <CheckCircle2 className="w-3 h-3 text-[#a3e635]" />}
                    </div>

                    <div className="text-[11px] text-zinc-500 font-mono mt-1 group-hover:text-zinc-400 transition-colors">{description}</div>
                </div>
            </div>
            <button className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider border transition-all ${isConnected ? "border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500" : "bg-[#a3e635] border-[#a3e635] text-black hover:bg-[#b0f545] hover:border-[#b0f545]"}`}>
                {isConnected ? "Configure" : "Connect"}
            </button>
        </div>
    )
}
