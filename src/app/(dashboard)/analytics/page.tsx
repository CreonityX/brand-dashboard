"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnalyticsShell } from "@/components/widgets/shared/analytics/AnalyticsShell";

// Tabs
import { OverviewTab } from "@/components/widgets/shared/analytics/tabs/OverviewTab";
import { CampaignsTab } from "@/components/widgets/shared/analytics/tabs/CampaignsTab";
import { CreatorsTab } from "@/components/widgets/shared/analytics/tabs/CreatorsTab";
import { ContentTab } from "@/components/widgets/shared/analytics/tabs/ContentTab";
import { AudienceTab } from "@/components/widgets/shared/analytics/tabs/AudienceTab";
import { ComparisonTab } from "@/components/widgets/shared/analytics/tabs/ComparisonTab";
import { PlatformTab } from "@/components/widgets/shared/analytics/tabs/PlatformTab";
import { AttributionTab } from "@/components/widgets/shared/analytics/tabs/AttributionTab";
import { BenchmarkingTab } from "@/components/widgets/shared/analytics/tabs/BenchmarkingTab";
import { ReportsTab } from "@/components/widgets/shared/analytics/tabs/ReportsTab";

function AnalyticsContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get('tab') || 'overview';

    const handleTabChange = (id: string) => {
        router.push(`/analytics?tab=${id}`);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'overview': return <OverviewTab />;
            case 'campaigns': return <CampaignsTab />;
            case 'creators': return <CreatorsTab />;
            case 'content': return <ContentTab />;
            case 'audience': return <AudienceTab />;
            case 'comparison': return <ComparisonTab />;
            case 'platform': return <PlatformTab />;
            case 'roi': return <AttributionTab />;
            case 'benchmarking': return <BenchmarkingTab />;
            case 'reports': return <ReportsTab />;
            default: return <OverviewTab />;
        }
    };

    return (
        <AnalyticsShell activeTab={activeTab} onTabChange={handleTabChange}>
            {renderContent()}
        </AnalyticsShell>
    );
}

export default function AnalyticsPage() {
    return (
        <Suspense fallback={<div className="h-full w-full bg-zinc-900/40" />}>
            <AnalyticsContent />
        </Suspense>
    );
}
