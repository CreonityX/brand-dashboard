"use client";

import { SettingsSection, ToggleGroup, SelectGroup, InputGroup } from "../SettingsComponents";
import { CreditCard, Plus, FileText, Building2 } from "lucide-react";
import { GlassTechCard } from "@/components/GlassTechCard";

export function PaymentSettings() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Payment Methods */}
            <SettingsSection title="Payment Methods" description="Manage cards and accounts for campaign funding.">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <GlassTechCard title="DEFAULT_PAYMENT" className="h-auto p-4 border-dashed border-[#a3e635]/30 bg-[#a3e635]/5 relative overflow-hidden">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#a3e635]/20 flex items-center justify-center">
                                <CreditCard className="w-5 h-5 text-[#a3e635]" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">Visa Corporate</h4>
                                <p className="text-[10px] text-zinc-400 font-mono">Quicksilver **** 4242</p>
                                <p className="text-[10px] text-zinc-500 font-mono mt-1">Exp 12/28</p>
                            </div>
                        </div>
                        <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-[#a3e635] text-black text-[9px] font-bold font-mono rounded-sm">PRIMARY</div>
                    </GlassTechCard>

                    <button className="h-full min-h-[80px] border border-dashed border-zinc-700 bg-zinc-900/30 rounded-sm flex items-center justify-center gap-2 text-zinc-500 hover:text-white hover:border-zinc-500 transition-colors group">
                        <div className="w-6 h-6 rounded-full border border-zinc-600 flex items-center justify-center group-hover:border-white">
                            <Plus className="w-3 h-3" />
                        </div>
                        <span className="text-xs font-mono font-medium">ADD_NEW_METHOD</span>
                    </button>
                </div>

                <div className="space-y-4 max-w-lg mt-6">
                    <h4 className="text-xs font-bold text-zinc-400 font-mono uppercase mb-2">Spending Controls</h4>
                    <ToggleGroup
                        label="Require Approval for Large Spend"
                        description="Admins must approve payments over $5,000."
                        checked={true}
                        onChange={() => { }}
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <InputGroup label="Monthly Spending Limit" defaultValue="$50,000.00" />
                        <SelectGroup
                            label="Currency"
                            options={[
                                { label: 'USD ($)', value: 'usd' },
                                { label: 'EUR (€)', value: 'eur' },
                                { label: 'GBP (£)', value: 'gbp' }
                            ]}
                        />
                    </div>
                </div>
            </SettingsSection>

            {/* Invoice Settings */}
            <SettingsSection title="Invoice Settings" description="Details to appear on your billing statements.">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputGroup label="Billing Email" type="email" defaultValue="billing@creonity.com" />
                    <InputGroup label="PO Number Requirement" placeholder="Optional PO Prefix" />
                </div>
                <div className="mt-4">
                    <label className="text-xs font-mono text-zinc-400 font-medium uppercase mb-2 block">Billing Address</label>
                    <textarea
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-sm px-4 py-2.5 text-xs text-white font-mono outline-none focus:border-[#a3e635]/50 min-h-[80px] resize-y"
                        defaultValue="123 Innovation Dr, Suite 400&#10;San Francisco, CA 94107&#10;United States"
                    />
                </div>
            </SettingsSection>
        </div>
    );
}
