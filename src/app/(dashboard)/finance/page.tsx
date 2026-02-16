"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FinanceShell } from "@/components/widgets/shared/finance/FinanceShell";

// Tabs
import { OverviewTab } from "@/components/widgets/shared/finance/tabs/OverviewTab";
import { PaymentsTab } from "@/components/widgets/shared/finance/tabs/PaymentsTab";
import { HistoryTab } from "@/components/widgets/shared/finance/tabs/HistoryTab";
import { InvoicesTab } from "@/components/widgets/shared/finance/tabs/InvoicesTab";
import { AlertsTab } from "@/components/widgets/shared/finance/tabs/AlertsTab";
import { ReportsTab } from "@/components/widgets/shared/finance/tabs/ReportsTab";
import { TaxTab } from "@/components/widgets/shared/finance/tabs/TaxTab";
import { ReferralsTab } from "@/components/widgets/shared/finance/tabs/ReferralsTab";

function FinanceContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get('tab') || 'overview';

    const handleTabChange = (id: string) => {
        router.push(`/finance?tab=${id}`);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'overview': return <OverviewTab />;
            case 'payments': return <PaymentsTab />;
            case 'history': return <HistoryTab />;
            case 'invoices': return <InvoicesTab />;
            case 'alerts': return <AlertsTab />;
            case 'reports': return <ReportsTab />;
            case 'tax': return <TaxTab />;
            case 'referrals': return <ReferralsTab />;
            default: return <OverviewTab />;
        }
    };

    return (
        <FinanceShell activeTab={activeTab} onTabChange={handleTabChange}>
            {renderContent()}
        </FinanceShell>
    );
}

export default function FinancePage() {
    return (
        <Suspense fallback={<div className="h-full w-full bg-zinc-900/40" />}>
            <FinanceContent />
        </Suspense>
    );
}
