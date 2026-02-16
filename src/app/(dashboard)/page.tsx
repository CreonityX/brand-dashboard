"use client";

import { HomeShell } from "@/components/widgets/shared/home/HomeShell";
import { WelcomeBanner } from "@/components/widgets/shared/home/WelcomeBanner";
import { QuickStatsRow } from "@/components/widgets/shared/home/QuickStatsRow";
import { CampaignPerformanceSummary } from "@/components/widgets/shared/home/CampaignPerformanceSummary";
import { BudgetOverviewWidget } from "@/components/widgets/shared/home/BudgetOverviewWidget";
import { CreatorPipelineWidget } from "@/components/widgets/shared/home/CreatorPipelineWidget";
import { RecentActivityFeed } from "@/components/widgets/shared/home/RecentActivityFeed";
import { TopPerformingCreators } from "@/components/widgets/shared/home/TopPerformingCreators";
import { UpcomingDeadlines } from "@/components/widgets/shared/home/UpcomingDeadlines";
import { RecommendedCreatorsCarousel } from "@/components/widgets/shared/home/RecommendedCreatorsCarousel";
import { QuickActionsPanel } from "@/components/widgets/shared/home/QuickActionsPanel";

export default function DashboardHome() {
    return (
        <HomeShell>
            <WelcomeBanner />
            <QuickStatsRow />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <CampaignPerformanceSummary />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <BudgetOverviewWidget />
                        <div className="space-y-6">
                            <CreatorPipelineWidget />
                            <QuickActionsPanel />
                        </div>
                    </div>
                </div>
                <div className="min-w-0">
                    <RecentActivityFeed />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
                <UpcomingDeadlines />
                <TopPerformingCreators />
            </div>
            <div className="mt-2">
                <RecommendedCreatorsCarousel />
            </div>
        </HomeShell>
    );
}
