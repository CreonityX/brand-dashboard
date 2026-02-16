"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProfileShell } from "@/components/widgets/shared/profile/ProfileShell";

// Tabs
import { EditProfileTab } from "@/components/widgets/shared/profile/tabs/EditProfileTab";
import { VerificationTab } from "@/components/widgets/shared/profile/tabs/VerificationTab";
import { PastCampaignsTab } from "@/components/widgets/shared/profile/tabs/PastCampaignsTab";
import { BrandAssetsTab } from "@/components/widgets/shared/profile/tabs/BrandAssetsTab";
import { ReviewsTab } from "@/components/widgets/shared/profile/tabs/ReviewsTab";
import { PrivacyTab } from "@/components/widgets/shared/profile/tabs/PrivacyTab";

function ProfileContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get('tab') || 'edit';

    const handleTabChange = (id: string) => {
        router.push(`/profile?tab=${id}`);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'edit': return <EditProfileTab />;
            case 'verification': return <VerificationTab />;
            case 'showcase': return <PastCampaignsTab />;
            case 'assets': return <BrandAssetsTab />;
            case 'reviews': return <ReviewsTab />;
            case 'privacy': return <PrivacyTab />;
            default: return <EditProfileTab />;
        }
    };

    return (
        <div className="h-full">
            <ProfileShell activeTab={activeTab} onTabChange={handleTabChange}>
                {renderContent()}
            </ProfileShell>
        </div>
    );
}

export default function ProfilePage() {
    return (
        <Suspense fallback={<div className="h-full w-full bg-zinc-900/40" />}>
            <ProfileContent />
        </Suspense>
    );
}
